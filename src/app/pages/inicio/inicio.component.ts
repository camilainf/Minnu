import { Insumo, InsumoDTO } from 'src/app/services/insumo/insumo.type';
import { Component, OnInit } from '@angular/core';
import { InsumosService } from '../../services/insumo/insumos.service';
import { MinutasService } from '../../services/minuta/minutas.service';
import { Minuta } from '../../services/minuta/minuta.type';
import { InsumoMapper } from 'src/app/services/insumo/insumo.mapper';

declare var window : any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  formModal: any;
  insumos: Insumo[] = [];
  insumo: Insumo = {} as Insumo;
  minutas : Minuta[] = [];

  constructor(private insumosService: InsumosService,private minutasService: MinutasService, private insumoMapper: InsumoMapper) {}

  ngOnInit(): void {
    this.minutasService.cargarMinutas().subscribe((data)=>{
      this.minutas = data;
    })

    this.insumosService.cargarInsumoById().subscribe((data)=>{
      console.log(data);    

      this.insumo = this.insumoMapper.mapInsumoDTOToInsumo(data as InsumoDTO);

    })

    this.insumosService.cargarInsumos().subscribe((data)=>{
      console.log(data);

      for(let i in data) {
        this.insumos.push(this.insumoMapper.mapInsumoDTOToInsumo(data[i] as InsumoDTO));
      }

      console.log(this.insumos);      

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
