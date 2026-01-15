import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('me')
  getMe(): UserDto {
    return this.appService.getMe();
  }
}
