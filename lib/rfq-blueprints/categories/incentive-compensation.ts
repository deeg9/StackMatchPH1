import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const incentiveCompensationBlueprint: RfqFormBlueprint = {
  formTitle: "Incentive Compensation Management",
  formId: "incentive-compensation-v1",
  sections: [
    {
      sectionId: "icm-qual",
      sectionTitle: "Incentive Compensation Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "icm-questions",
          questions: [
            {
              id: "icm_01",
              questionText: "How many employees are on a commission plan?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Calculate Headcount",
                  question: "How should I calculate employees on commission plans?"
                },
                {
                  text: "Employee Categories",
                  question: "What types of employees typically receive commissions?"
                }
              ]
            },
            {
              id: "icm_02",
              questionText: "How many different commission plans do you have?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Plan Types",
                  question: "What are common types of commission plans?"
                },
                {
                  text: "Plan Complexity",
                  question: "How do I determine if we have too many commission plans?"
                }
              ]
            },
            {
              id: "icm_03",
              questionText: "Do you pay commission on a team basis?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Team vs Individual",
                  question: "What are the pros and cons of team-based vs individual commissions?"
                },
                {
                  text: "Split Strategies",
                  question: "How are team commissions typically split among members?"
                }
              ]
            },
            {
              id: "icm_04",
              questionText: "How do you calculate commissions?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Calculation Examples",
                  question: "Can you show examples of common commission calculation methods?"
                },
                {
                  text: "Common Formulas",
                  question: "What are typical commission formulas and structures?"
                }
              ]
            },
            {
              id: "icm_05",
              questionText: "How often do you pay commissions?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Frequency Options",
                  question: "What are common commission payment frequencies and their trade-offs?"
                },
                {
                  text: "Best Practices",
                  question: "What's the best practice for commission payment timing?"
                }
              ]
            },
            {
              id: "icm_06",
              questionText: "Do you have a claw back policy?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "What is Claw Back?",
                  question: "Can you explain commission claw back policies and when they're used?"
                },
                {
                  text: "Policy Examples",
                  question: "What are examples of effective claw back policy terms?"
                }
              ]
            },
            {
              id: "icm_07",
              questionText: "What system are you using today for incentive compensation?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common ICM Systems",
                  question: "What are popular incentive compensation management systems?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are typical reasons companies switch ICM systems?"
                }
              ]
            },
            {
              id: "icm_08",
              questionText: "What are your biggest challenges with your current process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Pain Points",
                  question: "What are the most common incentive compensation challenges?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our commission management challenges?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}