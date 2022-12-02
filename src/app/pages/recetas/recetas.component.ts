import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { RecetasService } from '../../services/receta/recetas.service';
import { Receta, RecetaDTO } from 'src/app/services/receta/receta.type';
import { RecetaMapper } from 'src/app/services/receta/receta.mapper';
import { TipoReceta, TipoRecetaDTO } from 'src/app/services/tipo-receta/tipo-receta.type';
import { TipoRecetaService } from 'src/app/services/tipo-receta/tipo-receta.service';
import { TipoRecetaMapper } from 'src/app/services/tipo-receta/tipo-receta.mapper';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Router } from "@angular/router";
import { InsumosService } from 'src/app/services/insumo/insumos.service';
import { Insumo, InsumoDTO } from 'src/app/services/insumo/insumo.type';
import { InsumoMapper } from 'src/app/services/insumo/insumo.mapper';
import {map, Observable, startWith} from 'rxjs';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {COMMA, ENTER} from '@angular/cdk/keycodes';

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
  formTipoReceta: FormControl = {} as FormControl;

  recetas: Receta[] = [];
  receta: Receta = {} as Receta;

  tiposRecetas: TipoReceta[] = [];
  tipoReceta: TipoReceta = {} as TipoReceta;

  totalInsumos: Insumo[] = [];
  insumosName: string[] = [];
  insumosEnMuestra: string[] = [];
  insumosCtrl = new FormControl('');
  filteredInsumos: Observable<string[]>;


  showRecetaModal: Receta = {} as Receta;

  @ViewChild('insumosInput') insumosInput: ElementRef<HTMLInputElement> | undefined;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(
    private recetasService: RecetasService,
    private recetasMapper: RecetaMapper,
    private tipoRecetaMapper: TipoRecetaMapper,
    private tiposRecetasService: TipoRecetaService, 
    private formBuilder: FormBuilder,
    private router: Router, 
    private insumosService: InsumosService,
    private insumosMapper: InsumoMapper) {
      this.filteredInsumos = this.insumosCtrl.valueChanges.pipe(
        startWith(null),
        map((insumo: string | null) => (insumo ? this._filter(insumo) : this.insumosName.slice())),
      )
  }

  ngOnInit(): void {

    let formatoName = /^.{1,10}$/

    this.formRegistroReceta = this.formBuilder.group({
      nombreReceta: ['', Validators.compose([Validators.pattern(formatoName),Validators.required])],
      formTipoReceta: ['', Validators.compose([Validators.pattern(formatoName),Validators.required])]
    })

    // CARGAR TIPOSRECETAS
    this.tiposRecetasService.cargarTiposRecetas().subscribe((data)=>{
      for(let i in data) {
        this.tiposRecetas.push(this.tipoRecetaMapper.mapDTOtoTipoReceta(data[i] as TipoRecetaDTO));
      }
    })

    // CARGAR INSUMOS
    this.insumosService.cargarInsumos().subscribe((value)=>{
      for (let ins of value) {
        this.totalInsumos.push(this.insumosMapper.mapDTOtoInsumo(ins as InsumoDTO));
      }
      for(let i in this.totalInsumos){
        this.insumosName.push(this.totalInsumos[i].nombre);
      }
      /* console.log(this.insumosName,this.totalInsumos); */
    })

    // CARGA DE RECETAS MAS SU TIPO Y SUS INSUMOS
    this.recetasService.cargarRecetas().subscribe((data) =>{

      for(let recip of data) {

        let recipe = this.recetasMapper.mapDTOtoReceta(recip as RecetaDTO);

        /* console.log(recipe.idTipoReceta); */

        this.tiposRecetasService.getTipoRecetaByIdReceta(recipe.id).subscribe((data)=>{
          recipe.tipoReceta = data.body[0];
          /* console.log(data.body[0]) */
        })   
        
        this.insumosService.cargarInsumoByRecipeId(recipe.id).subscribe((data)=>{
          let insumos: Insumo[] = []
          
          if(data.body.res) {
            for(let ins of data.body.res) {
              insumos.push(this.insumosMapper.mapDTOtoInsumo(ins as InsumoDTO));
            }
          }
          //console.log(insumos);

          recipe.insumos = insumos;
          this.recetas.push(recipe);
        }) 

        /* console.log(this.recetas); */
      }
    })
    

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    )

    this.modalRegistroReceta = new window.bootstrap.Modal(
      document.getElementById('registroRecetaModal')
    )

  }

  // FORM RECETAS PARA AGREGAR INSUMOS

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value && this.insumosName.includes(value)) {
      this.insumosEnMuestra.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.insumosCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.insumosEnMuestra.indexOf(tag);

    if (index >= 0) {
      this.insumosEnMuestra.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.insumosEnMuestra.includes(event.option.viewValue)) {
      this.insumosEnMuestra.push(event.option.viewValue);
    }
    this.insumosInput!.nativeElement.value = '';
    this.insumosCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.insumosName.filter(insumos => insumos.toLowerCase().includes(filterValue));
  }

  
  // MODAL PARA VER DETALLES DE LA RECETA
  openFormModal(id: number, receta: string) {
    this.formModal.show();

    console.log(this.recetas);

    /* console.log(id);
    console.log(receta); */

    const found = this.recetas.find(receta => receta.id === id );

    if (found) {
      this.showRecetaModal.id = found.id;
      this.showRecetaModal.nombre = found.nombre;
      this.showRecetaModal.tipoReceta = found.tipoReceta;
      this.showRecetaModal.insumos = found.insumos;
    }

    console.log(found?.id);
    console.log(found?.nombre);
    console.log(found?.tipoReceta);
    console.log(found?.insumos);

    

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

  probar(){
    console.log(this.formRegistroReceta.get('formTipoReceta')!.value)
  }

}

