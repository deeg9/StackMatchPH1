import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const accountReconciliationBlueprint: RfqFormBlueprint = {
  formTitle: "Account Reconciliation",
  formId: "account-reconciliation-v1",
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
              id: "sq_ar_01",
              questionText: "How many people are on your Accounting Team, and how many are involved in the reconciliation process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to describe my accounting team structure and reconciliation roles?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me better describe our team structure and reconciliation responsibilities?"
                }
              ]
            },
            {
              id: "sq_ar_02",
              questionText: "How much of your balance sheet is being reconciled today (number of accounts)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of how to quantify balance sheet reconciliation scope?"
                },
                {
                  text: "What to Include",
                  question: "What types of accounts should I include when counting our reconciliation scope?"
                }
              ]
            },
            {
              id: "sq_ar_03",
              questionText: "How much time is the team taking each month to reconcile?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to estimate and describe monthly reconciliation time requirements?"
                },
                {
                  text: "Time Calculation",
                  question: "How should I calculate total reconciliation time across team members?"
                }
              ]
            },
            {
              id: "sq_ar_04",
              questionText: "How are you reconciling those accounts today, and what challenges or frustrations do you have?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Improve Writing",
                  question: "Can you help me describe our current reconciliation process and pain points?"
                },
                {
                  text: "Common Challenges",
                  question: "What are common reconciliation challenges I should consider mentioning?"
                }
              ]
            },
            {
              id: "sq_ar_05",
              questionText: "As part of your reconciliation, do you do transaction matching?",
              helpText: "If so, what is the approximate volume and type of transactions that need to be reconciled today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "What is Transaction Matching?",
                  question: "Can you explain transaction matching and provide examples?"
                },
                {
                  text: "Volume Estimation",
                  question: "How should I estimate and describe our transaction matching volumes?"
                }
              ]
            },
            {
              id: "sq_ar_06",
              questionText: "Are you looking at other reconciliation solutions?",
              helpText: "Have you or your staff worked with other solutions like Blackline, FloQast, etc.?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Solutions",
                  question: "Can you list popular account reconciliation software solutions and their key features?"
                },
                {
                  text: "Evaluation Criteria",
                  question: "What should I consider when evaluating reconciliation solutions?"
                }
              ]
            },
            {
              id: "sq_ar_07",
              questionText: "What is your timeline for making a decision and what is driving that timeline?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of decision timelines and common drivers?"
                },
                {
                  text: "Timeline Factors",
                  question: "What factors typically drive reconciliation software implementation timelines?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "sc-qual",
      sectionTitle: "DETAILED QUALIFICATION QUESTIONS",
      components: [
        {
          componentType: "InstructionalText",
          content: "This section will help us understand the details of your reconciliation process."
        },
        {
          componentType: "QuestionList",
          id: "sc-questions",
          questions: [
            {
              id: "scq_ar_01",
              questionText: "Can you walk me through why you're evaluating a reconciliation tool and the challenges you are facing?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Improve Writing",
                  question: "Can you help me articulate our reasons for evaluating reconciliation tools?"
                },
                {
                  text: "Common Drivers",
                  question: "What are typical reasons companies seek reconciliation automation?"
                }
              ]
            },
            {
              id: "scq_ar_02",
              questionText: "What is your business/hierarchy structure (e.g., number of subsidiaries, currencies)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to describe a complex business hierarchy structure?"
                },
                {
                  text: "What to Include",
                  question: "What organizational details are important for reconciliation requirements?"
                }
              ]
            },
            {
              id: "scq_ar_03",
              questionText: "Are you annually audited?",
              helpText: "This helps to understand compliance requirements and internal controls.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Audit Types",
                  question: "Can you explain different types of audits and their reconciliation implications?"
                },
                {
                  text: "Compliance Impact",
                  question: "How do audit requirements affect reconciliation process needs?"
                }
              ]
            },
            {
              id: "scq_ar_04",
              questionText: "Are you looking to improve the internal controls around your overall balance sheet reconciliation process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Internal Controls",
                  question: "What are key internal controls for balance sheet reconciliation?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for reconciliation internal controls?"
                }
              ]
            },
            {
              id: "scq_ar_05",
              questionText: "Do you have any unique regulatory or industry requirements for reporting and compliance?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of industry-specific reconciliation requirements?"
                },
                {
                  text: "Regulatory Landscape",
                  question: "What are common regulatory requirements affecting reconciliation?"
                }
              ]
            },
            {
              id: "scq_ar_06",
              questionText: "Are you looking for a specific type of reconciliation compliance method?",
              helpText: "Example: account analysis, balance comparison, and/or flux/variance analysis.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Method Types",
                  question: "Can you explain different reconciliation methods (account analysis, balance comparison, flux analysis)?"
                },
                {
                  text: "Method Selection",
                  question: "How do I choose the right reconciliation method for different account types?"
                }
              ]
            },
            {
              id: "scq_ar_07",
              questionText: "What are your various data sources for transaction matching?",
              helpText: "Example: POS to bank, AP to PO, credit card to GL, POS to GL, marketplace to GL, etc.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide detailed examples of transaction matching data sources?"
                },
                {
                  text: "Integration Needs",
                  question: "What should I consider for data source integration in reconciliation?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}