import { Controller, Get, Post, Body, Query } from "@nestjs/common";
import { prisma } from "../assets/prisma";

@Controller("transactions")
export class TransactionsController {
  @Post()
  async create(
    @Body() transaction: { amount: number; email: string; type: string }
  ) {
    const user = await prisma.user.findUnique({
      where: { email: transaction.email },
    });
    const newTransaction = await prisma.transaction.create({
      data: {
        amount: transaction.amount,
        user: {
          connect: { id: user.id },
        },
        type: transaction.type,
      },
    });
    return newTransaction;
  }

  @Get()
  async findAll(@Query("email") email: string) {
    return await prisma.transaction.findMany({
      where: { user: { email } },
    });
  }
}
