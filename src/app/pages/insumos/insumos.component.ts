import { Component, OnInit } from '@angular/core';
import { Insumo } from 'src/app/services/insumo/insumo.type';
import { InsumosService } from 'src/app/services/insumo/insumos.service';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.scss']
})
export class InsumosComponent implements OnInit {
  insumo: Insumo = {} as Insumo;
  insumos: Insumo[] = [];

  constructor(private insumosService: InsumosService) {}

  ngOnInit(): void {
    this.insumosService.cargarInsumoById().subscribe((data)=>{
      console.log(data);
      this.insumo = data as Insumo;
    })
  }
}
