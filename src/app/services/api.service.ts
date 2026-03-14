import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  postCall(url: string, body: any) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${environment.apiUrl}/${url}`, body).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        },
      );
    });
  }
}
