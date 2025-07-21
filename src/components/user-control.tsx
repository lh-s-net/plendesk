"use client";

import {UserButton} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

interface Props {
  showName?: boolean;
};

export const UserControl = ({showName}: Props) => {
  const currentTheme = useTheme().theme || "light"

  return (
    <UserButton
      showName={showName}
      appearance={{
        elements: {
          userButtonBox: "rounded-md!",
          userButtonAvatarBox: "rounded-md! size-8!",
          userButtonTrigger: "rounded-md!"
        },
        baseTheme: currentTheme === "dark" ? dark : undefined,
      }}
    />
  );
};
