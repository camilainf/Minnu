import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../services/receta/recetas.service';
import { Receta } from 'src/app/services/receta/receta.type';
declare var window : any; 

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})

export class RecetasComponent implements OnInit {
  formModal: any;
  recetas: Receta[] = [];

  constructor(private recetasService: RecetasService) {}

  ngOnInit(): void {
    this.recetasService.cargarRecetas().subscribe((data)=>{
      this.recetas = data as Receta[];
    })

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    )
  }

  openFormModal() {
    this.formModal.show();
  }

  saveSomeThing() {
    this.formModal.hide();
  }

}
