'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus, X, GripVertical } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DynamicListItem {
  id: string
  value: string
  [key: string]: any
}

interface DynamicListProps {
  label: string
  items: DynamicListItem[]
  onChange: (items: DynamicListItem[]) => void
  placeholder?: string
  helpText?: string
  inputType?: 'text' | 'textarea'
  minItems?: number
  maxItems?: number
  className?: string
  showDragHandle?: boolean
  itemLabel?: (index: number) => string
}

export function DynamicList({
  label,
  items,
  onChange,
  placeholder = 'Enter value',
  helpText,
  inputType = 'text',
  minItems = 0,
  maxItems,
  className,
  showDragHandle = false,
  itemLabel
}: DynamicListProps) {
  const [draggedItem, setDraggedItem] = useState<number | null>(null)

  const addItem = () => {
    if (maxItems && items.length >= maxItems) return
    
    const newItem: DynamicListItem = {
      id: `item-${Date.now()}`,
      value: ''
    }
    onChange([...items, newItem])
  }

  const removeItem = (index: number) => {
    if (items.length <= minItems) return
    onChange(items.filter((_, i) => i !== index))
  }

  const updateItem = (index: number, value: string) => {
    const updatedItems = [...items]
    updatedItems[index] = { ...updatedItems[index], value }
    onChange(updatedItems)
  }

  const handleDragStart = (index: number) => {
    setDraggedItem(index)
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (draggedItem === null || draggedItem === index) return

    const updatedItems = [...items]
    const draggedContent = updatedItems[draggedItem]
    updatedItems.splice(draggedItem, 1)
    updatedItems.splice(index, 0, draggedContent)
    
    onChange(updatedItems)
    setDraggedItem(index)
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
  }

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-stackmatch-navy">
          {label}
        </label>
        {maxItems && (
          <span className="text-xs text-medium-gray">
            {items.length} / {maxItems}
          </span>
        )}
      </div>

      {helpText && (
        <p className="text-sm text-medium-gray">{helpText}</p>
      )}

      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            draggable={showDragHandle}
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            className={cn(
              "flex items-start gap-2 p-3 bg-background-gray rounded-lg",
              draggedItem === index && "opacity-50"
            )}
          >
            {showDragHandle && (
              <button
                type="button"
                className="mt-1 cursor-move text-medium-gray hover:text-charcoal"
              >
                <GripVertical className="w-4 h-4" />
              </button>
            )}

            <div className="flex-1">
              {itemLabel && (
                <label className="text-xs font-medium text-medium-gray mb-1 block">
                  {itemLabel(index)}
                </label>
              )}
              {inputType === 'textarea' ? (
                <Textarea
                  value={item.value}
                  onChange={(e) => updateItem(index, e.target.value)}
                  placeholder={placeholder}
                  className="min-h-[60px] resize-none"
                />
              ) : (
                <Input
                  value={item.value}
                  onChange={(e) => updateItem(index, e.target.value)}
                  placeholder={placeholder}
                />
              )}
            </div>

            <button
              type="button"
              onClick={() => removeItem(index)}
              disabled={items.length <= minItems}
              className={cn(
                "mt-1 p-1 rounded text-medium-gray hover:text-danger-red transition-colors",
                items.length <= minItems && "opacity-50 cursor-not-allowed"
              )}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={addItem}
        disabled={maxItems ? items.length >= maxItems : false}
        className="w-full"
      >
        <Plus className="w-4 h-4 mr-1" />
        Add {label.slice(0, -1)}
      </Button>
    </div>
  )
}