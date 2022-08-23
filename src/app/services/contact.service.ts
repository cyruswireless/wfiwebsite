import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as global from 'src/globals';

@Injectable()
export class ContactService {

    constructor(
        private http: HttpClient
    ) { }

    saveRecord(data: any) {
        let url = `${global.apiUrl}/record`;

        return this.http.post(url, data);
    }
}