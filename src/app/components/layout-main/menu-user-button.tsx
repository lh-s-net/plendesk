import {SignedIn, UserButton} from "@clerk/nextjs";

export default function MenuUserButton() {

  return (
    <div>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  )
}