'use client'

import { useEffect, useState, useRef } from 'react'

interface Message {
  id: number
  text: string
  side: 'left' | 'right'
  delay: number
  topPercent: number
}

const messages: Message[] = [
  { id: 1, text: 'fully encrypted', side: 'left', delay: 0, topPercent: 10 },
  { id: 2, text: 'better connections', side: 'right', delay: 200, topPercent: 20 },
  { id: 3, text: 'less time wasted', side: 'left', delay: 400, topPercent: 35 },
  { id: 4, text: 'exclusive network', side: 'right', delay: 600, topPercent: 50 },
  { id: 5, text: 'privacy first', side: 'left', delay: 800, topPercent: 65 },
  { id: 6, text: 'quality over quantity', side: 'right', delay: 1000, topPercent: 80 },
]

export default function AnimatedMessages() {
  const [visibleMessages, setVisibleMessages] = useState<Set<number>>(new Set())
  const [displayedText, setDisplayedText] = useState<Map<number, string>>(new Map())
  const [disintegratingMessages, setDisintegratingMessages] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutsRef = useRef<Map<number, NodeJS.Timeout>>(new Map())
  const intervalsRef = useRef<Map<number, NodeJS.Timeout>>(new Map())
  const isInViewRef = useRef(false)
  const visibleMessagesRef = useRef<Set<number>>(new Set())
  const displayedTextRef = useRef<Map<number, string>>(new Map())

  // Keep refs in sync with state
  useEffect(() => {
    visibleMessagesRef.current = visibleMessages
  }, [visibleMessages])

  useEffect(() => {
    displayedTextRef.current = displayedText
  }, [displayedText])

  const typeMessage = (messageId: number, fullText: string) => {
    // Clear any existing interval
    const existingInterval = intervalsRef.current.get(messageId)
    if (existingInterval) {
      clearInterval(existingInterval)
    }

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText((prev) => {
          const newMap = new Map(prev)
          newMap.set(messageId, fullText.slice(0, currentIndex))
          return newMap
        })
        currentIndex++
      } else {
        clearInterval(interval)
        intervalsRef.current.delete(messageId)
      }
    }, 30) // Typing speed: 30ms per character

    intervalsRef.current.set(messageId, interval)
  }

  const deleteMessage = (messageId: number, fullText: string) => {
    // Clear any existing interval
    const existingInterval = intervalsRef.current.get(messageId)
    if (existingInterval) {
      clearInterval(existingInterval)
    }

    let currentIndex = fullText.length
    const interval = setInterval(() => {
      if (currentIndex >= 0) {
        setDisplayedText((prev) => {
          const newMap = new Map(prev)
          newMap.set(messageId, fullText.slice(0, currentIndex))
          return newMap
        })
        currentIndex--
      } else {
        clearInterval(interval)
        intervalsRef.current.delete(messageId)
        
        // Start disintegrating animation
        setDisintegratingMessages((prev) => {
          const newSet = new Set(prev)
          newSet.add(messageId)
          return newSet
        })
        
        // Remove from visible set after disintegrating animation completes
        setTimeout(() => {
          setVisibleMessages((prev) => {
            const newSet = new Set(prev)
            newSet.delete(messageId)
            return newSet
          })
          setDisintegratingMessages((prev) => {
            const newSet = new Set(prev)
            newSet.delete(messageId)
            return newSet
          })
        }, 400) // Match the disintegrating animation duration
      }
    }, 20) // Deleting speed: 20ms per character (faster than typing)

    intervalsRef.current.set(messageId, interval)
  }

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Check if section is in viewport
      const isInView = rect.top < windowHeight * 0.8 && rect.bottom > 0 && rect.top > -rect.height
      
      // Only update if visibility state changed
      if (isInView === isInViewRef.current) return
      isInViewRef.current = isInView
      
      if (isInView) {
        // Show messages with staggered delays when scrolling into view
        messages.forEach((message) => {
          // Clear any existing timeout for this message
          const existingTimeout = timeoutsRef.current.get(message.id)
          if (existingTimeout) {
            clearTimeout(existingTimeout)
          }

          const timeout = setTimeout(() => {
            setVisibleMessages((prev) => {
              const newSet = new Set(prev)
              newSet.add(message.id)
              return newSet
            })
            // Start typing animation
            typeMessage(message.id, message.text)
          }, message.delay)
          timeoutsRef.current.set(message.id, timeout)
        })
      } else {
        // Hide messages when scrolling out of view
        messages.forEach((message) => {
          // Clear any pending timeouts
          const existingTimeout = timeoutsRef.current.get(message.id)
          if (existingTimeout) {
            clearTimeout(existingTimeout)
            timeoutsRef.current.delete(message.id)
          }

          // Start deleting animation if message is visible
          if (visibleMessagesRef.current.has(message.id)) {
            const currentText = displayedTextRef.current.get(message.id) || message.text
            deleteMessage(message.id, currentText)
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll)
      // Clear all timeouts and intervals on unmount
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout))
      timeoutsRef.current.clear()
      intervalsRef.current.forEach((interval) => clearInterval(interval))
      intervalsRef.current.clear()
    }
  }, [])

  return (
    <div ref={containerRef} className="animated-messages-container">
      {messages.map((message) => {
        const isVisible = visibleMessages.has(message.id)
        const isDisintegrating = disintegratingMessages.has(message.id)
        const text = displayedText.get(message.id) || ''
        const showBubble = isVisible || text.length > 0 || isDisintegrating

        return (
          <div
            key={message.id}
            className={`animated-message animated-message-${message.side} ${
              showBubble ? 'visible' : 'hidden'
            } ${isDisintegrating ? 'disintegrating' : ''}`}
            style={{ top: `${message.topPercent}%` }}
          >
            <div className="message-bubble">
              {text}
              {isVisible && !isDisintegrating && text.length < message.text.length && (
                <span className="typing-cursor">|</span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

