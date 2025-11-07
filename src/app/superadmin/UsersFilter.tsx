'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function UsersFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '')

  // Update local state when URL params change
  useEffect(() => {
    setSearchValue(searchParams.get('search') || '')
  }, [searchParams])

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
    
    // Create new URLSearchParams to preserve other params
    const params = new URLSearchParams(searchParams)
    
    if (value.trim()) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    
    // Reset to page 1 when searching
    params.set('page', '1')
    
    // Update URL
    router.push(`/superadmin?${params.toString()}`)
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Filter users by email..."
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-8 max-w-sm"
        />
      </div>
    </div>
  )
}