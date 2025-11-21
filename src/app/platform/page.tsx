import Link from "next/link"

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Platform</h1>
      <p className="mb-4">Welcome to the main platform. Use the navigation menu to access App1, App2, and App3.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <a href="/calc">
          <div className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Calc</h2>
            <p>Your calculator</p>
          </div>
        </a>

        <a href="/planner">
          <div className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-2">PD Planner</h2>
            <p>PD Planner for ToDo, Kanban, Lists and Calendar.</p>
          </div>
        </a>

        <Link href="/src/app/platform/app3">
          <div className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-2">App3</h2>
            <p>Quick access to App3 functionality.</p>
          </div>
        </Link>

      </div>
    </div>
  )
}