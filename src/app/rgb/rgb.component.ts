import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-rgb',
  templateUrl: './rgb.component.html',
  styleUrls: ['./rgb.component.css']
})
export class RgbComponent implements OnInit {
  contacto: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private socket: Socket
  ) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
      color: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contacto.valid) {
      const color = this.contacto.value.color;
      console.log("color: " + color);
      this.socket.emit('colorElegido', color);
    }
  }
  enviarColor(color){
    this.socket.emit('colorElegido', color);
  }

}
