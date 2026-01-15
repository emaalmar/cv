import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';
import { ContactDto } from './dto/contact.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('me')
  getMe(): UserDto {
    return this.appService.getMe();
  }

  @Post('contact')
  handleContact(@Body() contactDto: ContactDto) {
    return this.appService.handleContact(contactDto);
  }

}
