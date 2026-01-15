import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { ContactDto } from './dto/contact.dto';

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

  handleContact(contactDto: ContactDto){
    console.log( 'New contact message received:', contactDto );

    return {
      success: true,
      message: 'Contact message received successfully.'
    }
  }

}
