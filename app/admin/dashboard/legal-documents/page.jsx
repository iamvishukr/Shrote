"use client"

import { useState, useEffect } from "react"
import { getLegalDocuments, addLegalDocument, deleteLegalDocument, updateLegalDocument } from "@/lib/firebase"
import Link from "next/link"

const DEFAULT_DOCUMENTS = [
  {
    title: "Terms & Conditions",
    category: "Legal",
    content: `Legal Name: Shrote Technology
Billing Currency: INR & USD

1. INTRODUCTION
These Terms & Conditions ("Terms") govern all services provided by Shrote Technology ("Company", "We", "Us") to any client ("Client", "You"). By engaging with our services, you agree to these Terms.

2. SERVICES COVERED
These Terms apply to all services including:
- Custom software development
- Mobile & web applications
- ERP systems
- Automation & workflow tools
- SaaS products
- E-commerce platforms
- Website development
- IT consulting
- UI/UX design
- Cloud & integrations
- Support & AMC services

3. ENGAGEMENT MODELS
- Milestone based
- Hourly billing
- Retainer
- SaaS subscription

4. PAYMENT TERMS
- Payment in INR or USD.
- Invoices payable within 7–15 days.
- Taxes extra.
- Delayed payments may delay project timelines.

5. DELIVERABLES & ACCEPTANCE
A deliverable is considered accepted if no issues are raised within 7 days.

6. INTELLECTUAL PROPERTY
IP transfers after full payment. Shrote retains internal frameworks and reusable components.

7. CONFIDENTIALITY
Both parties agree to protect confidential data.

8. DATA PRIVACY & SECURITY
Shrote will take reasonable measures but is not liable for breaches via third-party systems.

9. WARRANTY
30-day bug-fix warranty after project delivery.

10. SUPPORT & MAINTENANCE
Provided via AMC, SLA, or hourly basis.

11. CHANGE REQUESTS
Extra features or changes are billed separately.

12. LIMITATION OF LIABILITY
Liability capped to amount paid by client.

13. TERMINATION
14-day written notice required. Client must pay for work completed.

14. GOVERNING LAW
Indian law for Indian clients; global contract standards for international clients.`,
  },
  {
    title: "Financial Agreement – Milestone Based",
    category: "Financial",
    content: `This agreement is between Shrote Technology ("Company") and the Client.

1. PROJECT SUMMARY
Company will deliver services as per agreed proposal under milestone-based payments.

2. MILESTONES
1. Planning & Wireframes – 20%
2. UI/UX & Mockups – 20%
3. Development – 30%
4. Integration & Testing – 20%
5. Deployment & Handover – 10%

3. PAYMENT TERMS
Payments must be cleared before the next milestone.

4. TIMELINE
Depends on timely approvals and payments by client.

5. CLIENT RESPONSIBILITIES
Provide inputs, approvals, and required credentials.

6. ACCEPTANCE CRITERIA
Milestone is accepted after delivery or if no issues are reported within 7 days.

7. CHANGE REQUESTS
Any scope change is billed separately.

8. LEGAL CLAUSES
IP transfer after full payment. No refunds for completed milestones.`,
  },
  {
    title: "Financial Agreement – Hourly Billing",
    category: "Financial",
    content: `Agreement between Shrote Technology and the Client.

1. ENGAGEMENT MODEL
Client agrees to hourly billing for development, design, support, and consulting.

2. HOURLY RATES
Rates vary by developer, designer, PM, QA, etc. (To be filled per project.)

3. BILLING CYCLE
Weekly or monthly billing. Timesheets provided. Payments due within 7–10 days.

4. WORK LOGS
Company shares daily/weekly work logs.

5. SCOPE
Includes development, bug fixes, enhancements, UI/UX, integrations, and consulting.

6. URGENT WORK
Urgent tasks may include additional charges.

7. LEGAL CONDITIONS
IP transfer after full payment. No refunds on billed hours. Confidentiality must be maintained.`,
  },
]

export default function LegalDocumentsPage() {
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingDoc, setEditingDoc] = useState(null)
  const [viewingDoc, setViewingDoc] = useState(null)
  const [formData, setFormData] = useState({ title: "", category: "Legal", content: "" })

  useEffect(() => {
    fetchDocuments()
  }, [])

  const fetchDocuments = async () => {
    try {
      setLoading(true)
      const docs = await getLegalDocuments()
      setDocuments(docs)
    } catch (error) {
      console.error("Error fetching documents:", error)
      // Load default documents on first load
      if (documents.length === 0) {
        setDocuments(DEFAULT_DOCUMENTS)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleAddDocument = async () => {
    if (!formData.title || !formData.content) {
      alert("Please fill in all fields")
      return
    }

    try {
      if (editingDoc) {
        await updateLegalDocument(editingDoc.id, formData)
      } else {
        await addLegalDocument(formData)
      }
      await fetchDocuments()
      setShowModal(false)
      setEditingDoc(null)
      setFormData({ title: "", category: "Legal", content: "" })
    } catch (error) {
      console.error("Error saving document:", error)
      alert("Error saving document")
    }
  }

  const handleDeleteDocument = async (id) => {
    if (confirm("Are you sure you want to delete this document?")) {
      try {
        await deleteLegalDocument(id)
        await fetchDocuments()
      } catch (error) {
        console.error("Error deleting document:", error)
        alert("Error deleting document")
      }
    }
  }

  const handleEdit = (doc) => {
    setEditingDoc(doc)
    setFormData({ title: doc.title, category: doc.category, content: doc.content })
    setShowModal(true)
    setViewingDoc(null)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingDoc(null)
    setFormData({ title: "", category: "Legal", content: "" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Legal Documents</h1>
            <p className="text-muted-foreground">Manage terms, conditions, and financial agreements</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setEditingDoc(null)
                setFormData({ title: "", category: "Legal", content: "" })
                setShowModal(true)
              }}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 font-medium"
            >
              + Add Document
            </button>
            <Link
              href="/accounts"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 font-medium"
            >
              Back to Accounts
            </Link>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id || doc.title}
              className="border border-input rounded-lg p-6 bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-foreground">{doc.title}</h2>
                  <p className="text-sm text-muted-foreground">Category: {doc.category}</p>
                </div>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{doc.category}</span>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{doc.content}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => setViewingDoc(doc)}
                  className="flex-1 px-3 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 text-sm font-medium"
                >
                  View
                </button>
                <button
                  onClick={() => handleEdit(doc)}
                  className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:opacity-90 text-sm font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteDocument(doc.id)}
                  className="flex-1 px-3 py-2 bg-red-600 text-white rounded-md hover:opacity-90 text-sm font-medium"
                  disabled={!doc.id}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Modal */}
        {viewingDoc && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-background border border-input rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
              <div className="sticky top-0 bg-background border-b border-input p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{viewingDoc.title}</h2>
                  <p className="text-sm text-muted-foreground">Category: {viewingDoc.category}</p>
                </div>
                <button
                  onClick={() => setViewingDoc(null)}
                  className="text-muted-foreground hover:text-foreground text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <div className="bg-card p-6 rounded-lg border border-input whitespace-pre-wrap text-sm leading-relaxed font-mono">
                  {viewingDoc.content}
                </div>
              </div>
              <div className="border-t border-input p-6 flex gap-3">
                <button
                  onClick={() => {
                    handleEdit(viewingDoc)
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:opacity-90 font-medium"
                >
                  Edit Document
                </button>
                <button
                  onClick={() => setViewingDoc(null)}
                  className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-background border border-input rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
              <div className="sticky top-0 bg-background border-b border-input p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{editingDoc ? "Edit Document" : "Add New Document"}</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-muted-foreground hover:text-foreground text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Document Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground"
                    placeholder="e.g., Terms & Conditions"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="Legal">Legal</option>
                    <option value="Financial">Financial</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground font-mono text-sm"
                    rows="15"
                    placeholder="Enter document content..."
                  />
                </div>
              </div>

              <div className="border-t border-input p-6 flex gap-3">
                <button
                  onClick={handleAddDocument}
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 font-medium"
                >
                  {editingDoc ? "Update Document" : "Add Document"}
                </button>
                <button
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
