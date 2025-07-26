import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const rebateManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Rebate Management",
  formId: "rebate-management-v1",
  sections: [
    {
      sectionId: "general-qual",
      sectionTitle: "General Rebate Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "general-questions",
          questions: [
            {
              id: "gq_rm_01",
              questionText: "How many rebate agreements do you manage on a monthly, quarterly, and annual basis?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to present rebate agreement volumes by time period?"
                },
                {
                  text: "Calculate Volume",
                  question: "How should I calculate our total rebate agreement volumes?"
                }
              ]
            },
            {
              id: "gq_rm_02",
              questionText: "Are your rebate agreements based on quantity of items or revenue sold?",
              inputType: "radiogroup",
              options: ["Quantity", "Revenue", "Both"],
              smartPrompts: [
                {
                  text: "Explain Differences",
                  question: "What's the difference between quantity-based and revenue-based rebates?"
                },
                {
                  text: "Best Practices",
                  question: "What are the pros and cons of each rebate calculation method?"
                }
              ]
            },
            {
              id: "gq_rm_03",
              questionText: "Are your rebates calculated as a flat rate or are they tiered?",
              helpText: "For example, is there a different rebate percentage if a customer reaches a new tier of quantity/revenue?",
              inputType: "radiogroup",
              options: ["Flat Rate", "Tiered", "Both"],
              smartPrompts: [
                {
                  text: "Show Tier Example",
                  question: "Can you provide an example of a tiered rebate structure?"
                },
                {
                  text: "Rate Structure",
                  question: "How do companies typically structure their rebate tiers?"
                }
              ]
            },
            {
              id: "gq_rm_04",
              questionText: "How are you tracking your rebate agreements today?",
              helpText: "Are you using spreadsheets or another application?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Systems",
                  question: "What are common rebate management systems and tools?"
                },
                {
                  text: "Pain Points",
                  question: "What are typical pain points with manual rebate tracking?"
                }
              ]
            },
            {
              id: "gq_rm_05",
              questionText: "How much time is your team spending managing these agreements each month?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Time Breakdown",
                  question: "How should I estimate time spent on different rebate management activities?"
                },
                {
                  text: "Efficiency Tips",
                  question: "What activities typically consume the most time in rebate management?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "claims-process",
      sectionTitle: "Calculation & Claims Process",
      components: [
        {
          componentType: "QuestionList",
          id: "claims-questions",
          questions: [
            {
              id: "cp_rm_01",
              questionText: "Do you need to calculate accruals for your rebates?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "What are Accruals?",
                  question: "Can you explain rebate accruals and why they're important?"
                },
                {
                  text: "Calculation Methods",
                  question: "How are rebate accruals typically calculated?"
                }
              ]
            },
            {
              id: "cp_rm_02",
              questionText: "How are you managing the claims process with your customers today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Process Example",
                  question: "Can you provide an example of a typical rebate claims process?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for efficient rebate claims management?"
                }
              ]
            },
            {
              id: "cp_rm_03",
              questionText: "Are rebate claims settled as a credit memo or a cash payment?",
              inputType: "radiogroup",
              options: ["Credit Memo", "Cash Payment", "Both"],
              smartPrompts: [
                {
                  text: "Method Comparison",
                  question: "What are the differences between credit memo and cash payment settlements?"
                },
                {
                  text: "Pros/Cons",
                  question: "What are the advantages and disadvantages of each settlement method?"
                }
              ]
            },
            {
              id: "cp_rm_04",
              questionText: "Do your agreements apply to a specific set of items or all items sold to a customer?",
              inputType: "radiogroup",
              options: ["Specific Items", "All Items"],
              smartPrompts: [
                {
                  text: "Scope Examples",
                  question: "Can you provide examples of item-specific vs. all-items rebate agreements?"
                },
                {
                  text: "Configuration Tips",
                  question: "How should I determine the right item scope for rebate agreements?"
                }
              ]
            },
            {
              id: "cp_rm_05",
              questionText: "Do you have any channel sales or chargeback requirements?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "What is Chargeback?",
                  question: "Can you explain chargebacks in the context of rebate management?"
                },
                {
                  text: "Channel Rebates",
                  question: "How do channel rebates differ from direct customer rebates?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}