'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus, X, Percent } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DynamicKeyValueItem {
  id: string
  key: string
  value: number
  percentage?: number
}

interface DynamicKeyValueTableProps {
  label: string
  items: DynamicKeyValueItem[]
  onChange: (items: DynamicKeyValueItem[]) => void
  keyPlaceholder?: string
  valuePlaceholder?: string
  helpText?: string
  showPercentage?: boolean
  calculatePercentage?: boolean
  valuePrefix?: string // e.g., "$"
  className?: string
  suggestedKeys?: string[]
}

export function DynamicKeyValueTable({
  label,
  items,
  onChange,
  keyPlaceholder = 'Category',
  valuePlaceholder = 'Amount',
  helpText,
  showPercentage = false,
  calculatePercentage = false,
  valuePrefix,
  className,
  suggestedKeys = []
}: DynamicKeyValueTableProps) {
  const total = items.reduce((sum, item) => sum + (item.value || 0), 0)

  const addItem = () => {
    const newItem: DynamicKeyValueItem = {
      id: `item-${Date.now()}`,
      key: '',
      value: 0,
      percentage: 0
    }
    onChange([...items, newItem])
  }

  const removeItem = (id: string) => {
    onChange(items.filter(item => item.id !== id))
  }

  const updateItem = (id: string, field: keyof DynamicKeyValueItem, value: any) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: value }
        
        // Auto-calculate percentage if enabled
        if (calculatePercentage && field === 'value' && total > 0) {
          updated.percentage = Math.round((value / total) * 100)
        }
        
        return updated
      }
      return item
    })
    
    // Recalculate all percentages if needed
    if (calculatePercentage && field === 'value') {
      const newTotal = updatedItems.reduce((sum, item) => sum + (item.value || 0), 0)
      if (newTotal > 0) {
        updatedItems.forEach(item => {
          item.percentage = Math.round((item.value / newTotal) * 100)
        })
      }
    }
    
    onChange(updatedItems)
  }

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-stackmatch-navy">
          {label}
        </label>
        {total > 0 && (
          <span className="text-sm text-medium-gray">
            Total: {valuePrefix}{total.toLocaleString()}
          </span>
        )}
      </div>

      {helpText && (
        <p className="text-sm text-medium-gray">{helpText}</p>
      )}

      {/* Suggested keys */}
      {suggestedKeys.length > 0 && items.length === 0 && (
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-medium-gray">Suggestions:</span>
          {suggestedKeys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                addItem()
                setTimeout(() => {
                  const lastItem = items[items.length - 1]
                  if (lastItem) {
                    updateItem(lastItem.id, 'key', key)
                  }
                }, 10)
              }}
              className="text-xs px-2 py-1 rounded bg-stackmatch-blue/10 text-stackmatch-blue hover:bg-stackmatch-blue/20 transition-colors"
            >
              + {key}
            </button>
          ))}
        </div>
      )}

      {/* Table */}
      {items.length > 0 && (
        <div className="border border-light-gray rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-background-gray border-b border-light-gray">
                <th className="text-left text-xs font-medium text-medium-gray p-3">
                  {keyPlaceholder}
                </th>
                <th className="text-left text-xs font-medium text-medium-gray p-3">
                  {valuePlaceholder}
                </th>
                {showPercentage && (
                  <th className="text-center text-xs font-medium text-medium-gray p-3">
                    %
                  </th>
                )}
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id} className={cn(
                  "border-b border-light-gray",
                  index % 2 === 1 && "bg-background-gray/50"
                )}>
                  <td className="p-3">
                    <Input
                      value={item.key}
                      onChange={(e) => updateItem(item.id, 'key', e.target.value)}
                      placeholder={keyPlaceholder}
                      className="h-8"
                    />
                  </td>
                  <td className="p-3">
                    <div className="relative">
                      {valuePrefix && (
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-medium-gray text-sm">
                          {valuePrefix}
                        </span>
                      )}
                      <Input
                        type="number"
                        value={item.value || ''}
                        onChange={(e) => updateItem(item.id, 'value', parseFloat(e.target.value) || 0)}
                        placeholder={valuePlaceholder}
                        className={cn("h-8", valuePrefix && "pl-7")}
                      />
                    </div>
                  </td>
                  {showPercentage && (
                    <td className="p-3">
                      <div className="flex items-center justify-center gap-1">
                        <Input
                          type="number"
                          value={item.percentage || ''}
                          onChange={(e) => updateItem(item.id, 'percentage', parseFloat(e.target.value) || 0)}
                          disabled={calculatePercentage}
                          className="h-8 w-16 text-center"
                          min="0"
                          max="100"
                        />
                        <Percent className="w-3 h-3 text-medium-gray" />
                      </div>
                    </td>
                  )}
                  <td className="p-3">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-1 rounded text-medium-gray hover:text-danger-red transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={addItem}
        className="w-full"
      >
        <Plus className="w-4 h-4 mr-1" />
        Add Item
      </Button>
    </div>
  )
}