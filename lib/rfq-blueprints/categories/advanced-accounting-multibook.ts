import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const advancedAccountingMultibookBlueprint: RfqFormBlueprint = {
  formTitle: "Advanced Accounting & Multi-Book",
  formId: "multi-book-accounting-advanced-v1",
  sections: [
    {
      sectionId: "advanced-acct-qual",
      sectionTitle: "Advanced Accounting Processes",
      components: [
        {
          componentType: "QuestionList",
          id: "advanced-acct-questions",
          questions: [
            {
              id: "aa_01",
              questionText: "How do you currently perform financial consolidation across all your subsidiaries?",
              helpText: "Describe the process for combining financial data from your separate legal entities into a single report for the parent company.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Consolidation Process",
                  question: "What are the key steps in financial consolidation?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to describe our consolidation process?"
                },
                {
                  text: "Best Practices",
                  question: "What are financial consolidation best practices?"
                }
              ]
            },
            {
              id: "aa_02",
              questionText: "Do you have intercompany transactions that need to be tracked and eliminated during consolidation?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Intercompany Elimination",
                  question: "What is intercompany elimination and why is it important?"
                },
                {
                  text: "Common Transactions",
                  question: "What are typical intercompany transactions?"
                }
              ]
            },
            {
              id: "aa_03",
              questionText: "Can you describe your revenue streams? Do you have complex revenue recognition requirements?",
              helpText: "For example: subscriptions, usage-based billing, milestone billing, or compliance with ASC 606 / IFRS 15.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Revenue Recognition",
                  question: "What are the key principles of ASC 606 / IFRS 15?"
                },
                {
                  text: "Complex Revenue",
                  question: "What makes revenue recognition complex?"
                },
                {
                  text: "Show Examples",
                  question: "Can you provide examples of complex revenue streams?"
                }
              ]
            },
            {
              id: "aa_04",
              questionText: "Do you need to allocate shared expenses or revenues across different subsidiaries, departments, or other segments?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Allocation Methods",
                  question: "What are common cost and revenue allocation methods?"
                },
                {
                  text: "Transfer Pricing",
                  question: "How does transfer pricing work between entities?"
                }
              ]
            },
            {
              id: "aa_05",
              questionText: "What kind of real-time dashboards and financial reporting capabilities are available for different user roles?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Dashboard Examples",
                  question: "What financial dashboards should different roles have access to?"
                },
                {
                  text: "Real-time Reporting",
                  question: "What are the benefits of real-time financial reporting?"
                },
                {
                  text: "Role-based Access",
                  question: "How should financial data access be structured by role?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "multibook-qual",
      sectionTitle: "Multi-Book & Subsidiary Structure",
      components: [
        {
          componentType: "QuestionList",
          id: "multibook-questions",
          questions: [
            {
              id: "mb_01",
              questionText: "Do you have international expansion plans for a new country outside of your current regions?",
              helpText: "If yes, which country/countries are you expanding into?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "International Expansion",
                  question: "What accounting considerations exist for international expansion?"
                },
                {
                  text: "Country Setup",
                  question: "What's needed to set up accounting in a new country?"
                }
              ]
            },
            {
              id: "mb_02",
              questionText: "What will be the functional currency required for any new subsidiary to be set up in a new country?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Functional Currency",
                  question: "How do I determine the functional currency for a subsidiary?"
                },
                {
                  text: "Currency Impact",
                  question: "What's the impact of functional currency selection?"
                }
              ]
            },
            {
              id: "mb_03",
              questionText: "Do any of your subsidiaries have local statutory reporting needs in a different currency from their functional currency?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Statutory Reporting",
                  question: "What is statutory reporting and how does it differ from management reporting?"
                },
                {
                  text: "Multi-Currency",
                  question: "How do we handle reporting in multiple currencies?"
                }
              ]
            },
            {
              id: "mb_04",
              questionText: "Is the system scalable to accommodate future growth in transaction volume, users, and additional legal entities?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Scalability Factors",
                  question: "What scalability factors should we consider for accounting systems?"
                },
                {
                  text: "Growth Planning",
                  question: "How do we plan for accounting system scalability?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "compliance-security",
      sectionTitle: "Compliance & Security",
      components: [
        {
          componentType: "QuestionList",
          id: "compliance-questions",
          questions: [
            {
              id: "comp_01",
              questionText: "Which of the following compliance or regulatory standards are a requirement for your business?",
              helpText: "Select all that apply.",
              inputType: "checkboxgroup",
              options: ["SOX (Sarbanes-Oxley)", "ASC 606 / IFRS 15", "DCAA (Defense Contract Audit Agency)", "HIPAA", "PCI DSS"],
              smartPrompts: [
                {
                  text: "Compliance Overview",
                  question: "Can you explain these different compliance standards?"
                },
                {
                  text: "SOX Requirements",
                  question: "What are the key SOX compliance requirements?"
                },
                {
                  text: "Industry Standards",
                  question: "Which compliance standards apply to our industry?"
                }
              ]
            },
            {
              id: "comp_02",
              questionText: "How is the software kept up-to-date with changing tax laws and accounting regulations?",
              helpText: "e.g., automated tax table updates, regulatory reporting format changes.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Tax Updates",
                  question: "How do accounting systems handle tax law changes?"
                },
                {
                  text: "Regulatory Changes",
                  question: "What regulatory updates should accounting software provide?"
                },
                {
                  text: "Update Frequency",
                  question: "How often should tax and regulatory updates occur?"
                }
              ]
            },
            {
              id: "comp_03",
              questionText: "What data security, encryption, and access control measures are in place to protect sensitive financial data?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Security Best Practices",
                  question: "What are financial data security best practices?"
                },
                {
                  text: "Encryption Standards",
                  question: "What encryption standards should financial systems use?"
                },
                {
                  text: "Access Controls",
                  question: "How should access controls be structured for financial data?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "vendor-implementation",
      sectionTitle: "Vendor, Pricing & Implementation",
      components: [
        {
          componentType: "QuestionList",
          id: "vendor-questions",
          questions: [
            {
              id: "vend_01",
              questionText: "Does the software offer features or pre-configured modules specific to our industry?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Industry Features",
                  question: "What industry-specific accounting features should I look for?"
                },
                {
                  text: "Pre-configured Benefits",
                  question: "What are the benefits of industry-specific configurations?"
                }
              ]
            },
            {
              id: "vend_02",
              questionText: "Describe the pricing model for your software.",
              helpText: "e.g., per-user fees, tiered pricing, transaction-based fees, included support.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Pricing Models",
                  question: "What are common accounting software pricing models?"
                },
                {
                  text: "TCO Calculation",
                  question: "How do I calculate total cost of ownership?"
                },
                {
                  text: "Hidden Costs",
                  question: "What hidden costs should I look for in pricing?"
                }
              ]
            },
            {
              id: "vend_03",
              questionText: "What level of customer support and training resources are available for our team?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Support Options",
                  question: "What support levels should accounting software vendors offer?"
                },
                {
                  text: "Training Programs",
                  question: "What training options are typically available?"
                },
                {
                  text: "Implementation Support",
                  question: "What implementation support should we expect?"
                }
              ]
            },
            {
              id: "vend_04",
              questionText: "Describe how your solution can provide strategic insights to help us achieve our growth and profitability goals.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Strategic Analytics",
                  question: "What strategic insights can advanced accounting systems provide?"
                },
                {
                  text: "Growth Metrics",
                  question: "What metrics help track growth and profitability?"
                },
                {
                  text: "Predictive Features",
                  question: "How can accounting systems support predictive analysis?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}