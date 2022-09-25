import { Insumo } from 'src/app/services/insumo/insumo.type';
import { Component, OnInit } from '@angular/core';
import { InsumosService } from '../../services/insumo/insumos.service';
import { MinutasService } from '../../services/minuta/minutas.service';
import { Minuta } from '../../services/minuta/minuta.type';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  insumos : Insumo[] = [];
  minutas : Minuta[] = [];
  constructor(private insumosService: InsumosService,private minutasService: MinutasService) {}

  ngOnInit(): void {
    this.insumos = this.insumosService.insumos;
    this.minutas = this.minutasService.minutas;
  }

}
