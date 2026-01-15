import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AppService {
  getMe(): UserDto {
    return {
      id: 1,
      name: 'Emanuel Ledesma Camacho',
      email: 'emanuellescam@gmail.com',
      bio: 'Software developer with a passion for creating efficient and scalable applications.',
    };
  }
}
