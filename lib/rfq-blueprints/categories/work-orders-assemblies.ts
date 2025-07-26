import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const workOrdersAssembliesBlueprint: RfqFormBlueprint = {
  formTitle: "Work Orders & Assemblies",
  formId: "work-orders-assemblies-v1",
  sections: [
    {
      sectionId: "woa-qual",
      sectionTitle: "Work Orders & Assemblies Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "woa-questions",
          questions: [
            {
              id: "woa_01",
              questionText: "How do you manage your assembly process today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Assembly Process",
                  question: "What aspects of assembly management should I describe?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me an example of describing assembly processes?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me better describe our assembly operations?"
                }
              ]
            },
            {
              id: "woa_02",
              questionText: "Do you have a need for special orders?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Special Orders",
                  question: "What are special orders in manufacturing?"
                },
                {
                  text: "Custom Manufacturing",
                  question: "How do special orders differ from standard production?"
                }
              ]
            },
            {
              id: "woa_03",
              questionText: "Do you have a need to track lot numbers?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Lot Tracking Benefits",
                  question: "Why is lot number tracking important?"
                },
                {
                  text: "Compliance Requirements",
                  question: "What compliance requirements exist for lot tracking?"
                }
              ]
            },
            {
              id: "woa_04",
              questionText: "Do you have a need for serialized inventory?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Serial Number Tracking",
                  question: "What are the benefits of serialized inventory?"
                },
                {
                  text: "Use Cases",
                  question: "When is serial number tracking typically required?"
                }
              ]
            },
            {
              id: "woa_05",
              questionText: "Do you have a need for barcoding?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Barcoding Benefits",
                  question: "How does barcoding improve work order management?"
                },
                {
                  text: "Implementation",
                  question: "What's involved in implementing barcoding for assemblies?"
                }
              ]
            },
            {
              id: "woa_06",
              questionText: "What system are you using today for work orders and assemblies?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Systems",
                  question: "What are popular work order management systems?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are common reasons companies switch work order systems?"
                }
              ]
            },
            {
              id: "woa_07",
              questionText: "What are your biggest challenges with your current work orders and assemblies process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical work order and assembly pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our work order challenges?"
                },
                {
                  text: "Process Bottlenecks",
                  question: "What are common bottlenecks in assembly processes?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}