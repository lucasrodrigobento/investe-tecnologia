'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import { UserPlus, Trash2, Ban, CheckCircle, Download } from "lucide-react"

interface UsersToolbarProps {
  selectedCount: number
  onCreateNew: () => void
  onBulkDelete: () => void
  onBulkActivate: () => void
  onBulkDeactivate: () => void
  onExport: () => void
}

export function UsersToolbar({
  selectedCount,
  onCreateNew,
  onBulkDelete,
  onBulkActivate,
  onBulkDeactivate,
  onExport,
}: UsersToolbarProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button onClick={onCreateNew} size="default" className="gap-2">
          <UserPlus className="h-4 w-4" />
          Novo usuário
        </Button>
        {selectedCount > 0 && (
          <>
            <Button
              variant="outline"
              size="default"
              onClick={onBulkActivate}
              className="gap-2"
            >
              <CheckCircle className="h-4 w-4" />
              Ativar ({selectedCount})
            </Button>
            <Button
              variant="outline"
              size="default"
              onClick={onBulkDeactivate}
              className="gap-2"
            >
              <Ban className="h-4 w-4" />
              Desativar ({selectedCount})
            </Button>
            <Button
              variant="destructive"
              size="default"
              onClick={onBulkDelete}
              className="gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Excluir ({selectedCount})
            </Button>
          </>
        )}
      </div>
      <Button variant="outline" size="default" onClick={onExport} className="gap-2">
        <Download className="h-4 w-4" />
        Exportar
      </Button>
    </div>
  )
}
