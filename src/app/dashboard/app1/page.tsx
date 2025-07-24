export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">App1</h1>
      <p className="mb-4">Welcome to App1. This is the main App1 page with access to all App1 functionality.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Settings1</h2>
          <p className="mb-4">Primary settings configuration for App1.</p>
          <a href="/dashboard/app1/settings1" className="text-primary hover:underline">
            Go to Settings1 →
          </a>
        </div>
        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Settings2</h2>
          <p className="mb-4">Secondary settings configuration for App1.</p>
          <a href="/dashboard/app1/settings2" className="text-primary hover:underline">
            Go to Settings2 →
          </a>
        </div>
      </div>
    </div>
  )
}