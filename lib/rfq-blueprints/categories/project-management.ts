import { type RfqFormBlueprint } from '@/types/rfq-forms'

export const projectManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Project Management",
  formId: "project-management-v1",
  sections: [
    {
      sectionId: "pm-qual",
      sectionTitle: "Project Management Questions",
      components: [
        {
          componentType: "QuestionList",
          id: "pm-questions-pm",
          listTitle: "PROJECT MANAGEMENT",
          questions: [
            {
              id: "pm_pm_01",
              questionText: "How do you manage projects today?",
              helpText: "Describe the lifecycle of a project from kickoff, to staffing, to billing.",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Project Methodologies",
                  question: "What are common project management methodologies?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me how to describe our project lifecycle?"
                },
                {
                  text: "Best Practices",
                  question: "What are project lifecycle best practices?"
                }
              ]
            },
            {
              id: "pm_pm_02",
              questionText: "Who manages the projects?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "PM Roles",
                  question: "What are typical project management roles and responsibilities?"
                },
                {
                  text: "Team Structure",
                  question: "How should project management teams be structured?"
                }
              ]
            },
            {
              id: "pm_pm_03",
              questionText: "What is the typical size and length of a project, and how many active projects do you have at once?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Portfolio Metrics",
                  question: "What metrics define project portfolio size?"
                },
                {
                  text: "Show Example",
                  question: "Can you help me describe our project portfolio?"
                }
              ]
            },
            {
              id: "pm_pm_04",
              questionText: "Do you manage work breakdown structures?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "What is WBS?",
                  question: "Can you explain work breakdown structures?"
                },
                {
                  text: "WBS Benefits",
                  question: "What are the benefits of using work breakdown structures?"
                }
              ]
            },
            {
              id: "pm_pm_05",
              questionText: "What are some key project management reports that you run today or would like to be able to run?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Common PM Reports",
                  question: "What are essential project management reports?"
                },
                {
                  text: "KPI Examples",
                  question: "What project KPIs should we track?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "pm-questions-rm",
          listTitle: "RESOURCE MANAGEMENT",
          questions: [
            {
              id: "pm_rm_01",
              questionText: "How are resources managed today? Is it centralized or decentralized?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Resource Models",
                  question: "What are centralized vs decentralized resource management models?"
                },
                {
                  text: "Best Approach",
                  question: "Which resource management approach is best for our organization?"
                }
              ]
            },
            {
              id: "pm_rm_02",
              questionText: "On average, how many resources are on a single project, and do they work on multiple projects at a time?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Resource Allocation",
                  question: "What are best practices for resource allocation?"
                },
                {
                  text: "Capacity Planning",
                  question: "How should we approach capacity planning?"
                }
              ]
            },
            {
              id: "pm_rm_03",
              questionText: "What criteria is considered when staffing a resource to a project, and do you need to manage skill sets?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Skills Management",
                  question: "How should we track and manage resource skills?"
                },
                {
                  text: "Staffing Criteria",
                  question: "What criteria should guide resource assignments?"
                }
              ]
            },
            {
              id: "pm_rm_04",
              questionText: "Do you use external consultants?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Consultant Management",
                  question: "How should external consultants be managed?"
                },
                {
                  text: "Contractor vs FTE",
                  question: "When should we use contractors vs full-time employees?"
                }
              ]
            },
            {
              id: "pm_rm_05",
              questionText: "Do you track utilization? If so, how do you define the utilization metrics?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Utilization Metrics",
                  question: "What are common resource utilization metrics?"
                },
                {
                  text: "Target Rates",
                  question: "What are typical utilization target rates?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "pm-questions-te",
          listTitle: "TIME & EXPENSE MANAGEMENT",
          questions: [
            {
              id: "pm_te_01",
              questionText: "How do you track time today, and who is required to enter timesheets?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Time Tracking Methods",
                  question: "What are effective time tracking methods?"
                },
                {
                  text: "Timesheet Policies",
                  question: "What are best practices for timesheet policies?"
                }
              ]
            },
            {
              id: "pm_te_02",
              questionText: "What information do you capture on time entries and expense receipts?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "T&E Data",
                  question: "What data should be captured for time and expenses?"
                },
                {
                  text: "Compliance Requirements",
                  question: "What T&E compliance requirements should we consider?"
                }
              ]
            },
            {
              id: "pm_te_03",
              questionText: "What is your approval and review process for time and expense reports?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Approval Workflows",
                  question: "What are best practices for T&E approval workflows?"
                },
                {
                  text: "Automation Options",
                  question: "How can we automate T&E approvals?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "pm-questions-fm",
          listTitle: "FINANCIAL MANAGEMENT",
          questions: [
            {
              id: "pm_fm_01",
              questionText: "How do you bill your customers today?",
              helpText: "Example: Fixed fee, Time and Materials, Milestone, % Complete",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Billing Methods",
                  question: "Can you explain different project billing methods?"
                },
                {
                  text: "T&M vs Fixed Fee",
                  question: "What are the pros and cons of T&M vs fixed fee billing?"
                }
              ]
            },
            {
              id: "pm_fm_02",
              questionText: "What is your invoicing cycle, and who creates the invoices?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Invoicing Best Practices",
                  question: "What are invoicing best practices for professional services?"
                },
                {
                  text: "Billing Cycles",
                  question: "What are typical billing cycle options?"
                }
              ]
            },
            {
              id: "pm_fm_03",
              questionText: "How do you recognize revenue, and is it different from how you bill?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Revenue Recognition",
                  question: "Can you explain revenue recognition principles for projects?"
                },
                {
                  text: "Rev Rec vs Billing",
                  question: "How does revenue recognition differ from billing?"
                }
              ]
            }
          ]
        },
        {
          componentType: "QuestionList",
          id: "pm-questions-reporting",
          listTitle: "REPORTING",
          questions: [
            {
              id: "pm_rpt_01",
              questionText: "Are you doing any internal or external status reporting?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Status Reports",
                  question: "What should be included in project status reports?"
                },
                {
                  text: "Reporting Cadence",
                  question: "How often should project status be reported?"
                }
              ]
            },
            {
              id: "pm_rpt_02",
              questionText: "Are you doing any risk tracking?",
              inputType: "radiogroup",
              options: ["Yes", "No"],
              smartPrompts: [
                {
                  text: "Risk Management",
                  question: "What are project risk management best practices?"
                },
                {
                  text: "Risk Frameworks",
                  question: "What risk tracking frameworks are commonly used?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}