import { Insumo } from 'src/app/services/insumo/insumo.type';
import { Component, OnInit } from '@angular/core';
import { InsumosService } from '../../services/insumo/insumos.service';
import { MinutasService } from '../../services/minuta/minutas.service';
import { Minuta } from '../../services/minuta/minuta.type';
declare var window : any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  formModal: any;
  insumos: Insumo[] = [];
  minutas : Minuta[] = [];

  constructor(private insumosService: InsumosService,private minutasService: MinutasService) {}

  ngOnInit(): void {
    this.minutasService.cargarMinutas().subscribe((data)=>{
      this.minutas = data;
    })

    this.insumosService.cargarInsumos().subscribe((data)=>{
      this.insumos = data;
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
