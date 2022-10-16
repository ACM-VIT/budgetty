import React from 'react';
import { TbLogin, TbReportMoney, TbCurrencyDollar } from 'react-icons/tb';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import Link from 'next/link';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  href: string;
}

function MainLink({ icon, color, label, href }: MainLinkProps) {
  return (
    <Link href={href}>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

const data = [
  { icon: <TbLogin size={16} />, color: 'blue', label: 'Login', href: '/' },
  {
    icon: <TbReportMoney size={16} />,
    color: 'teal',
    label: 'Expense List',
    href: '/report',
  },
  {
    icon: <TbCurrencyDollar size={16} />,
    color: 'violet',
    label: 'Add Expenses',
    href: '/expenses',
  },
];

export function MainLinks({ loggedIn }: { loggedIn: boolean }) {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
