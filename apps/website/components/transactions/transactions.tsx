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
import { showNotification } from "@mantine/notifications";

const schema = z.object({
  amount: z.number().positive().int(),
  description: z.string().min(1).max(100),
  expense: z.boolean(),
});

export function Transactions(props) {
  const [transactions, setTransactions] = useState([]);
  const { data: session } = useSession();
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
        <Box style={{ width: "80%" }}>
          <form
            onSubmit={form.onSubmit(async (values) => {
              const response = await post("/api/transactions", {
                email: session.user.email,
                ...values,
              });
              showNotification({
                color: "green",
                title: "Success",
                message: "New transaction created",
              });
            })}
          >
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
            <Checkbox
              mt="sm"
              label="Is this an expense?"
              {...form.getInputProps("expense", { type: "checkbox" })}
            />

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
