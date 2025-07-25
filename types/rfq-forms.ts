// RFQ Form Engine Type Definitions

export interface RfqFormBlueprint {
  formTitle: string
  formId: string
  sections: FormSection[]
}

export interface FormSection {
  sectionId: string
  sectionTitle: string
  components: FormComponent[]
}

export type FormComponent = 
  | InstructionalTextComponent
  | KeyValueTableComponent
  | QuestionListComponent

export interface BaseComponent {
  componentType: string
  id?: string
}

export interface InstructionalTextComponent extends BaseComponent {
  componentType: 'InstructionalText'
  content: string
}

export interface KeyValueTableComponent extends BaseComponent {
  componentType: 'KeyValueTable'
  rows: KeyValueRow[]
}

export interface KeyValueRow {
  label: string
  inputType: 'text' | 'email' | 'number' | 'date'
  value?: string
}

export interface QuestionListComponent extends BaseComponent {
  componentType: 'QuestionList'
  questions: Question[]
}

export interface Question {
  id: string
  questionText: string
  helpText?: string
  inputType: 'textarea' | 'text' | 'radio' | 'checkbox' | 'radiogroup' | 'checkboxgroup' | 'checkboxgroup_with_number'
  options?: string[] | CheckboxOption[] // For radio and checkbox types
  value?: string | string[] | CheckboxWithNumberValue[] // string for text/radio, string[] for checkbox, CheckboxWithNumberValue[] for checkbox_with_number
  smartPrompts?: Array<{
    text: string
    question: string
  }>
}

export interface CheckboxOption {
  label: string
}

export interface CheckboxWithNumberValue {
  label: string
  checked: boolean
  number?: number
}

// Form state management types
export interface FormData {
  [key: string]: any
}

export interface FormErrors {
  [key: string]: string
}

// Component prop types
export interface SectionHeaderProps {
  title: string
}

export interface InstructionalTextProps {
  content: string
}

export interface TextInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  placeholder?: string
  required?: boolean
  type?: 'text' | 'email' | 'number' | 'date'
}

export interface TextAreaInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  placeholder?: string
  required?: boolean
  rows?: number
  helpText?: string
  smartPrompts?: Array<{
    text: string
    question: string
  }>
  onSmartPromptClick?: (prompt: { text: string; question: string }) => void
}

export interface RadioGroupProps {
  id: string
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
}

export interface CheckboxGroupProps {
  id: string
  label: string
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
  error?: string
  required?: boolean
}

export interface CheckboxGroupWithNumberProps {
  id: string
  label: string
  options: CheckboxOption[]
  value: CheckboxWithNumberValue[]
  onChange: (value: CheckboxWithNumberValue[]) => void
  error?: string
  required?: boolean
  helpText?: string
}

export interface KeyValueTableProps {
  rows: KeyValueRow[]
  values: { [key: string]: string }
  onChange: (label: string, value: string) => void
  errors?: { [key: string]: string }
}

export interface QuestionListProps {
  questions: Question[]
  values: FormData
  onChange: (questionId: string, value: any) => void
  errors?: FormErrors
  onSmartPromptClick?: (questionId: string, prompt: { text: string; question: string }) => void
}

export interface RfqFormRendererProps {
  blueprint: RfqFormBlueprint
  onSubmit?: (data: FormData) => void
  initialData?: FormData
  onSmartPromptClick?: (questionId: string, prompt: { text: string; question: string }) => void
}