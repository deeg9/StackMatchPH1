import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const billingBlueprint: RfqFormBlueprint = {
  formTitle: "Billing",
  formId: "billing-v1",
  sections: [
    {
      sectionId: "billing-qual",
      sectionTitle: "Billing Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "billing-questions",
          questions: [
            {
              id: "bill_01",
              questionText: "How do you manage your billing process today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Billing Workflow",
                  question: "What are the key components of a billing workflow?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to describe our billing process?"
                },
                {
                  text: "Best Practices",
                  question: "What are billing management best practices?"
                }
              ]
            },
            {
              id: "bill_02",
              questionText: "Do you have a need for recurring billing?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Recurring Billing",
                  question: "What are the benefits of recurring billing?"
                },
                {
                  text: "Subscription Models",
                  question: "How do subscription billing models work?"
                }
              ]
            },
            {
              id: "bill_03",
              questionText: "Do you have a need for usage-based billing?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Usage-Based Billing",
                  question: "What is usage-based or metered billing?"
                },
                {
                  text: "Pricing Models",
                  question: "What are common usage-based pricing models?"
                }
              ]
            },
            {
              id: "bill_04",
              questionText: "Do you have a need for milestone billing?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Milestone Billing",
                  question: "How does milestone-based billing work?"
                },
                {
                  text: "Project Milestones",
                  question: "What are best practices for defining billing milestones?"
                }
              ]
            },
            {
              id: "bill_05",
              questionText: "Do you have a need for project-based billing?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Project Billing",
                  question: "What are different project billing methods?"
                },
                {
                  text: "Fixed vs T&M",
                  question: "When should I use fixed-fee vs time & materials billing?"
                }
              ]
            },
            {
              id: "bill_06",
              questionText: "What system are you using today for billing?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Billing Platforms",
                  question: "What are popular billing management platforms?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are common reasons companies switch billing systems?"
                },
                {
                  text: "System Comparison",
                  question: "How do different billing systems compare?"
                }
              ]
            },
            {
              id: "bill_07",
              questionText: "What are your biggest challenges with your current billing process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical billing pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our billing challenges?"
                },
                {
                  text: "Revenue Leakage",
                  question: "How can billing issues cause revenue leakage?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}