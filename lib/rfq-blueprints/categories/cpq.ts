import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const cpqBlueprint: RfqFormBlueprint = {
  formTitle: "Configure, Price, Quote (CPQ)",
  formId: "cpq-v1",
  sections: [
    {
      sectionId: "cpq-qual",
      sectionTitle: "Configure, Price, Quote Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "cpq-questions-configure",
          listTitle: "CONFIGURE",
          questions: [
            {
              id: "cpq_conf_01",
              questionText: "How do you configure your products or services today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Configuration Process",
                  question: "What are the key elements of a product configuration process?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to describe our configuration process?"
                },
                {
                  text: "Complex Products",
                  question: "How do companies handle complex product configurations?"
                }
              ]
            },
            {
              id: "cpq_conf_02",
              questionText: "Do you have a need for guided selling?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Guided Selling",
                  question: "What is guided selling and how does it improve sales?"
                },
                {
                  text: "Benefits",
                  question: "What are the benefits of guided selling in CPQ?"
                }
              ]
            },
            {
              id: "cpq_conf_03",
              questionText: "Do you have a need for product bundling?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Product Bundling",
                  question: "What are effective product bundling strategies?"
                },
                {
                  text: "Bundle Types",
                  question: "What types of product bundles are commonly used?"
                }
              ]
            },
            {
              id: "cpq_conf_04",
              questionText: "Do you have a need for product recommendations?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Recommendation Engine",
                  question: "How do product recommendation engines work in CPQ?"
                },
                {
                  text: "Cross-sell/Upsell",
                  question: "How can recommendations drive cross-sell and upsell?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "cpq-questions-price",
          listTitle: "PRICE",
          questions: [
            {
              id: "cpq_price_01",
              questionText: "How do you price your products or services today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Pricing Strategies",
                  question: "What are common B2B pricing strategies?"
                },
                {
                  text: "Show Example",
                  question: "Can you help me describe our pricing approach?"
                },
                {
                  text: "Price Management",
                  question: "What are best practices for price management?"
                }
              ]
            },
            {
              id: "cpq_price_02",
              questionText: "Do you have a need for tiered pricing?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Tiered Pricing",
                  question: "How does tiered pricing work and when is it effective?"
                },
                {
                  text: "Tier Structure",
                  question: "What are common tier structures and breakpoints?"
                }
              ]
            },
            {
              id: "cpq_price_03",
              questionText: "Do you have a need for volume pricing?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Volume Discounts",
                  question: "How do volume-based pricing models work?"
                },
                {
                  text: "Discount Strategy",
                  question: "What are effective volume discount strategies?"
                }
              ]
            },
            {
              id: "cpq_price_04",
              questionText: "Do you have a need for subscription pricing?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Subscription Models",
                  question: "What are different subscription pricing models?"
                },
                {
                  text: "Recurring Revenue",
                  question: "How does subscription pricing support recurring revenue?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "cpq-questions-quote",
          listTitle: "QUOTE",
          questions: [
            {
              id: "cpq_quote_01",
              questionText: "How do you generate quotes today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Quote Process",
                  question: "What are the key steps in a quote generation process?"
                },
                {
                  text: "Show Example",
                  question: "Can you help me describe our quoting workflow?"
                },
                {
                  text: "Automation",
                  question: "How can quote generation be automated?"
                }
              ]
            },
            {
              id: "cpq_quote_02",
              questionText: "Do you have a need for quote templates?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Quote Templates",
                  question: "What are the benefits of using quote templates?"
                },
                {
                  text: "Template Design",
                  question: "What makes an effective quote template?"
                }
              ]
            },
            {
              id: "cpq_quote_03",
              questionText: "Do you have a need for e-signatures?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "E-Signatures",
                  question: "How do e-signatures accelerate the sales cycle?"
                },
                {
                  text: "Integration",
                  question: "How do e-signature platforms integrate with CPQ?"
                }
              ]
            },
            {
              id: "cpq_quote_04",
              questionText: "What system are you using today for CPQ?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "CPQ Platforms",
                  question: "What are popular CPQ software platforms?"
                },
                {
                  text: "Migration Reasons",
                  question: "Why do companies typically switch CPQ systems?"
                },
                {
                  text: "System Comparison",
                  question: "How do different CPQ platforms compare?"
                }
              ]
            },
            {
              id: "cpq_quote_05",
              questionText: "What are your biggest challenges with your current CPQ process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical CPQ pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our CPQ challenges?"
                },
                {
                  text: "Sales Efficiency",
                  question: "How do CPQ challenges impact sales efficiency?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}