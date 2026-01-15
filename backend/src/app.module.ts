import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from "./entities/contact.entity";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ContactsService } from "./services/contacts.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "better-sqlite3",
      database: "portafolio.db",
      entities: [Contact],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [AppController],
  providers: [AppService, ContactsService],
})
export class AppModule {}