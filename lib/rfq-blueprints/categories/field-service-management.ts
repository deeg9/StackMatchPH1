import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const fieldServiceManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Field Service Management",
  formId: "field-service-management-v1",
  sections: [
    {
      sectionId: "fsm-qual",
      sectionTitle: "Field Service Management Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "fsm-questions",
          questions: [
            {
              id: "fsm_01",
              questionText: "How many field service technicians do you have?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Team Size Calculation",
                  question: "How should I calculate our total field service team size?"
                },
                {
                  text: "Technician Types",
                  question: "What different types of field service technicians should I count?"
                }
              ]
            },
            {
              id: "fsm_02",
              questionText: "What types of services do you provide?",
              inputType: "checkboxgroup",
              options: ["Installations", "Preventative Maintenance", "Break-Fix/Repair"]
            },
            {
              id: "fsm_03",
              questionText: "What is the average duration of an install?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Time Estimation",
                  question: "How should I calculate average installation duration?"
                },
                {
                  text: "Duration Benchmarks",
                  question: "What are typical installation durations by industry?"
                }
              ]
            },
            {
              id: "fsm_04",
              questionText: "How do you manage your service schedule today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Scheduling Methods",
                  question: "What are common field service scheduling methods?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for field service scheduling?"
                }
              ]
            },
            {
              id: "fsm_05",
              questionText: "Do you have serialized assets?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Asset Tracking",
                  question: "What is serialized asset tracking in field service?"
                },
                {
                  text: "Serialization Benefits",
                  question: "What are the benefits of serializing field service assets?"
                }
              ]
            },
            {
              id: "fsm_06",
              questionText: "Do you have technicians that work in crews/teams?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Team Structure",
                  question: "What are common field service crew structures?"
                },
                {
                  text: "Crew Management",
                  question: "How should field service crews be managed effectively?"
                }
              ]
            },
            {
              id: "fsm_07",
              questionText: "Do any of your technicians act as subcontractors?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Contractor Management",
                  question: "How should subcontractor technicians be managed?"
                },
                {
                  text: "Compliance Issues",
                  question: "What compliance issues arise with subcontractor technicians?"
                }
              ]
            },
            {
              id: "fsm_08",
              questionText: "Do you need to track time for payroll and/or job costing?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Time Tracking Methods",
                  question: "What are effective field service time tracking methods?"
                },
                {
                  text: "Job Costing",
                  question: "How does time tracking support job costing in field service?"
                }
              ]
            },
            {
              id: "fsm_09",
              questionText: "Do you have a need for quoting or upselling in the field?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Field Sales Process",
                  question: "How can technicians effectively quote services in the field?"
                },
                {
                  text: "Upselling Strategies",
                  question: "What are effective field service upselling strategies?"
                }
              ]
            },
            {
              id: "fsm_10",
              questionText: "What system are you using today for field service management?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common FSM Systems",
                  question: "What are popular field service management systems?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are common reasons companies switch FSM systems?"
                }
              ]
            },
            {
              id: "fsm_11",
              questionText: "What are your biggest challenges with your current field service management process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Pain Points",
                  question: "What are the most common field service management challenges?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our field service challenges?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}