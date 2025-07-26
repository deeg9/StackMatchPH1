import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const hrBlueprint: RfqFormBlueprint = {
  formTitle: "Human Resources (HR)",
  formId: "hr-v1-expanded",
  sections: [
    {
      sectionId: "hr-qual",
      sectionTitle: "Human Resources Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "hr-questions",
          questions: [
            {
              id: "hr_01",
              questionText: "How many people do you employ globally, in what countries do they work, and how many employees are in each country?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to present global workforce distribution by country?"
                },
                {
                  text: "Calculate Breakdown",
                  question: "How should I calculate and present our employee distribution across countries?"
                }
              ]
            },
            {
              id: "hr_02",
              questionText: "How do you generally manage your global workforce in terms of HR across your global locations?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Best Practices",
                  question: "What are best practices for managing HR across multiple countries?"
                },
                {
                  text: "Common Models",
                  question: "What are common global HR management models (centralized vs decentralized)?"
                }
              ]
            },
            {
              id: "hr_03",
              questionText: "Is all of your HR data tracked and maintained in the same system?",
              helpText: "If not, do the numbers in your HR system match what you see in your Financial System?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "System Integration",
                  question: "What are the benefits of integrated HR and financial systems?"
                },
                {
                  text: "Data Consistency",
                  question: "How can I ensure data consistency between HR and financial systems?"
                }
              ]
            },
            {
              id: "hr_04",
              questionText: "How are you generating reports and analytics around your workforce (headcount reporting, YoY turnover, census, etc.)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Report Types",
                  question: "What are the most important HR reports and analytics for businesses?"
                },
                {
                  text: "Analytics Examples",
                  question: "Can you provide examples of key workforce analytics and metrics?"
                }
              ]
            },
            {
              id: "hr_05",
              questionText: "How much time is spent to generate workforce reports and analytics, and who needs to be involved each time?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Time Estimation",
                  question: "How should I estimate time spent on HR reporting activities?"
                },
                {
                  text: "Process Optimization",
                  question: "What are ways to reduce time spent on HR reporting?"
                }
              ]
            },
            {
              id: "hr_06",
              questionText: "How does your organization achieve employee self-service for HR needs (e.g. address changes, viewing benefits, payroll, etc.)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Self-Service Features",
                  question: "What are essential employee self-service features in modern HR systems?"
                },
                {
                  text: "Implementation Tips",
                  question: "How can organizations successfully implement employee self-service?"
                }
              ]
            },
            {
              id: "hr_07",
              questionText: "How long do employees typically spend on self-service level activities?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Benchmark Times",
                  question: "What are typical time benchmarks for common employee self-service tasks?"
                },
                {
                  text: "Efficiency Metrics",
                  question: "How should I measure employee self-service efficiency?"
                }
              ]
            },
            {
              id: "hr_08",
              questionText: "How do you manage time off requests and vacation liabilities today? What is the financial risk to your books?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Financial Impact",
                  question: "How do vacation liabilities impact financial statements?"
                },
                {
                  text: "Liability Calculation",
                  question: "How should companies calculate and manage PTO liabilities?"
                }
              ]
            },
            {
              id: "hr_09",
              questionText: "How many legal entities do you have?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Entity Structure",
                  question: "How do legal entities impact HR management complexity?"
                },
                {
                  text: "Compliance Requirements",
                  question: "What HR compliance challenges come with multiple legal entities?"
                }
              ]
            },
            {
              id: "hr_10",
              questionText: "How do you track and manage your open positions?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "ATS Options",
                  question: "What are common applicant tracking system features and options?"
                },
                {
                  text: "Tracking Methods",
                  question: "What are best practices for tracking open positions and recruitment?"
                }
              ]
            },
            {
              id: "hr_11",
              questionText: "Do you need a solution that can help you with your onboarding and offboarding processes?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Process Examples",
                  question: "What should be included in onboarding and offboarding processes?"
                },
                {
                  text: "Automation Benefits",
                  question: "How can automation improve onboarding and offboarding?"
                }
              ]
            },
            {
              id: "hr_12",
              questionText: "What system are you using for your HR needs today?",
              helpText: "What is causing you to look for another solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common HR Systems",
                  question: "What are the most common HR systems and their strengths?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are typical reasons companies switch HR systems?"
                }
              ]
            },
            {
              id: "hr_13",
              questionText: "What are your biggest challenges with your current HR processes?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Pain Points",
                  question: "What are the most common HR process challenges companies face?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our HR challenges more clearly?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}