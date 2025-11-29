'use client'

import { useEffect, useRef } from 'react'

interface Vector {
  x: number
  y: number
}

class Star {
  color: number = 0
  size: number = 1.5
  position: Vector
  direction: Vector
  canvas: HTMLCanvasElement

  constructor(position: Vector, centerX: number, centerY: number, canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.position = { x: position.x, y: position.y }
    const vector = {
      x: this.position.x - centerX,
      y: this.position.y - centerY
    }
    const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y)
    this.direction = {
      x: length > 0 ? vector.x / length : 0,
      y: length > 0 ? vector.y / length : 0
    }
  }

  draw(ctx: CanvasRenderingContext2D, viewPoint: Vector) {
    const speed = 1.007 + Math.random() * 0.003
    
    this.direction.x *= speed
    this.direction.y *= speed
    
    this.position.x += this.direction.x
    this.position.y += this.direction.y
    this.position.x += viewPoint.x
    this.position.y += viewPoint.y

    const brightness = Math.min(254, (this.color / 100) * 254)
    ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`
    
    ctx.beginPath()
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2)
    ctx.fill()

    this.size += 0.003
    if (this.color <= 100) {
      this.color += 0.2
    }
  }

  isDead(): boolean {
    return this.position.x < 0 || 
           this.position.y < 0 || 
           this.position.x > this.canvas.width || 
           this.position.y > this.canvas.height
  }
}

export default function StarfieldTunnel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let stars: Star[] = []
    let viewPoint: Vector = { x: 0, y: 0 }

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      stars = []
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const setViewPoint = (x: number, y: number) => {
      viewPoint = {
        x: (x / canvas.width) * 15,
        y: (y / canvas.height) * 15
      }
    }

    const createVectorTunnel = (): Vector => {
      const radius = 50
      const angle = Math.random() * Math.PI
      return {
        x: canvas.width / 2 + radius * Math.cos(angle),
        y: canvas.height / 2 + radius * Math.sin(angle)
      }
    }

    const createVectorField = (): Vector => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
      }
    }

    // Animation loop
    let animationId: number

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set view point (centered for tunnel effect)
      setViewPoint(0, 0)

      // Add stars continuously (slower rate)
      for (let i = 0; i < 8; i++) {
        const pos = createVectorField()
        stars.push(new Star(pos, canvas.width / 2, canvas.height / 2, canvas))
      }

      // Add tunnel stars occasionally
      if (Math.random() < 0.3) {
        for (let i = 0; i < 5; i++) {
          const pos = createVectorTunnel()
          stars.push(new Star(pos, canvas.width / 2, canvas.height / 2, canvas))
        }
      }

      // Draw and remove dead stars
      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i]
        if (star.isDead()) {
          stars.splice(i, 1)
        } else {
          star.draw(ctx, viewPoint)
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="starfield-tunnel"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

