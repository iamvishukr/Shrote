import React from 'react'

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 grid items-center justify-center">
      <div className="bg-[#1C1C1C] text-white rounded-lg p-6 max-w-md w-full">
        {children}
      </div>
    </div>
  )
}

export function DialogContent({ children, className }) {
  return <div className={className}>{children}</div>
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>
}

export function DialogTitle({ children, className }) {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
}

