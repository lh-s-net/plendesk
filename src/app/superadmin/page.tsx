import {redirect} from 'next/navigation'
import Link from 'next/link'
import { UsersFilter } from './UsersFilter'
import {clerkClient} from '@clerk/nextjs/server'
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ShieldCheck, Users, ChevronUp, ChevronDown } from "lucide-react"
import { UsersPagination } from "./UsersPagination"
import { RoleBadges } from "./RoleBadges"
import { DeleteUserButton } from "./DeleteUserButton"
import { checkRole } from "./roles"

export default async function SuperAdminDashboard(params: {
  searchParams: Promise<{ search?: string; page?: string; sort?: string; order?: string; pageSize?: string }>
}) {
  if (!(await checkRole('superadmin'))) {
    redirect('/')
  }

  const searchParams = await params.searchParams
  const query = searchParams.search
  const currentPage = parseInt(searchParams.page || '1')
  const sortField = searchParams.sort || 'email'
  const sortOrder = searchParams.order || 'asc'
  const pageSize = parseInt(searchParams.pageSize || '10')

  const client = await clerkClient()

  // Always fetch users, with optional query filtering
  const usersResponse = await client.users.getUserList({
    ...(query && { query }),
    limit: pageSize,
    offset: (currentPage - 1) * pageSize
  })
  
  const users = usersResponse.data || []
  const totalUsers = usersResponse.totalCount || 0

  // Sort users client-side for now (Clerk API has limited sorting options)
  const sortedUsers = [...users].sort((a, b) => {
    let aValue = ''
    let bValue = ''
    
    switch (sortField) {
      case 'email':
        aValue = a.emailAddresses.find(email => email.id === a.primaryEmailAddressId)?.emailAddress || ''
        bValue = b.emailAddresses.find(email => email.id === b.primaryEmailAddressId)?.emailAddress || ''
        break
      case 'username':
        aValue = a.username || ''
        bValue = b.username || ''
        break
      case 'role':
        aValue = ((a.publicMetadata.roles as string[]) || [])[0] || ''
        bValue = ((b.publicMetadata.roles as string[]) || [])[0] || ''
        break
      default:
        aValue = a.emailAddresses.find(email => email.id === a.primaryEmailAddressId)?.emailAddress || ''
        bValue = b.emailAddresses.find(email => email.id === b.primaryEmailAddressId)?.emailAddress || ''
    }
    
    if (sortOrder === 'desc') {
      return bValue.localeCompare(aValue)
    }
    return aValue.localeCompare(bValue)
  })

  // Calculate pagination values
  const totalPages = Math.ceil(totalUsers / pageSize)

  return (
    <div className="container mx-auto px-4 space-y-8">

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight flex items-center justify-center gap-2">
          <ShieldCheck className="h-8 w-8" />
          SuperAdmin Dashboard
        </h1>
        <p className="text-muted-foreground">
          Protected dashboard restricted to users with the superadmin role. Manage user roles and permissions.
        </p>
      </div>

      <Separator />

      {/* Users Data Table */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">
            Manage user accounts and their roles
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <UsersFilter />
        <div className="text-sm text-muted-foreground">
          {totalUsers} user{totalUsers !== 1 ? 's' : ''} total
        </div>
      </div>

      {/*user table*/}
      <div className="space-y-4">
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Avatar</TableHead>
                <TableHead>
                  <Link 
                    href={`/superadmin?${new URLSearchParams({
                      ...(query && { search: query }),
                      sort: 'email',
                      order: sortField === 'email' && sortOrder === 'asc' ? 'desc' : 'asc',
                      page: '1',
                      pageSize: pageSize.toString()
                    }).toString()}`}
                    className="flex items-center gap-1 hover:text-primary"
                  >
                    Email
                    {sortField === 'email' && (
                      sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                    )}
                  </Link>
                </TableHead>
                <TableHead>
                  <Link 
                    href={`/superadmin?${new URLSearchParams({
                      ...(query && { search: query }),
                      sort: 'username',
                      order: sortField === 'username' && sortOrder === 'asc' ? 'desc' : 'asc',
                      page: '1',
                      pageSize: pageSize.toString()
                    }).toString()}`}
                    className="flex items-center gap-1 hover:text-primary"
                  >
                    Username
                    {sortField === 'username' && (
                      sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                    )}
                  </Link>
                </TableHead>
                <TableHead className="w-[150px]">
                  <Link 
                    href={`/superadmin?${new URLSearchParams({
                      ...(query && { search: query }),
                      sort: 'role',
                      order: sortField === 'role' && sortOrder === 'asc' ? 'desc' : 'asc',
                      page: '1',
                      pageSize: pageSize.toString()
                    }).toString()}`}
                    className="flex items-center gap-1 hover:text-primary"
                  >
                    Role
                    {sortField === 'role' && (
                      sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                    )}
                  </Link>
                </TableHead>
                <TableHead className="w-[120px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedUsers.length > 0 ? (
                sortedUsers.map((user) => {
                  const primaryEmail = user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress
                  const userRoles = (user.publicMetadata.roles as string[]) || []
                  const initials = `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase()
                  
                  return (
                    <TableRow key={user.id}>
                      <TableCell>
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.imageUrl} alt={`${user.firstName} ${user.lastName}`} />
                          <AvatarFallback className="text-sm font-medium">
                            {initials || 'U'}
                          </AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {primaryEmail}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {user.username || '-'}
                      </TableCell>
                      <TableCell>
                        <RoleBadges userId={user.id} userRoles={userRoles} />
                      </TableCell>
                      <TableCell>
                        <DeleteUserButton 
                          userId={user.id} 
                          userEmail={primaryEmail}
                        />
                      </TableCell>
                    </TableRow>
                  )
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    <div className="flex flex-col items-center gap-2">
                      <Users className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <h3 className="font-semibold text-lg">
                          {query ? "No users found" : "No users available"}
                        </h3>
                        <p className="text-muted-foreground">
                          {query 
                            ? `No users match your search query "${query}". Try searching with different terms.`
                            : "There are currently no users in the system."
                          }
                        </p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Card>
        
        {/* Pagination */}
        {totalUsers > 0 && (
          <UsersPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            totalItems={totalUsers}
            query={query}
            sortField={sortField}
            sortOrder={sortOrder}
          />
        )}
      </div>
    </div>
  )
}