
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public image:string="https://www.genesiscareer.edu/wp-content/uploads/2021/06/Untitled-design-1-1280x720.png";
  public Titulo:string= "databinding";
  constructor (){ }
  ngOnInit(): void {
}}
