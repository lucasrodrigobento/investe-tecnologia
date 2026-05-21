'use client'

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, X, Filter } from "lucide-react"
import { UserFilters, UserRole, UserStatus, USER_ROLES, USER_STATUS } from "@/lib/types/user"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface UsersFiltersProps {
  filters: UserFilters
  onFiltersChange: (filters: UserFilters) => void
}

export function UsersFilters({ filters, onFiltersChange }: UsersFiltersProps) {
  const [searchValue, setSearchValue] = React.useState(filters.search || '')

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onFiltersChange({ ...filters, search: searchValue || undefined })
    }, 300)
    return () => clearTimeout(timer)
  }, [searchValue])

  const activeFiltersCount = [filters.role, filters.status, filters.department].filter(Boolean).length

  const clearFilters = () => {
    setSearchValue('')
    onFiltersChange({})
  }

  const removeFilter = (key: keyof UserFilters) => {
    const newFilters = { ...filters }
    delete newFilters[key]
    onFiltersChange(newFilters)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou email..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-9"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="default" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtros
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-1 rounded-full px-1.5 py-0 text-xs">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Função</DropdownMenuLabel>
            {Object.entries(USER_ROLES).map(([value, { label }]) => (
              <DropdownMenuItem
                key={value}
                onClick={() => onFiltersChange({ ...filters, role: value as UserRole })}
                className={filters.role === value ? "bg-accent" : ""}
              >
                {label}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Status</DropdownMenuLabel>
            {Object.entries(USER_STATUS).map(([value, { label }]) => (
              <DropdownMenuItem
                key={value}
                onClick={() => onFiltersChange({ ...filters, status: value as UserStatus })}
                className={filters.status === value ? "bg-accent" : ""}
              >
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Limpar
          </Button>
        )}
      </div>

      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.role && (
            <Badge variant="secondary" className="gap-1 pr-1">
              Função: {USER_ROLES[filters.role].label}
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={() => removeFilter('role')}
                className="ml-1 h-4 w-4 hover:bg-transparent"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {filters.status && (
            <Badge variant="secondary" className="gap-1 pr-1">
              Status: {USER_STATUS[filters.status].label}
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={() => removeFilter('status')}
                className="ml-1 h-4 w-4 hover:bg-transparent"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {filters.department && (
            <Badge variant="secondary" className="gap-1 pr-1">
              Departamento: {filters.department}
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={() => removeFilter('department')}
                className="ml-1 h-4 w-4 hover:bg-transparent"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
