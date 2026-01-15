import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from '../entities/contact.entity';
import { ContactDto } from '../dto/contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async saveContact(contactDto: ContactDto): Promise<Contact> {
    const contact = this.contactRepository.create(contactDto);
    return await this.contactRepository.save(contact);
  }

  async getAllContacts(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }
}