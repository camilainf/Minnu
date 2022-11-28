import { Insumo, InsumoDTO } from 'src/app/services/insumo/insumo.type';
import { AbstractType, Component, OnInit } from '@angular/core';
import { InsumosService } from '../../services/insumo/insumos.service';
import { MinutasService } from '../../services/minuta/minutas.service';
import { Minuta } from '../../services/minuta/minuta.type';
import { InsumoMapper } from 'src/app/services/insumo/insumo.mapper';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
declare var window : any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  formModalMinuta: any;
  modalRegistroMinuta: any;
  formModalInsumo: any;

  formRegistroInsumo: FormGroup = {} as FormGroup;

  insumos: Insumo[] = [];
  insumo: Insumo = {} as Insumo;

  minutas : Minuta[] = [];

  constructor(private insumosService: InsumosService,private minutasService: MinutasService, private insumoMapper: InsumoMapper, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    let formatoName = /^.{1,10}$/

    this.formRegistroInsumo = this.formBuilder.group({
      nombreInsumo: ['', Validators.compose([Validators.pattern(formatoName),Validators.required])],
      gramos: ['', Validators.compose([Validators.required])],
    })

    this.minutasService.cargarMinutas().subscribe((data)=>{
      this.minutas = data;
    })

    // CARGA DE INSUMO POR ID
    this.insumosService.cargarInsumoById().subscribe((data)=>{
      console.log(data);  
      this.insumo = this.insumoMapper.mapDTOtoInsumo(data as InsumoDTO);

    })
 
    // CARGA DE INSUMOS
    this.insumosService.cargarInsumos().subscribe((data)=>{
      console.log(data);
      for(let i in data) {
        this.insumos.push(this.insumoMapper.mapDTOtoInsumo(data[i] as InsumoDTO));
      }
      console.log(this.insumos);      
    })


    // CREACION DEL MODAL MINUTA
    this.formModalMinuta = new window.bootstrap.Modal(
      document.getElementById('minutaModal')
    )

    // CREACION DEL MODAL INSUMO
    this.formModalInsumo = new window.bootstrap.Modal(
      document.getElementById('insumoModal')
    )

    this.modalRegistroMinuta = new window.bootstrap.Modal(
      document.getElementById('modalRegistroMinuta')
    )
  }

  signIn() {
    console.log(this.formRegistroInsumo.status);
    if (this.formRegistroInsumo.status === 'VALID') {
      this.router.navigate(['/inicio'])
    } 
  }

  openFormModalMinuta() {
    this.formModalMinuta.show();
  }

  openFormModalInsumo() {
    this.formModalInsumo.show();
  }

  saveSomeThing() {
    this.formModalMinuta.hide();
  }

  guardarCambios() {
    this.formModalInsumo.hide();
  }

  // MODAL PARA REGISTRAR UNA MINUTA
  openRegistroModal() {
    this.modalRegistroMinuta.show();
  }

  cancelarRegistro() {
    this.modalRegistroMinuta.hide();
  }

  guardarCambiosRegistro() {
    this.modalRegistroMinuta.hide();
  }

}
