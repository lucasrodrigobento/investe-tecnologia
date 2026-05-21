'use client'

import * as React from "react"
import { User, UserFilters, UserFormData } from "@/lib/types/user"
import { UsersTable } from "@/components/admin/users/users-table"
import { UsersFilters } from "@/components/admin/users/users-filters"
import { UsersToolbar } from "@/components/admin/users/users-toolbar"
import { UsersPagination } from "@/components/admin/users/users-pagination"
import { UserFormDrawer } from "@/components/admin/users/user-form-drawer"
import { DeleteConfirmationDialog } from "@/components/admin/users/delete-confirmation-dialog"
import { Users } from "lucide-react"

const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Lucas Bento',
    email: 'lucasengenhariacomp@gmail.com',
    avatar: 'https://github.com/lucasrodrigobento.png',
    role: 'admin',
    status: 'active',
    department: 'Tecnologia',
    lastLogin: new Date(Date.now() - 1000 * 60 * 15),
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Maria Silva',
    email: 'maria@investetecnologia.com.br',
    role: 'manager',
    status: 'active',
    department: 'Projetos',
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 2),
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'João Santos',
    email: 'joao@investetecnologia.com.br',
    role: 'user',
    status: 'active',
    department: 'Desenvolvimento',
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 24),
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date(),
  },
  {
    id: '4',
    name: 'Ana Costa',
    email: 'ana@investetecnologia.com.br',
    role: 'user',
    status: 'inactive',
    department: 'Design',
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    createdAt: new Date('2024-04-20'),
    updatedAt: new Date(),
  },
  {
    id: '5',
    name: 'Pedro Oliveira',
    email: 'pedro@investetecnologia.com.br',
    role: 'guest',
    status: 'pending',
    department: 'Marketing',
    createdAt: new Date('2024-05-15'),
    updatedAt: new Date(),
  },
  {
    id: '6',
    name: 'Carla Mendes',
    email: 'carla@investetecnologia.com.br',
    role: 'user',
    status: 'blocked',
    department: 'Vendas',
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date(),
  },
]

export default function UsersPage() {
  const [users, setUsers] = React.useState<User[]>(MOCK_USERS)
  const [filteredUsers, setFilteredUsers] = React.useState<User[]>(MOCK_USERS)
  const [selectedUsers, setSelectedUsers] = React.useState<string[]>([])
  const [filters, setFilters] = React.useState<UserFilters>({})
  const [sortField, setSortField] = React.useState<keyof User>('name')
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc')
  const [currentPage, setCurrentPage] = React.useState(1)
  const [pageSize, setPageSize] = React.useState(10)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [editingUser, setEditingUser] = React.useState<User | undefined>()
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
  const [usersToDelete, setUsersToDelete] = React.useState<User[]>([])

  React.useEffect(() => {
    let result = [...users]

    if (filters.search) {
      const search = filters.search.toLowerCase()
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(search) ||
          user.email.toLowerCase().includes(search)
      )
    }

    if (filters.role) {
      result = result.filter((user) => user.role === filters.role)
    }

    if (filters.status) {
      result = result.filter((user) => user.status === filters.status)
    }

    if (filters.department) {
      result = result.filter((user) => user.department === filters.department)
    }

    result.sort((a, b) => {
      const aValue = a[sortField]
      const bValue = b[sortField]

      if (aValue === undefined || aValue === null) return 1
      if (bValue === undefined || bValue === null) return -1

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    setFilteredUsers(result)
    setCurrentPage(1)
  }, [users, filters, sortField, sortDirection])

  const totalPages = Math.ceil(filteredUsers.length / pageSize)
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const handleSort = (field: keyof User) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const handleSelectUser = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    )
  }

  const handleSelectAll = (selected: boolean) => {
    setSelectedUsers(selected ? paginatedUsers.map((u) => u.id) : [])
  }

  const handleCreateNew = () => {
    setEditingUser(undefined)
    setDrawerOpen(true)
  }

  const handleEdit = (user: User) => {
    setEditingUser(user)
    setDrawerOpen(true)
  }

  const handleSubmit = (data: UserFormData) => {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editingUser.id
            ? { ...u, ...data, updatedAt: new Date() }
            : u
        )
      )
    } else {
      const newUser: User = {
        id: String(Date.now()),
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      setUsers((prev) => [...prev, newUser])
    }
    setSelectedUsers([])
  }

  const handleDelete = (user: User) => {
    setUsersToDelete([user])
    setDeleteDialogOpen(true)
  }

  const handleBulkDelete = () => {
    const usersToRemove = users.filter((u) => selectedUsers.includes(u.id))
    setUsersToDelete(usersToRemove)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    setUsers((prev) =>
      prev.filter((u) => !usersToDelete.map((d) => d.id).includes(u.id))
    )
    setSelectedUsers([])
  }

  const handleToggleStatus = (user: User) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === user.id
          ? {
              ...u,
              status: u.status === 'active' ? 'inactive' : 'active',
              updatedAt: new Date(),
            }
          : u
      )
    )
  }

  const handleBulkActivate = () => {
    setUsers((prev) =>
      prev.map((u) =>
        selectedUsers.includes(u.id)
          ? { ...u, status: 'active' as const, updatedAt: new Date() }
          : u
      )
    )
    setSelectedUsers([])
  }

  const handleBulkDeactivate = () => {
    setUsers((prev) =>
      prev.map((u) =>
        selectedUsers.includes(u.id)
          ? { ...u, status: 'inactive' as const, updatedAt: new Date() }
          : u
      )
    )
    setSelectedUsers([])
  }

  const handleExport = () => {
    const csv = [
      ['ID', 'Nome', 'Email', 'Função', 'Status', 'Departamento', 'Criado em'],
      ...filteredUsers.map((u) => [
        u.id,
        u.name,
        u.email,
        u.role,
        u.status,
        u.department || '',
        u.createdAt.toLocaleDateString('pt-BR'),
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `usuarios-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-bg p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
            <Users className="h-6 w-6 text-gold" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Gestão de Usuários</h1>
            <p className="text-muted">
              Gerencie usuários, permissões e acessos ao sistema
            </p>
          </div>
        </div>

        <UsersToolbar
          selectedCount={selectedUsers.length}
          onCreateNew={handleCreateNew}
          onBulkDelete={handleBulkDelete}
          onBulkActivate={handleBulkActivate}
          onBulkDeactivate={handleBulkDeactivate}
          onExport={handleExport}
        />

        <UsersFilters filters={filters} onFiltersChange={setFilters} />

        <UsersTable
          users={paginatedUsers}
          selectedUsers={selectedUsers}
          onSelectUser={handleSelectUser}
          onSelectAll={handleSelectAll}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
          sortField={sortField}
          sortDirection={sortDirection}
          onSort={handleSort}
        />

        {filteredUsers.length > 0 && (
          <UsersPagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            totalItems={filteredUsers.length}
            onPageChange={setCurrentPage}
            onPageSizeChange={setPageSize}
          />
        )}

        <UserFormDrawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          user={editingUser}
          onSubmit={handleSubmit}
        />

        <DeleteConfirmationDialog
          open={deleteDialogOpen}
          onOpenChange={setDeleteDialogOpen}
          users={usersToDelete}
          onConfirm={confirmDelete}
        />
      </div>
    </div>
  )
}
