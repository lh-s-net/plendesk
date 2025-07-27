export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
      <p className="mb-4">Find answers to common questions and get support for using the application.</p>
      <div className="space-y-4">
        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
          <p>Learn how to navigate and use the main features of the applikation.</p>
        </div>
        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-2">FAQ</h2>
          <p>Frequently asked questions and their answers.</p>
        </div>
        <div className="p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
          <p>Get in touch with our support team for additional help.</p>
        </div>
      </div>
    </div>
  )
}