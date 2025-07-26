import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const rebateManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Rebate Management",
  formId: "rebate-management-v1",
  sections: [
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