import type React from "react"
import { Header } from "@/components/header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header userType="admin" userName="Admin User" />
      <main className="flex-1">{children}</main>
    </div>
  )
}
