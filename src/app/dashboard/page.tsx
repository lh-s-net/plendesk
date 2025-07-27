import Link from "next/link"

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="mb-4">Welcome to the main dashboard. Use the navigation menu to access App1, App2, and App3.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <a href="/app1">
          <div className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-2">App1</h2>
            <p>Quick access to App1 functionality.</p>
          </div>
        </a>

        <Link href="/dashboard/app2">
          <div className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-2">App2</h2>
            <p>Quick access to App2 functionality.</p>
          </div>
        </Link>

        <Link href="/dashboard/app3">
          <div className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-2">App3</h2>
            <p>Quick access to App3 functionality.</p>
          </div>
        </Link>

      </div>
    </div>
  )
}