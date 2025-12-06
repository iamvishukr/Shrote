"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { addTransaction } from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast"

export default function AddTransaction({ onTransactionAdded }) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    transactionType: "credit",
    amount: "",
    description: "",
    invoiceNumber: "",
    reference: "",
    paymentMethod: "bank_transfer",
    category: "",
    notes: "",
    invoiceDate: new Date().toISOString().split("T")[0],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.amount || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    try {
      await addTransaction({
        ...formData,
        amount: Number.parseFloat(formData.amount),
      })

      toast({
        title: "Success",
        description: "Transaction added successfully",
      })

      setFormData({
        transactionType: "credit",
        amount: "",
        description: "",
        invoiceNumber: "",
        reference: "",
        paymentMethod: "bank_transfer",
        category: "",
        notes: "",
        invoiceDate: new Date().toISOString().split("T")[0],
      })

      onTransactionAdded?.()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add transaction",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Transaction</CardTitle>
        <CardDescription>Record a credit or debit transaction for your company</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Transaction Type *</label>
              <select
                name="transactionType"
                value={formData.transactionType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="credit">Credit (Income)</option>
                <option value="debit">Debit (Expense)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Amount * (₹)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description *</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="e.g., Software Development Services"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Invoice Number</label>
              <input
                type="text"
                name="invoiceNumber"
                value={formData.invoiceNumber}
                onChange={handleChange}
                placeholder="INV-001"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Invoice Date</label>
              <input
                type="date"
                name="invoiceDate"
                value={formData.invoiceDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="bank_transfer">Bank Transfer</option>
                <option value="cash">Cash</option>
                <option value="cheque">Cheque</option>
                <option value="credit_card">Credit Card</option>
                <option value="upi">UPI</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g., Service Revenue"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Reference/GST Number</label>
              <input
                type="text"
                name="reference"
                value={formData.reference}
                onChange={handleChange}
                placeholder="e.g., GSTIN or PO Number"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional notes or remarks"
              rows="3"
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Adding..." : "Add Transaction"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
