import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const planningBudgetingBlueprint: RfqFormBlueprint = {
  formTitle: "Planning & Budgeting",
  formId: "planning-budgeting-v1",
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
              id: "sq_pb_01",
              questionText: "Do you have a dedicated Finance, Planning, and Analysis ('FP&A') team? If so, how many employees are on that team?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to describe an FP&A team structure?"
                },
                {
                  text: "What is FP&A?",
                  question: "Can you explain the role and responsibilities of an FP&A team?"
                }
              ]
            },
            {
              id: "sq_pb_02",
              questionText: "Are there any employees outside of the Finance team that contribute to the planning and budgeting process? If so, what departments and about how many people?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of cross-functional budget participation?"
                },
                {
                  text: "Best Practices",
                  question: "What departments typically participate in planning and budgeting?"
                }
              ]
            },
            {
              id: "sq_pb_03",
              questionText: "What system are you currently using, or have you used in the past, for planning and budgeting?",
              helpText: "Example: Excel, Adaptive Planning, Hyperion, etc. What is causing you to look at a different solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Systems",
                  question: "Can you list popular planning and budgeting software solutions?"
                },
                {
                  text: "Pain Points",
                  question: "What are common reasons companies switch planning systems?"
                }
              ]
            },
            {
              id: "sq_pb_04",
              questionText: "Do you use the Office Suite (Excel, PowerPoint, Word) for reporting or in conjunction with your planning and budgeting system?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Integration Needs",
                  question: "How do companies typically integrate Office Suite with planning systems?"
                },
                {
                  text: "Reporting Workflow",
                  question: "Can you describe common reporting workflows using Office tools?"
                }
              ]
            },
            {
              id: "sq_pb_05",
              questionText: "What are some of your planning and budgeting challenges you are looking to address?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical planning and budgeting challenges organizations face?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me articulate our planning and budgeting pain points?"
                }
              ]
            },
            {
              id: "sq_pb_06",
              questionText: "What other reporting challenges are you looking to address?",
              helpText: "Example: Internal vs External Reporting, Alternate Hierarchies, Monthly Report Books, etc.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Reporting Types",
                  question: "Can you explain different types of financial reporting requirements?"
                },
                {
                  text: "Show Example",
                  question: "Can you provide examples of complex reporting challenges?"
                }
              ]
            },
            {
              id: "sq_pb_07",
              questionText: "Given all this information, how much time is your team spending on your planning, budgeting, or reporting processes?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Time Analysis",
                  question: "How do I calculate time spent across all planning and budgeting activities?"
                },
                {
                  text: "Efficiency Metrics",
                  question: "What are benchmarks for planning and budgeting cycle times?"
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
          content: "This section will help us understand the details of your planning and budgeting processes."
        },
        {
          componentType: "QuestionList",
          id: "sc-questions",
          questions: [
            {
              id: "scq_pb_01",
              questionText: "Can you describe your business structure and levels of reporting?",
              helpText: "Example: Subsidiaries, Departments, Classes, Item Level and Customer Level",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to describe a complex organizational reporting structure?"
                },
                {
                  text: "Hierarchy Types",
                  question: "What are common financial reporting hierarchies?"
                }
              ]
            },
            {
              id: "scq_pb_02",
              questionText: "Can you describe your Revenue planning and budgeting methodology?",
              helpText: "Example: Price X volume, historical trending, driver-based, etc.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Revenue Models",
                  question: "Can you explain different revenue planning methodologies?"
                },
                {
                  text: "Driver-Based Planning",
                  question: "What is driver-based planning and how does it work?"
                }
              ]
            },
            {
              id: "scq_pb_03",
              questionText: "Can you describe your Operation Expense (OpEx) planning and budgeting methodology?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "OpEx Categories",
                  question: "What are typical OpEx categories and planning approaches?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for OpEx planning and budgeting?"
                }
              ]
            },
            {
              id: "scq_pb_04",
              questionText: "Do you actively plan and budget your Balance Sheet or Cash Flow?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Balance Sheet Planning",
                  question: "Can you explain balance sheet planning and its importance?"
                },
                {
                  text: "Cash Flow Forecasting",
                  question: "What are best practices for cash flow planning and forecasting?"
                }
              ]
            },
            {
              id: "scq_pb_05",
              questionText: "Can you describe your Labor/Workforce/Staff planning methodology?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Workforce Planning",
                  question: "Can you explain different workforce planning approaches?"
                },
                {
                  text: "Show Example",
                  question: "Can you provide examples of workforce planning methodologies?"
                }
              ]
            },
            {
              id: "scq_pb_06",
              questionText: "Do you incorporate operational or non-financial data into your planning and budgeting process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Operational Metrics",
                  question: "What operational metrics are commonly used in financial planning?"
                },
                {
                  text: "Integration Examples",
                  question: "Can you show how to integrate operational data with financial planning?"
                }
              ]
            },
            {
              id: "scq_pb_07",
              questionText: "Are you looking for any specific types of modelling, and if so, please provide examples?",
              helpText: "Example: Workforce planning, unit * volume, revenue modelling, etc.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Model Types",
                  question: "Can you explain different types of financial modeling approaches?"
                },
                {
                  text: "Use Cases",
                  question: "What are common financial modeling use cases in planning?"
                }
              ]
            },
            {
              id: "scq_pb_08",
              questionText: "Do you actively plan for different versions or scenarios of your budget?",
              helpText: "Example: for Acquisitions, Mergers, Divestitures, or changes in Market conditions, etc.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Scenario Planning",
                  question: "Can you explain scenario planning and its benefits?"
                },
                {
                  text: "Version Management",
                  question: "What are best practices for managing multiple budget versions?"
                }
              ]
            },
            {
              id: "scq_pb_09",
              questionText: "Do you need to operate in any multicurrency fashion?",
              helpText: "Example: Reporting currencies or local currencies",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Currency Planning",
                  question: "Can you explain multi-currency planning and reporting requirements?"
                },
                {
                  text: "FX Considerations",
                  question: "What are key foreign exchange considerations in budgeting?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}