import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Animal } from "../models/animal";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})
export class AnimalService {

    constructor(private http: HttpClient){}
    public getAnimais(): Observable<Animal[]>{
        return this.http.get<Animal[]>("http://localhost:8050/animais");
    }
}