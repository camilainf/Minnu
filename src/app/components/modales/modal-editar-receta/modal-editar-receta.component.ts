import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecetasService} from "../../../services/receta/recetas.service";
import {Insumo, InsumoDTO} from "../../../services/insumo/insumo.type";
import {map, Observable, startWith} from "rxjs";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {InsumoMapper} from "../../../services/insumo/insumo.mapper";
import {InsumosService} from "../../../services/insumo/insumos.service";
import {TipoRecetaService} from "../../../services/tipo-receta/tipo-receta.service";
import {TipoReceta, TipoRecetaDTO} from "../../../services/tipo-receta/tipo-receta.type";
import {TipoRecetaMapper} from "../../../services/tipo-receta/tipo-receta.mapper";
import {RecetaDTO} from "../../../services/receta/receta.type";

@Component({
  selector: 'app-modal-editar-receta',
  templateUrl: './modal-editar-receta.component.html',
  styleUrls: ['./modal-editar-receta.component.scss']
})
export class ModalEditarRecetaComponent implements OnInit {

  formularioEditRecetaForm : FormGroup = {} as FormGroup;

  insumos: Insumo[] = [];

  tiposRecetas: TipoReceta[] = [];
  tipoRecetaActual: TipoReceta = {} as TipoReceta;
  insumosName: string[] = [];
  insumosEnMuestra: string[] = [];
  insumosCtrl = new FormControl('');
  filteredInsumos: Observable<string[]>;
  @ViewChild('insumosInput') insumosInput: ElementRef<HTMLInputElement> | undefined;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private Ref:MatDialogRef<ModalEditarRecetaComponent>,private formBuilder: FormBuilder,
              private recetaService: RecetasService,private insumosMapper: InsumoMapper,private insumosService: InsumosService, private tiposRecetasService: TipoRecetaService, private tiposRecetasMapper: TipoRecetaMapper) {
    this.filteredInsumos = this.insumosCtrl.valueChanges.pipe(
      startWith(null),
      map((insumo: string | null) => (insumo ? this._filter(insumo) : this.insumosName.slice())),
    )
  }

  ngOnInit(): void {
    console.log(this.data.nombrereceta)
    let form ={
      nombreReceta: [this.data.nombrereceta, Validators.compose([
        Validators.pattern(/^.{1,20}$/),
        Validators.required
      ])],

      tipoReceta: ['', Validators.required],

    }
    this.formularioEditRecetaForm = this.formBuilder.group(form);

      this.insumosService.cargarInsumos().subscribe((value)=>{
      for (let ins of value) {
        this.insumos.push(this.insumosMapper.mapDTOtoInsumo(ins as InsumoDTO));
      }
      for(let i in this.insumos){
        this.insumosName.push(this.insumos[i].nombre);
      }
      this.insumosEnMuestra = this.data.insumos.map((insumo:Insumo) => insumo.nombre)
    })

    this.tiposRecetasService.cargarTiposRecetas().subscribe((value) => {
      for(let tipo of value) {
        this.tiposRecetas.push(this.tiposRecetasMapper.mapDTOtoTipoReceta(tipo as TipoRecetaDTO));
      }

    })
  }

  cerrarPopUpEditarReceta(){
    let insumos : Insumo[] = [];
    for(let insumo of this.insumosEnMuestra){
      insumos.push(this.insumos.find(insumos => insumos.nombre == insumo)!)
    }


    let receta : RecetaDTO = {
      idreceta : this.data.idreceta,
      receta: this.formularioEditRecetaForm.get('nombreReceta')!.value,
      tiporeceta: this.formularioEditRecetaForm.get('tipoReceta')!.value,
      insumos: insumos
    };
    console.log(receta);
    this.recetaService.editarReceta(receta).subscribe(res => {
      console.log(res);
    })
    this.Ref.close(receta);

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
}
