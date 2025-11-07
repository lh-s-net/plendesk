'use client'

import {usePathname, useRouter} from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

export const SearchUsers = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          Search Users
        </CardTitle>
        <CardDescription>
          Search for users by name or email to manage their roles
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.currentTarget
            const formData = new FormData(form)
            const queryTerm = formData.get('search') as string
            router.push(pathname + '?search=' + queryTerm)
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="search">Search Query</Label>
            <Input 
              id="search" 
              name="search" 
              type="text" 
              placeholder="Enter name or email..."
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}