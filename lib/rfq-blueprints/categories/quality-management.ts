import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const qualityManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Quality Management",
  formId: "quality-management-v1",
  sections: [
    {
      sectionId: "qms-qual",
      sectionTitle: "Quality Management Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "qms-questions",
          questions: [
            {
              id: "qms_01",
              questionText: "Do you have a need to create quality specs for items?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Quality Specifications",
                  question: "What are quality specifications and why are they important?"
                },
                {
                  text: "Spec Examples",
                  question: "Can you provide examples of quality specifications for different industries?"
                }
              ]
            },
            {
              id: "qms_02",
              questionText: "How do you manage quality inspections?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Inspection Methods",
                  question: "What are common quality inspection methods and processes?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me an example of a quality inspection process?"
                },
                {
                  text: "Best Practices",
                  question: "What are best practices for quality inspection management?"
                }
              ]
            },
            {
              id: "qms_03",
              questionText: "Do you have a need to test against a batch or a lot?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Batch Testing",
                  question: "What is batch/lot testing and when is it required?"
                },
                {
                  text: "Testing Process",
                  question: "How does batch testing differ from individual item testing?"
                }
              ]
            },
            {
              id: "qms_04",
              questionText: "Do you have a need for mobile testing?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Mobile QC Benefits",
                  question: "What are the benefits of mobile quality testing?"
                },
                {
                  text: "Use Cases",
                  question: "What are common use cases for mobile quality testing?"
                }
              ]
            },
            {
              id: "qms_05",
              questionText: "Do you have a need to create and manage non-conformance reports?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "What are NCRs?",
                  question: "What are non-conformance reports and why are they important?"
                },
                {
                  text: "NCR Process",
                  question: "Can you explain the typical NCR process and documentation?"
                }
              ]
            },
            {
              id: "qms_06",
              questionText: "Do you have a need for CAPA (Corrective and Preventative Actions)?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "What is CAPA?",
                  question: "Can you explain what CAPA means and its importance in quality management?"
                },
                {
                  text: "CAPA Implementation",
                  question: "How do companies typically implement CAPA systems?"
                },
                {
                  text: "CAPA Examples",
                  question: "Can you provide examples of corrective and preventative actions?"
                }
              ]
            },
            {
              id: "qms_07",
              questionText: "What system are you using today for quality management?",
              helpText: "What is causing you to look for a new solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common QMS Platforms",
                  question: "What are popular quality management software systems?"
                },
                {
                  text: "System Limitations",
                  question: "What are common reasons companies switch QMS platforms?"
                }
              ]
            },
            {
              id: "qms_08",
              questionText: "What are your biggest challenges with quality management?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical quality management pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our quality management challenges?"
                },
                {
                  text: "Industry Specific",
                  question: "What quality challenges are specific to our industry?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}