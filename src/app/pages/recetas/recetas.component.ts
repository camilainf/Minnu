import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../services/receta/recetas.service';
import { Receta } from 'src/app/services/receta/receta.type';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  recetas: Receta[] = [];
  constructor(private recetasService: RecetasService) { }

  ngOnInit(): void {
    this.recetas = this.recetasService.recetas;
  }

}
