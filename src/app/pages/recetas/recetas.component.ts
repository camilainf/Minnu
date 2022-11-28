import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../services/receta/recetas.service';
import { Receta, RecetaDTO } from 'src/app/services/receta/receta.type';
import { RecetaMapper } from 'src/app/services/receta/receta.mapper';
import { TipoReceta, TipoRecetaDTO } from 'src/app/services/tipo-receta/tipo-receta.type';
import { TipoRecetaService } from 'src/app/services/tipo-receta/tipo-receta.service';
import { TipoRecetaMapper } from 'src/app/services/tipo-receta/tipo-receta.mapper';
declare var window : any; 

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})

export class RecetasComponent implements OnInit {
  formModal: any;
  modalRegistroReceta: any;

  recetas: Receta[] = [];
  receta: Receta = {} as Receta;

  tiposRecetas: TipoReceta[] = [];
  tipoReceta: TipoReceta = {} as TipoReceta;

  constructor(private recetasService: RecetasService, private recetasMapper: RecetaMapper, private tipoRecetaMapper: TipoRecetaMapper, private tiposRecetasService: TipoRecetaService) {
    
  }

  ngOnInit(): void {

    // CARGA DE RECETAS
    this.recetasService.cargarRecetas().subscribe((data)=>{
      console.log(data);

      for(let i in data) {
        this.recetas.push(this.recetasMapper.mapDTOtoReceta(data[i] as RecetaDTO));
      }

      this.tiposRecetasService.cargarTiposRecetas().subscribe((data)=>{
  
        for(let i in data) {
          this.tiposRecetas.push(this.tipoRecetaMapper.mapDTOtoTipoReceta(data[i] as TipoRecetaDTO));
        }

        for(let receta of this.recetas) {
          receta.nombreTipo = this.tiposRecetas.find(x => x.id == receta.idTipoReceta)?.nombreTipo;
        }

        

      })

      console.log(this.recetas);      
    })
    

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    )

    this.modalRegistroReceta = new window.bootstrap.Modal(
      document.getElementById('registroRecetaModal')
    )

  }

  
  // MODAL PARA VER DETALLES DE LA RECETA
  openFormModal() {
    this.formModal.show();
  }

  saveSomeThing() {
    this.formModal.hide();
  }

  closeModal() {
    this.formModal.hide();
  }

  // MODAL PARA REGISTRAR UNA RECETA
  openRegistroModal() {
    this.modalRegistroReceta.show();
  }

  cancelarRegistro() {
    this.modalRegistroReceta.hide();
  }

  guardarCambiosRegistro() {
    this.modalRegistroReceta.hide();
  }

}

