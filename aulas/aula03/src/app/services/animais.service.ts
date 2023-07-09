import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Animal } from '../models/animais';

@Injectable({
    providedIn: 'root'
})
export class AnimalService{
    constructor(private http: HttpClient) { }

    buscarAnimais(): Observable<Animal[]> {
        return this.http.get<Animal[]>("http://localhost:8050/animais");
    }
}
    