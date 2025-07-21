'use client'

import { type QuestionListProps } from '@/types/rfq-forms'
import { TextAreaInput } from './TextAreaInput'
import { TextInput } from './TextInput'
import { RadioGroup } from './RadioGroup'
import { CheckboxGroup } from './CheckboxGroup'

export function QuestionList({
  questions,
  values,
  onChange,
  errors = {}
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
        return (
          <RadioGroup
            id={question.id}
            label={question.questionText}
            options={question.options || []}
            value={values[question.id] || ''}
            onChange={(value) => onChange(question.id, value)}
            error={errors[question.id]}
          />
        )
      
      case 'checkbox':
        return (
          <CheckboxGroup
            id={question.id}
            label={question.questionText}
            options={question.options || []}
            value={values[question.id] || []}
            onChange={(value) => onChange(question.id, value)}
            error={errors[question.id]}
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