import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const customerAccountManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Customer Account Management",
  formId: "customer-account-management-v2",
  sections: [
    {
      sectionId: "cam-qual",
      sectionTitle: "Customer Account Management Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "cam-questions",
          questions: [
            {
              id: "cam_01",
              questionText: "How many customer accounts do you currently have?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Account Metrics",
                  question: "How should I segment and count customer accounts?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to present customer account numbers?"
                }
              ]
            },
            {
              id: "cam_02",
              questionText: "What is your Average Order Value (AOV) and Customer Lifetime Value (LTV)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Calculate AOV/LTV",
                  question: "How do I calculate AOV and Customer Lifetime Value?"
                },
                {
                  text: "Industry Benchmarks",
                  question: "What are typical AOV and LTV benchmarks for our industry?"
                },
                {
                  text: "Improve Metrics",
                  question: "How can we improve our AOV and LTV?"
                }
              ]
            },
            {
              id: "cam_03",
              questionText: "Do you require customers to create an account to purchase?",
              inputType: "radiogroup",
              options: ["Yes, required", "Optional", "No, guest checkout only"],
              smartPrompts: [
                {
                  text: "Registration Strategy",
                  question: "What are the pros and cons of mandatory vs optional registration?"
                },
                {
                  text: "Guest Checkout Impact",
                  question: "How does guest checkout affect conversion rates?"
                }
              ]
            },
            {
              id: "cam_04",
              questionText: "What features do you want to offer in the customer account area?",
              helpText: "e.g., Order History, Order Tracking, Re-ordering, etc.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Essential Features",
                  question: "What are must-have customer account features?"
                },
                {
                  text: "Self-Service Options",
                  question: "What self-service capabilities should we offer?"
                },
                {
                  text: "Show Examples",
                  question: "Can you list comprehensive customer portal features?"
                }
              ]
            },
            {
              id: "cam_05",
              questionText: "Do you have a need for a customer portal or knowledge base?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Portal Benefits",
                  question: "What are the benefits of a customer portal?"
                },
                {
                  text: "Knowledge Base ROI",
                  question: "How does a knowledge base reduce support costs?"
                }
              ]
            },
            {
              id: "cam_06",
              questionText: "Do you have a need for a customer support ticketing system?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Ticketing Benefits",
                  question: "Why implement a customer ticketing system?"
                },
                {
                  text: "Support Options",
                  question: "What are different customer support system options?"
                }
              ]
            },
            {
              id: "cam_07",
              questionText: "What system are you using today for customer account management?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Platforms",
                  question: "What are popular customer account management platforms?"
                },
                {
                  text: "Migration Reasons",
                  question: "Why do companies switch customer management systems?"
                }
              ]
            },
            {
              id: "cam_08",
              questionText: "What eCommerce platform are you using today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Platform Integration",
                  question: "How do customer systems integrate with e-commerce platforms?"
                },
                {
                  text: "Platform Comparison",
                  question: "How do different e-commerce platforms handle customer accounts?"
                }
              ]
            },
            {
              id: "cam_09",
              questionText: "What are your biggest challenges with your current customer account management process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical customer account management pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our customer management challenges?"
                },
                {
                  text: "Customer Experience",
                  question: "How do account management issues impact customer experience?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}