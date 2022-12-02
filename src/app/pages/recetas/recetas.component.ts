import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { RecetasService } from '../../services/receta/recetas.service';
import { NewReceta, Receta, RecetaDTO } from 'src/app/services/receta/receta.type';
import { RecetaMapper } from 'src/app/services/receta/receta.mapper';
import { TipoReceta, TipoRecetaDTO } from 'src/app/services/tipo-receta/tipo-receta.type';
import { TipoRecetaService } from 'src/app/services/tipo-receta/tipo-receta.service';
import { TipoRecetaMapper } from 'src/app/services/tipo-receta/tipo-receta.mapper';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { InsumosService } from 'src/app/services/insumo/insumos.service';
import { Insumo, InsumoDTO } from 'src/app/services/insumo/insumo.type';
import { InsumoMapper } from 'src/app/services/insumo/insumo.mapper';
import {map, Observable, startWith} from 'rxjs';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Router} from "@angular/router";

declare var window : any; 


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})

export class RecetasComponent implements OnInit {
  modalDetallesReceta: any;
  modalRegistroReceta: any;

  formRegistroReceta: FormGroup = {} as FormGroup;
  formTipoReceta: FormControl = {} as FormControl;

  recetas: Receta[] = [];
  receta: Receta = {} as Receta;
  idreceta: number = {} as number;

  tiposRecetas: TipoReceta[] = [];
  tipoReceta: TipoReceta = {} as TipoReceta;

  insumos: Insumo[] = [];
  insumosName: string[] = [];
  insumosEnMuestra: string[] = [];
  insumosCtrl = new FormControl('');
  filteredInsumos: Observable<string[]>;

  @ViewChild('insumosInput') insumosInput: ElementRef<HTMLInputElement> | undefined;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(
    private recetasService: RecetasService,
    private recetasMapper: RecetaMapper,
    private tipoRecetaMapper: TipoRecetaMapper,
    private tiposRecetasService: TipoRecetaService, 
    private formBuilder: FormBuilder,
    private insumosService: InsumosService,
    private router:Router,
    private insumosMapper: InsumoMapper) {
      this.filteredInsumos = this.insumosCtrl.valueChanges.pipe(
        startWith(null),
        map((insumo: string | null) => (insumo ? this._filter(insumo) : this.insumosName.slice())),
      )
  }

  probar(){
    console.log(this.formRegistroReceta.get('formTipoReceta')!.value)
  }

  ngOnInit(): void {

    let formatoName = /^.{1,30}$/

    this.formRegistroReceta = this.formBuilder.group({
      nombreReceta: ['', Validators.compose([Validators.pattern(formatoName),Validators.required])],
      formTipoReceta: ['', Validators.compose([Validators.pattern(formatoName),Validators.required])],
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
        this.insumos.push(this.insumosMapper.mapDTOtoInsumo(ins as InsumoDTO));
      }
      for(let i in this.insumos){
        this.insumosName.push(this.insumos[i].nombre);
      }
    })

    // CARGA DE RECETAS MAS SU TIPO Y SUS INSUMOS
    this.recetasService.cargarRecetas().subscribe((data) =>{

      for(let recip of data) {

        let recipe = this.recetasMapper.mapDTOtoReceta(recip as RecetaDTO);

        this.tiposRecetasService.getTipoRecetaByIdReceta(recipe.id).subscribe((data)=>{

          let {tiporeceta, idtiporeceta} = data.body[0];
          recipe.tipoReceta = tiporeceta;
          recipe.idTipoReceta = idtiporeceta;
          this.idreceta = idtiporeceta;

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

    this.modalDetallesReceta = new window.bootstrap.Modal(
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
  abrirModalDetalles(id: number) {
    this.modalDetallesReceta.show();
    const recetaEncontrada = this.recetas.find(receta => receta.id === id );

    if (recetaEncontrada) {
      this.receta.id = recetaEncontrada.id;
      this.receta.nombre = recetaEncontrada.nombre;
      this.receta.tipoReceta = recetaEncontrada.tipoReceta;
      this.receta.insumos = recetaEncontrada.insumos;
    }

  }

  cerrarModalDetalles() {
    this.modalDetallesReceta.hide();
  }


  // MODAL PARA REGISTRAR UNA RECETA
  abrirModalRegistro() {
    this.modalRegistroReceta.show();
  }

  cancelarRegistro() {
    this.modalRegistroReceta.hide();
  }

  guardarCambiosRegistro() {

    let insumosToBack = this.insumosMapper.mapStringToInsumo(this.insumosEnMuestra, this.insumos);

    if (this.formRegistroReceta.status === 'VALID') {
      const receta: NewReceta = {
        nombre: this.formRegistroReceta.get('nombreReceta')!.value,
        idTipoReceta: this.idreceta,
        insumos: insumosToBack
      }

      this.recetasService.guardarReceta(receta).subscribe((response) => {
        if(response.status == '200') {
          this.router.navigate(['/recetas']);
          window.location.reload()
        } else {
          console.log('error en la operacion')
        }
      })

    }

    this.modalRegistroReceta.hide();
  }

}

