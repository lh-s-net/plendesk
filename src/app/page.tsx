import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { AppCarousel } from "@/app/components/app-carousel";

export default async function Home() {
  // Server-side data fetching with Convex
  const apps = await fetchQuery(api.apps.getActiveApps);

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center justify-center text-center py-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Welcome to PlenDesk
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
          This is a multiapp platform
        </p>
      </div>

      <div className="flex justify-center items-center px-12">
        <AppCarousel apps={apps} />
      </div>
    </div>
  );
}
