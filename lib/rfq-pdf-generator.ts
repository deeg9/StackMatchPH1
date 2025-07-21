// Mock PDF generator for Phase 1
// In production, this would use a library like jsPDF or react-pdf

interface RFQData {
  title: string
  category: string
  company: string
  coreRequirements?: {
    employeeCount?: string
    features?: string[]
    integrations?: string[]
  }
  technicalSpecs?: {
    deployment?: string
    scalability?: string
    security?: string[]
    compliance?: string[]
  }
  budget?: {
    range?: string
    paymentTerms?: string
    contractLength?: string
  }
  timeline?: {
    startDate?: string
    implementationDeadline?: string
    goLiveDate?: string
    evaluationPeriod?: string
  }
  decisionCriteria?: {
    priorities?: string[]
    dealBreakers?: string[]
    evaluationProcess?: string
  }
  businessContext?: {
    currentChallenges?: string[]
    expectedOutcomes?: string[]
    successMetrics?: string[]
  }
  stakeholders?: {
    decisionMakers?: Array<{ name: string; role: string }>
    endUsers?: Array<{ department: string; count: string }>
    itTeam?: { size: string; expertise: string[] }
  }
  additionalInfo?: {
    specialRequirements?: string
    questions?: string[]
    attachments?: string[]
  }
}

export async function generateRFQPDF(rfqData: RFQData): Promise<Blob> {
  // For Phase 1, we'll create a simple HTML representation and trigger download
  // In production, this would generate an actual PDF
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .header { text-align: center; margin-bottom: 40px; }
        .watermark { 
          position: fixed; 
          bottom: 20px; 
          right: 20px; 
          opacity: 0.5; 
          font-size: 12px; 
          color: #4A73CC;
        }
        h1 { color: #1A2B4C; }
        h2 { color: #4A73CC; margin-top: 30px; }
        h3 { color: #1A2B4C; margin-top: 20px; }
        .section { margin-bottom: 30px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #6B7280; }
        ul { margin-top: 5px; }
        .footer { margin-top: 50px; text-align: center; color: #6B7280; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Request for Quotation (RFQ)</h1>
        <p>${rfqData.title}</p>
        <p>Category: ${rfqData.category}</p>
        <p>Company: ${rfqData.company}</p>
      </div>

      ${rfqData.coreRequirements ? `
      <div class="section">
        <h2>Core Requirements</h2>
        ${rfqData.coreRequirements.employeeCount ? `
          <div class="field">
            <span class="label">Employee Count:</span> ${rfqData.coreRequirements.employeeCount}
          </div>
        ` : ''}
        ${rfqData.coreRequirements.features?.length ? `
          <div class="field">
            <span class="label">Required Features:</span>
            <ul>
              ${rfqData.coreRequirements.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        ${rfqData.coreRequirements.integrations?.length ? `
          <div class="field">
            <span class="label">Required Integrations:</span>
            <ul>
              ${rfqData.coreRequirements.integrations.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
      ` : ''}

      ${rfqData.technicalSpecs ? `
      <div class="section">
        <h2>Technical Specifications</h2>
        ${rfqData.technicalSpecs.deployment ? `
          <div class="field">
            <span class="label">Deployment:</span> ${rfqData.technicalSpecs.deployment}
          </div>
        ` : ''}
        ${rfqData.technicalSpecs.scalability ? `
          <div class="field">
            <span class="label">Scalability Requirements:</span> ${rfqData.technicalSpecs.scalability}
          </div>
        ` : ''}
        ${rfqData.technicalSpecs.security?.length ? `
          <div class="field">
            <span class="label">Security Requirements:</span>
            <ul>
              ${rfqData.technicalSpecs.security.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
      ` : ''}

      ${rfqData.budget ? `
      <div class="section">
        <h2>Budget & Contract</h2>
        ${rfqData.budget.range ? `
          <div class="field">
            <span class="label">Budget Range:</span> ${rfqData.budget.range}
          </div>
        ` : ''}
        ${rfqData.budget.paymentTerms ? `
          <div class="field">
            <span class="label">Payment Terms:</span> ${rfqData.budget.paymentTerms}
          </div>
        ` : ''}
        ${rfqData.budget.contractLength ? `
          <div class="field">
            <span class="label">Contract Length:</span> ${rfqData.budget.contractLength}
          </div>
        ` : ''}
      </div>
      ` : ''}

      ${rfqData.timeline ? `
      <div class="section">
        <h2>Timeline</h2>
        ${rfqData.timeline.startDate ? `
          <div class="field">
            <span class="label">Desired Start Date:</span> ${rfqData.timeline.startDate}
          </div>
        ` : ''}
        ${rfqData.timeline.implementationDeadline ? `
          <div class="field">
            <span class="label">Implementation Deadline:</span> ${rfqData.timeline.implementationDeadline}
          </div>
        ` : ''}
        ${rfqData.timeline.goLiveDate ? `
          <div class="field">
            <span class="label">Target Go-Live Date:</span> ${rfqData.timeline.goLiveDate}
          </div>
        ` : ''}
      </div>
      ` : ''}

      <div class="footer">
        <p>Generated on ${new Date().toLocaleDateString()}</p>
      </div>

      <div class="watermark">
        Created with StackMatch
      </div>
    </body>
    </html>
  `

  // Convert HTML string to Blob
  const blob = new Blob([html], { type: 'text/html' })
  return blob
}

export function downloadRFQPDF(rfqData: RFQData) {
  generateRFQPDF(rfqData).then(blob => {
    // Create a temporary URL for the blob
    const url = window.URL.createObjectURL(blob)
    
    // Create a temporary anchor element and trigger download
    const a = document.createElement('a')
    a.href = url
    a.download = `RFQ_${rfqData.title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.html`
    document.body.appendChild(a)
    a.click()
    
    // Clean up
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  })
}