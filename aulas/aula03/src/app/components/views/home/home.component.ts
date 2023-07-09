import { Animal } from './../../../../../../aula02/src/app/models/animal';
import { AnimalService } from './../../../services/animais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private AnimalService: AnimalService) { }

  public animais!: Animal[]

  ngOnInit(): void {
    this.AnimalService.buscarAnimais().subscribe((response) => {
      this.animais = response
    })
  }
}
