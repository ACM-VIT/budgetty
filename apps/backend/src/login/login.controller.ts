import { Controller, Post, Body } from "@nestjs/common";
import { prisma } from "../assets/prisma";

@Controller("login")
export class LoginController {
  @Post()
  async create(@Body() user: { email: string }) {
    const users = await prisma.user.findMany();
    const userExists = users.find((u) => u.email === user.email);
    if (userExists) {
      return userExists;
    } else {
      const newUser = await prisma.user.create({
        data: {
          email: user.email,
        },
      });
      return newUser;
    }
  }
}
