import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const demandPlanningBlueprint: RfqFormBlueprint = {
  formTitle: "Demand Planning",
  formId: "demand-planning-v1",
  sections: [
    {
      sectionId: "dp-qual",
      sectionTitle: "Demand Planning Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "dp-questions",
          questions: [
            {
              id: "dp_01",
              questionText: "How do you forecast demand today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Forecasting Methods",
                  question: "What are common demand forecasting methods I should consider?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me describe our current demand forecasting process?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me an example of how to describe demand forecasting methods?"
                }
              ]
            },
            {
              id: "dp_02",
              questionText: "How often do you forecast demand?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Forecast Frequency",
                  question: "What are typical demand forecasting frequencies by industry?"
                },
                {
                  text: "Best Practices",
                  question: "What's the recommended frequency for demand forecasting?"
                }
              ]
            },
            {
              id: "dp_03",
              questionText: "Do you have seasonal items?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Seasonal Planning",
                  question: "How should seasonal demand be factored into planning?"
                },
                {
                  text: "Seasonality Examples",
                  question: "What are examples of seasonal demand patterns?"
                }
              ]
            },
            {
              id: "dp_04",
              questionText: "Do you have items with a short shelf life?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Perishable Planning",
                  question: "How does short shelf life impact demand planning?"
                },
                {
                  text: "Inventory Strategies",
                  question: "What strategies help manage perishable inventory?"
                }
              ]
            },
            {
              id: "dp_05",
              questionText: "How do you plan for new product introductions?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Product Launch Planning",
                  question: "What are best practices for forecasting new product demand?"
                },
                {
                  text: "Show Example",
                  question: "Can you provide an example of new product introduction planning?"
                },
                {
                  text: "NPI Process",
                  question: "What's a typical new product introduction (NPI) process?"
                }
              ]
            },
            {
              id: "dp_06",
              questionText: "What system are you using today for demand planning?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Systems",
                  question: "What are popular demand planning software solutions?"
                },
                {
                  text: "System Limitations",
                  question: "What are common reasons companies switch demand planning systems?"
                }
              ]
            },
            {
              id: "dp_07",
              questionText: "What are your biggest challenges with demand planning?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical demand planning pain points?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me articulate our demand planning challenges?"
                },
                {
                  text: "Industry Challenges",
                  question: "What demand planning challenges are specific to our industry?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}