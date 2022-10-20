import { useState, useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import { get, post } from "../../utils/api";
import { Stack, Card, Text, Group, Badge } from "@mantine/core";

/* eslint-disable-next-line */
export interface ReportsProps {}

export function Reports(props: ReportsProps) {
  const [transactions, setTransactions] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    async function fetchTransactions() {
      const currentSession = await getSession();
      const transactionList: [] = await get("/api/transactions", {
        email: currentSession.user.email,
      });
      setTransactions(transactionList);
    }

    fetchTransactions();
  }, []);
  return (
    <>
      <Stack>
        {transactions.map((transaction) => (
          <Card shadow={"sm"} p="lg" radius={"md"} withBorder>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{transaction.description}</Text>
              <Badge color={transaction.expense ? "red" : "green"}>
                {transaction.expense ? "-$" : "+$"}
                {transaction.amount}
              </Badge>
            </Group>
          </Card>
        ))}
      </Stack>
    </>
  );
}

export default Reports;
