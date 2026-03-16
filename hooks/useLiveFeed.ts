'use client'
import { useState, useEffect, useRef } from 'react'
import type { FeedItem } from '@/lib/types'
import { DB_CLAIMS } from '@/lib/constants'

// Extending FeedItem type locally for internal use if needed, but it already fits
interface InternalFeedItem extends FeedItem {
  id: string
}

export function useLiveFeed(active: boolean, intervalMs = 3000): InternalFeedItem[] {
  const [feed, setFeed] = useState<InternalFeedItem[]>([])
  const callbackRef = useRef<() => void>(() => {})

  const generateItem = (isInitial = false, index = 0): InternalFeedItem => {
    const statusPool: ('passed' | 'warning' | 'failed')[] = isInitial 
      ? ['passed', 'warning', 'failed'] 
      : ['passed', 'passed', 'passed', 'passed', 'warning', 'warning', 'failed']
    
    const status = statusPool[Math.floor(Math.random() * statusPool.length)]
    const claim = DB_CLAIMS[Math.floor(Math.random() * DB_CLAIMS.length)]
    const number = Math.floor(Math.random() * 9000) + 1000
    const time = new Date(Date.now() - (isInitial ? index * 60000 : 0)).toLocaleTimeString([], {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    return {
      id: `${Date.now()}-${Math.random()}`,
      prefix: claim.prefix,
      number,
      type: claim.type,
      status,
      time,
    }
  }

  callbackRef.current = () => {
    setFeed((prev) => [generateItem(), ...prev].slice(0, 8))
  }

  // Initial feed generation
  useEffect(() => {
    const initialFeed: InternalFeedItem[] = []
    for (let i = 0; i < 6; i++) {
      initialFeed.push(generateItem(true, i))
    }
    setFeed(initialFeed)
  }, [])

  useEffect(() => {
    if (!active) return

    const tick = () => callbackRef.current()
    const interval = setInterval(tick, intervalMs)
    return () => clearInterval(interval)
  }, [active, intervalMs])

  return feed
}
