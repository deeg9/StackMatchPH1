import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const inventoryManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Inventory Management",
  formId: "inventory-management-v1",
  sections: [
    {
      sectionId: "im-qual",
      sectionTitle: "Inventory Management Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "im-questions",
          questions: [
            {
              id: "im_01",
              questionText: "How do you manage your inventory today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Inventory Methods",
                  question: "What are different inventory management methods I should describe?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to describe our current inventory management approach?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me better articulate our inventory management processes?"
                }
              ]
            },
            {
              id: "im_02",
              questionText: "Do you have a need to track inventory across multiple locations?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Multi-Location Benefits",
                  question: "What are the benefits of multi-location inventory tracking?"
                },
                {
                  text: "Challenges",
                  question: "What challenges does multi-location inventory management solve?"
                }
              ]
            },
            {
              id: "im_03",
              questionText: "Do you have a need for bin management?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "What is Bin Management?",
                  question: "Can you explain bin management and how it improves inventory accuracy?"
                },
                {
                  text: "Implementation",
                  question: "How do companies typically implement bin management systems?"
                }
              ]
            },
            {
              id: "im_04",
              questionText: "Do you have a need for cycle counting?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Cycle Counting Explained",
                  question: "What is cycle counting and how does it differ from physical inventory?"
                },
                {
                  text: "Benefits",
                  question: "What are the advantages of cycle counting over annual physical counts?"
                }
              ]
            },
            {
              id: "im_05",
              questionText: "Do you have a need for demand planning?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Demand Planning",
                  question: "How does demand planning integrate with inventory management?"
                },
                {
                  text: "Forecasting Methods",
                  question: "What forecasting methods are used in demand planning?"
                }
              ]
            },
            {
              id: "im_06",
              questionText: "What system are you using today for inventory management?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Systems",
                  question: "What are popular inventory management systems?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are common reasons companies switch inventory systems?"
                },
                {
                  text: "Pain Points",
                  question: "What typical pain points drive inventory system changes?"
                }
              ]
            },
            {
              id: "im_07",
              questionText: "What are your biggest challenges with your current inventory management process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical inventory management pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me better describe our inventory challenges?"
                },
                {
                  text: "Cost Impact",
                  question: "How do inventory challenges impact costs and efficiency?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}