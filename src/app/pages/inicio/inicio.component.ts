import { Insumo, InsumoDTO, NewInsumo } from 'src/app/services/insumo/insumo.type';
import { AbstractType, Component, OnInit } from '@angular/core';
import { InsumosService } from '../../services/insumo/insumos.service';
import { MinutasService } from '../../services/minuta/minutas.service';
import { Minuta } from '../../services/minuta/minuta.type';
import { InsumoMapper } from 'src/app/services/insumo/insumo.mapper';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import {ModalEditarInsumoComponent} from "../../components/modales/modal-editar-insumo/modal-editar-insumo.component";
import {MatDialog} from "@angular/material/dialog";
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

  constructor(private insumosService: InsumosService,private minutasService: MinutasService,
              private insumoMapper: InsumoMapper, private formBuilder: FormBuilder,
              private router: Router, private matdialog:MatDialog) {}

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
    this.insumosService.cargarInsumoById(2).subscribe((data)=>{
      this.insumo = this.insumoMapper.mapDTOtoInsumo(data as InsumoDTO);
    })

    // CARGA DE INSUMOS
    this.insumosService.cargarInsumos().subscribe((data)=>{
      for(let i in data) {
        this.insumos.push(this.insumoMapper.mapDTOtoInsumo(data[i] as InsumoDTO));
      }
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

  // MODAL PARA REGISTRAR UN INSUMO
  openFormModalInsumo() {
    this.formModalInsumo.show();
  }

  guardarCambios() {
    if(this.formRegistroInsumo.status == 'VALID') {
      const newInsumo : NewInsumo = {
        nombre : this.formRegistroInsumo.get('nombreInsumo')?.value,
        gramos : this.formRegistroInsumo.get('gramos')?.value,
      }

      this.insumosService.crearInsumo(newInsumo).subscribe((res)=> {
        console.log(res);
      })
    }
    this.formModalInsumo.hide();
  }

  cancelarRegistroInsumo() {
    this.formModalInsumo.hide();
  }

  // MODAL PARA EDITAR INSUMO

  abrirModalEditarInsumo(nombreModal: string, gramos:number, id:number){
    const popup = this.matdialog
      .open(ModalEditarInsumoComponent,
        {
          width: '20%',
          data: {
            idInsumo: id,
            nombreInsumo: nombreModal,
            gramos: gramos,
          }
        }
      )
      .afterClosed()
      .subscribe((shouldReload: boolean) => {
        popup.unsubscribe();
        if (shouldReload) window.location.reload()
      });
  }

  // Eliminar insumo

  eliminarInsumo(id: number){
    this.insumosService.eliminarInsumo(id).subscribe(res => {
      console.log(res);
      window.location.reload()
    })
  }

  // VER DETALLES MINUTAS
  openFormModalMinuta() {
    this.formModalMinuta.show();
  }

  saveSomeThing() {
    this.formModalMinuta.hide();
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
