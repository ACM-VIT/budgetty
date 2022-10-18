import { TbBrandGithub, TbLogout } from "react-icons/tb";
import { Button } from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";

const postLogin = (email: string) => {
  axios
    .post("http://localhost:3333/api/login", {
      email: email,
    })
    .then((response) => {
      console.log(response);
    });
};

export function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p> <br />
        <Button leftIcon={<TbLogout />} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  } else {
    return (
      <Button
        leftIcon={<TbBrandGithub />}
        onClick={() => {
          signIn("github");
        }}
      >
        Login with GitHub
      </Button>
    );
  }
}

export default Login;
