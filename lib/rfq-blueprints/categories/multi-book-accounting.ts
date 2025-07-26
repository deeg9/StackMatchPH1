import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const multiBookAccountingBlueprint: RfqFormBlueprint = {
  formTitle: "Multi-Book Accounting (Basic)",
  formId: "multi-book-accounting-basic-v1",
  sections: [
    {
      sectionId: "general-info",
      sectionTitle: "GENERAL DEAL CYCLE INFORMATION",
      components: [
        {
          componentType: "InstructionalText",
          content: "This section should be filled out by the AM before submitting an SC Request."
        },
        {
          componentType: "KeyValueTable",
          id: "general-info-table",
          rows: [
            { label: "Company Name", inputType: "text" },
            { label: "NSCorp Record Link", inputType: "text" },
            { label: "Sales Rep", inputType: "text" },
            { label: "Solution Consultant", inputType: "text" }
          ]
        }
      ]
    },
    {
      sectionId: "sales-qual",
      sectionTitle: "QUALIFICATION QUESTIONS",
      components: [
        {
          componentType: "InstructionalText",
          content: "This section should be filled out by the AM before submitting an SC Request."
        },
        {
          componentType: "QuestionList",
          id: "sales-questions",
          questions: [
            {
              id: "sq_mb_01",
              questionText: "Do you have international expansion in another country outside of your current regions?",
              helpText: "If yes, which country/countries are you expanding into?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "International Expansion",
                  question: "What are key considerations for international financial expansion?"
                },
                {
                  text: "Country Examples",
                  question: "How should I describe our international expansion plans?"
                }
              ]
            },
            {
              id: "sq_mb_02",
              questionText: "If you are expanding, what will be the functional currency required for the new subsidiary to be setup in the new country?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Functional Currency",
                  question: "Can you explain functional currency and how to determine it?"
                },
                {
                  text: "Currency Selection",
                  question: "What factors determine the choice of functional currency?"
                }
              ]
            },
            {
              id: "sq_mb_03",
              questionText: "If you are not expanding, are there any changes on reporting requirements for existing subsidiaries?",
              helpText: "Example: change of functional currency or change of consolidation reporting or local statutory reporting requirements.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Reporting Changes",
                  question: "What types of reporting requirement changes might occur?"
                },
                {
                  text: "Consolidation Impact",
                  question: "How do reporting changes affect consolidation processes?"
                }
              ]
            },
            {
              id: "sq_mb_04",
              questionText: "Does this new subsidiary have local statutory reporting needs in a different currency from the functional currency?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Statutory Reporting",
                  question: "Can you explain local statutory reporting requirements?"
                },
                {
                  text: "Multi-Currency Reporting",
                  question: "What are the implications of reporting in multiple currencies?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}