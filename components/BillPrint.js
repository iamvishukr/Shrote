"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getCompanyInfo } from "@/lib/firebase"
import { useRef } from "react"

export default function BillPrint({ transaction, onClose }) {
  const [companyInfo, setCompanyInfo] = useState(null)
  const printRef = useRef()

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      const info = await getCompanyInfo()
      setCompanyInfo(info)
    }
    fetchCompanyInfo()
  }, [])

  const handlePrint = () => {
    const printWindow = window.open("", "", "width=900,height=600")
    printWindow.document.write(printRef.current.innerHTML)
    printWindow.document.close()
    printWindow.print()
  }

  if (!transaction) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bill Print Preview</CardTitle>
        <CardDescription>Standard IT Company Invoice Format</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div ref={printRef} className="bg-white text-black p-8 space-y-6" style={{ pageBreakAfter: "always" }}>
          {/* Header */}
          <div className="border-b-2 border-gray-800 pb-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-blue-600">{companyInfo?.companyName || "Your Company Name"}</h1>
                <p className="text-sm text-gray-600">{companyInfo?.companyType || "IT Services Company"}</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg">INVOICE</p>
              </div>
              <div className="text-right text-sm">
                <p>
                  <strong>Invoice #:</strong> {transaction.invoiceNumber}
                </p>
                <p>
                  <strong>Date:</strong> {new Date(transaction.invoiceDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-bold mb-2">FROM:</h3>
              <p className="font-semibold">{companyInfo?.companyName || "Your Company"}</p>
              <p>{companyInfo?.address || "Company Address"}</p>
              <p>
                {companyInfo?.city || "City"}, {companyInfo?.state || "State"} {companyInfo?.zipCode || "000000"}
              </p>
              <p>Phone: {companyInfo?.phone || "+91-XXXXXXXXXX"}</p>
              <p>Email: {companyInfo?.email || "info@company.com"}</p>
              <p>GSTIN: {companyInfo?.gstin || "GSTIN000000"}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">BILL TO:</h3>
              <p className="font-semibold">{transaction.clientName || "Client Name"}</p>
              <p>{transaction.clientAddress || "Client Address"}</p>
              <p>Phone: {transaction.clientPhone || "N/A"}</p>
            </div>
          </div>

          {/* Item Details */}
          <div>
            <table className="w-full text-sm border-collapse border border-gray-800">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-800 p-2 text-left">Description</th>
                  <th className="border border-gray-800 p-2 text-right">Quantity</th>
                  <th className="border border-gray-800 p-2 text-right">Rate</th>
                  <th className="border border-gray-800 p-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-800 p-2">{transaction.description}</td>
                  <td className="border border-gray-800 p-2 text-right">1</td>
                  <td className="border border-gray-800 p-2 text-right">₹{transaction.amount.toFixed(2)}</td>
                  <td className="border border-gray-800 p-2 text-right">₹{transaction.amount.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-sm">
              <p>
                <strong>Payment Terms:</strong> {transaction.paymentMethod}
              </p>
              <p>
                <strong>Reference:</strong> {transaction.reference || "N/A"}
              </p>
              <p>
                <strong>Notes:</strong> {transaction.notes || "Thank you for your business"}
              </p>
            </div>
            <div className="text-right space-y-2">
              <div className="border-t-2 border-gray-800 pt-2">
                <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                  <span className="text-right">Subtotal:</span>
                  <span className="text-right">₹{transaction.amount.toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                  <span className="text-right">GST (18%):</span>
                  <span className="text-right">₹{(transaction.amount * 0.18).toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 font-bold text-lg border-t-2 border-gray-800 pt-2">
                  <span className="text-right">TOTAL:</span>
                  <span className="text-right">₹{(transaction.amount * 1.18).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t-2 border-gray-800 pt-4 text-center text-xs text-gray-600">
            <p>This is a computer-generated document. No signature required.</p>
            <p>Thank you for your business!</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={handlePrint} className="flex-1">
            Print Invoice
          </Button>
          <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
            Close
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
