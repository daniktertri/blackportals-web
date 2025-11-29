'use client'

import { useEffect, useRef } from 'react'

interface TradingViewChartProps {
  containerId: string
  symbol?: string
  height?: number
}

export default function TradingViewChart({ 
  containerId, 
  symbol = 'BINANCE:TONUSDT',
  height = 500 
}: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Check if TradingView script is loaded
    if (typeof window !== 'undefined' && (window as any).TradingView) {
      new (window as any).TradingView.widget({
        autosize: true,
        symbol: symbol,
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: '#000000',
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_legend: true,
        save_image: false,
        container_id: containerId,
        height: height,
        width: '100%',
      })
    } else {
      // Wait for script to load
      const checkTradingView = setInterval(() => {
        if ((window as any).TradingView && containerRef.current) {
          clearInterval(checkTradingView)
          new (window as any).TradingView.widget({
            autosize: true,
            symbol: symbol,
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'en',
            toolbar_bg: '#000000',
            enable_publishing: false,
            hide_top_toolbar: true,
            hide_legend: true,
            save_image: false,
            container_id: containerId,
            height: height,
            width: '100%',
          })
        }
      }, 100)

      return () => clearInterval(checkTradingView)
    }
  }, [containerId, symbol, height])

  return <div id={containerId} ref={containerRef} style={{ width: '100%', height: `${height}px` }} />
}

