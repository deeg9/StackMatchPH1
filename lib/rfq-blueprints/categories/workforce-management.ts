import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const workforceManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Workforce Management",
  formId: "workforce-management-v1",
  sections: [
    {
      sectionId: "wfm-qual",
      sectionTitle: "Workforce Management Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "wfm-questions",
          questions: [
            {
              id: "wfm_01",
              questionText: "Do you have hourly employees?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Hourly vs Salaried",
                  question: "What are the key differences in managing hourly vs salaried employees?"
                },
                {
                  text: "Management Differences",
                  question: "How does workforce management differ for hourly employees?"
                }
              ]
            },
            {
              id: "wfm_02",
              questionText: "How do you manage scheduling?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Scheduling Methods",
                  question: "What are common employee scheduling methods and tools?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for efficient workforce scheduling?"
                }
              ]
            },
            {
              id: "wfm_03",
              questionText: "Do you have employees working different shifts?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Shift Management",
                  question: "What are best practices for managing multiple shifts?"
                },
                {
                  text: "Rotation Strategies",
                  question: "How can companies effectively manage shift rotations?"
                }
              ]
            },
            {
              id: "wfm_04",
              questionText: "Do you need to schedule by teams?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Team Scheduling Benefits",
                  question: "What are the benefits of team-based scheduling?"
                },
                {
                  text: "Implementation Tips",
                  question: "How can organizations implement effective team scheduling?"
                }
              ]
            },
            {
              id: "wfm_05",
              questionText: "Do you have a need to forecast labor vs. demand?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Demand Forecasting",
                  question: "How do companies forecast labor demand effectively?"
                },
                {
                  text: "Labor Optimization",
                  question: "What are strategies for optimizing labor based on demand?"
                }
              ]
            },
            {
              id: "wfm_06",
              questionText: "Do you have a need for employees to swap shifts?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Shift Swap Policies",
                  question: "What are best practices for shift swapping policies?"
                },
                {
                  text: "System Requirements",
                  question: "What features should a shift swapping system have?"
                }
              ]
            },
            {
              id: "wfm_07",
              questionText: "Do your employees work remotely?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Remote Workforce",
                  question: "How does workforce management differ for remote employees?"
                },
                {
                  text: "Hybrid Scheduling",
                  question: "What are best practices for hybrid workforce scheduling?"
                }
              ]
            },
            {
              id: "wfm_08",
              questionText: "Do you have any wage rule requirements?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Wage Rule Examples",
                  question: "What are common wage rules that affect scheduling?"
                },
                {
                  text: "Compliance Requirements",
                  question: "How do wage rules impact workforce management compliance?"
                }
              ]
            },
            {
              id: "wfm_09",
              questionText: "What system are you using today for workforce management?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common WFM Systems",
                  question: "What are popular workforce management systems and their features?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are typical reasons companies switch WFM systems?"
                }
              ]
            },
            {
              id: "wfm_10",
              questionText: "What are your biggest challenges with workforce management?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Pain Points",
                  question: "What are the most common workforce management challenges?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our workforce management challenges?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}