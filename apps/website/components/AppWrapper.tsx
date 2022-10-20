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
  Avatar,
  Text,
  Menu,
  Box,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { MainLinks } from "../components/HomePageLinks";
import { signOut, useSession, signIn } from "next-auth/react";
import { TbLogout, TbChevronRight, TbChevronLeft } from "react-icons/tb";
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
          {session && (
            <Navbar.Section>
              <Menu shadow={"md"} width={200} position="right">
                <Menu.Target>
                  <Box
                    sx={{
                      paddingTop: theme.spacing.sm,
                      borderTop: `1px solid ${
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[4]
                          : theme.colors.gray[2]
                      }`,
                    }}
                  >
                    <UnstyledButton
                      sx={{
                        display: "block",
                        width: "100%",
                        padding: theme.spacing.xs,
                        borderRadius: theme.radius.sm,
                        color:
                          theme.colorScheme === "dark"
                            ? theme.colors.dark[0]
                            : theme.black,

                        "&:hover": {
                          backgroundColor:
                            theme.colorScheme === "dark"
                              ? theme.colors.dark[6]
                              : theme.colors.gray[0],
                        },
                      }}
                    >
                      <Group>
                        <Avatar src={session.user.image} radius="xl" />
                        <Box sx={{ flex: 1 }}>
                          <Text size="sm" weight={500}>
                            {session.user.name}
                          </Text>
                          <Text color="dimmed" size="xs">
                            {session.user.email}
                          </Text>
                        </Box>

                        {theme.dir === "ltr" ? (
                          <TbChevronRight size={18} />
                        ) : (
                          <TbChevronLeft size={18} />
                        )}
                      </Group>
                    </UnstyledButton>
                  </Box>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    icon={<TbLogout size={14} />}
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Sign Out
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Navbar.Section>
          )}
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
