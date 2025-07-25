import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const financialManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Financial Management",
  formId: "financial-management-v1",
  sections: [
    {
      sectionId: "general-qual",
      sectionTitle: "General Qualification Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "general-questions",
          questions: [
            {
              id: "gq_fm_01",
              questionText: "What does your subsidiary structure look like?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me an example of how to describe a company's subsidiary structure?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me better describe our subsidiary and organizational structure?"
                }
              ]
            },
            {
              id: "gq_fm_02",
              questionText: "How many locations do you have within each subsidiary?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide an example of how to list locations by subsidiary?"
                }
              ]
            },
            {
              id: "gq_fm_03",
              questionText: "How many departments do you have within each location?",
              helpText: "Add a note if they're the same departments across all subsidiaries.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to structure department information across multiple locations?"
                }
              ]
            },
            {
              id: "gq_fm_04",
              questionText: "Do you create budgets for multiple segments (e.g. subsidiaries, locations, departments, etc.)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of different budget segmentation approaches?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for budget segmentation in multi-entity organizations?"
                }
              ]
            },
            {
              id: "gq_fm_05",
              questionText: "What does this process look like today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Improve Writing",
                  question: "Can you help me describe our current budgeting process more clearly?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me an example of how to describe a budgeting workflow?"
                }
              ]
            },
            {
              id: "gq_fm_06",
              questionText: "What system(s) do you use to create your budget(s)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you list common budgeting systems and tools used by companies?"
                }
              ]
            },
            {
              id: "gq_fm_07",
              questionText: "How accurate are your Budget vs Actuals reports?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to describe budget variance and accuracy metrics?"
                },
                {
                  text: "Best Practices",
                  question: "What are typical budget variance tolerances and how should I describe our accuracy?"
                }
              ]
            },
            {
              id: "gq_fm_08",
              questionText: "During this process how many of your expenses do you need to allocate and/or amortize?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of expense allocation and amortization scenarios?"
                },
                {
                  text: "What's the difference?",
                  question: "Can you explain the difference between allocation and amortization?"
                }
              ]
            },
            {
              id: "gq_fm_09",
              questionText: "Do you have any billing models you use for collecting revenue?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you list common B2B billing models and revenue collection methods?"
                }
              ]
            },
            {
              id: "gq_fm_10",
              questionText: "If so, how complex are these billing models?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you describe different levels of billing complexity with examples?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me better describe the complexity of our billing models?"
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
          content: "The following questions will help us understand the details of your financial processes."
        },
        {
          componentType: "QuestionList",
          id: "sc-questions-budgets",
          questions: [
            {
              id: "scq_fm_budgets_01",
              questionText: "Do you currently track multiple budgets or have multiple versions of your budget over the course of a fiscal year?",
              helpText: "Ex: Best case vs. worst case scenario budgets; Budget revision mid-year",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of different budget versioning approaches?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for managing multiple budget scenarios?"
                }
              ]
            },
            {
              id: "scq_fm_budgets_02",
              questionText: "How often are you updating your budgets, and how long does that take you to do today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me typical budget update frequencies and time requirements?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me describe our budget update process and timeline?"
                }
              ]
            },
            {
              id: "scq_fm_budgets_03",
              questionText: "How are you getting budget to actual reports today?",
              helpText: "Do you notice a large variance between your budget and actual?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you describe common methods for generating budget vs actual reports?"
                },
                {
                  text: "Variance Analysis",
                  question: "What constitutes a 'large variance' and how should I describe it?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "sc-questions-allocations",
          questions: [
            {
              id: "scq_fm_allocations_01",
              questionText: "Do you allocate expenses across the business?",
              helpText: "How are you managing that process today and how much time does that take at month end?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of expense allocation methods and processes?"
                },
                {
                  text: "Time Estimation",
                  question: "How do I estimate the time spent on expense allocations?"
                }
              ]
            },
            {
              id: "scq_fm_allocations_02",
              questionText: "Are you allocating based on fixed rates or do you dynamically allocate (ex: by headcount)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you explain fixed vs dynamic allocation with examples?"
                },
                {
                  text: "Best Practices",
                  question: "What are the pros and cons of fixed vs dynamic allocation methods?"
                }
              ]
            },
            {
              id: "scq_fm_allocations_03",
              questionText: "If you are dynamically allocating, what metrics do you use (ex: headcount, square footage/floor space, etc.)?",
              helpText: "How are you storing that information? How often are these updated and how much time does it add to the process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you list common allocation metrics and drivers used in financial management?"
                },
                {
                  text: "Process Description",
                  question: "How should I describe our allocation metric management process?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "sc-questions-amortizations",
          questions: [
            {
              id: "scq_fm_amort_01",
              questionText: "What types of expenses are you amortizing and how are you doing that today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of expenses that are typically amortized?"
                },
                {
                  text: "What is amortization?",
                  question: "Can you explain expense amortization and when it's used?"
                }
              ]
            },
            {
              id: "scq_fm_amort_02",
              questionText: "Do you amortize expenses related to jobs based on percentage of completion?",
              helpText: "Can you describe that process a bit more?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you explain percentage of completion accounting with examples?"
                },
                {
                  text: "Process Description",
                  question: "How should I describe our percentage of completion amortization process?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "sc-questions-billing",
          questions: [
            {
              id: "scq_fm_billing_01",
              questionText: "What billing models do you currently use?",
              helpText: "Ex: monthly, quarterly, up-front, etc.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you list common billing models and payment terms?"
                },
                {
                  text: "Best Practices",
                  question: "What billing models work best for different business types?"
                }
              ]
            },
            {
              id: "scq_fm_billing_02",
              questionText: "How are you creating the invoices today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you describe different invoice creation processes and systems?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me describe our current invoicing process?"
                }
              ]
            },
            {
              id: "scq_fm_billing_03",
              questionText: "Are you billing at the line-item level or at the sales order level?",
              helpText: "If at the sales order level, do different items on a single sales order bill differently from each other?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you explain line-item vs sales order billing with examples?"
                },
                {
                  text: "Complex Billing",
                  question: "How should I describe mixed billing scenarios within a single order?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}