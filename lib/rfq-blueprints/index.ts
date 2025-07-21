import { type RfqFormBlueprint } from '@/types/rfq-forms'

// Fixed Assets Management Blueprint
const fixedAssetsManagementBlueprint: RfqFormBlueprint = {
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
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show an example",
                  question: "Can you show me an example of how to describe my current fixed asset depreciation management process?"
                }
              ]
            },
            {
              id: "sq_02",
              questionText: "How much time does it take your accounting team to calculate and enter depreciation during month end?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "What should I include?",
                  question: "What details should I include when describing the time spent on depreciation calculations?"
                },
                {
                  text: "Typical timeline",
                  question: "What's a typical timeline for depreciation calculations in companies like mine?"
                }
              ]
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
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "What's a cap policy?",
                  question: "Can you explain what a capitalization policy is and provide some examples?"
                }
              ]
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

// Field Service Management Blueprint
const fieldServiceManagementBlueprint: RfqFormBlueprint = {
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
              id: "sq_fsm_03",
              questionText: "What are your sources of revenue?",
              helpText: "Is servicing equipment / assets (installations, preventive maintenance, corrective maintenance) a major part of your revenue stream? Roughly how much is its revenue contribution as compared to other revenue streams?",
              inputType: "textarea"
            },
            {
              id: "sq_fsm_04",
              questionText: "Can you describe the types of activities, assets, and field work?",
              helpText: "Ex Types: installations, preventative maintenance, and/or break fix. Ex Assets: Machinery, Properties, Parks, Pools, Vehicles, Equipment, etc. Ex Field Work: engineers, technicians, maintenance staff",
              inputType: "textarea"
            },
            {
              id: "sq_fsm_05",
              questionText: "Where is the work being completed?",
              helpText: "Ex: In house at a fixed location? Or in the field (various locations)?",
              inputType: "textarea"
            },
            {
              id: "sq_fsm_06",
              questionText: "How do you schedule your technicians to jobs?",
              inputType: "textarea"
            },
            {
              id: "sq_fsm_07",
              questionText: "Do you require clock in/out for payroll purposes?",
              helpText: "Note: It is important to understand this requirement to know what needs to be positioned. Work with your SC to position the appropriate modules.",
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
              id: "sq_fsm_09",
              questionText: "Do your technicians use inventory/parts to complete their jobs out in the field?",
              inputType: "radiogroup",
              options: ["Yes", "No"]
            },
            {
              id: "sq_fsm_10",
              questionText: "Do they NEED any of the following?",
              helpText: "Note: These can be disqualifiers, but it is dependent on the size of the company and budget. Work with your SC to understand requirements and validate fit.",
              inputType: "checkboxgroup",
              options: ["Delivery Service", "Rental Management", "Automated Job Order & Route Mapping", "Customer Portal for Scheduling"]
            },
            {
              id: "sq_fsm_11",
              questionText: "Do you have an existing FSM solution?",
              helpText: "If yes, what solution are using today? Or is it homegrown?",
              inputType: "radiogroup",
              options: ["Yes", "No"]
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
              id: "scq_fsm_01",
              questionText: "How many subsidiaries will be managed with a need for FSM?",
              helpText: "Note: Only support 1 subsidiary out of the box, can create a large SOW to accommodate for additional subsidiaries – budget and implementation time concerns.",
              inputType: "textarea"
            },
            {
              id: "scq_fsm_02",
              questionText: "If FSM is needed in more than one subsidiary, are customers and/or technicians/staff shared across them?",
              inputType: "checkboxgroup",
              options: ["Customers are shared across subsidiaries", "Technicians/Staff are shared across subsidiaries"]
            },
            {
              id: "scq_fsm_03",
              questionText: "Is your work predominantly B2B or B2C?",
              helpText: "Note: B2C can be challenging due to subcontracting, showing a catalog of items out in the field, and lack of customer portal (calendars and scheduling by the customer).",
              inputType: "radiogroup",
              options: ["B2B", "B2C"]
            },
            {
              id: "scq_fsm_04",
              questionText: "Do you require Fleet Management?",
              helpText: "Ex: Company owned vehicles requiring service. Caution: If this is the majority, we don't handle it well.",
              inputType: "textarea"
            },
            {
              id: "scq_fsm_05",
              questionText: "Do you do any rental management?",
              helpText: "Caution: If this is the majority, we don't handle it well.",
              inputType: "textarea"
            },
            {
              id: "scq_fsm_06",
              questionText: "Are PMs (preventative maintenance) created based on set schedules (calendar based) or usage/hours/miles(km) based?",
              helpText: "Caution: FSM does not support usage based out of the box.",
              inputType: "radiogroup",
              options: ["Calendar Based", "Usage/Hours/Miles(km) Based – Requires Scripting"]
            },
            {
              id: "scq_fsm_07",
              questionText: "Do you take pictures, capture signatures, or fill out forms in the field?",
              helpText: "Caution: For pictures they get stored in the file cabinet, so the limitation is around budget for additional file cabinet space.",
              inputType: "checkboxgroup_with_number",
              options: [
                { label: "Pictures" },
                { label: "Signatures" },
                { label: "Forms" }
              ]
            },
            {
              id: "scq_fsm_08",
              questionText: "Do you require quoting or upselling out in the field?",
              inputType: "checkboxgroup",
              options: ["Quoting", "Upselling", "Both"]
            }
          ]
        }
      ]
    }
  ]
}

// Blueprint mapping
const blueprintMapping: Record<string, string> = {
  'Fixed Assets Management': 'fixed-assets-management-v1',
  'Field Service Management': 'field-service-management-v1'
}

// All blueprints registry
const blueprints: Record<string, RfqFormBlueprint> = {
  'fixed-assets-management-v1': fixedAssetsManagementBlueprint,
  'field-service-management-v1': fieldServiceManagementBlueprint
}

// Helper functions
export function getBlueprintIdByCategory(categoryName: string): string | null {
  return blueprintMapping[categoryName] || null
}

export function getBlueprintById(blueprintId: string): RfqFormBlueprint | null {
  return blueprints[blueprintId] || null
}

export function hasBlueprint(categoryName: string): boolean {
  return categoryName in blueprintMapping
}

export function getAllBlueprintCategories(): string[] {
  return Object.keys(blueprintMapping)
}

// Export individual blueprints for direct access if needed
export {
  fixedAssetsManagementBlueprint,
  fieldServiceManagementBlueprint
}