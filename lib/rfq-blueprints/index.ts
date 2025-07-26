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
import { fixedAssetsManagementBlueprint } from './categories/fixed-assets-management'

/**
 * RFQ Blueprint Naming Convention Documentation
 * =============================================
 * 
 * Blueprint IDs (formId) follow a standardized naming pattern to ensure consistency
 * and maintainability across the system.
 * 
 * STANDARD FORMAT: [category-name]-v[version]
 * 
 * Examples:
 * - financial-management-v1
 * - inventory-management-v1
 * - crm-v1
 * 
 * VERSIONING GUIDELINES:
 * - v1: Initial version of a blueprint
 * - v2, v3, etc.: Major revisions with significant changes to questions or structure
 * - Version numbers should be incremented when:
 *   - Questions are substantially changed or reorganized
 *   - New sections are added or removed
 *   - The blueprint structure is significantly modified
 * 
 * HISTORICAL EXCEPTIONS (DO NOT MODIFY):
 * Some existing blueprints use different patterns for historical reasons:
 * 
 * 1. hr-v1-expanded: 
 *    - Created as an expanded version of the original HR blueprint
 *    - Contains comprehensive HR questions across multiple sections
 *    - The "expanded" suffix was used before version numbering was standardized
 *    - Should have been named "hr-v2" but kept for backward compatibility
 * 
 * 2. payroll-v2-final:
 *    - Second major revision of the payroll blueprint
 *    - The "final" suffix was added during a major project milestone
 *    - Should have been named "payroll-v2" but kept for backward compatibility
 * 
 * 3. Multi-Book Accounting Split:
 *    - Two separate blueprints exist: basic (internal only) and advanced (shown in UI)
 *    - multi-book-accounting-basic-v1: Legacy/internal use only, not shown in UI
 *    - multi-book-accounting-advanced-v1: Primary version shown as "Advanced Accounting / Multi-Book"
 *    - UI only shows the advanced version to avoid user confusion
 * 
 * These exceptions are maintained to avoid breaking changes. All NEW blueprints
 * MUST follow the standard format: [category-name]-v[version]
 * 
 * IMPORTANT: DO NOT change existing formIds as they may be referenced in stored data.
 * Changing a formId is a breaking change that requires data migration.
 */

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
  // Multi-Book Accounting - Basic version is internal only, Advanced is shown in UI
  'Multi-Book Accounting': 'multi-book-accounting-basic-v1', // Internal/legacy use only
  'Multi-Book': 'multi-book-accounting-basic-v1', // Internal/legacy use only
  'Advanced Accounting / Multi-Book': 'multi-book-accounting-advanced-v1', // Primary UI option
  'Advanced Accounting': 'multi-book-accounting-advanced-v1', // Alternative name mapping
  'Advanced Multi-Book': 'multi-book-accounting-advanced-v1', // Alternative name mapping
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
  'Incentive Compensation / Commissions': 'incentive-compensation-v1', // UI exact match
  'Demand Planning': 'demand-planning-v1',
  'DP': 'demand-planning-v1', // Alternative name mapping
  'Quality Management': 'quality-management-v1',
  'QMS': 'quality-management-v1', // Alternative name mapping
  'Quality Management (QMS)': 'quality-management-v1', // UI exact match
  'Warehouse Management': 'warehouse-management-v1',
  'WMS': 'warehouse-management-v1', // Alternative name mapping
  'Warehouse Management System (WMS)': 'warehouse-management-v1', // UI exact match
  'WIP & Routing': 'wip-routing-v1',
  'Manufacturing Execution': 'wip-routing-v1', // Alternative name mapping
  'Work Orders & Assemblies': 'work-orders-assemblies-v1',
  'Assembly Management': 'work-orders-assemblies-v1', // Alternative name mapping
  'Analytics Warehouse': 'analytics-warehouse-v1',
  'Data Warehouse': 'analytics-warehouse-v1', // Alternative name mapping
  'BI Analytics': 'analytics-warehouse-v1', // Alternative name mapping
  'Analytics & Data Warehouse': 'analytics-warehouse-v1', // UI exact match
  'Connector / Integration': 'connector-integration-v1',
  'Integration Platform': 'connector-integration-v1', // Alternative name mapping
  'iPaaS': 'connector-integration-v1', // Alternative name mapping
  'Integration / Connectors': 'connector-integration-v1', // UI exact match
  'Project Management': 'project-management-v1',
  'PSA': 'project-management-v1', // Professional Services Automation
  'PPM': 'project-management-v1', // Project Portfolio Management
  'E-commerce Website': 'ecommerce-website-v1',
  'Ecommerce': 'ecommerce-website-v1', // Alternative name mapping
  'Online Store': 'ecommerce-website-v1', // Alternative name mapping
  'Customer Account Management': 'customer-account-management-v2',
  'Customer Portal': 'customer-account-management-v2', // Alternative name mapping
  'Customer Self-Service': 'customer-account-management-v2', // Alternative name mapping
  'Customer Portals': 'customer-account-management-v2', // Alternative name mapping
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
  'multi-book-accounting-basic-v1': multiBookAccountingBlueprint,
  'multi-book-accounting-v1': multiBookAccountingBlueprint, // Legacy alias for backward compatibility
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
  'multi-book-accounting-advanced-v1': advancedAccountingMultibookBlueprint,
  'advanced-accounting-multibook-v3': advancedAccountingMultibookBlueprint, // Legacy alias for backward compatibility
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