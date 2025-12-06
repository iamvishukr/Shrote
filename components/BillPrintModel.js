"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { getCompanyInfo } from "@/lib/firebase"
import { useRef } from "react"

export default function BillPrintModal({ isOpen, transaction, onClose }) {
  const [companyInfo, setCompanyInfo] = useState(null)
  const printRef = useRef()

  useEffect(() => {
    if (isOpen) {
      const fetchCompanyInfo = async () => {
        const info = await getCompanyInfo()
        setCompanyInfo(info)
      }
      fetchCompanyInfo()
    }
  }, [isOpen])

  const handlePrint = () => {
    const printWindow = window.open("", "", "width=900,height=600")
    printWindow.document.write(printRef.current.innerHTML)
    printWindow.document.close()
    printWindow.print()
  }

  const calculateGSTBreakup = (amount, gstRate = 18) => {
    // Amount is inclusive of GST
    // Formula: BaseAmount = TotalAmount / (1 + GST_RATE/100)
    // GSTAmount = TotalAmount - BaseAmount
    const divisor = 1 + gstRate / 100
    const baseAmount = amount / divisor
    const gstAmount = amount - baseAmount
    return {
      baseAmount: baseAmount.toFixed(2),
      gstAmount: gstAmount.toFixed(2),
      gstRate: gstRate,
      totalAmount: amount.toFixed(2),
    }
  }

  if (!isOpen || !transaction) return null

  const breakup = calculateGSTBreakup(transaction.amount)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background border border-input rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="sticky top-0 bg-background border-b border-input p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Print Invoice</h2>
            <p className="text-sm text-muted-foreground">Standard IT Company Invoice Format</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground text-2xl font-bold">
            ×
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div ref={printRef} className="bg-white text-black p-8 space-y-6">
            {/* Header */}
            <div className="border-b-2 border-gray-800 pb-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-blue-600">
                    {companyInfo?.companyName || "Your Company Name"}
                  </h1>
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
                  {transaction.transactionId && (
                    <p>
                      <strong>Transaction ID:</strong> {transaction.transactionId}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Company and Customer Details */}
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
                <p className="font-semibold">{transaction.customerName || "Client Name"}</p>
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
                    <td className="border border-gray-800 p-2 text-right">₹{breakup.baseAmount}</td>
                    <td className="border border-gray-800 p-2 text-right">₹{breakup.baseAmount}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-sm">
                <p>
                  <strong>Payment Method:</strong> {transaction.paymentMethod}
                </p>
                <p>
                  <strong>Category:</strong> {transaction.category || "N/A"}
                </p>
                {transaction.notes && (
                  <p>
                    <strong>Notes:</strong> {transaction.notes}
                  </p>
                )}
              </div>
              <div className="text-right space-y-2">
                <div className="border-t-2 border-gray-800 pt-2">
                  <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                    <span className="text-right">Subtotal (excl. GST):</span>
                    <span className="text-right font-semibold">₹{breakup.baseAmount}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                    <span className="text-right">GST ({breakup.gstRate}%):</span>
                    <span className="text-right font-semibold">₹{breakup.gstAmount}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 font-bold text-lg border-t-2 border-gray-800 pt-2">
                    <span className="text-right">TOTAL (incl. GST):</span>
                    <span className="text-right">₹{breakup.totalAmount}</span>
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

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button onClick={handlePrint} className="flex-1">
              Print Invoice
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
