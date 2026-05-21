'use client'

import * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { User } from "@/lib/types/user"

interface DeleteConfirmationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  users: User[]
  onConfirm: () => void
}

export function DeleteConfirmationDialog({
  open,
  onOpenChange,
  users,
  onConfirm,
}: DeleteConfirmationDialogProps) {
  const isBulk = users.length > 1

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <DialogTitle>
              {isBulk ? `Excluir ${users.length} usuários?` : 'Excluir usuário?'}
            </DialogTitle>
          </div>
          <DialogDescription className="pt-2">
            {isBulk ? (
              <>
                Você está prestes a excluir <strong>{users.length} usuários</strong>. Esta ação não pode ser desfeita e todos os dados associados serão perdidos permanentemente.
              </>
            ) : (
              <>
                Você está prestes a excluir o usuário{' '}
                <strong>{users[0]?.name}</strong>. Esta ação não pode ser desfeita e todos os dados associados serão perdidos permanentemente.
              </>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              onConfirm()
              onOpenChange(false)
            }}
          >
            {isBulk ? 'Excluir todos' : 'Excluir'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
