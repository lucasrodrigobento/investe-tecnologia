'use client'

import * as React from "react"
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { User, UserFormData, UserRole, UserStatus, USER_ROLES, USER_STATUS } from "@/lib/types/user"
import { X } from "lucide-react"

interface UserFormDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  user?: User
  onSubmit: (data: UserFormData) => void
}

export function UserFormDrawer({ open, onOpenChange, user, onSubmit }: UserFormDrawerProps) {
  const [formData, setFormData] = React.useState<UserFormData>({
    name: '',
    email: '',
    role: 'user',
    status: 'active',
    department: '',
    avatar: '',
  })

  React.useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
        department: user.department || '',
        avatar: user.avatar || '',
      })
    } else {
      setFormData({
        name: '',
        email: '',
        role: 'user',
        status: 'active',
        department: '',
        avatar: '',
      })
    }
  }, [user, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    onOpenChange(false)
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <form onSubmit={handleSubmit} className="flex h-full flex-col">
          <DrawerHeader>
            <DrawerTitle>{user ? 'Editar usuário' : 'Novo usuário'}</DrawerTitle>
            <DrawerDescription>
              {user
                ? 'Atualize as informações do usuário abaixo.'
                : 'Preencha as informações para criar um novo usuário.'}
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto px-6">
            <div className="space-y-6 py-4">
              <div className="flex items-center gap-4">
                <Avatar
                  src={formData.avatar}
                  alt={formData.name}
                  className="h-16 w-16 text-lg"
                />
                <div className="flex-1 space-y-2">
                  <Label htmlFor="avatar">URL do Avatar</Label>
                  <Input
                    id="avatar"
                    type="url"
                    placeholder="https://..."
                    value={formData.avatar}
                    onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">
                  Nome completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="João da Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  E-mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="joao@empresa.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Departamento</Label>
                <Input
                  id="department"
                  placeholder="Tecnologia"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                />
              </div>

              <div className="space-y-3">
                <Label>
                  Função <span className="text-destructive">*</span>
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(USER_ROLES).map(([value, { label, description }]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFormData({ ...formData, role: value as UserRole })}
                      className={`flex flex-col items-start gap-1 rounded-lg border p-3 text-left transition-colors hover:border-primary ${
                        formData.role === value
                          ? 'border-primary bg-primary/5'
                          : 'border-border'
                      }`}
                    >
                      <span className="font-medium">{label}</span>
                      <span className="text-xs text-muted-foreground">{description}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>
                  Status <span className="text-destructive">*</span>
                </Label>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(USER_STATUS).map(([value, { label, variant }]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFormData({ ...formData, status: value as UserStatus })}
                      className="group"
                    >
                      <Badge
                        variant={formData.status === value ? variant : 'outline'}
                        className={`cursor-pointer transition-all ${
                          formData.status === value
                            ? 'ring-2 ring-primary ring-offset-2'
                            : 'hover:border-primary'
                        }`}
                      >
                        {label}
                      </Badge>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <DrawerFooter>
            <Button type="submit" size="lg">
              {user ? 'Salvar alterações' : 'Criar usuário'}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  )
}
