import { AnimalService } from './../../../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../../models/animal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private AnimalService: AnimalService){}

  public animais!: Animal[];
  
  ngOnInit(): void{
    this.AnimalService.getAnimais().subscribe((response) => {
      this.animais = response
    });
  }
}
