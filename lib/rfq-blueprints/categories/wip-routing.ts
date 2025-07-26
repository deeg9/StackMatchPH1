import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const wipRoutingBlueprint: RfqFormBlueprint = {
  formTitle: "WIP & Routing",
  formId: "wip-routing-v1",
  sections: [
    {
      sectionId: "wr-qual",
      sectionTitle: "WIP & Routing Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "wr-questions",
          questions: [
            {
              id: "wr_01",
              questionText: "How do you manage your manufacturing process today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Process Description",
                  question: "What aspects of manufacturing should I describe?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me an example of describing manufacturing processes?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me better describe our manufacturing operations?"
                }
              ]
            },
            {
              id: "wr_02",
              questionText: "Do you have a need for multi-level BOMs?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "What are Multi-Level BOMs?",
                  question: "Can you explain multi-level BOMs and when they're needed?"
                },
                {
                  text: "BOM Structure",
                  question: "How do multi-level BOMs differ from single-level BOMs?"
                }
              ]
            },
            {
              id: "wr_03",
              questionText: "Do you have a need for phantom assemblies?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "What are Phantom Assemblies?",
                  question: "Can you explain phantom assemblies and their purpose?"
                },
                {
                  text: "Use Cases",
                  question: "When are phantom assemblies typically used in manufacturing?"
                }
              ]
            },
            {
              id: "wr_04",
              questionText: "Do you have a need to track scrap?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Scrap Tracking",
                  question: "Why is scrap tracking important in manufacturing?"
                },
                {
                  text: "Scrap Management",
                  question: "What are best practices for scrap tracking and reduction?"
                }
              ]
            },
            {
              id: "wr_05",
              questionText: "Do you have a need to track labor?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Labor Tracking Benefits",
                  question: "What are the benefits of tracking labor in manufacturing?"
                },
                {
                  text: "Tracking Methods",
                  question: "What methods are used for manufacturing labor tracking?"
                }
              ]
            },
            {
              id: "wr_06",
              questionText: "Do you have a need for outside processing?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Outside Processing",
                  question: "What is outside processing in manufacturing?"
                },
                {
                  text: "Subcontracting",
                  question: "How does outside processing work with subcontractors?"
                }
              ]
            },
            {
              id: "wr_07",
              questionText: "What system are you using today for WIP and Routing?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common MES Systems",
                  question: "What are popular Manufacturing Execution Systems?"
                },
                {
                  text: "System Limitations",
                  question: "What are common reasons companies switch WIP/routing systems?"
                }
              ]
            },
            {
              id: "wr_08",
              questionText: "What are your biggest challenges with your current WIP and Routing process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical WIP and routing pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our manufacturing challenges?"
                },
                {
                  text: "Industry Specific",
                  question: "What manufacturing challenges are specific to our industry?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}