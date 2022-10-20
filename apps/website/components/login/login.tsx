import { TbBrandGithub, TbLogout } from "react-icons/tb";
import { Button } from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";
import { post } from "../../utils/api";

const postLogin = (email: string) => {
  post("/api/login", { email: email });
};

export function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p> <br />
      </>
    );
  } else {
    return (
      <Button
        leftIcon={<TbBrandGithub />}
        onClick={() => signIn("github", { callbackUrl: "/" })}
      >
        Login with GitHub
      </Button>
    );
  }
}

export default Login;
