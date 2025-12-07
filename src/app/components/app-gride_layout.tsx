"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {AlertCircle} from "lucide-react";

interface App {
  _id: string;
  _creationTime: number;
  appId: string;
  title: string;
  description: string;
  isActive: boolean;
}

interface AppCarouselProps {
  apps: App[];
}

export function AppGrideLayout({apps}: AppCarouselProps) {
  const {user, isSignedIn} = useUser();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDetailClick = (appId: string) => {
    // Remove "pd_" prefix from appId to get the route
    const route = appId.startsWith("pd_") ? appId.substring(3) : appId;
    // Navigate to platform route
    router.push(`/platform/${route}`);
  };

  const handleAppAccessClick = (e: React.MouseEvent<HTMLAnchorElement>, appId: string) => {
    // Check if user has the required role
    const userRoles = (user?.publicMetadata?.roles as string[]) || [];
    if (!userRoles.includes(appId)) {
      // Prevent navigation if user doesn't have permission
      e.preventDefault();
      // Show error message
      setErrorMessage("You do not have the necessary permissions for this app.");
      // Clear error message after 5 seconds
      setTimeout(() => setErrorMessage(null), 5000);
    }
    // If user has permission, allow default link behavior (browser navigation)
  };

  const getAppRoute = (appId: string) => {
    // Remove "pd_" prefix from appId to get the route
    return appId.startsWith("pd_") ? appId.substring(3) : appId;
  };

  if (apps.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No apps available yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 w-full">
      {errorMessage && (
        <div className="bg-destructive/15 text-destructive px-4 py-3 rounded-lg flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,260px))] justify-center gap-4 w-full max-w-6xl mx-auto">
        {apps.map((app) => (
          <Card key={app._id} className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>{app.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{app.description}</p>
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => handleDetailClick(app.appId)}
                  variant="outline"
                  className="w-full"
                >
                  Details
                </Button>
                {isSignedIn && (
                  <a
                    href={`/${getAppRoute(app.appId)}`}
                    onClick={(e) => {
                      handleAppAccessClick(e, app.appId);
                    }}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                  >
                    Open App
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
