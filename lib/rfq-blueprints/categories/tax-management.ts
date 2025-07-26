import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const taxManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Tax Management",
  formId: "tax-management-v1",
  sections: [
    {
      sectionId: "general-qual",
      sectionTitle: "General Tax Profile",
      components: [
        {
          componentType: "QuestionList",
          id: "general-questions",
          questions: [
            {
              id: "gq_tm_01",
              questionText: "Do you have a dedicated tax manager or tax team?",
              helpText: "If so, how many people are on the team?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me how to describe a tax team structure?"
                },
                {
                  text: "Tax Roles",
                  question: "What are typical roles in a corporate tax department?"
                }
              ]
            },
            {
              id: "gq_tm_02",
              questionText: "What system are you currently using for tax management and what is causing you to look for a different solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Systems",
                  question: "What are popular tax management systems and their features?"
                },
                {
                  text: "Pain Points",
                  question: "What are common reasons companies switch tax systems?"
                }
              ]
            },
            {
              id: "gq_tm_03",
              questionText: "Are you currently required to pay taxes in multiple states/provinces or multiple countries?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Multi-Jurisdiction",
                  question: "Can you explain multi-jurisdiction tax compliance challenges?"
                },
                {
                  text: "Nexus Rules",
                  question: "What are tax nexus rules and how do they apply?"
                }
              ]
            },
            {
              id: "gq_tm_04",
              questionText: "Are all your products/services taxed at the same rate?",
              helpText: "If no, please provide details.",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Tax Categories",
                  question: "Can you explain different product/service tax categories?"
                },
                {
                  text: "Rate Variations",
                  question: "What causes tax rate variations across products/services?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "sales-use-tax",
      sectionTitle: "Sales & Use Tax",
      components: [
        {
          componentType: "QuestionList",
          id: "sales-use-tax-questions",
          questions: [
            {
              id: "sut_tm_01",
              questionText: "Do you need to calculate real-time sales tax on sales transactions?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Real-Time Tax",
                  question: "What is real-time tax calculation and why is it important?"
                },
                {
                  text: "Tax Engines",
                  question: "How do real-time tax calculation engines work?"
                }
              ]
            },
            {
              id: "sut_tm_02",
              questionText: "Do you have a need to calculate and accrue for Use Tax on vendor bills?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Use Tax Explained",
                  question: "Can you explain use tax and when it applies?"
                },
                {
                  text: "Accrual Process",
                  question: "How should companies handle use tax accruals?"
                }
              ]
            },
            {
              id: "sut_tm_03",
              questionText: "Do you need to manage customer tax exemption certificates?",
              helpText: "If so, what is the volume?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Exemption Certificates",
                  question: "What are tax exemption certificates and how are they managed?"
                },
                {
                  text: "Compliance Requirements",
                  question: "What are the compliance requirements for exemption certificates?"
                }
              ]
            },
            {
              id: "sut_tm_04",
              questionText: "Do you file your own tax returns, or do you have a 3rd party that does this for you?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Filing Options",
                  question: "What are the pros and cons of in-house vs outsourced tax filing?"
                },
                {
                  text: "Return Preparation",
                  question: "What's involved in sales tax return preparation?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "vat-gst-intl",
      sectionTitle: "VAT/GST & International Tax",
      components: [
        {
          componentType: "QuestionList",
          id: "vat-gst-intl-questions",
          questions: [
            {
              id: "vgi_tm_01",
              questionText: "Do you have requirements to manage and report on VAT/GST?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "VAT vs GST",
                  question: "Can you explain the difference between VAT and GST?"
                },
                {
                  text: "Reporting Requirements",
                  question: "What are typical VAT/GST reporting requirements?"
                }
              ]
            },
            {
              id: "vgi_tm_02",
              questionText: "Does your business operate in countries that have specific, local tax reporting requirements?",
              helpText: "If so, what are they?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Country Examples",
                  question: "Can you provide examples of country-specific tax reporting?"
                },
                {
                  text: "Localization Needs",
                  question: "What are common tax localization requirements?"
                }
              ]
            },
            {
              id: "vgi_tm_03",
              questionText: "Do you operate in any countries that require an audit file to be produced in a specific format?",
              helpText: "If so, what are they?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Audit File Formats",
                  question: "What are common tax audit file formats (SAF-T, etc.)?"
                },
                {
                  text: "Compliance Standards",
                  question: "Which countries require specific audit file formats?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "reporting-1099",
      sectionTitle: "1099 & Reporting",
      components: [
        {
          componentType: "QuestionList",
          id: "reporting-1099-questions",
          questions: [
            {
              id: "r1099_tm_01",
              questionText: "Do you have a requirement to track and report on 1099s for your vendors?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "1099 Requirements",
                  question: "What are 1099 reporting requirements and thresholds?"
                },
                {
                  text: "Vendor Tracking",
                  question: "How should companies track vendor payments for 1099 reporting?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}