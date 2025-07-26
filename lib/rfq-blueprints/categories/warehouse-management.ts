import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const warehouseManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Warehouse Management",
  formId: "warehouse-management-v1",
  sections: [
    {
      sectionId: "wms-qual",
      sectionTitle: "Warehouse Management Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "wms-questions",
          questions: [
            {
              id: "wms_01",
              questionText: "How many warehouses do you have?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Warehouse Types",
                  question: "Should I include distribution centers, fulfillment centers, and cross-docks?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to describe our warehouse network?"
                }
              ]
            },
            {
              id: "wms_02",
              questionText: "How do you manage your warehouse today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Process Description",
                  question: "What aspects of warehouse management should I describe?"
                },
                {
                  text: "Show Example",
                  question: "Can you provide an example of describing warehouse management processes?"
                },
                {
                  text: "Improve Writing",
                  question: "Can you help me better describe our warehouse operations?"
                }
              ]
            },
            {
              id: "wms_03",
              questionText: "Do you have a need to manage inventory in zones or bins?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Zone/Bin Management",
                  question: "What are zones and bins in warehouse management?"
                },
                {
                  text: "Benefits",
                  question: "What are the benefits of zone and bin management?"
                }
              ]
            },
            {
              id: "wms_04",
              questionText: "Do you have a need for mobile racking?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "What is Mobile Racking?",
                  question: "Can you explain mobile racking systems and their benefits?"
                },
                {
                  text: "Use Cases",
                  question: "When are mobile racking systems typically used?"
                }
              ]
            },
            {
              id: "wms_05",
              questionText: "Do you have a need for wave picking?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Wave Picking Explained",
                  question: "What is wave picking and how does it differ from other picking methods?"
                },
                {
                  text: "Benefits",
                  question: "What are the advantages of wave picking?"
                }
              ]
            },
            {
              id: "wms_06",
              questionText: "Do you have a need for GS1 Barcoding?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "GS1 Standards",
                  question: "What are GS1 barcoding standards and why are they important?"
                },
                {
                  text: "Implementation",
                  question: "How do companies implement GS1 barcoding?"
                }
              ]
            },
            {
              id: "wms_07",
              questionText: "Do you ship internationally?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "International Logistics",
                  question: "What special considerations exist for international shipping?"
                },
                {
                  text: "Compliance",
                  question: "What compliance requirements exist for international shipments?"
                }
              ]
            },
            {
              id: "wms_08",
              questionText: "What system are you using today for warehouse management?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common WMS Systems",
                  question: "What are popular warehouse management systems?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are common reasons companies switch WMS platforms?"
                }
              ]
            },
            {
              id: "wms_09",
              questionText: "What are your biggest challenges with your current warehouse management process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical warehouse management pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our warehouse management challenges?"
                },
                {
                  text: "Industry Specific",
                  question: "What warehouse challenges are specific to our industry?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}