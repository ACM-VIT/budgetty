import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { LoginController } from "../login/login.controller";
import { TransactionsController } from "../transactions/transactions.controller";

@Module({
  imports: [],
  controllers: [AppController, LoginController, TransactionsController],
  providers: [AppService],
})
export class AppModule {}
