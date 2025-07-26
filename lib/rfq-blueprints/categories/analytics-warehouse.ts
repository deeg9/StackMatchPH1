import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const analyticsWarehouseBlueprint: RfqFormBlueprint = {
  formTitle: "Analytics Warehouse",
  formId: "analytics-warehouse-v1",
  sections: [
    {
      sectionId: "sales-qual",
      sectionTitle: "SALES – QUALIFICATION QUESTIONS",
      components: [
        {
          componentType: "QuestionList",
          id: "sales-questions",
          questions: [
            {
              id: "sq_aw_01",
              questionText: "Do you have a dedicated analytics team?",
              helpText: "If so, how many employees are on the team?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Team Structure",
                  question: "How should I describe our analytics team structure?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me an example of describing an analytics team?"
                }
              ]
            },
            {
              id: "sq_aw_02",
              questionText: "Are there employees outside of the analytics team that contribute to the reporting process?",
              helpText: "If so, what departments and about how many people?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Citizen Analysts",
                  question: "What are citizen analysts and how do they contribute?"
                },
                {
                  text: "Department Examples",
                  question: "Which departments typically contribute to analytics?"
                }
              ]
            },
            {
              id: "sq_aw_03",
              questionText: "What system(s) are you currently using, or have you used in the past, for your reporting and analytics needs?",
              helpText: "What is causing you to look at a different solution?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common BI Tools",
                  question: "What are popular business intelligence and analytics platforms?"
                },
                {
                  text: "Migration Reasons",
                  question: "What are common reasons companies switch analytics platforms?"
                }
              ]
            },
            {
              id: "sq_aw_04",
              questionText: "Do you use the Office Suite (Excel, PowerPoint, Word) for reporting?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Excel Analytics",
                  question: "What are the pros and cons of using Excel for analytics?"
                },
                {
                  text: "Self-Service BI",
                  question: "How does self-service BI compare to Excel?"
                }
              ]
            },
            {
              id: "sq_aw_05",
              questionText: "What are some of your reporting and analytics challenges you are looking to address?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common Challenges",
                  question: "What are typical analytics and reporting pain points?"
                },
                {
                  text: "Improve Description",
                  question: "Can you help me articulate our analytics challenges?"
                },
                {
                  text: "Data Silos",
                  question: "How do data silos impact analytics efforts?"
                }
              ]
            },
            {
              id: "sq_aw_06",
              questionText: "How much time is your team spending on your reporting and analytics processes?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Time Estimation",
                  question: "How should I calculate time spent on analytics processes?"
                },
                {
                  text: "ROI Calculation",
                  question: "How can I calculate the ROI of improving analytics efficiency?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "sc-qual",
      sectionTitle: "DETAILED QUALIFICATION QUESTIONS",
      components: [
        {
          componentType: "QuestionList",
          id: "sc-questions-general",
          questions: [
            {
              id: "scq_aw_01",
              questionText: "How do you currently blend your ERP data with other data sources?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Data Integration",
                  question: "What are common data integration methods?"
                },
                {
                  text: "ETL vs ELT",
                  question: "Can you explain ETL and ELT processes?"
                },
                {
                  text: "Show Example",
                  question: "Can you provide an example of data blending?"
                }
              ]
            },
            {
              id: "scq_aw_02",
              questionText: "What Key Performance Indicators (KPIs) are you looking to track?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "KPI Examples",
                  question: "What are common KPIs by department?"
                },
                {
                  text: "Industry KPIs",
                  question: "What KPIs are specific to our industry?"
                },
                {
                  text: "KPI Framework",
                  question: "How should I structure our KPI requirements?"
                }
              ]
            },
            {
              id: "scq_aw_03",
              questionText: "What types of analysis are you looking to perform?",
              helpText: "Ex: trend analysis, historical analysis, predictive analysis, etc.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Analysis Types",
                  question: "What are the different types of data analysis?"
                },
                {
                  text: "Analytics Maturity",
                  question: "What are the levels of analytics maturity?"
                },
                {
                  text: "Predictive Analytics",
                  question: "What is predictive analytics and when is it useful?"
                }
              ]
            },
            {
              id: "scq_aw_04",
              questionText: "What are some of the key reports or dashboards you would like to run?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Dashboard Examples",
                  question: "Can you provide examples of effective dashboards?"
                },
                {
                  text: "Best Practices",
                  question: "What are dashboard design best practices?"
                },
                {
                  text: "Report Types",
                  question: "What are common business report types?"
                }
              ]
            },
            {
              id: "scq_aw_05",
              questionText: "Do you need to operate in multiple currencies?",
              helpText: "Ex: reporting currencies or local currencies.",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Currency Conversion",
                  question: "How do analytics platforms handle currency conversion?"
                },
                {
                  text: "Multi-Currency Reporting",
                  question: "What are best practices for multi-currency reporting?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "sc-questions-data",
          questions: [
            {
              id: "scq_aw_data_01",
              questionText: "Do you need to bring in data from any non-ERP data sources?",
              helpText: "If so, where is the data located and what is the volume?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Data Sources",
                  question: "What are common non-ERP data sources?"
                },
                {
                  text: "Integration Challenges",
                  question: "What challenges arise with diverse data sources?"
                }
              ]
            },
            {
              id: "scq_aw_data_02",
              questionText: "How often does your data need to be refreshed?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Refresh Frequency",
                  question: "What are typical data refresh frequencies?"
                },
                {
                  text: "Real-time vs Batch",
                  question: "When is real-time data necessary vs batch processing?"
                }
              ]
            },
            {
              id: "scq_aw_data_03",
              questionText: "Do you have any data security requirements?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Security Requirements",
                  question: "What are common data security requirements for analytics?"
                },
                {
                  text: "Compliance",
                  question: "What compliance standards apply to analytics data?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}