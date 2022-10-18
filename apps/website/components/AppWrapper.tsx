import { AppShell, Navbar, Header, Group, Title, Center } from "@mantine/core";
import { MainLinks } from "../components/HomePageLinks";
import Link from "next/link";

export default function AppWrapper({ children }) {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 200 }} p="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={80} p="xs">
          <Group sx={{ height: "100%" }} px={20} position="apart">
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
