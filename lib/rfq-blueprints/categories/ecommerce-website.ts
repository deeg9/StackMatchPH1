import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const ecommerceWebsiteBlueprint: RfqFormBlueprint = {
  formTitle: "E-commerce Website",
  formId: "ecommerce-website-v1",
  sections: [
    {
      sectionId: "ecomm-general",
      sectionTitle: "General",
      components: [
        {
          componentType: "QuestionList",
          id: "ecomm-general-questions",
          questions: [
            {
              id: "ecomm_gen_01",
              questionText: "What is your annual online revenue?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Revenue Calculation",
                  question: "How should I calculate our annual online revenue?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to present revenue figures?"
                }
              ]
            },
            {
              id: "ecomm_gen_02",
              questionText: "What is your Average Order Value (AOV)?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Calculate AOV",
                  question: "How do I calculate average order value?"
                },
                {
                  text: "AOV Benchmarks",
                  question: "What are typical AOV benchmarks by industry?"
                }
              ]
            },
            {
              id: "ecomm_gen_03",
              questionText: "What eCommerce platform are you using today?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Platform Options",
                  question: "What are popular e-commerce platforms?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are common reasons to switch e-commerce platforms?"
                }
              ]
            },
            {
              id: "ecomm_gen_04",
              questionText: "What are your biggest challenges with your current eCommerce website?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical e-commerce website pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our e-commerce challenges?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "ecomm-biz-model",
      sectionTitle: "Business Model",
      components: [
        {
          componentType: "QuestionList",
          id: "ecomm-biz-model-questions",
          questions: [
            {
              id: "ecomm_bm_01",
              questionText: "What is your business model?",
              inputType: "checkboxgroup",
              options: ["B2C (Business-to-Consumer)", "B2B (Business-to-Business)", "D2C (Direct-to-Consumer)", "Marketplace", "Subscription"],
              smartPrompts: [
                {
                  text: "Model Differences",
                  question: "What are the differences between B2B, B2C, and D2C?"
                },
                {
                  text: "Hybrid Models",
                  question: "Can I have multiple business models?"
                }
              ]
            },
            {
              id: "ecomm_bm_02",
              questionText: "Do you support alternate payment methods?",
              helpText: "e.g., Apple Pay, Google Pay, Buy Now Pay Later (Affirm, Klarna)",
              inputType: "checkboxgroup",
              options: ["Apple Pay", "Google Pay", "PayPal Express", "Buy Now, Pay Later"],
              smartPrompts: [
                {
                  text: "Payment Benefits",
                  question: "What are the benefits of alternative payment methods?"
                },
                {
                  text: "BNPL Options",
                  question: "How does Buy Now Pay Later work?"
                }
              ]
            },
            {
              id: "ecomm_bm_03",
              questionText: "Do you sell internationally?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Global Commerce",
                  question: "What considerations exist for international e-commerce?"
                },
                {
                  text: "Cross-Border",
                  question: "What are cross-border commerce requirements?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "ecomm-customer-accounts",
      sectionTitle: "Customer Accounts",
      components: [
        {
          componentType: "QuestionList",
          id: "ecomm-customer-accounts-questions",
          questions: [
            {
              id: "ecomm_ca_01",
              questionText: "Do you require customers to create an account to purchase?",
              inputType: "radiogroup",
              options: ["Yes, required", "Optional", "No, guest checkout only"],
              smartPrompts: [
                {
                  text: "Guest Checkout",
                  question: "What are the pros and cons of guest checkout?"
                },
                {
                  text: "Account Benefits",
                  question: "Why should customers create accounts?"
                }
              ]
            },
            {
              id: "ecomm_ca_02",
              questionText: "What features do you want to offer in the customer account area?",
              inputType: "checkboxgroup",
              options: ["Order History", "Order Tracking", "Re-ordering", "Saved Addresses", "Saved Payment Methods", "Wishlists"],
              smartPrompts: [
                {
                  text: "Portal Features",
                  question: "What are essential customer portal features?"
                },
                {
                  text: "Best Practices",
                  question: "What are customer account best practices?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "ecomm-merchandising",
      sectionTitle: "Merchandising",
      components: [
        {
          componentType: "QuestionList",
          id: "ecomm-merchandising-questions",
          questions: [
            {
              id: "ecomm_merch_01",
              questionText: "How many products (SKUs) do you have?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "SKU Count",
                  question: "How should I count our SKUs?"
                },
                {
                  text: "Catalog Size",
                  question: "What catalog size implications should I consider?"
                }
              ]
            },
            {
              id: "ecomm_merch_02",
              questionText: "What types of products do you sell?",
              inputType: "checkboxgroup",
              options: ["Simple Products", "Products with Variants (size, color)", "Bundled Products", "Subscription Products", "Digital/Downloadable Products"],
              smartPrompts: [
                {
                  text: "Product Types",
                  question: "Can you explain different product types?"
                },
                {
                  text: "Complexity",
                  question: "How does product complexity affect platform choice?"
                }
              ]
            },
            {
              id: "ecomm_merch_03",
              questionText: "Do you need faceted search or filtering?",
              helpText: "e.g., filter by price, color, size, etc.",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Faceted Search",
                  question: "What is faceted search and why is it important?"
                },
                {
                  text: "Filter Options",
                  question: "What filter options should we consider?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "ecomm-marketing",
      sectionTitle: "Marketing",
      components: [
        {
          componentType: "QuestionList",
          id: "ecomm-marketing-questions",
          questions: [
            {
              id: "ecomm_mktg_01",
              questionText: "How do you currently handle email marketing?",
              helpText: "e.g., Mailchimp, Klaviyo, etc.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Email Platforms",
                  question: "What are popular e-commerce email marketing platforms?"
                },
                {
                  text: "Automation",
                  question: "What email automation should e-commerce sites have?"
                }
              ]
            },
            {
              id: "ecomm_mktg_02",
              questionText: "Do you need to support promotions or discount codes?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Promotion Types",
                  question: "What types of promotions are effective?"
                },
                {
                  text: "Discount Strategy",
                  question: "What are best practices for discount strategies?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "ecomm-design",
      sectionTitle: "Design",
      components: [
        {
          componentType: "QuestionList",
          id: "ecomm-design-questions",
          questions: [
            {
              id: "ecomm_des_01",
              questionText: "Do you have an existing brand guide?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Brand Guide",
                  question: "What should a brand guide include?"
                },
                {
                  text: "Brand Consistency",
                  question: "Why is brand consistency important for e-commerce?"
                }
              ]
            },
            {
              id: "ecomm_des_02",
              questionText: "Are you looking for a pre-built theme or a custom design?",
              inputType: "radiogroup",
              options: ["Pre-built Theme", "Custom Design"],
              smartPrompts: [
                {
                  text: "Theme vs Custom",
                  question: "What are the trade-offs between themes and custom design?"
                },
                {
                  text: "Cost Comparison",
                  question: "How do costs compare between themes and custom design?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "ecomm-technical",
      sectionTitle: "Technical",
      components: [
        {
          componentType: "QuestionList",
          id: "ecomm-technical-questions",
          questions: [
            {
              id: "ecomm_tech_01",
              questionText: "What systems do you need to integrate your eCommerce store with?",
              helpText: "e.g., ERP, CRM, Inventory Management, Shipping Provider APIs",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Integrations",
                  question: "What are essential e-commerce integrations?"
                },
                {
                  text: "Integration Examples",
                  question: "Can you provide examples of e-commerce integrations?"
                }
              ]
            },
            {
              id: "ecomm_tech_02",
              questionText: "Do you have any specific performance or security requirements?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Performance Metrics",
                  question: "What performance metrics matter for e-commerce?"
                },
                {
                  text: "Security Standards",
                  question: "What security standards apply to e-commerce?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "ecomm-checkout",
      sectionTitle: "Checkout",
      components: [
        {
          componentType: "QuestionList",
          id: "ecomm-checkout-questions",
          questions: [
            {
              id: "ecomm_co_01",
              questionText: "What payment gateways do you need to integrate with?",
              helpText: "e.g., Stripe, PayPal, Authorize.net",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Gateway Options",
                  question: "What are popular payment gateway options?"
                },
                {
                  text: "Gateway Comparison",
                  question: "How do different payment gateways compare?"
                }
              ]
            },
            {
              id: "ecomm_co_02",
              questionText: "Do you need to support any special checkout features?",
              helpText: "e.g., one-page checkout, address validation, gift cards",
              inputType: "checkboxgroup",
              options: ["One-Page Checkout", "Address Validation", "Gift Cards", "Store Credit", "Multiple Shipping Addresses"],
              smartPrompts: [
                {
                  text: "Checkout Optimization",
                  question: "What checkout features improve conversion?"
                },
                {
                  text: "Reduce Cart Abandonment",
                  question: "How can checkout features reduce cart abandonment?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}