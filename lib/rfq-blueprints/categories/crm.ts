import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const crmBlueprint: RfqFormBlueprint = {
  formTitle: "Customer Relationship Management (CRM)",
  formId: "crm-v1",
  sections: [
    {
      sectionId: "crm-needs-features",
      sectionTitle: "Needs Assessment & Feature Alignment",
      components: [
        {
          componentType: "QuestionList",
          id: "crm-needs-questions",
          questions: [
            {
              id: "crm_needs_01",
              questionText: "What are the specific business needs and pain points that this CRM needs to address?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common CRM Pain Points",
                  question: "What are typical business challenges that CRM systems solve?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to describe our CRM needs and pain points?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me better articulate our CRM requirements?"
                }
              ]
            },
            {
              id: "crm_needs_02",
              questionText: "Which core features are essential for your teams?",
              inputType: "checkboxgroup",
              options: ["Sales Force Automation (SFA)", "Marketing Automation", "Customer Service & Support", "Analytics & Reporting"],
              smartPrompts: [
                {
                  text: "Feature Comparison",
                  question: "What's the difference between these CRM features?"
                },
                {
                  text: "Best for My Industry",
                  question: "Which CRM features are most important for my industry?"
                }
              ]
            },
            {
              id: "crm_needs_03",
              questionText: "Can you describe the volume of customer data you need to manage (e.g., number of contacts, accounts, and interactions per month)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Data Volume Metrics",
                  question: "What metrics should I include when describing data volume?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to quantify our customer data requirements?"
                }
              ]
            },
            {
              id: "crm_needs_04",
              questionText: "Please describe the key stages of your sales process, from lead generation to closing a deal.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Sales Process Stages",
                  question: "What are typical stages in a B2B sales process?"
                },
                {
                  text: "Show Example",
                  question: "Can you provide an example of a well-defined sales process?"
                },
                {
                  text: "Industry Best Practices",
                  question: "What are sales process best practices for my industry?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "crm-integration-scalability",
      sectionTitle: "Integration & Scalability",
      components: [
        {
          componentType: "QuestionList",
          id: "crm-integration-questions",
          questions: [
            {
              id: "crm_int_01",
              questionText: "What existing applications and data sources must the CRM integrate with?",
              helpText: "e.g., ERP, accounting software, email marketing platforms, data warehouses.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Integrations",
                  question: "What are the most common CRM integrations?"
                },
                {
                  text: "Integration Types",
                  question: "What types of integrations should I consider?"
                },
                {
                  text: "Show Example",
                  question: "Can you help me list our integration requirements?"
                }
              ]
            },
            {
              id: "crm_int_02",
              questionText: "Does the solution need to provide a centralized platform for managing customer inquiries and support tickets across various channels (e.g., email, phone, social media, chat)?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Omnichannel Support",
                  question: "What is omnichannel customer support and why is it important?"
                },
                {
                  text: "Channel Integration",
                  question: "How do CRMs integrate different communication channels?"
                }
              ]
            },
            {
              id: "crm_int_03",
              questionText: "Do you require the ability to customize or extend the CRM to fit specific workflows?",
              helpText: "This may involve custom objects, fields, or process automation.",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "CRM Customization",
                  question: "What types of CRM customizations are typically available?"
                },
                {
                  text: "Low-Code vs Code",
                  question: "What's the difference between low-code and code-based customization?"
                }
              ]
            },
            {
              id: "crm_int_04",
              questionText: "How many users will need access to the CRM initially, and what is the anticipated growth in users over the next 3-5 years?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "User Planning",
                  question: "How should I estimate user growth for CRM planning?"
                },
                {
                  text: "License Types",
                  question: "What different user license types do CRMs typically offer?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to describe user requirements and growth?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "crm-security-compliance",
      sectionTitle: "Data Security & Compliance",
      components: [
        {
          componentType: "QuestionList",
          id: "crm-security-questions",
          questions: [
            {
              id: "crm_sec_01",
              questionText: "What specific security measures are required to protect your customer data?",
              inputType: "checkboxgroup",
              options: ["End-to-end Encryption", "Role-based Access Controls", "Multi-factor Authentication", "Regular Security Audits"],
              smartPrompts: [
                {
                  text: "Security Best Practices",
                  question: "What are CRM security best practices?"
                },
                {
                  text: "Data Protection",
                  question: "How do modern CRMs protect customer data?"
                }
              ]
            },
            {
              id: "crm_sec_02",
              questionText: "Do you need to comply with specific industry standards or regulations?",
              inputType: "checkboxgroup",
              options: ["GDPR", "CCPA", "HIPAA", "Other"],
              smartPrompts: [
                {
                  text: "Compliance Requirements",
                  question: "What do these compliance standards require for CRM systems?"
                },
                {
                  text: "Industry Regulations",
                  question: "What regulations apply to CRMs in my industry?"
                }
              ]
            },
            {
              id: "crm_sec_03",
              questionText: "Are there any requirements regarding the geographic location where your data is stored?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Data Residency",
                  question: "What is data residency and why does it matter?"
                },
                {
                  text: "Geographic Compliance",
                  question: "What are common data location requirements by region?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "crm-cost-roi",
      sectionTitle: "Total Cost of Ownership & ROI",
      components: [
        {
          componentType: "QuestionList",
          id: "crm-cost-questions",
          questions: [
            {
              id: "crm_cost_01",
              questionText: "What is your estimated total budget for this project, including implementation, licensing, and training?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Budget Components",
                  question: "What cost components should I include in a CRM budget?"
                },
                {
                  text: "TCO Calculation",
                  question: "How do I calculate total cost of ownership for a CRM?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me a typical CRM budget breakdown?"
                }
              ]
            },
            {
              id: "crm_cost_02",
              questionText: "What are the key metrics you will use to measure the Return on Investment (ROI) of this CRM?",
              helpText: "e.g., increase in sales revenue, improvement in customer retention, reduction in operational costs.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "CRM ROI Metrics",
                  question: "What are common CRM ROI metrics and how are they measured?"
                },
                {
                  text: "KPI Examples",
                  question: "Can you provide examples of CRM success KPIs?"
                },
                {
                  text: "Industry Benchmarks",
                  question: "What ROI should I expect from a CRM in my industry?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "crm-vendor-support",
      sectionTitle: "Vendor Reputation & Support",
      components: [
        {
          componentType: "QuestionList",
          id: "crm-vendor-questions",
          questions: [
            {
              id: "crm_vend_01",
              questionText: "What level of customer support is required?",
              inputType: "checkboxgroup",
              options: ["24/7 Phone Support", "Dedicated Account Manager", "Email/Ticket Support", "Extensive Knowledge Base"],
              smartPrompts: [
                {
                  text: "Support Levels",
                  question: "What are typical CRM vendor support levels?"
                },
                {
                  text: "Support Importance",
                  question: "How important is vendor support for CRM success?"
                }
              ]
            },
            {
              id: "crm_vend_02",
              questionText: "What are your requirements for user training and onboarding?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Training Options",
                  question: "What CRM training options are typically available?"
                },
                {
                  text: "Onboarding Best Practices",
                  question: "What are CRM onboarding best practices?"
                },
                {
                  text: "Show Example",
                  question: "Can you help me describe our training requirements?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "crm-ux-adoption",
      sectionTitle: "User Experience & Adoption",
      components: [
        {
          componentType: "QuestionList",
          id: "crm-ux-questions",
          questions: [
            {
              id: "crm_ux_01",
              questionText: "Do your sales and service teams require mobile access to the CRM?",
              inputType: "radiogroup",
              options: ["Yes, full functionality is required", "Yes, but only for key features", "No"],
              smartPrompts: [
                {
                  text: "Mobile CRM Benefits",
                  question: "What are the benefits of mobile CRM access?"
                },
                {
                  text: "Mobile Features",
                  question: "What CRM features are most important on mobile?"
                }
              ]
            },
            {
              id: "crm_ux_02",
              questionText: "Describe the key reports and dashboard widgets that different departments will need to see.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "CRM Dashboards",
                  question: "What are typical CRM dashboard components by department?"
                },
                {
                  text: "Reporting Examples",
                  question: "Can you provide examples of useful CRM reports?"
                },
                {
                  text: "Metrics by Role",
                  question: "What metrics should different roles track in a CRM?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "crm-ai-automation",
      sectionTitle: "AI & Automation Capabilities",
      components: [
        {
          componentType: "QuestionList",
          id: "crm-ai-questions",
          questions: [
            {
              id: "crm_ai_01",
              questionText: "What specific AI and automation capabilities are you looking for?",
              inputType: "checkboxgroup",
              options: ["Automated Lead Scoring", "Sales Forecasting", "AI-powered Chatbots for Service", "Sentiment Analysis", "Personalization Engines"],
              smartPrompts: [
                {
                  text: "AI in CRM",
                  question: "How does AI enhance CRM capabilities?"
                },
                {
                  text: "Automation Benefits",
                  question: "What are the benefits of CRM automation?"
                },
                {
                  text: "Implementation Priority",
                  question: "Which AI features should I prioritize for my use case?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}