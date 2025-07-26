import { type RfqFormBlueprint } from '@/types/rfq-forms'
import { financialManagementBlueprint } from './categories/financial-management'
import { accountReconciliationBlueprint } from './categories/account-reconciliation'
import { collectionsManagementBlueprint } from './categories/collections-management'
import { planningBudgetingBlueprint } from './categories/planning-budgeting'
import { procurementManagementBlueprint } from './categories/procurement-management'
import { multiBookAccountingBlueprint } from './categories/multi-book-accounting'
import { vendorBillProcessingBlueprint } from './categories/vendor-bill-processing'
import { taxManagementBlueprint } from './categories/tax-management'
import { rebateManagementBlueprint } from './categories/rebate-management'
import { hrBlueprint } from './categories/hr'
import { payrollBlueprint } from './categories/payroll'
import { workforceManagementBlueprint } from './categories/workforce-management'
import { incentiveCompensationBlueprint } from './categories/incentive-compensation'
import { fieldServiceManagementBlueprint } from './categories/field-service-management'
import { demandPlanningBlueprint } from './categories/demand-planning'
import { qualityManagementBlueprint } from './categories/quality-management'
import { warehouseManagementBlueprint } from './categories/warehouse-management'
import { wipRoutingBlueprint } from './categories/wip-routing'
import { workOrdersAssembliesBlueprint } from './categories/work-orders-assemblies'
import { analyticsWarehouseBlueprint } from './categories/analytics-warehouse'
import { connectorIntegrationBlueprint } from './categories/connector-integration'
import { projectManagementBlueprint } from './categories/project-management'
import { ecommerceWebsiteBlueprint } from './categories/ecommerce-website'
import { customerAccountManagementBlueprint } from './categories/customer-account-management'
import { billingBlueprint } from './categories/billing'
import { epmBlueprint } from './categories/epm'
import { advancedAccountingMultibookBlueprint } from './categories/advanced-accounting-multibook'
import { cpqBlueprint } from './categories/cpq'
import { inventoryManagementBlueprint } from './categories/inventory-management'
import { crmBlueprint } from './categories/crm'

// Fixed Assets Management Blueprint
const fixedAssetsManagementBlueprint: RfqFormBlueprint = {
  formTitle: "Fixed Assets Management",
  formId: "fixed-assets-management-v1",
  sections: [
    {
      sectionId: "current-process",
      sectionTitle: "Current Process Requirements",
      components: [
        {
          componentType: "QuestionList",
          id: "current-process-questions",
          questions: [
            {
              id: "cp_01",
              questionText: "How do you manage depreciation today?",
              helpText: "Are you using spreadsheets or another application for this process?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Improve Writing",
                  question: "Can you help me improve my description of our current depreciation management process?"
                },
                {
                  text: "Show Example",
                  question: "Can you show me an example of how to describe my current fixed asset depreciation management process?"
                }
              ]
            },
            {
              id: "cp_02",
              questionText: "How much time does it take your accounting team to calculate and enter depreciation during month end?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Improve Writing",
                  question: "Can you help me better describe the time and effort spent on depreciation calculations?"
                },
                {
                  text: "Show Example",
                  question: "What's a typical example of time spent on depreciation calculations in companies like mine?"
                }
              ]
            },
            {
              id: "cp_03",
              questionText: "Roughly how many assets are you keeping track of today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide an example of how to categorize and count our assets?"
                }
              ]
            },
            {
              id: "cp_04",
              questionText: "How many different asset classes do you keep track of today? (Furniture, Equipment, Vehicles, etc.)",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me common asset class categories used in fixed asset management?"
                }
              ]
            },
            {
              id: "cp_05",
              questionText: "Do you have leases that need to be tracked in compliance with ASC-842?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "What is ASC-842?",
                  question: "Can you explain what ASC-842 compliance means and why it's important?"
                },
                {
                  text: "Show Example",
                  question: "Can you provide examples of leases that typically need ASC-842 tracking?"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      sectionId: "additional-process",
      sectionTitle: "Additional Process Requirements",
      components: [
        {
          componentType: "QuestionList",
          id: "additional-process-questions",
          questions: [
            {
              id: "ap_01",
              questionText: "How do you keep track of things like: the asset custodian, the original cost, the current value, any maintenance or warranties, etc.?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you show me an example of comprehensive asset tracking information?"
                }
              ]
            },
            {
              id: "ap_02",
              questionText: "What is your capitalization policy?",
              helpText: "The minimum value threshold for treating purchases as capital assets rather than expenses",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "What's a capitalization policy?",
                  question: "Can you explain what a capitalization policy is and provide some examples?"
                },
                {
                  text: "Show Example",
                  question: "Can you provide examples of typical capitalization policies by company size?"
                }
              ]
            },
            {
              id: "ap_03",
              questionText: "Do you have assets that are related? (Parent/Child relationship)",
              helpText: "This can be a compound asset or a parent/child relationship",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of parent/child asset relationships?"
                }
              ]
            },
            {
              id: "ap_04",
              questionText: "Do you ever capitalize your services?",
              helpText: "Converting service costs into capital assets",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you explain when and how services are typically capitalized?"
                }
              ]
            },
            {
              id: "ap_05",
              questionText: "What types of depreciation methods do you use today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you list common depreciation methods and when they're used?"
                }
              ]
            },
            {
              id: "ap_06",
              questionText: "Do you require any secondary tax depreciation methods?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you explain secondary tax depreciation methods with examples?"
                }
              ]
            },
            {
              id: "ap_07",
              questionText: "How do you manage the revaluation, disposal, write-off, sale, or transfer of assets?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you provide examples of asset lifecycle management processes?"
                }
              ]
            },
            {
              id: "ap_08",
              questionText: "What reports are you running around your fixed assets today?",
              inputType: "textarea",
              smartPrompts: [
                {
                  text: "Show Example",
                  question: "Can you list common fixed asset reports and their purposes?"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

// Blueprint mapping
const blueprintMapping: Record<string, string> = {
  'Fixed Assets Management': 'fixed-assets-management-v1',
  'Fixed Assets': 'fixed-assets-management-v1', // Alternative name mapping
  'Field Service Management': 'field-service-management-v1',
  'Financial Management': 'financial-management-v1',
  'Finance': 'financial-management-v1', // Alternative name mapping
  'Account Reconciliation': 'account-reconciliation-v1',
  'Reconciliation': 'account-reconciliation-v1', // Alternative name mapping
  'Collections Management': 'collections-management-v1',
  'AR Collections': 'collections-management-v1', // Alternative name mapping
  'Planning & Budgeting': 'planning-budgeting-v1',
  'FP&A': 'planning-budgeting-v1', // Alternative name mapping
  'Procurement Management': 'procurement-management-v1',
  'Procurement': 'procurement-management-v1', // Alternative name mapping
  'Multi-Book Accounting': 'multi-book-accounting-v1',
  'Multi-Book': 'multi-book-accounting-v1', // Alternative name mapping
  'Advanced Accounting / Multi-Book': 'advanced-accounting-multibook-v3',
  'Advanced Accounting': 'advanced-accounting-multibook-v3', // Alternative name mapping
  'Advanced Multi-Book': 'advanced-accounting-multibook-v3', // Alternative name mapping
  'Vendor Bill Processing': 'vendor-bill-processing-v1',
  'AP Automation': 'vendor-bill-processing-v1', // Alternative name mapping
  'Tax Management': 'tax-management-v1',
  'Tax Compliance': 'tax-management-v1', // Alternative name mapping
  'Rebate Management': 'rebate-management-v1',
  'Rebates': 'rebate-management-v1', // Alternative name mapping
  'Human Resources (HR)': 'hr-v1-expanded',
  'HR': 'hr-v1-expanded', // Alternative name mapping
  'Payroll': 'payroll-v2-final',
  'Workforce Management': 'workforce-management-v1',
  'WFM': 'workforce-management-v1', // Alternative name mapping
  'Incentive Compensation Management': 'incentive-compensation-v1',
  'ICM': 'incentive-compensation-v1', // Alternative name mapping
  'Demand Planning': 'demand-planning-v1',
  'DP': 'demand-planning-v1', // Alternative name mapping
  'Quality Management': 'quality-management-v1',
  'QMS': 'quality-management-v1', // Alternative name mapping
  'Warehouse Management': 'warehouse-management-v1',
  'WMS': 'warehouse-management-v1', // Alternative name mapping
  'WIP & Routing': 'wip-routing-v1',
  'Manufacturing Execution': 'wip-routing-v1', // Alternative name mapping
  'Work Orders & Assemblies': 'work-orders-assemblies-v1',
  'Assembly Management': 'work-orders-assemblies-v1', // Alternative name mapping
  'Analytics Warehouse': 'analytics-warehouse-v1',
  'Data Warehouse': 'analytics-warehouse-v1', // Alternative name mapping
  'BI Analytics': 'analytics-warehouse-v1', // Alternative name mapping
  'Connector / Integration': 'connector-integration-v1',
  'Integration Platform': 'connector-integration-v1', // Alternative name mapping
  'iPaaS': 'connector-integration-v1', // Alternative name mapping
  'Project Management': 'project-management-v1',
  'PSA': 'project-management-v1', // Professional Services Automation
  'PPM': 'project-management-v1', // Project Portfolio Management
  'E-commerce Website': 'ecommerce-website-v1',
  'Ecommerce': 'ecommerce-website-v1', // Alternative name mapping
  'Online Store': 'ecommerce-website-v1', // Alternative name mapping
  'Customer Account Management': 'customer-account-management-v2',
  'Customer Portal': 'customer-account-management-v2', // Alternative name mapping
  'Customer Self-Service': 'customer-account-management-v2', // Alternative name mapping
  'Billing': 'billing-v1',
  'Invoicing': 'billing-v1', // Alternative name mapping
  'Billing Management': 'billing-v1', // Alternative name mapping
  'Enterprise Performance Management (EPM)': 'epm-v1',
  'EPM': 'epm-v1', // Alternative name mapping
  'Corporate Performance Management': 'epm-v1', // Alternative name mapping
  'CPM': 'epm-v1', // Alternative name mapping
  'Configure, Price & Quote (CPQ)': 'cpq-v1',
  'CPQ': 'cpq-v1', // Alternative name mapping
  'Configure Price Quote': 'cpq-v1', // Alternative name mapping
  'Inventory Management': 'inventory-management-v1',
  'Inventory': 'inventory-management-v1', // Alternative name mapping
  'Customer Relationship Management (CRM)': 'crm-v1',
  'CRM': 'crm-v1', // Alternative name mapping
  'Customer Relationship Management': 'crm-v1' // Alternative name mapping
}

// All blueprints registry
const blueprints: Record<string, RfqFormBlueprint> = {
  'fixed-assets-management-v1': fixedAssetsManagementBlueprint,
  'field-service-management-v1': fieldServiceManagementBlueprint,
  'financial-management-v1': financialManagementBlueprint,
  'account-reconciliation-v1': accountReconciliationBlueprint,
  'collections-management-v1': collectionsManagementBlueprint,
  'planning-budgeting-v1': planningBudgetingBlueprint,
  'procurement-management-v1': procurementManagementBlueprint,
  'multi-book-accounting-v1': multiBookAccountingBlueprint,
  'vendor-bill-processing-v1': vendorBillProcessingBlueprint,
  'tax-management-v1': taxManagementBlueprint,
  'rebate-management-v1': rebateManagementBlueprint,
  'hr-v1-expanded': hrBlueprint,
  'payroll-v2-final': payrollBlueprint,
  'workforce-management-v1': workforceManagementBlueprint,
  'incentive-compensation-v1': incentiveCompensationBlueprint,
  'demand-planning-v1': demandPlanningBlueprint,
  'quality-management-v1': qualityManagementBlueprint,
  'warehouse-management-v1': warehouseManagementBlueprint,
  'wip-routing-v1': wipRoutingBlueprint,
  'work-orders-assemblies-v1': workOrdersAssembliesBlueprint,
  'analytics-warehouse-v1': analyticsWarehouseBlueprint,
  'connector-integration-v1': connectorIntegrationBlueprint,
  'project-management-v1': projectManagementBlueprint,
  'ecommerce-website-v1': ecommerceWebsiteBlueprint,
  'customer-account-management-v2': customerAccountManagementBlueprint,
  'billing-v1': billingBlueprint,
  'epm-v1': epmBlueprint,
  'advanced-accounting-multibook-v3': advancedAccountingMultibookBlueprint,
  'cpq-v1': cpqBlueprint,
  'inventory-management-v1': inventoryManagementBlueprint,
  'crm-v1': crmBlueprint
}

// Helper functions
export function getBlueprintIdByCategory(categoryName: string): string | null {
  return blueprintMapping[categoryName] || null
}

export function getBlueprintById(blueprintId: string): RfqFormBlueprint | null {
  return blueprints[blueprintId] || null
}

export function hasBlueprint(categoryName: string): boolean {
  return categoryName in blueprintMapping
}

export function getAllBlueprintCategories(): string[] {
  return Object.keys(blueprintMapping)
}

// Export individual blueprints for direct access if needed
export {
  fixedAssetsManagementBlueprint,
  fieldServiceManagementBlueprint,
  financialManagementBlueprint,
  accountReconciliationBlueprint,
  collectionsManagementBlueprint,
  planningBudgetingBlueprint,
  procurementManagementBlueprint,
  multiBookAccountingBlueprint,
  vendorBillProcessingBlueprint,
  taxManagementBlueprint,
  rebateManagementBlueprint,
  hrBlueprint,
  payrollBlueprint,
  workforceManagementBlueprint,
  incentiveCompensationBlueprint,
  demandPlanningBlueprint,
  qualityManagementBlueprint,
  warehouseManagementBlueprint,
  wipRoutingBlueprint,
  workOrdersAssembliesBlueprint,
  analyticsWarehouseBlueprint,
  connectorIntegrationBlueprint,
  projectManagementBlueprint,
  ecommerceWebsiteBlueprint,
  customerAccountManagementBlueprint,
  billingBlueprint,
  epmBlueprint,
  advancedAccountingMultibookBlueprint,
  cpqBlueprint,
  inventoryManagementBlueprint,
  crmBlueprint
}