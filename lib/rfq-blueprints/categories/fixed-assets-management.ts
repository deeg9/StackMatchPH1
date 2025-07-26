import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const fixedAssetsManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Fixed Assets Management",
  formId: "fixed-assets-management-v1",
  sections: [
    {
      sectionId: "current-process",
      sectionTitle: "Current Process Requirements",
      components: [
        {
          componentType: "QuestionList",
          id: "current-process-questions",
          questions: [
            {
              id: "cp_01",
              questionText: "How do you manage depreciation today?",
              helpText: "Are you using spreadsheets or another application for this process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Improve Writing",
                  question: "Can you help me improve my description of our current depreciation management process?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me an example of how to describe my current fixed asset depreciation management process?"
                }
              ]
            },
            {
              id: "cp_02",
              questionText: "How much time does it take your accounting team to calculate and enter depreciation during month end?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Improve Writing",
                  question: "Can you help me better describe the time and effort spent on depreciation calculations?"
                },
                {
                  text: "Show Example",
                  question: "What's a typical example of time spent on depreciation calculations in companies like mine?"
                }
              ]
            },
            {
              id: "cp_03",
              questionText: "Roughly how many assets are you keeping track of today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide an example of how to categorize and count our assets?"
                }
              ]
            },
            {
              id: "cp_04",
              questionText: "How many different asset classes do you keep track of today? (Furniture, Equipment, Vehicles, etc.)",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me common asset class categories used in fixed asset management?"
                }
              ]
            },
            {
              id: "cp_05",
              questionText: "Do you have leases that need to be tracked in compliance with ASC-842?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "What is ASC-842?",
                  question: "Can you explain what ASC-842 compliance means and why it's important?"
                },
                {
                  text: "Show Example",
                  question: "Can you provide examples of leases that typically need ASC-842 tracking?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "additional-process",
      sectionTitle: "Additional Process Requirements",
      components: [
        {
          componentType: "QuestionList",
          id: "additional-process-questions",
          questions: [
            {
              id: "ap_01",
              questionText: "How do you keep track of things like: the asset custodian, the original cost, the current value, any maintenance or warranties, etc.?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me an example of comprehensive asset tracking information?"
                }
              ]
            },
            {
              id: "ap_02",
              questionText: "What is your capitalization policy?",
              helpText: "The minimum value threshold for treating purchases as capital assets rather than expenses",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "What's a capitalization policy?",
                  question: "Can you explain what a capitalization policy is and provide some examples?"
                },
                {
                  text: "Show Example",
                  question: "Can you provide examples of typical capitalization policies by company size?"
                }
              ]
            },
            {
              id: "ap_03",
              questionText: "Do you have assets that are related? (Parent/Child relationship)",
              helpText: "This can be a compound asset or a parent/child relationship",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of parent/child asset relationships?"
                }
              ]
            },
            {
              id: "ap_04",
              questionText: "Do you ever capitalize your services?",
              helpText: "Converting service costs into capital assets",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you explain when and how services are typically capitalized?"
                }
              ]
            },
            {
              id: "ap_05",
              questionText: "What types of depreciation methods do you use today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you list common depreciation methods and when they're used?"
                }
              ]
            },
            {
              id: "ap_06",
              questionText: "Do you require any secondary tax depreciation methods?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you explain secondary tax depreciation methods with examples?"
                }
              ]
            },
            {
              id: "ap_07",
              questionText: "How do you manage the revaluation, disposal, write-off, sale, or transfer of assets?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of asset lifecycle management processes?"
                }
              ]
            },
            {
              id: "ap_08",
              questionText: "What reports are you running around your fixed assets today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you list common fixed asset reports and their purposes?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}