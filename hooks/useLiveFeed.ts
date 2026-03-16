'use client'
import { useState, useEffect, useRef } from 'react'
import type { FeedItem } from '@/lib/types'
import { DB_CLAIMS } from '@/lib/constants'

export function useLiveFeed(active: boolean, intervalMs = 3000): FeedItem[] {
  const [feed, setFeed] = useState<FeedItem[]>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const addFeedItem = () => {
    const statusPool: ('passed' | 'warning' | 'failed')[] = [
      'passed',
      'passed',
      'passed',
      'passed',
      'warning',
      'warning',
      'failed',
    ]
    const status = statusPool[Math.floor(Math.random() * statusPool.length)]
    const claim = DB_CLAIMS[Math.floor(Math.random() * DB_CLAIMS.length)]
    const number = Math.floor(Math.random() * 9000) + 1000
    const time = new Date().toLocaleTimeString([], {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    const newItem: FeedItem = {
      prefix: claim.prefix,
      number,
      type: claim.type,
      status,
      time,
    }

    setFeed((prev) => [newItem, ...prev].slice(0, 8))
  }

  // Initial feed generation
  useEffect(() => {
    const initialFeed: FeedItem[] = []
    for (let i = 0; i < 6; i++) {
      const statusPool: ('passed' | 'warning' | 'failed')[] = ['passed', 'warning', 'failed']
      const status = statusPool[Math.floor(Math.random() * statusPool.length)]
      const claim = DB_CLAIMS[Math.floor(Math.random() * DB_CLAIMS.length)]
      const number = Math.floor(Math.random() * 9000) + 1000
      const time = new Date(Date.now() - i * 1000 * 60).toLocaleTimeString([], {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      initialFeed.push({ prefix: claim.prefix, number, type: claim.type, status, time })
    }
    setFeed(initialFeed)
  }, [])

  useEffect(() => {
    if (active) {
      intervalRef.current = setInterval(addFeedItem, intervalMs)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [active, intervalMs])

  return feed
}
