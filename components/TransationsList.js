"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getTransactions, deleteTransaction } from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast"

export default function TransactionsList({ refreshTrigger, onSelectTransaction, onPrintInvoice }) {
  const { toast } = useToast()
  const [transactions, setTransactions] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const fetchTransactions = async () => {
    setLoading(true)
    try {
      const data = await getTransactions()
      setTransactions(data.sort((a, b) => new Date(b.invoiceDate) - new Date(a.invoiceDate)))
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch transactions",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [refreshTrigger])

  useEffect(() => {
    filterTransactions()
  }, [transactions, activeTab, startDate, endDate])

  const filterTransactions = () => {
    let filtered = transactions

    if (activeTab === "credit") {
      filtered = filtered.filter((t) => t.transactionType === "credit")
    } else if (activeTab === "debit") {
      filtered = filtered.filter((t) => t.transactionType === "debit")
    }

    if (startDate) {
      filtered = filtered.filter((t) => new Date(t.invoiceDate) >= new Date(startDate))
    }

    if (endDate) {
      filtered = filtered.filter((t) => new Date(t.invoiceDate) <= new Date(endDate))
    }

    setFilteredTransactions(filtered)
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this transaction?")) return

    try {
      await deleteTransaction(id)
      toast({
        title: "Success",
        description: "Transaction deleted successfully",
      })
      fetchTransactions()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete transaction",
        variant: "destructive",
      })
    }
  }

  const handlePrintInvoice = (transaction) => {
    onSelectTransaction(transaction)
  }

  const calculateTotals = () => {
    const totals = {
      credit: filteredTransactions.reduce((sum, t) => (t.transactionType === "credit" ? sum + t.amount : sum), 0),
      debit: filteredTransactions.reduce((sum, t) => (t.transactionType === "debit" ? sum + t.amount : sum), 0),
    }
    totals.net = totals.credit - totals.debit
    return totals
  }

  const totals = calculateTotals()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>View and manage all financial transactions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-input rounded-lg p-4 bg-green-50 dark:bg-green-950">
            <p className="text-sm text-muted-foreground">Total Credits</p>
            <p className="text-2xl font-bold text-green-600">₹{totals.credit.toFixed(2)}</p>
          </div>
          <div className="border border-input rounded-lg p-4 bg-red-50 dark:bg-red-950">
            <p className="text-sm text-muted-foreground">Total Debits</p>
            <p className="text-2xl font-bold text-red-600">₹{totals.debit.toFixed(2)}</p>
          </div>
          <div className="border border-input rounded-lg p-4 bg-blue-50 dark:bg-blue-950">
            <p className="text-sm text-muted-foreground">Net Balance</p>
            <p className="text-2xl font-bold text-blue-600">₹{totals.net.toFixed(2)}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">From Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">To Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-input">
            {["all", "credit", "debit"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium text-sm border-b-2 ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "all" ? "All Transactions" : tab === "credit" ? "Credits" : "Debits"}
              </button>
            ))}
          </div>
        </div>

        {/* Transactions Table */}
        {loading ? (
          <div className="text-center py-8 text-muted-foreground">Loading transactions...</div>
        ) : filteredTransactions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">No transactions found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-input bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-2">Date</th>
                  <th className="text-left px-4 py-2">Invoice</th>
                  <th className="text-left px-4 py-2">Description</th>
                  <th className="text-left px-4 py-2">Category</th>
                  <th className="text-left px-4 py-2">Type</th>
                  <th className="text-right px-4 py-2">Amount</th>
                  <th className="text-left px-4 py-2">Account</th>
                  <th className="text-left px-4 py-2">Customer Name</th>
                  <th className="text-center px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-input hover:bg-muted/50">
                    <td className="px-4 py-3">{new Date(transaction.invoiceDate).toLocaleDateString()}</td>
                    <td className="px-4 py-3">{transaction.invoiceNumber || "-"}</td>
                    <td className="px-4 py-3">{transaction.description}</td>
                    <td className="px-4 py-3">{transaction.category || "-"}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          transaction.transactionType === "credit"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}
                      >
                        {transaction.transactionType === "credit" ? "Credit" : "Debit"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-medium">
                      <span className={transaction.transactionType === "credit" ? "text-green-600" : "text-red-600"}>
                        {transaction.transactionType === "credit" ? "+" : "-"}₹{transaction.amount.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-4 py-3">{transaction.account || "-"}</td>
                    <td className="px-4 py-3">{transaction.customerName || "-"}</td>
                    <td className="px-4 py-3 text-center space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handlePrintInvoice(transaction)}>
                        Print
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(transaction.id)}>
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
  )
}
