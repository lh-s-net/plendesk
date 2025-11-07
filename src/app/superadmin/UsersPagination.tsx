'use client'

import { useRouter } from 'next/navigation'
import { Pagination } from "./components/Pagination"

interface UsersPaginationProps {
  currentPage: number
  totalPages: number
  pageSize: number
  totalItems: number
  query?: string
  sortField: string
  sortOrder: string
}

export function UsersPagination({
  currentPage,
  totalPages,
  pageSize,
  totalItems,
  query,
  sortField,
  sortOrder
}: UsersPaginationProps) {
  const router = useRouter()

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams({
      ...(query && { search: query }),
      page: page.toString(),
      pageSize: pageSize.toString(),
      sort: sortField,
      order: sortOrder
    })
    
    router.push(`/superadmin?${params.toString()}`)
  }

  const handlePageSizeChange = (newPageSize: number) => {
    const params = new URLSearchParams({
      ...(query && { search: query }),
      page: '1', // Reset to first page when changing page size
      pageSize: newPageSize.toString(),
      sort: sortField,
      order: sortOrder
    })
    
    router.push(`/superadmin?${params.toString()}`)
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      pageSize={pageSize}
      totalItems={totalItems}
      onPageChange={handlePageChange}
      onPageSizeChange={handlePageSizeChange}
    />
  )
}