'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Sparkles, 
  Link, 
  Linkedin, 
  Upload, 
  ArrowRight,
  X,
  FileText
} from 'lucide-react'
import { type StepComponentProps } from '@/types/rfq-wizard'
import { cn } from '@/lib/utils'

interface RfqDataInputStepProps extends StepComponentProps {
  categoryName: string
  onAnalyze: (data: {
    websiteUrl: string
    linkedinUrl: string
    documents: File[]
  }) => void
}

export function RfqDataInputStep({
  formData,
  onDataChange,
  onNext,
  categoryName,
  onAnalyze
}: RfqDataInputStepProps) {
  const [websiteUrl, setWebsiteUrl] = useState(formData.dataInput?.websiteUrl || '')
  const [linkedinUrl, setLinkedinUrl] = useState(formData.dataInput?.linkedinUrl || '')
  const [documents, setDocuments] = useState<File[]>(formData.dataInput?.documents || [])
  const [isDragging, setIsDragging] = useState(false)

  const hasInput = websiteUrl || linkedinUrl || documents.length > 0

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files).filter(file => {
      const isValidType = file.type === 'application/pdf' || 
                         file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB
      return isValidType && isValidSize
    })
    
    setDocuments(prev => [...prev, ...files])
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter(file => {
      const isValidType = file.type === 'application/pdf' || 
                         file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB
      return isValidType && isValidSize
    })
    
    setDocuments(prev => [...prev, ...files])
  }

  const removeDocument = (index: number) => {
    setDocuments(prev => prev.filter((_, i) => i !== index))
  }

  const handleAnalyzeAndBuild = async () => {
    // Update form data
    onDataChange({
      ...formData,
      dataInput: {
        websiteUrl,
        linkedinUrl,
        documents
      }
    })
    
    // Trigger analysis (parent will handle navigation after analysis)
    onAnalyze({
      websiteUrl,
      linkedinUrl,
      documents
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-stackmatch-blue/20 to-trust-green/20 rounded-full flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-stackmatch-blue" />
        </div>
        <h1 className="text-3xl font-bold text-stackmatch-navy">
          Let's Build Your RFQ
        </h1>
        <p className="text-lg text-medium-gray max-w-2xl mx-auto">
          Give our AI some context about your business to create a detailed first draft for your {categoryName} project.
        </p>
      </div>

      {/* Input Cards */}
      <div className="space-y-6">
        {/* Company Website Card */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-stackmatch-blue/10 rounded-lg flex items-center justify-center">
              <Link className="w-5 h-5 text-stackmatch-blue" />
            </div>
            <h3 className="text-lg font-semibold text-stackmatch-navy">
              Company Website
            </h3>
          </div>
          <Input
            type="url"
            placeholder="Your company website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="w-full"
          />
          <p className="text-sm text-medium-gray">
            Our AI will analyze your website to understand your business model, size, and industry.
          </p>
        </Card>

        {/* LinkedIn Card */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0077B5]/10 rounded-lg flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-[#0077B5]" />
            </div>
            <h3 className="text-lg font-semibold text-stackmatch-navy">
              Company LinkedIn Page
            </h3>
          </div>
          <Input
            type="url"
            placeholder="Your company LinkedIn page URL"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
            className="w-full"
          />
          <p className="text-sm text-medium-gray">
            LinkedIn provides additional context about your company culture and team.
          </p>
        </Card>

        {/* Upload Document Card */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-trust-green/10 rounded-lg flex items-center justify-center">
              <Upload className="w-5 h-5 text-trust-green" />
            </div>
            <h3 className="text-lg font-semibold text-stackmatch-navy">
              Upload a Document
            </h3>
          </div>
          
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
              isDragging ? "border-stackmatch-blue bg-stackmatch-blue/5" : "border-light-gray hover:border-medium-gray"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            <Upload className="w-8 h-8 mx-auto mb-2 text-medium-gray" />
            <p className="text-sm text-medium-gray">
              Drag and drop or click to browse
            </p>
            <input
              id="file-upload"
              type="file"
              accept=".pdf,.docx"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
          
          <p className="text-xs text-medium-gray">
            PDF, DOCX files up to 10MB each
          </p>
          
          {documents.length > 0 && (
            <div className="space-y-2">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-background-gray rounded">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-medium-gray" />
                    <span className="text-sm text-charcoal truncate max-w-[150px]">
                      {doc.name}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeDocument(index)
                    }}
                    className="text-medium-gray hover:text-danger-red transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
          
          <p className="text-sm text-medium-gray">
            This could be a business plan, project overview, or an existing requirements list.
          </p>
        </Card>
      </div>

      {/* What happens next box */}
      <Card className="p-6 bg-trust-green/5 border-trust-green/20">
        <h3 className="text-lg font-semibold text-stackmatch-navy mb-3">
          What happens next?
        </h3>
        <ul className="space-y-2 text-sm text-charcoal">
          <li className="flex items-start gap-2">
            <span className="text-trust-green mt-1">•</span>
            <span>Our AI will analyze the information you provide</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-trust-green mt-1">•</span>
            <span>Understand your business model and requirements</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-trust-green mt-1">•</span>
            <span>Generate a comprehensive RFQ draft tailored to your needs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-trust-green mt-1">•</span>
            <span>Pre-fill relevant information in the questionnaire</span>
          </li>
        </ul>
      </Card>

      {/* CTA Button */}
      <div className="flex justify-center pt-4">
        <Button
          onClick={handleAnalyzeAndBuild}
          disabled={!hasInput}
          className="bg-stackmatch-blue hover:bg-stackmatch-blue/90 text-white px-8 py-6 text-lg"
        >
          Analyze & Build First Draft
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}