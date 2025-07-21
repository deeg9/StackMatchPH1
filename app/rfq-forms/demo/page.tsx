'use client'

import { RfqFormRenderer } from '@/components/rfq-forms/RfqFormRenderer'
import { type RfqFormBlueprint } from '@/types/rfq-forms'

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
    },
    {
      sectionId: "next-steps",
      sectionTitle: "NEXT STEPS",
      components: [
        {
          componentType: "InstructionalText",
          content: "AMO – Fill out the SVD for the CSER"
        }
      ]
    }
  ]
}

export default function RfqFormsDemoPage() {
  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted with data:', formData)
    // Here you would typically send the data to your API
    alert('Form submitted successfully! Check console for data.')
  }

  return (
    <RfqFormRenderer
      blueprint={fixedAssetsBlueprint}
      onSubmit={handleFormSubmit}
    />
  )
}