'use client'

import { useEffect, useState } from 'react'

interface Circle {
  name: string
  delay: number
}

export default function AnimatedCircles() {
  const [visibleCircles, setVisibleCircles] = useState<boolean[]>([])
  
  const circles: Circle[] = [
    { name: 'BlackPortals', delay: 0 },
    { name: 'Citadel', delay: 200 },
    { name: '$TON coding', delay: 400 },
    { name: 'Carbon industry', delay: 600 },
  ]

  useEffect(() => {
    circles.forEach((circle, index) => {
      setTimeout(() => {
        setVisibleCircles(prev => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }, circle.delay)
    })
  }, [])

  return (
    <div className="animated-circles-container">
      {circles.map((circle, index) => (
        <div
          key={circle.name}
          className={`circle-item ${visibleCircles[index] ? 'visible' : ''}`}
        >
          <div className="circle-content">
            <h3>{circle.name}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

