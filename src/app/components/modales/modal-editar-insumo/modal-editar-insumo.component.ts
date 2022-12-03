import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InsumosService} from "../../../services/insumo/insumos.service";

@Component({
  selector: 'app-modal-editar-insumo',
  templateUrl: './modal-editar-insumo.component.html',
  styleUrls: ['./modal-editar-insumo.component.scss']
})
export class ModalEditarInsumoComponent implements OnInit {

  formularioEditInsumoForm : FormGroup = {} as FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private Ref:MatDialogRef<ModalEditarInsumoComponent>,private formBuilder: FormBuilder,
              private insumosService: InsumosService) { }

  ngOnInit(): void {
    let form ={
      nombreInsumo: [this.data.nombreInsumo, Validators.compose([
        Validators.pattern(/^.{1,20}$/),
        Validators.required
      ])],
      gramos: [this.data.gramos, Validators.compose([
        Validators.pattern(/^.{1,}$/),
        Validators.required
      ])],
    }

    this.formularioEditInsumoForm = this.formBuilder.group(form);
  }

  cerrarPopUpEditarInsumo(){
    let insumo = {
      idinsumo : this.data.idInsumo,
      insumo: this.formularioEditInsumoForm.get('nombreInsumo')!.value,
      gramos: this.formularioEditInsumoForm.get('gramos')!.value
    };
    this.insumosService.editarInsumo(insumo).subscribe(res =>{
      console.log(res);
    })
    this.Ref.close(insumo);
  }

}
