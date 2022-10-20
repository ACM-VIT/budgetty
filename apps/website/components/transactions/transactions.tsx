import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import {
  Checkbox,
  TextInput,
  Button,
  NumberInput,
  Box,
  Group,
} from "@mantine/core";
import { z } from "zod";
import { get, post } from "../../utils/api";
import { useForm, zodResolver } from "@mantine/form";

const schema = z.object({
  amount: z.number().positive().int(),
  description: z.string().min(1).max(100),
  expense: z.boolean(),
});

export function Transactions(props) {
  const [transactions, setTransactions] = useState([]);
  const { data: session } = useSession();
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
  const form = useForm({
    initialValues: {
      amount: 0,
      description: "",
      expense: false,
    },
    validate: zodResolver(schema),
  });
  if (session) {
    return (
      <>
        <Box mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <NumberInput
              withAsterisk
              label="Amount"
              placeholder="5000"
              {...form.getInputProps("amount")}
            />
            <TextInput
              withAsterisk
              label="Description"
              placeholder="Ordered Domino's"
              mt="sm"
              {...form.getInputProps("description")}
            />
            <Checkbox mt="sm" label="Is this an expense?" />

            <Group position="center" mt="xl">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </>
    );
  }
  return <></>;
}

export default Transactions;
