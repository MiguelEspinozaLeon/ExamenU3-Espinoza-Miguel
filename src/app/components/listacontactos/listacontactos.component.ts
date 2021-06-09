import { Component, OnInit } from '@angular/core';
import { ContactosService } from 'src/app/contactos.service';

@Component({
  selector: 'app-listacontactos',
  templateUrl: './listacontactos.component.html',
  styleUrls: ['./listacontactos.component.css']
})


export class ListacontactosComponent implements OnInit {
  contactos: any = [];
  constructor(private servicioContactos: ContactosService) { 
    this.contactos = servicioContactos.getContactos();
  }

  ngOnInit(): void {
  }

}
