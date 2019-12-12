import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import 'round-slider';
declare var $: any;

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})
export class MotorComponent implements OnInit {
  public sentido = 1;
  public velocidad = 0;
  constructor(private socket: Socket) { }

  ngOnInit() {
    var controller = this;
    $("#handle1").roundSlider({
      min: 0,
      max: 100,
      step: 1,
      sliderType: "min-range",
      editableTooltip: false,
      radius: 150,
      width: 20,
      value: 0,
      handleSize: 0,
      handleShape: "square",
      circleShape: "pie",
      startAngle: 315,
    });
    $("#handle1").roundSlider({
      tooltipFormat: function (e) {
        var val = e.value;        
        return val + " %";
      },
      drag: function(e){
        controller.velocidad = e.value;
        var datos = {
          velocidad: e.value,
          sentido: controller.sentido
        }
        controller.socket.emit("cVelocidad", datos);        
      },
      change: function(e){
        controller.velocidad = e.value;
        var datos = {
          velocidad: e.value,
          sentido: controller.sentido
        }
        controller.socket.emit("cVelocidad", datos);
      }
    });

  }

  derecha(){
    this.sentido = 1;    
    this.enviarDatos();
  }

  izquierda(){
    this.sentido = 0;
    this.enviarDatos();
  }

  enviarDatos(){
    this.socket.emit("cVelocidad", {
      velocidad: this.velocidad,
      sentido: this.sentido
  });
  }

}
