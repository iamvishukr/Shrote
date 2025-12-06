"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { addAccount, getAccounts, deleteAccount, updateAccount } from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function AccountsSetupPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [accounts, setAccounts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    accountName: "",
    accountNumber: "",
    accountType: "Savings",
    bankName: "",
    ifscCode: "",
    branchName: "",
    accountHolderName: "",
    openingBalance: "",
    notes: "",
  })

  useEffect(() => {
    fetchAccounts()
  }, [])

  const fetchAccounts = async () => {
    try {
      const data = await getAccounts()
      setAccounts(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch accounts",
        variant: "destructive",
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.accountName || !formData.accountNumber || !formData.bankName) {
      toast({
        title: "Error",
        description: "Please fill in required fields",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    try {
      if (editingId) {
        await updateAccount(editingId, formData)
        toast({
          title: "Success",
          description: "Account updated successfully",
        })
      } else {
        await addAccount(formData)
        toast({
          title: "Success",
          description: "Account added successfully",
        })
      }

      resetForm()
      fetchAccounts()
    } catch (error) {
      toast({
        title: "Error",
        description: editingId ? "Failed to update account" : "Failed to add account",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      accountName: "",
      accountNumber: "",
      accountType: "Savings",
      bankName: "",
      ifscCode: "",
      branchName: "",
      accountHolderName: "",
      openingBalance: "",
      notes: "",
    })
    setEditingId(null)
    setShowForm(false)
  }

  const handleEdit = (account) => {
    setFormData(account)
    setEditingId(account.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this account?")) return

    try {
      await deleteAccount(id)
      toast({
        title: "Success",
        description: "Account deleted successfully",
      })
      fetchAccounts()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete account",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Bank Account Setup</h1>
            <p className="text-muted-foreground">Configure your company bank accounts for transactions</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => (showForm ? resetForm() : setShowForm(true))}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 font-medium"
            >
              {showForm ? "Cancel" : "+ Add Account"}
            </button>
            <Link
              href="/accounts"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 font-medium"
            >
              Back to Accounts
            </Link>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>{editingId ? "Edit Account" : "Add New Account"}</CardTitle>
              <CardDescription>Configure a bank account for your transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Account Name *</label>
                    <input
                      type="text"
                      name="accountName"
                      value={formData.accountName}
                      onChange={handleChange}
                      placeholder="e.g., Main Operating Account"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Account Number *</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      placeholder="Enter account number"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Account Type</label>
                    <select
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="Savings">Savings</option>
                      <option value="Current">Current</option>
                      <option value="Business">Business</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Bank Name *</label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      placeholder="Enter bank name"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">IFSC Code</label>
                    <input
                      type="text"
                      name="ifscCode"
                      value={formData.ifscCode}
                      onChange={handleChange}
                      placeholder="Enter IFSC code"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Branch Name</label>
                    <input
                      type="text"
                      name="branchName"
                      value={formData.branchName}
                      onChange={handleChange}
                      placeholder="Enter branch name"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Account Holder Name</label>
                    <input
                      type="text"
                      name="accountHolderName"
                      value={formData.accountHolderName}
                      onChange={handleChange}
                      placeholder="Enter account holder name"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Opening Balance</label>
                    <input
                      type="number"
                      name="openingBalance"
                      value={formData.openingBalance}
                      onChange={handleChange}
                      placeholder="0.00"
                      step="0.01"
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
                    placeholder="Additional notes about this account"
                    rows="3"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Saving..." : editingId ? "Update Account" : "Add Account"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Accounts List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Accounts</CardTitle>
            <CardDescription>Manage all your bank accounts</CardDescription>
          </CardHeader>
          <CardContent>
            {accounts.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {showForm
                  ? "Add your first account"
                  : "No accounts configured yet. Click 'Add Account' to get started."}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-input bg-muted/50">
                    <tr>
                      <th className="text-left px-4 py-2">Account Name</th>
                      <th className="text-left px-4 py-2">Account Number</th>
                      <th className="text-left px-4 py-2">Type</th>
                      <th className="text-left px-4 py-2">Bank Name</th>
                      <th className="text-left px-4 py-2">IFSC</th>
                      <th className="text-center px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accounts.map((account) => (
                      <tr key={account.id} className="border-b border-input hover:bg-muted/50">
                        <td className="px-4 py-3 font-medium">{account.accountName}</td>
                        <td className="px-4 py-3">{account.accountNumber}</td>
                        <td className="px-4 py-3">{account.accountType}</td>
                        <td className="px-4 py-3">{account.bankName}</td>
                        <td className="px-4 py-3">{account.ifscCode || "-"}</td>
                        <td className="px-4 py-3 text-center space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(account)}>
                            Edit
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDelete(account.id)}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
