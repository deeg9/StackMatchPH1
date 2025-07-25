import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const collectionsManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Collections Management",
  formId: "collections-management-v1",
  sections: [
    {
      sectionId: "general-qual",
      sectionTitle: "General Collections Process",
      components: [
        {
          componentType: "QuestionList",
          id: "general-questions",
          questions: [
            {
              id: "gq_cm_01",
              questionText: "How do you manage your A/R collections process today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to describe a typical A/R collections process?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me better describe our current collections management process?"
                }
              ]
            },
            {
              id: "gq_cm_02",
              questionText: "What system(s) do you use to capture this data and process payment on invoices?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Systems",
                  question: "Can you list common A/R and payment processing systems?"
                },
                {
                  text: "Integration Points",
                  question: "What should I consider about system integration for collections?"
                }
              ]
            },
            {
              id: "gq_cm_03",
              questionText: "How many customers do you have that receive invoices with terms for later payment rather than paying immediately?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to categorize and count credit customers?"
                },
                {
                  text: "Segmentation",
                  question: "How should I segment customers by payment terms?"
                }
              ]
            },
            {
              id: "gq_cm_04",
              questionText: "What terms do you typically give your customers? (e.g. Net 30, Net 60, Net 90, etc.)",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Payment Terms",
                  question: "Can you explain common payment terms and their implications?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for setting customer payment terms?"
                }
              ]
            },
            {
              id: "gq_cm_05",
              questionText: "How do you track your customers with outstanding invoices?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you describe effective methods for tracking outstanding invoices?"
                },
                {
                  text: "Aging Reports",
                  question: "How should I describe our A/R aging and tracking process?"
                }
              ]
            },
            {
              id: "gq_cm_06",
              questionText: "What's the average number of days that invoices are left open without payment?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Calculate DSO",
                  question: "How do I calculate Days Sales Outstanding (DSO)?"
                },
                {
                  text: "Industry Benchmarks",
                  question: "What are typical DSO benchmarks by industry?"
                }
              ]
            },
            {
              id: "gq_cm_07",
              questionText: "How do you notify customers that payment is due?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of effective collection notification strategies?"
                },
                {
                  text: "Communication Cadence",
                  question: "What's a best practice collections communication schedule?"
                }
              ]
            },
            {
              id: "gq_cm_08",
              questionText: "Do you have any customers that are late on their payments or don't make their payments at all?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Bad Debt Analysis",
                  question: "How should I analyze and describe our bad debt situation?"
                },
                {
                  text: "Risk Categories",
                  question: "Can you explain how to categorize collection risk levels?"
                }
              ]
            },
            {
              id: "gq_cm_09",
              questionText: "What's the average number and total value of all your outstanding customer invoices in a given month, quarter, and year?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to present A/R metrics by time period?"
                },
                {
                  text: "Key Metrics",
                  question: "What are the key A/R metrics I should be tracking?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "sc-qual",
      sectionTitle: "Detailed Qualification Questions",
      components: [
        {
          componentType: "InstructionalText",
          content: "The following questions will help us understand the details of your collections process."
        },
        {
          componentType: "QuestionList",
          id: "sc-questions",
          questions: [
            {
              id: "scq_cm_01",
              questionText: "How much time is your current AR collections process taking you today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Time Analysis",
                  question: "How do I calculate total time spent on collections activities?"
                },
                {
                  text: "Process Breakdown",
                  question: "Can you help me break down collections time by activity?"
                }
              ]
            },
            {
              id: "scq_cm_02",
              questionText: "What would it mean to your business if you could automate this process and reduce your DSO (days sales outstanding)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "ROI Calculation",
                  question: "How do I calculate the ROI of reducing DSO?"
                },
                {
                  text: "Cash Flow Impact",
                  question: "Can you explain how DSO reduction improves cash flow?"
                }
              ]
            },
            {
              id: "scq_cm_03",
              questionText: "How do you keep track of which customers have received notices and the general activity for AR collections? (Ex: number of messages, when did they receive them, any communication back and forth, etc.)",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you describe a comprehensive collections activity tracking system?"
                },
                {
                  text: "Communication Log",
                  question: "What should a collections communication log include?"
                }
              ]
            },
            {
              id: "scq_cm_04",
              questionText: "What is the volume of outstanding collections (in dollar amount or number of customers)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Volume Metrics",
                  question: "How should I present collections volume metrics?"
                },
                {
                  text: "Segmentation",
                  question: "Can you help me segment our collections volume by risk level?"
                }
              ]
            },
            {
              id: "scq_cm_05",
              questionText: "How else are you looking to improve your AR collections process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Improvement Areas",
                  question: "What are common areas for collections process improvement?"
                },
                {
                  text: "Best Practices",
                  question: "Can you suggest collections management best practices to consider?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}