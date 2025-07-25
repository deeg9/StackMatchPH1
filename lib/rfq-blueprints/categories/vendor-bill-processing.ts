import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const vendorBillProcessingBlueprint: RfqFormBlueprint = {
  formTitle: "Vendor Bill Processing",
  formId: "vendor-bill-processing-v1",
  sections: [
    {
      sectionId: "general-qual",
      sectionTitle: "General Process Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "general-questions",
          questions: [
            {
              id: "gq_vbp_01",
              questionText: "How many vendors do you have in your vendor network?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to categorize and count vendors in my network?"
                },
                {
                  text: "Vendor Segmentation",
                  question: "How should I segment vendors by type and volume?"
                }
              ]
            },
            {
              id: "gq_vbp_02",
              questionText: "Do you have international vendors? If so, what other currencies do you receive bills in?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Currency List",
                  question: "Can you help me list all currencies we process?"
                },
                {
                  text: "International AP",
                  question: "What are considerations for international vendor payments?"
                }
              ]
            },
            {
              id: "gq_vbp_03",
              questionText: "How many vendor bills do you receive on a monthly, quarterly, and annual basis?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Volume Calculation",
                  question: "How do I calculate our vendor bill volumes accurately?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to present bill volume metrics?"
                }
              ]
            },
            {
              id: "gq_vbp_04",
              questionText: "Are your bills always tied to Purchase Orders for goods or for services?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "PO vs Non-PO",
                  question: "Can you explain PO-based vs non-PO bill processing?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for PO matching?"
                }
              ]
            },
            {
              id: "gq_vbp_05",
              questionText: "If not, how many standalone bills do you process on a monthly, quarterly, and annual basis?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Standalone Bills",
                  question: "What types of bills typically don't require POs?"
                },
                {
                  text: "Volume Analysis",
                  question: "How should I analyze standalone bill volumes?"
                }
              ]
            },
            {
              id: "gq_vbp_06",
              questionText: "Do you receive bills for multiple subsidiaries? If so, do the expenses need to be distributed across subsidiaries?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Intercompany Billing",
                  question: "Can you explain intercompany bill processing?"
                },
                {
                  text: "Cost Allocation",
                  question: "What are methods for distributing expenses across subsidiaries?"
                }
              ]
            },
            {
              id: "gq_vbp_07",
              questionText: "How do you process your vendor bills today, and what systems are used to capture the data?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you help me describe our current AP process flow?"
                },
                {
                  text: "Common Systems",
                  question: "What are common AP processing systems and methods?"
                }
              ]
            },
            {
              id: "gq_vbp_08",
              questionText: "How many people and teams are involved in this process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Team Structure",
                  question: "Can you describe typical AP team structures?"
                },
                {
                  text: "Role Mapping",
                  question: "What roles are typically involved in bill processing?"
                }
              ]
            },
            {
              id: "gq_vbp_09",
              questionText: "Do you have an approval process in place for reviewing vendor bills? If so, what does that process look like?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Approval Workflows",
                  question: "Can you describe common vendor bill approval workflows?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for bill approval hierarchies?"
                }
              ]
            },
            {
              id: "gq_vbp_10",
              questionText: "What issues are you facing with your current process for vendor bills (e.g., billing errors, missing data)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Issues",
                  question: "What are typical vendor bill processing pain points?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me articulate our AP processing challenges?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "discovery-qual",
      sectionTitle: "Detailed Qualification",
      components: [
        {
          componentType: "QuestionList",
          id: "discovery-questions",
          questions: [
            {
              id: "dq_vbp_01",
              questionText: "Does the customer want to use Bill Capture for Canadian or International or foreign currency and taxes?",
              helpText: "English language and US/UK/AUS currency only are supported at this time.",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Bill Capture",
                  question: "What is bill capture technology and its limitations?"
                },
                {
                  text: "Currency Support",
                  question: "What currencies and regions are typically supported?"
                }
              ]
            },
            {
              id: "dq_vbp_02",
              questionText: "Does customer use Lot/Serial Number or Bins or Inventory Status with Standalone Vendor Bill items?",
              helpText: "A standalone bill means there is no associated Purchase Order.",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Inventory Tracking",
                  question: "Can you explain lot/serial tracking in AP context?"
                },
                {
                  text: "Standalone Bills",
                  question: "What are considerations for inventory items on standalone bills?"
                }
              ]
            },
            {
              id: "dq_vbp_03",
              questionText: "Does the customer purchase matrix items?",
              helpText: "Caution: Bill Capture may combine matrix line items on a bill into one single consolidated line.",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Matrix Items",
                  question: "What are matrix items and how do they affect bill processing?"
                },
                {
                  text: "Line Consolidation",
                  question: "What are the implications of line item consolidation?"
                }
              ]
            },
            {
              id: "dq_vbp_04",
              questionText: "Are you aware of the Bill Capture limitations?",
              helpText: "Limitations include: US, UK, and AUS only; English language only; customization is not supported on the Review Scanned Bill page; file size and page limits apply.",
              inputType: "radiogroup",
              options: ["Yes, we agree to these limitations.", "No, we do not agree to these limitations."],
              smartPrompts: [
                {
                  text: "Limitation Details",
                  question: "Can you explain common bill capture system limitations?"
                },
                {
                  text: "Workarounds",
                  question: "What alternatives exist for unsupported scenarios?"
                }
              ]
            },
            {
              id: "dq_vbp_05",
              questionText: "Does the customer want an approval workflow for vendor bills or email approval capability?",
              helpText: "If approvals are required, the customer must have an existing workflow.",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Approval Types",
                  question: "What are different vendor bill approval methods?"
                },
                {
                  text: "Workflow Design",
                  question: "How should I design an effective approval workflow?"
                }
              ]
            },
            {
              id: "dq_vbp_06",
              questionText: "Does the customer want to include three-way match?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Three-Way Match",
                  question: "Can you explain three-way matching in accounts payable?"
                },
                {
                  text: "Match Benefits",
                  question: "What are the benefits and challenges of three-way matching?"
                }
              ]
            },
            {
              id: "dq_vbp_07",
              questionText: "Does the customer need expense line distribution across subsidiaries?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Expense Distribution",
                  question: "How does cross-subsidiary expense distribution work?"
                },
                {
                  text: "Allocation Rules",
                  question: "What are common expense allocation methods?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}