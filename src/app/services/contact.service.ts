import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private apiService: ApiService) {}

  async addContact(params: { name: string; email: string; message: string }) {
    try {
      let res = await this.apiService.postCall(`api/contact/add`, params);
      if (res) {
        return res;
      }
      return null;
    } catch (error) {
      return null;
    }
  }
}
