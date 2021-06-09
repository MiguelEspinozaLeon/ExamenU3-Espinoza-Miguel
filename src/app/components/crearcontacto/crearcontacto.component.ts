import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearcontacto',
  templateUrl: './crearcontacto.component.html',
  styleUrls: ['./crearcontacto.component.css']
})
export class CrearcontactoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }
  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      contacto: [''],
      sexo: [''],
      empresa: [''],
      correo: ['', Validators.required],
      telefono: ['', Validators.maxLength(10)]
    })
  }

  guardar(){
    console.log(this.formulario.value);
  }


}
