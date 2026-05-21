export type UserRole = 'admin' | 'manager' | 'user' | 'guest';

export type UserStatus = 'active' | 'inactive' | 'blocked' | 'pending';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  department?: string;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserFilters {
  search?: string;
  role?: UserRole;
  status?: UserStatus;
  department?: string;
}

export interface UserFormData {
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  department?: string;
  avatar?: string;
}

export const USER_ROLES: Record<UserRole, { label: string; description: string }> = {
  admin: {
    label: 'Administrador',
    description: 'Acesso total ao sistema',
  },
  manager: {
    label: 'Gerente',
    description: 'Gerencia equipes e projetos',
  },
  user: {
    label: 'Usuário',
    description: 'Acesso padrão ao sistema',
  },
  guest: {
    label: 'Convidado',
    description: 'Acesso limitado e temporário',
  },
};

export const USER_STATUS: Record<UserStatus, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  active: {
    label: 'Ativo',
    variant: 'default',
  },
  inactive: {
    label: 'Inativo',
    variant: 'secondary',
  },
  blocked: {
    label: 'Bloqueado',
    variant: 'destructive',
  },
  pending: {
    label: 'Pendente',
    variant: 'outline',
  },
};
