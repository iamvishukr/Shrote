"use client"

import { useState } from "react"
import AddTransactionModal from "../../../../components/AddTransactionModel"
import TransactionsList from "../../../../components/TransationsList"
import BillPrintModal from "../../../../components/BillPrintModel"
import CompanySettings from "../../../../components/CompanySettings"
import Link from "next/link"

export default function AccountsPage() {
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const [selectedTransaction, setSelectedTransaction] = useState(null)
  const [showSettings, setShowSettings] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)

  const handleTransactionAdded = () => {
    setRefreshTrigger((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header with Add Button */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Financial Accounts</h1>
            <p className="text-muted-foreground">Manage your company's credit and debit transactions</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 font-medium"
            >
              + Add Transaction
            </button>
            <Link
              href="/customers"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 font-medium"
            >
              Manage Customers
            </Link>
            <Link
              href="/accounts-setup"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 font-medium"
            >
              Setup Accounts
            </Link>
            <Link
              href="/legal-documents"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 font-medium"
            >
              Legal Documents
            </Link>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="px-4 py-2 bg-muted text-foreground rounded-md hover:opacity-90 font-medium"
            >
              {showSettings ? "Hide" : "Company"} Settings
            </button>
          </div>
        </div>

        {/* Settings */}
        {showSettings && <CompanySettings />}

        {/* Modals */}
        <AddTransactionModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onTransactionAdded={handleTransactionAdded}
        />

        <BillPrintModal
          isOpen={!!selectedTransaction}
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
        />

        {/* Transactions List */}
        <TransactionsList refreshTrigger={refreshTrigger} onSelectTransaction={setSelectedTransaction} />
      </div>
    </div>
  )
}
