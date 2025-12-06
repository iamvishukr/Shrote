"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { addTransaction, getCustomers, getAccounts } from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast"

export default function AddTransactionModal({ isOpen, onClose, onTransactionAdded }) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [customers, setCustomers] = useState([])
  const [accounts, setAccounts] = useState([])
  const [formData, setFormData] = useState({
    transactionFor: "customer",
    customerId: "",
    customerName: "",
    creditDebitType: "credit",
    amount: "",
    description: "",
    invoiceNumber: "",
    transactionId: "",
    paymentMethod: "bank_transfer",
    accountId: "",
    category: "",
    notes: "",
    invoiceDate: new Date().toISOString().split("T")[0],
  })

  useEffect(() => {
    const loadData = async () => {
      try {
        const [customersData, accountsData] = await Promise.all([getCustomers(), getAccounts()])
        setCustomers(customersData)
        setAccounts(accountsData)
      } catch (error) {
        console.error("Error loading data:", error)
      }
    }
    if (isOpen) {
      loadData()
    }
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Auto-populate customer name when customer is selected
    if (name === "customerId") {
      const selectedCustomer = customers.find((c) => c.id === value)
      if (selectedCustomer) {
        setFormData((prev) => ({
          ...prev,
          customerName: selectedCustomer.companyName || selectedCustomer.contactPerson,
        }))
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.amount || !formData.description || !formData.accountId) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    if (formData.transactionFor === "customer" && !formData.customerId) {
      toast({
        title: "Error",
        description: "Please select a customer",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    try {
      await addTransaction({
        transactionFor: formData.transactionFor,
        customerId: formData.customerId || null,
        customerName: formData.customerName || "Other",
        transactionType: formData.creditDebitType,
        amount: Number.parseFloat(formData.amount),
        description: formData.description,
        invoiceNumber: formData.invoiceNumber,
        transactionId: formData.transactionId,
        paymentMethod: formData.paymentMethod,
        accountId: formData.accountId,
        category: formData.category,
        notes: formData.notes,
        invoiceDate: formData.invoiceDate,
      })

      toast({
        title: "Success",
        description: "Transaction added successfully",
      })

      setFormData({
        transactionFor: "customer",
        customerId: "",
        customerName: "",
        creditDebitType: "credit",
        amount: "",
        description: "",
        invoiceNumber: "",
        transactionId: "",
        paymentMethod: "bank_transfer",
        accountId: "",
        category: "",
        notes: "",
        invoiceDate: new Date().toISOString().split("T")[0],
      })

      onTransactionAdded?.()
      onClose()
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background border border-input rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="sticky top-0 bg-background border-b border-input p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Add Transaction</h2>
            <p className="text-sm text-muted-foreground">Record a new credit or debit transaction</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground text-2xl font-bold">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Transaction For */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Transaction For *</label>
              <select
                name="transactionFor"
                value={formData.transactionFor}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="customer">Customer</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Customer Selection */}
            {formData.transactionFor === "customer" && (
              <div>
                <label className="block text-sm font-medium mb-2">Select Customer *</label>
                <select
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Choose a customer</option>
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.companyName || customer.contactPerson}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Credit/Debit and Account Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Credit/Debit Type *</label>
              <select
                name="creditDebitType"
                value={formData.creditDebitType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="credit">Credit (Income)</option>
                <option value="debit">Debit (Expense)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Select Account *</label>
              <select
                name="accountId"
                value={formData.accountId}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="">Choose an account</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.accountName} ({account.accountNumber})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Amount and Invoice Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          {/* Transaction ID and Payment Method */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Transaction ID (For Online Payments)</label>
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                placeholder="e.g., TXN123456789"
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
          </div>

          {/* Description and Invoice Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <label className="block text-sm font-medium mb-2">Invoice Date</label>
              <input
                type="date"
                name="invoiceDate"
                value={formData.invoiceDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>
          </div>

          {/* Category */}
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

          {/* Notes */}
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

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? "Adding..." : "Add Transaction"}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
