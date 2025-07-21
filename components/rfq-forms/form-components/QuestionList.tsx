'use client'

import { type QuestionListProps, type CheckboxOption, type CheckboxWithNumberValue } from '@/types/rfq-forms'
import { TextAreaInput } from './TextAreaInput'
import { TextInput } from './TextInput'
import { RadioGroup } from './RadioGroup'
import { CheckboxGroup } from './CheckboxGroup'
import { CheckboxGroupWithNumber } from './CheckboxGroupWithNumber'

export function QuestionList({
  questions,
  values,
  onChange,
  errors = {},
  onSmartPromptClick
}: QuestionListProps) {
  const renderQuestion = (question: typeof questions[0]) => {
    switch (question.inputType) {
      case 'textarea':
        return (
          <TextAreaInput
            id={question.id}
            label={question.questionText}
            value={values[question.id] || ''}
            onChange={(value) => onChange(question.id, value)}
            error={errors[question.id]}
            helpText={question.helpText}
            rows={4}
            smartPrompts={question.smartPrompts}
            onSmartPromptClick={
              onSmartPromptClick 
                ? (prompt) => onSmartPromptClick(question.id, prompt)
                : undefined
            }
          />
        )
      
      case 'text':
        return (
          <TextInput
            id={question.id}
            label={question.questionText}
            value={values[question.id] || ''}
            onChange={(value) => onChange(question.id, value)}
            error={errors[question.id]}
          />
        )
      
      case 'radio':
      case 'radiogroup':
        return (
          <RadioGroup
            id={question.id}
            label={question.questionText}
            options={(question.options as string[]) || []}
            value={values[question.id] || ''}
            onChange={(value) => onChange(question.id, value)}
            error={errors[question.id]}
            helpText={question.helpText}
          />
        )
      
      case 'checkbox':
      case 'checkboxgroup':
        return (
          <CheckboxGroup
            id={question.id}
            label={question.questionText}
            options={(question.options as string[]) || []}
            value={values[question.id] || []}
            onChange={(value) => onChange(question.id, value)}
            error={errors[question.id]}
          />
        )
      
      case 'checkboxgroup_with_number':
        return (
          <CheckboxGroupWithNumber
            id={question.id}
            label={question.questionText}
            options={(question.options as CheckboxOption[]) || []}
            value={values[question.id] || []}
            onChange={(value) => onChange(question.id, value)}
            error={errors[question.id]}
            helpText={question.helpText}
          />
        )
      
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {questions.map((question) => (
        <div key={question.id} className="animate-fade-in">
          {renderQuestion(question)}
        </div>
      ))}
    </div>
  )
}