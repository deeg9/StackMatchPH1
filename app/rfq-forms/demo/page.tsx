'use client'

import { useState } from 'react'
import { RfqFormRenderer } from '@/components/rfq-forms/RfqFormRenderer'
import { type RfqFormBlueprint, type FormData } from '@/types/rfq-forms'
import { Button } from '@/components/ui/button'
import { FileText, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'

// Fixed Assets Management JSON Blueprint
const fixedAssetsBlueprint: RfqFormBlueprint = {
  formTitle: "Fixed Assets Management (FAM)",
  formId: "fixed-assets-management-v1",
  sections: [
    {
      sectionId: "general-info",
      sectionTitle: "GENERAL DEAL CYCLE INFORMATION",
      components: [
        {
          componentType: "InstructionalText",
          content: "This section should be filled out by the AM before submitting an SC Request."
        },
        {
          componentType: "KeyValueTable",
          id: "general-info-table",
          rows: [
            { label: "Company Name", inputType: "text" },
            { label: "NSCorp Record Link", inputType: "text" },
            { label: "Sales Rep", inputType: "text" },
            { label: "Solution Consultant", inputType: "text" }
          ]
        }
      ]
    },
    {
      sectionId: "sales-qual",
      sectionTitle: "SALES – QUALIFICATION QUESTIONS",
      components: [
        {
          componentType: "InstructionalText",
          content: "This section should be filled out by the AM before submitting an SC Request."
        },
        {
          componentType: "QuestionList",
          id: "sales-questions",
          questions: [
            {
              id: "sq_01",
              questionText: "How do you manage depreciation today?",
              helpText: "Are you using spreadsheets or another application for this process?",
              inputType: "textarea"
            },
            {
              id: "sq_02",
              questionText: "How much time does it take your accounting team to calculate and enter depreciation during month end?",
              inputType: "textarea"
            },
            {
              id: "sq_03",
              questionText: "Roughly how many assets are you keeping track of today?",
              inputType: "textarea"
            },
            {
              id: "sq_04",
              questionText: "How many different asset classes do you keep track of today? (Furniture, Equipment, Vehicles, etc.)",
              inputType: "textarea"
            },
            {
              id: "sq_05",
              questionText: "Do you have leases that need to be tracked in compliance with ASC-842?",
              inputType: "textarea"
            },
            {
              id: "sq_06",
              questionText: "Are you interested in seeing our platform's Fixed Asset Management capabilities?",
              inputType: "textarea"
            }
          ]
        }
      ]
    },
    {
      sectionId: "sc-qual",
      sectionTitle: "SC – QUALIFICATION",
      components: [
        {
          componentType: "InstructionalText",
          content: "This section should be filled out by the SC during the Discovery Call."
        },
        {
          componentType: "QuestionList",
          id: "sc-questions",
          questions: [
            {
              id: "scq_01",
              questionText: "How do you keep track of things like: the asset custodian, the original cost, the current value, any maintenance or warranties, etc.?",
              inputType: "textarea"
            },
            {
              id: "scq_02",
              questionText: "What is your capitalization policy?",
              helpText: "Note: Our platform does not automatically reject assets based on a cap policy. The approval step should be highlighted when creating an asset. If a customer is looking to automate this, it would require a customization.",
              inputType: "textarea"
            },
            {
              id: "scq_03",
              questionText: "How many different asset classes do you keep track of today? (Furniture, Equipment, Vehicles, etc.)",
              inputType: "textarea"
            },
            {
              id: "scq_04",
              questionText: "Do you have assets that are related? (Parent/Child relationship)",
              helpText: "Note: This can be a compound asset or a parent/child relationship.",
              inputType: "textarea"
            },
            {
              id: "scq_05",
              questionText: "Do you ever capitalize your services?",
              helpText: "Note: Understand how they keep track of costs before they convert it to an asset.",
              inputType: "textarea"
            },
            {
              id: "scq_06",
              questionText: "What types of depreciation methods do you use today?",
              inputType: "textarea"
            },
            {
              id: "scq_07",
              questionText: "Do you require any secondary tax depreciation methods?",
              inputType: "textarea"
            },
            {
              id: "scq_08",
              questionText: "How do you manage the revaluation, disposal, write-off, sale, or transfer of assets?",
              inputType: "textarea"
            },
            {
              id: "scq_09",
              questionText: "Do you have ASC842 compliance requirements and are you looking to automate this process?",
              inputType: "textarea"
            },
            {
              id: "scq_10",
              questionText: "How many leases do you have and what are they (offices, equipment, etc.)?",
              inputType: "textarea"
            },
            {
              id: "scq_11",
              questionText: "What reports are you running around your fixed assets today?",
              inputType: "textarea"
            }
          ]
        }
      ]
    }
  ]
}

// Field Service Management JSON Blueprint
const fieldServiceBlueprint: RfqFormBlueprint = {
  formTitle: "Field Service Management",
  formId: "field-service-management-v1",
  sections: [
    {
      sectionId: "general-info",
      sectionTitle: "GENERAL DEAL CYCLE INFORMATION",
      components: [
        {
          componentType: "InstructionalText",
          content: "This section should be filled out by the AE or AM before submitting an SC Request."
        },
        {
          componentType: "KeyValueTable",
          id: "general-info-table",
          rows: [
            { label: "Company Name", inputType: "text" },
            { label: "Sales Rep", inputType: "text" }
          ]
        }
      ]
    },
    {
      sectionId: "sales-qual",
      sectionTitle: "SALES – QUALIFICATION QUESTIONS",
      components: [
        {
          componentType: "InstructionalText",
          content: "This section should be filled out by the AE or AM before submitting an SC Request."
        },
        {
          componentType: "QuestionList",
          id: "sales-questions",
          questions: [
            {
              id: "sq_fsm_01",
              questionText: "How many field service technicians going out to the field for you?",
              helpText: "Note: Anything under 10 is typically not a good fit, but if the prospect/customer has the budget for it, we can still proceed.",
              inputType: "radiogroup",
              options: ["<10 – Confirm budget.", ">10 – Continue.", ">50 – Engage an Overlay Sales Rep", ">1000 – Disqualify."]
            },
            {
              id: "sq_fsm_02",
              questionText: "What is 80% of the services you provide?",
              helpText: "Note: Sales rep should try to understand the breakdown of their services. What is the majority of their business model?",
              inputType: "textarea"
            },
            {
              id: "sq_fsm_07",
              questionText: "Do you require clock in/out for payroll purposes?",
              helpText: "Note: It is important to understand this requirement to know what needs to be positioned.",
              inputType: "radiogroup",
              options: ["Yes", "No"]
            },
            {
              id: "sq_fsm_08",
              questionText: "Are your assets serialized or lot tracked?",
              helpText: "Note: If yes, they will also need Adv. Inventory",
              inputType: "radiogroup",
              options: ["Yes", "No"]
            },
            {
              id: "sq_fsm_10",
              questionText: "Do they NEED any of the following?",
              helpText: "Note: These can be disqualifiers, but it is dependent on the size of the company and budget.",
              inputType: "checkboxgroup",
              options: ["Delivery Service", "Rental Management", "Automated Job Order & Route Mapping", "Customer Portal for Scheduling"]
            }
          ]
        }
      ]
    },
    {
      sectionId: "sc-qual",
      sectionTitle: "SC – QUALIFICATION/DISCOVERY",
      components: [
        {
          componentType: "QuestionList",
          id: "sc-questions",
          questions: [
            {
              id: "scq_fsm_03",
              questionText: "Is your work predominantly B2B or B2C?",
              inputType: "radiogroup",
              options: ["B2B", "B2C"]
            },
            {
              id: "scq_fsm_06",
              questionText: "Are PMs (preventative maintenance) created based on set schedules (calendar based) or usage/hours/miles(km) based?",
              inputType: "radiogroup",
              options: ["Calendar Based", "Usage/Hours/Miles(km) Based – Requires Scripting"]
            },
            {
              id: "scq_fsm_07",
              questionText: "Do you take pictures, capture signatures, or fill out forms in the field?",
              inputType: "checkboxgroup_with_number",
              options: [
                { label: "Pictures" },
                { label: "Signatures" },
                { label: "Forms" }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default function RfqFormsDemoPage() {
  const [selectedForm, setSelectedForm] = useState<'fixed-assets' | 'field-service'>('fixed-assets')
  const [fixedAssetsData, setFixedAssetsData] = useState<FormData>({})
  const [fieldServiceData, setFieldServiceData] = useState<FormData>({})

  const handleFormSubmit = (formData: FormData) => {
    console.log(`${selectedForm} form submitted with data:`, formData)
    alert(`${selectedForm === 'fixed-assets' ? 'Fixed Assets Management' : 'Field Service Management'} form submitted successfully! Check console for data.`)
  }

  const currentBlueprint = selectedForm === 'fixed-assets' ? fixedAssetsBlueprint : fieldServiceBlueprint
  const currentData = selectedForm === 'fixed-assets' ? fixedAssetsData : fieldServiceData

  return (
    <div className="min-h-screen bg-background-gray">
      {/* Form Selection Header */}
      <div className="bg-white border-b border-light-gray shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display-bold text-stackmatch-navy">
              Dynamic RFQ Form Demo
            </h1>
            <div className="flex gap-2">
              <Button
                variant={selectedForm === 'fixed-assets' ? 'default' : 'outline'}
                onClick={() => setSelectedForm('fixed-assets')}
                className={cn(
                  "flex items-center gap-2",
                  selectedForm === 'fixed-assets' && "bg-stackmatch-blue hover:bg-stackmatch-blue/90"
                )}
              >
                <FileText className="w-4 h-4" />
                Fixed Assets Management
              </Button>
              <Button
                variant={selectedForm === 'field-service' ? 'default' : 'outline'}
                onClick={() => setSelectedForm('field-service')}
                className={cn(
                  "flex items-center gap-2",
                  selectedForm === 'field-service' && "bg-stackmatch-blue hover:bg-stackmatch-blue/90"
                )}
              >
                <Wrench className="w-4 h-4" />
                Field Service Management
              </Button>
            </div>
          </div>
          <p className="text-sm text-medium-gray mt-2">
            Switch between forms to test different component types and configurations
          </p>
        </div>
      </div>

      {/* Form Renderer */}
      <div className="animate-fade-in">
        <RfqFormRenderer
          key={selectedForm} // Force re-render when switching forms
          blueprint={currentBlueprint}
          onSubmit={handleFormSubmit}
          initialData={currentData}
        />
      </div>
    </div>
  )
}