import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const procurementManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Procurement Management",
  formId: "procurement-management-v1",
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
              id: "sq_pm_01",
              questionText: "Are you currently using any of our platform's procurement functionality?",
              helpText: "Example: purchase orders, vendor records, vendor bills, etc.? If yes, what?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Procurement Features",
                  question: "Can you explain common procurement platform features and their uses?"
                },
                {
                  text: "Feature Examples",
                  question: "What are examples of procurement functionality I should consider?"
                }
              ]
            },
            {
              id: "sq_pm_02",
              questionText: "If you are NOT using our platform for procurement, what system are you using and can you describe your process today?",
              helpText: "Caution: They may be looking to explore core procurement features instead of the advanced features. It is important to understand their procurement process to know what to position.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to describe a typical procurement process?"
                },
                {
                  text: "Common Systems",
                  question: "What are common procurement systems used by organizations?"
                }
              ]
            },
            {
              id: "sq_pm_03",
              questionText: "Do you send RFQs (request for quote) when selecting a vendor?",
              helpText: "If so, can you describe how you're doing that today?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "What is RFQ?",
                  question: "Can you explain the RFQ process and its importance in procurement?"
                },
                {
                  text: "RFQ Best Practices",
                  question: "What are best practices for managing vendor RFQs?"
                }
              ]
            },
            {
              id: "sq_pm_04",
              questionText: "Do you have purchase/vendor contracts with your vendors today?",
              helpText: "If so, how do you ensure you are getting the pricing from those contracts?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Contract Management",
                  question: "Can you explain vendor contract management and price enforcement?"
                },
                {
                  text: "Price Compliance",
                  question: "What are methods to ensure contract pricing compliance?"
                }
              ]
            },
            {
              id: "sq_pm_05",
              questionText: "Do you ever use blanket POs?",
              helpText: "Example: Customer orders paper on a monthly basis and the PO will be automatically created for them.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "What are Blanket POs?",
                  question: "Can you explain blanket purchase orders and when they're used?"
                },
                {
                  text: "Show Example",
                  question: "Can you provide examples of blanket PO use cases?"
                }
              ]
            },
            {
              id: "sq_pm_06",
              questionText: "Do your employees need to submit a purchase request and/or purchase orders for items like office supplies or laptops?",
              helpText: "Example: A hiring manager needing to order a new laptop and supplies for a new hire employee.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Requisition Process",
                  question: "Can you describe a typical purchase requisition workflow?"
                },
                {
                  text: "Internal Purchasing",
                  question: "What are best practices for internal purchasing processes?"
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
          content: "This section will help us understand the details of your procurement processes."
        },
        {
          componentType: "QuestionList",
          id: "sc-questions-rfq",
          questions: [
            {
              id: "scq_pm_rfq_01",
              questionText: "What details should your vendors provide during the RFQ process?",
              helpText: "Example: quantity discounts, pricing tables, payment terms, etc.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "RFQ Requirements",
                  question: "What information should vendors typically include in RFQ responses?"
                },
                {
                  text: "Pricing Structures",
                  question: "Can you explain different vendor pricing structures and discounts?"
                }
              ]
            },
            {
              id: "scq_pm_rfq_02",
              questionText: "How many vendors are involved in a typical RFQ process, and how are you tracking their responses?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Vendor Management",
                  question: "What are best practices for managing multiple vendor RFQ responses?"
                },
                {
                  text: "Tracking Methods",
                  question: "How do organizations typically track and compare RFQ responses?"
                }
              ]
            },
            {
              id: "scq_pm_rfq_03",
              questionText: "Do you (re)negotiate with the vendors after they have responded to the initial RFQ? Where is this done?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Negotiation Process",
                  question: "Can you describe the vendor negotiation process after RFQ responses?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for vendor negotiations?"
                }
              ]
            },
            {
              id: "scq_pm_rfq_04",
              questionText: "How do you measure and compare the value you're getting from each vendor response?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Vendor Evaluation",
                  question: "What criteria should be used to evaluate vendor proposals?"
                },
                {
                  text: "Scoring Methods",
                  question: "Can you explain vendor scoring and comparison methodologies?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "sc-questions-contracts",
          questions: [
            {
              id: "scq_pm_contracts_01",
              questionText: "Once you negotiate and choose a vendor, how are purchase contracts made and where are they kept?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Contract Creation",
                  question: "Can you describe the vendor contract creation process?"
                },
                {
                  text: "Contract Storage",
                  question: "What are best practices for storing and managing vendor contracts?"
                }
              ]
            },
            {
              id: "scq_pm_contracts_02",
              questionText: "How are these purchase contract terms leveraged within your procurement process to ensure you get contracted rates?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Rate Enforcement",
                  question: "How do organizations ensure contract pricing compliance?"
                },
                {
                  text: "System Integration",
                  question: "How can procurement systems enforce contract terms automatically?"
                }
              ]
            },
            {
              id: "scq_pm_contracts_03",
              questionText: "Do you have visibility into what's been purchased, received, or billed under each contract?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Contract Analytics",
                  question: "What contract performance metrics should be tracked?"
                },
                {
                  text: "Visibility Tools",
                  question: "What tools provide contract utilization visibility?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "sc-questions-requisitions",
          questions: [
            {
              id: "scq_pm_req_01",
              questionText: "If an employee needed to purchase an item internally (e.g., a laptop), how would they go about doing that?",
              helpText: "How often does this happen and how long does the process take?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you describe a typical employee purchase request workflow?"
                },
                {
                  text: "Process Time",
                  question: "What are typical timeframes for internal purchase requests?"
                }
              ]
            },
            {
              id: "scq_pm_req_02",
              questionText: "What is your approval process for these purchase requisitions?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Approval Workflows",
                  question: "Can you explain common purchase approval workflows and hierarchies?"
                },
                {
                  text: "Approval Rules",
                  question: "What are typical approval rules and thresholds?"
                }
              ]
            },
            {
              id: "scq_pm_req_03",
              questionText: "Is your purchasing centralized into a single department or team?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Centralized vs Decentralized",
                  question: "Can you explain centralized vs decentralized purchasing models?"
                },
                {
                  text: "Best Practices",
                  question: "What are the pros and cons of different purchasing structures?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "sc-questions-blanket-po",
          questions: [
            {
              id: "scq_pm_bpo_01",
              questionText: "Are there items where you make reoccurring purchases on a regular cadence? If so, how are you initiating those POs today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Recurring Purchases",
                  question: "Can you provide examples of items suitable for recurring purchase orders?"
                },
                {
                  text: "Automation Options",
                  question: "How can recurring purchases be automated?"
                }
              ]
            },
            {
              id: "scq_pm_bpo_02",
              questionText: "How often are you over-ordering or under-ordering any of these recurring items?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Inventory Management",
                  question: "How do you optimize recurring order quantities?"
                },
                {
                  text: "Demand Planning",
                  question: "What methods help prevent over/under ordering?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}