import { AppShell, Navbar, Header, Group, Title } from '@mantine/core';
import { MainLinks } from '../components/HomePageLinks';

export default function AppWrapper({ children }) {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks loggedIn={true} />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={80} p="xs">
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Title order={1}>Budgetty</Title>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}
