export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center justify-center text-center py-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Welcome to PlenDesk</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
          This is a multiapp platform
        </p>
      </div>

      <div className="p-6 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-200">Are you ready?</h3>
        <p className="text-sm text-muted-foreground">
          We will start soon...
        </p>
      </div>
    </div>
  )
}
