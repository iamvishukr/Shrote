"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { addCustomer, getCustomers, deleteCustomer, updateCustomer } from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function CustomersPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [customers, setCustomers] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    gstin: "",
    panNumber: "",
    bankAccountNumber: "",
    bankName: "",
    ifscCode: "",
    websiteUrl: "",
    industryType: "",
    totalEmployees: "",
    annualTurnover: "",
    businessType: "B2B",
    notes: "",
  })

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    try {
      const data = await getCustomers()
      setCustomers(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch customers",
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

    if (!formData.companyName || !formData.contactPerson || !formData.email) {
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
        await updateCustomer(editingId, formData)
        toast({
          title: "Success",
          description: "Customer updated successfully",
        })
      } else {
        await addCustomer(formData)
        toast({
          title: "Success",
          description: "Customer added successfully",
        })
      }

      resetForm()
      fetchCustomers()
    } catch (error) {
      toast({
        title: "Error",
        description: editingId ? "Failed to update customer" : "Failed to add customer",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      mobileNumber: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      gstin: "",
      panNumber: "",
      bankAccountNumber: "",
      bankName: "",
      ifscCode: "",
      websiteUrl: "",
      industryType: "",
      totalEmployees: "",
      annualTurnover: "",
      businessType: "B2B",
      notes: "",
    })
    setEditingId(null)
    setShowForm(false)
  }

  const handleEdit = (customer) => {
    setFormData(customer)
    setEditingId(customer.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this customer?")) return

    try {
      await deleteCustomer(id)
      toast({
        title: "Success",
        description: "Customer deleted successfully",
      })
      fetchCustomers()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete customer",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Customer Management</h1>
            <p className="text-muted-foreground">Manage all your customers and their details</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => (showForm ? resetForm() : setShowForm(true))}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 font-medium"
            >
              {showForm ? "Cancel" : "+ Add Customer"}
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
              <CardTitle>{editingId ? "Edit Customer" : "Add New Customer"}</CardTitle>
              <CardDescription>Fill in all customer details for your records</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Contact Person *</label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="Enter contact person name"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mobile Number</label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Business Type</label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="B2B">B2B</option>
                        <option value="B2C">B2C</option>
                        <option value="Startup">Startup</option>
                        <option value="Enterprise">Enterprise</option>
                        <option value="Government">Government</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Address Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter complete address"
                        rows="2"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Zip Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        placeholder="Enter zip code"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Website URL</label>
                      <input
                        type="url"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        placeholder="Enter website URL"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                  </div>
                </div>

                {/* Tax & Professional Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Tax & Professional Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">GSTIN</label>
                      <input
                        type="text"
                        name="gstin"
                        value={formData.gstin}
                        onChange={handleChange}
                        placeholder="Enter GSTIN"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">PAN Number</label>
                      <input
                        type="text"
                        name="panNumber"
                        value={formData.panNumber}
                        onChange={handleChange}
                        placeholder="Enter PAN number"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                  </div>
                </div>

                {/* Bank Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Bank Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Bank Name</label>
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
                      <label className="block text-sm font-medium mb-2">Account Number</label>
                      <input
                        type="text"
                        name="bankAccountNumber"
                        value={formData.bankAccountNumber}
                        onChange={handleChange}
                        placeholder="Enter account number"
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
                  </div>
                </div>

                {/* Business Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Business Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Industry Type</label>
                      <input
                        type="text"
                        name="industryType"
                        value={formData.industryType}
                        onChange={handleChange}
                        placeholder="e.g., IT Services, Manufacturing"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Total Employees</label>
                      <input
                        type="number"
                        name="totalEmployees"
                        value={formData.totalEmployees}
                        onChange={handleChange}
                        placeholder="Enter number of employees"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Annual Turnover</label>
                      <input
                        type="text"
                        name="annualTurnover"
                        value={formData.annualTurnover}
                        onChange={handleChange}
                        placeholder="e.g., $1M - $5M"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium mb-2">Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Additional notes about this customer"
                    rows="3"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Saving..." : editingId ? "Update Customer" : "Add Customer"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Customers List */}
        <Card>
          <CardHeader>
            <CardTitle>Customers</CardTitle>
            <CardDescription>View and manage all customer records</CardDescription>
          </CardHeader>
          <CardContent>
            {customers.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {showForm ? "Add your first customer" : "No customers added yet. Click 'Add Customer' to get started."}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-input bg-muted/50">
                    <tr>
                      <th className="text-left px-4 py-2">Company Name</th>
                      <th className="text-left px-4 py-2">Contact Person</th>
                      <th className="text-left px-4 py-2">Email</th>
                      <th className="text-left px-4 py-2">Phone</th>
                      <th className="text-left px-4 py-2">GSTIN</th>
                      <th className="text-left px-4 py-2">Industry</th>
                      <th className="text-center px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id} className="border-b border-input hover:bg-muted/50">
                        <td className="px-4 py-3 font-medium">{customer.companyName}</td>
                        <td className="px-4 py-3">{customer.contactPerson}</td>
                        <td className="px-4 py-3">{customer.email}</td>
                        <td className="px-4 py-3">{customer.phone || "-"}</td>
                        <td className="px-4 py-3">{customer.gstin || "-"}</td>
                        <td className="px-4 py-3">{customer.industryType || "-"}</td>
                        <td className="px-4 py-3 text-center space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(customer)}>
                            Edit
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDelete(customer.id)}>
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
