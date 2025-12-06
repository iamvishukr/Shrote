"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getCompanyInfo, saveCompanyInfo } from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast"

export default function CompanySettings() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    companyType: "",
    gstin: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    website: "",
    bankAccountName: "",
    bankName: "",
    bankAccount: "",
    ifscCode: "",
  })

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const info = await getCompanyInfo()
        if (info) {
          setFormData(info)
        }
      } catch (error) {
        console.error("Error fetching company info:", error)
      }
    }
    fetchCompanyInfo()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await saveCompanyInfo(formData)
      toast({
        title: "Success",
        description: "Company information saved successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save company information",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Settings</CardTitle>
        <CardDescription>Configure your company information for invoices</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company Type</label>
              <input
                type="text"
                name="companyType"
                value={formData.companyType}
                onChange={handleChange}
                placeholder="e.g., IT Services"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">GSTIN</label>
              <input
                type="text"
                name="gstin"
                value={formData.gstin}
                onChange={handleChange}
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
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
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
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bank Account Name</label>
              <input
                type="text"
                name="bankAccountName"
                value={formData.bankAccountName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bank Account Number</label>
              <input
                type="text"
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleChange}
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
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Saving..." : "Save Settings"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
