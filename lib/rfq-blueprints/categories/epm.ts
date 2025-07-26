import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const epmBlueprint: RfqFormBlueprint = {
  formTitle: "Enterprise Performance Management (EPM)",
  formId: "epm-v1",
  sections: [
    {
      sectionId: "epm-qual",
      sectionTitle: "Enterprise Performance Management Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "epm-questions",
          questions: [
            {
              id: "epm_01",
              questionText: "How do you manage your EPM process today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "EPM Framework",
                  question: "What are the key components of an EPM framework?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to describe our EPM processes?"
                },
                {
                  text: "Best Practices",
                  question: "What are EPM best practices for mid-market companies?"
                }
              ]
            },
            {
              id: "epm_02",
              questionText: "Do you have a need for financial consolidation?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Financial Consolidation",
                  question: "What is financial consolidation and why is it important?"
                },
                {
                  text: "Consolidation Benefits",
                  question: "What are the benefits of automated financial consolidation?"
                }
              ]
            },
            {
              id: "epm_03",
              questionText: "Do you have a need for account reconciliation?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Account Reconciliation",
                  question: "How does account reconciliation fit within EPM?"
                },
                {
                  text: "Automation Benefits",
                  question: "What are the benefits of automated reconciliation?"
                }
              ]
            },
            {
              id: "epm_04",
              questionText: "Do you have a need for narrative reporting?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Narrative Reporting",
                  question: "What is narrative reporting in EPM context?"
                },
                {
                  text: "Management Reporting",
                  question: "How does narrative reporting improve management insights?"
                }
              ]
            },
            {
              id: "epm_05",
              questionText: "Do you have a need for tax reporting?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Tax Reporting",
                  question: "How does EPM support tax reporting and compliance?"
                },
                {
                  text: "Tax Provision",
                  question: "What is tax provision and how does EPM help?"
                }
              ]
            },
            {
              id: "epm_06",
              questionText: "What system are you using today for EPM?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "EPM Platforms",
                  question: "What are popular EPM/CPM software platforms?"
                },
                {
                  text: "Migration Reasons",
                  question: "Why do companies typically switch EPM systems?"
                },
                {
                  text: "Platform Comparison",
                  question: "How do different EPM platforms compare?"
                }
              ]
            },
            {
              id: "epm_07",
              questionText: "What are your biggest challenges with your current EPM process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical EPM pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our EPM challenges?"
                },
                {
                  text: "Process Inefficiencies",
                  question: "What EPM inefficiencies impact financial close?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}