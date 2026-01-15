import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { ContactDto } from './dto/contact.dto';
import { ContactsService } from './services/contacts.service';

@Injectable()
export class AppService {
  constructor(private readonly contactsService: ContactsService) {}

  getMe(): UserDto {
    return {
      id: 1,
      name: 'Emanuel Ledesma Camacho',
      email: 'emanuellescam@gmail.com',
      bio: 'Software developer with a passion for creating efficient and scalable applications.',
    };
  }

  async handleContact(contactDto: ContactDto) {
    // Guarda en BD
    const savedContact = await this.contactsService.saveContact(contactDto);
    
    console.log('Contacto guardado en BD:', savedContact);
    
    return {
      success: true,
      message: 'Mensaje recibido y guardado correctamente',
    };
  }
}