import { Component, OnInit } from '@angular/core';
import { Regimen } from "../../services/regimen/regimen.type";
import { RegimenService } from "../../services/regimen/regimen.services";

@Component({
  selector: 'app-regimenes',
  templateUrl: './regimenes.component.html',
  styleUrls: ['./regimenes.component.scss']
})
export class RegimenesComponent implements OnInit {
  regimenes : Regimen[] = [];

  constructor(private regimenService: RegimenService) { }

  ngOnInit(): void {
    this.regimenes = this.regimenService.regimenes;
  }

}
