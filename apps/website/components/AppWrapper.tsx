import {
  AppShell,
  Navbar,
  Header,
  Group,
  Title,
  Center,
  Button,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { MainLinks } from "../components/HomePageLinks";
import { signOut, useSession, signIn } from "next-auth/react";
import { TbLogout, TbBrandGithub } from "react-icons/tb";
import Link from "next/link";
import { useState } from "react";

export default function AppWrapper({ children }) {
  const theme = useMantineTheme();
  const { data: session } = useSession();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <Group px={20} position="apart">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Link href="/">
              <Title style={{ cursor: "pointer" }}>Budgetty</Title>
            </Link>
            {session ? (
              <Button leftIcon={<TbLogout />} onClick={() => signOut()}>
                Sign out
              </Button>
            ) : (
              <></>
            )}
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Center>{children}</Center>
    </AppShell>
  );
}
