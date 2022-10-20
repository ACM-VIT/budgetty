import React from "react";
import { TbLogin, TbReportMoney, TbCurrencyDollar } from "react-icons/tb";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import Link from "next/link";
import { useSession } from "next-auth/react";

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
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
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
  {
    icon: <TbLogin size={16} />,
    color: "blue",
    label: "Login",
    href: "/login",
  },
  {
    icon: <TbCurrencyDollar size={16} />,
    color: "violet",
    label: "Add Expenses",
    href: "/transactions",
  },
  {
    icon: <TbReportMoney size={16} />,
    color: "teal",
    label: "Expense List",
    href: "/reports",
  },
];

export function MainLinks() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <MainLink
          icon={data[1].icon}
          color={data[1].color}
          label={data[1].label}
          href={data[1].href}
        />
        <MainLink
          icon={data[2].icon}
          color={data[2].color}
          label={data[2].label}
          href={data[2].href}
        />
      </>
    );
  } else {
    return (
      <MainLink
        icon={data[0].icon}
        color={data[0].color}
        label={data[0].label}
        href={data[0].href}
      />
    );
  }
}
