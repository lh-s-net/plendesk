export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard - App3</h1>
      <p className="mb-4">
        This is the App3 view from the Dashboard navigation. Access App3 specific features and settings.
      </p>
      <div className="space-y-4">
        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-2">App3 Overview</h2>
          <p>Main App3 functionality accessible from the dashboard.</p>
        </div>
      </div>
    </div>
  )
}