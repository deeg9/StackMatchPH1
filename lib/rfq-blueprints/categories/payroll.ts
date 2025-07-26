import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const payrollBlueprint: RfqFormBlueprint = {
  formTitle: "Payroll",
  formId: "payroll-v2-final",
  sections: [
    {
      sectionId: "payroll-qual",
      sectionTitle: "Payroll Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "payroll-questions",
          questions: [
            {
              id: "payroll_01",
              questionText: "Please walk us through your current Payroll Run Process.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Process Example",
                  question: "Can you show me an example of a typical payroll run process?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for efficient payroll processing?"
                }
              ]
            },
            {
              id: "payroll_02",
              questionText: "How many Payroll FEINs/Subsidiaries do you pay employees out of?",
              helpText: "The Employer Identification Number (FEIN) is a unique nine-digit number assigned by the IRS to business entities.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "What is FEIN?",
                  question: "Can you explain FEINs and their importance in payroll?"
                },
                {
                  text: "Multi-Entity Payroll",
                  question: "What are the complexities of running payroll for multiple entities?"
                }
              ]
            },
            {
              id: "payroll_03",
              questionText: "How many salaried, hourly, and overtime-eligible employees do you pay each run?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Calculate Mix",
                  question: "How should I calculate our employee mix by pay type?"
                },
                {
                  text: "Employee Classification",
                  question: "What are the differences between salaried, hourly, and overtime-eligible employees?"
                }
              ]
            },
            {
              id: "payroll_04",
              questionText: "Which states and jurisdictions do you operate in?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Multi-State Compliance",
                  question: "What are the compliance challenges of multi-state payroll?"
                },
                {
                  text: "Tax Jurisdictions",
                  question: "How do state and local tax jurisdictions impact payroll?"
                }
              ]
            },
            {
              id: "payroll_05",
              questionText: "What frequency do you currently run Payroll, and are you looking to change this?",
              helpText: "If you are looking to make a change, what would that be?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Frequency Options",
                  question: "What are common payroll frequencies and their pros/cons?"
                },
                {
                  text: "Change Impact",
                  question: "What should I consider when changing payroll frequency?"
                }
              ]
            },
            {
              id: "payroll_06",
              questionText: "How do you update your General Ledger (GL) after a payroll run?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "GL Integration",
                  question: "What are best practices for payroll to GL integration?"
                },
                {
                  text: "Automation Options",
                  question: "How can we automate payroll journal entries to the GL?"
                }
              ]
            },
            {
              id: "payroll_07",
              questionText: "How does your finance team understand the impact of Payroll on the bottom line?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Payroll Analytics",
                  question: "What payroll analytics are most important for finance teams?"
                },
                {
                  text: "Cost Analysis",
                  question: "How should companies analyze total payroll costs?"
                }
              ]
            },
            {
              id: "payroll_08",
              questionText: "How long does it take to run payroll, and specifically, to reconcile payroll against your GL?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Time Benchmarks",
                  question: "What are typical payroll processing time benchmarks?"
                },
                {
                  text: "Efficiency Tips",
                  question: "How can we reduce payroll processing and reconciliation time?"
                }
              ]
            },
            {
              id: "payroll_09",
              questionText: "Approximately how many wage garnishments do you process and what types are they?",
              helpText: "Garnishments are used for debts such as taxes, child support, student loans, etc.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Garnishment Types",
                  question: "What are the different types of wage garnishments?"
                },
                {
                  text: "Compliance Requirements",
                  question: "What are the compliance requirements for wage garnishments?"
                }
              ]
            },
            {
              id: "payroll_10",
              questionText: "Are you dealing with any fines or penalties today due to payroll errors?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Common Penalties",
                  question: "What are common payroll-related fines and penalties?"
                },
                {
                  text: "Prevention Tips",
                  question: "How can companies prevent payroll compliance penalties?"
                }
              ]
            },
            {
              id: "payroll_11",
              questionText: "How do your employees track their time?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Time Tracking Methods",
                  question: "What are common employee time tracking methods?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for accurate time tracking?"
                }
              ]
            },
            {
              id: "payroll_12",
              questionText: "Do you have any employees that work in multiple states during a single pay period?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Multi-State Tax",
                  question: "How is payroll tax handled for employees working in multiple states?"
                },
                {
                  text: "Compliance Challenges",
                  question: "What are the compliance challenges for multi-state employees?"
                }
              ]
            },
            {
              id: "payroll_13",
              questionText: "What payroll solution are you using today?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Payroll Systems",
                  question: "What are the most common payroll systems and their features?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are typical reasons companies switch payroll providers?"
                }
              ]
            },
            {
              id: "payroll_14",
              questionText: "What are your biggest payroll challenges?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Pain Points",
                  question: "What are the most common payroll challenges companies face?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our payroll challenges more clearly?"
                }
              ]
            },
            {
              id: "payroll_15",
              questionText: "Do you have any union employees?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Union Requirements",
                  question: "What are special payroll requirements for union employees?"
                },
                {
                  text: "Payroll Impact",
                  question: "How do union agreements impact payroll processing?"
                }
              ]
            },
            {
              id: "payroll_16",
              questionText: "Do you pay prevailing wage?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "What is Prevailing Wage?",
                  question: "Can you explain prevailing wage requirements?"
                },
                {
                  text: "Compliance Requirements",
                  question: "What are the compliance requirements for prevailing wage?"
                }
              ]
            },
            {
              id: "payroll_17",
              questionText: "Do you have employees in Canada?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Canadian Payroll",
                  question: "What are the differences between US and Canadian payroll?"
                },
                {
                  text: "Cross-Border Challenges",
                  question: "What challenges come with processing payroll in both US and Canada?"
                }
              ]
            },
            {
              id: "payroll_18",
              questionText: "Do you have a need to track time against a project?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Project Time Tracking",
                  question: "What are best practices for project-based time tracking?"
                },
                {
                  text: "Cost Allocation",
                  question: "How can project time tracking help with cost allocation?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}