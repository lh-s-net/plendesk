import {SignedIn, UserButton} from "@clerk/nextjs";
import {dark} from "@clerk/themes";
import {useTheme} from "next-themes";

export default function sUserAccountNav() {
  const currentTheme = useTheme().theme || "light"

  return (
    <div>
      <SignedIn>
        <UserButton
          showName
          appearance={{
            elements: {
              userButtonBox: "rounded-md!",
              userButtonAvatarBox: "rounded-md! size-8!",
              userButtonTrigger: "rounded-md!"
            },
            baseTheme: currentTheme === "dark" ? dark : undefined,
          }}
        />
      </SignedIn>
    </div>
  )
}