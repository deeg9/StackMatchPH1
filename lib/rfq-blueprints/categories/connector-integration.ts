import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const connectorIntegrationBlueprint: RfqFormBlueprint = {
  formTitle: "Connector / Integration",
  formId: "connector-integration-v1",
  sections: [
    {
      sectionId: "connector-qual",
      sectionTitle: "Connector & Integration Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "connector-questions",
          questions: [
            {
              id: "conn_01",
              questionText: "What is your integration strategy?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Integration Patterns",
                  question: "What are common integration patterns and strategies?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me an example of an integration strategy?"
                },
                {
                  text: "Best Practices",
                  question: "What are integration strategy best practices?"
                }
              ]
            },
            {
              id: "conn_02",
              questionText: "What type of integration are you looking for?",
              inputType: "checkboxgroup",
              options: ["Pre-built Connector", "Custom Integration", "Both"],
              smartPrompts: [
                {
                  text: "Pre-built vs Custom",
                  question: "What are the trade-offs between pre-built connectors and custom integrations?"
                },
                {
                  text: "When to Choose",
                  question: "When should I choose pre-built vs custom integration?"
                }
              ]
            },
            {
              id: "conn_03",
              questionText: "What systems do you need to integrate with?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Integrations",
                  question: "What are the most common system integrations?"
                },
                {
                  text: "Integration Categories",
                  question: "How should I categorize our integration needs?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to list integration requirements?"
                }
              ]
            },
            {
              id: "conn_04",
              questionText: "Do you have a dedicated integration team?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Team Structure",
                  question: "What skills are needed for an integration team?"
                },
                {
                  text: "Outsourcing Options",
                  question: "What are options if we don't have an integration team?"
                }
              ]
            },
            {
              id: "conn_05",
              questionText: "What is your budget for this integration?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Cost Factors",
                  question: "What factors influence integration costs?"
                },
                {
                  text: "Budget Estimation",
                  question: "How should I estimate integration budgets?"
                },
                {
                  text: "TCO Considerations",
                  question: "What total cost of ownership factors should I consider?"
                }
              ]
            },
            {
              id: "conn_06",
              questionText: "What system are you using today for your integrations?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "iPaaS Platforms",
                  question: "What are popular Integration Platform as a Service (iPaaS) solutions?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are common reasons companies switch integration platforms?"
                },
                {
                  text: "Platform Comparison",
                  question: "How do different integration platforms compare?"
                }
              ]
            },
            {
              id: "conn_07",
              questionText: "What are your biggest challenges with your current integration process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical integration pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our integration challenges?"
                },
                {
                  text: "Technical Debt",
                  question: "How does integration technical debt accumulate?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}