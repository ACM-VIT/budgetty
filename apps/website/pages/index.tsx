import AppWrapper from "../components/AppWrapper";
import { useSession } from "next-auth/react";

export default function Index() {
  const { data: session } = useSession();
  if (session) {
    return (
      <AppWrapper>
        <p>Signed in as {session.user.email}</p>
      </AppWrapper>
    );
  } else {
    return <AppWrapper>A simple budget tracker. Please login</AppWrapper>;
  }
}
