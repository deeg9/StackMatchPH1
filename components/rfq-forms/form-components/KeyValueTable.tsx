'use client'

import { type KeyValueTableProps } from '@/types/rfq-forms'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function KeyValueTable({
  rows,
  values,
  onChange,
  errors = {}
}: KeyValueTableProps) {
  return (
    <div className="w-full overflow-x-auto animate-fade-in">
      <table className="w-full border-collapse">
        <tbody>
          {rows.map((row, index) => (
            <tr 
              key={row.label}
              className={cn(
                "border-b border-light-gray",
                index === 0 && "border-t"
              )}
            >
              <td className="py-3 pr-4 text-sm font-medium text-stackmatch-navy whitespace-nowrap min-w-[200px]">
                {row.label}:
              </td>
              <td className="py-3 w-full">
                <Input
                  type={row.inputType}
                  value={values[row.label] || ''}
                  onChange={(e) => onChange(row.label, e.target.value)}
                  className={cn(
                    "w-full",
                    "border-light-gray focus:border-stackmatch-blue",
                    "focus:ring-2 focus:ring-stackmatch-blue/20",
                    errors[row.label] && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  )}
                  placeholder={`Enter ${row.label.toLowerCase()}`}
                />
                {errors[row.label] && (
                  <p className="text-sm text-red-500 mt-1 animate-fade-in">
                    {errors[row.label]}
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}