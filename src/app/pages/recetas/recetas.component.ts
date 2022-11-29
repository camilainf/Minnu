import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../services/receta/recetas.service';
import { Receta, RecetaDTO } from 'src/app/services/receta/receta.type';
import { RecetaMapper } from 'src/app/services/receta/receta.mapper';
import { TipoReceta, TipoRecetaDTO } from 'src/app/services/tipo-receta/tipo-receta.type';
import { TipoRecetaService } from 'src/app/services/tipo-receta/tipo-receta.service';
import { TipoRecetaMapper } from 'src/app/services/tipo-receta/tipo-receta.mapper';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { InsumosService } from 'src/app/services/insumo/insumos.service';
import { Insumo, InsumoDTO } from 'src/app/services/insumo/insumo.type';
import { InsumoMapper } from 'src/app/services/insumo/insumo.mapper';
  
declare var window : any; 

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})

export class RecetasComponent implements OnInit {
  formModal: any;
  modalRegistroReceta: any;

  formRegistroReceta: FormGroup = {} as FormGroup;

  recetas: Receta[] = [];
  receta: Receta = {} as Receta;

  tiposRecetas: TipoReceta[] = [];
  tipoReceta: TipoReceta = {} as TipoReceta;

  constructor(private recetasService: RecetasService, private recetasMapper: RecetaMapper, private tipoRecetaMapper: TipoRecetaMapper, private tiposRecetasService: TipoRecetaService, private formBuilder: FormBuilder, private router: Router, private insumosService: InsumosService, private insumosMapper: InsumoMapper) {
    
  }

  ngOnInit(): void {

    let formatoName = /^.{1,10}$/

    this.formRegistroReceta = this.formBuilder.group({
      nombreReceta: ['', Validators.compose([Validators.pattern(formatoName),Validators.required])],
    })

    // CARGAR TIPOSRECETAS
    this.tiposRecetasService.cargarTiposRecetas().subscribe((data)=>{

      for(let i in data) {
        this.tiposRecetas.push(this.tipoRecetaMapper.mapDTOtoTipoReceta(data[i] as TipoRecetaDTO));
      }

      console.log(this.tiposRecetas);
    })

    // CARGA DE RECETAS MAS SU TIPO Y SUS INSUMOS
    this.recetasService.cargarRecetas().subscribe((data) =>{

      for(let recip of data) {
        let recipe = this.recetasMapper.mapDTOtoReceta(recip as RecetaDTO);
        this.tiposRecetasService.getTipoRecetaByIdReceta(recipe.idTipoReceta).subscribe((data)=>{
          recipe.tipoReceta = data.body[0];

        })   
        
        this.insumosService.cargarInsumoByRecipeId(recipe.id).subscribe((data)=>{
          let insumos: Insumo[] = []
          
          if(data.body.res) {
            for(let ins of data.body.res) {
              insumos.push(this.insumosMapper.mapDTOtoInsumo(ins as InsumoDTO));
            }
          }
          
          recipe.insumos = insumos;
          this.recetas.push(recipe);
        }) 
      }
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

