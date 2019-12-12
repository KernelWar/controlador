import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

import 'round-slider';
declare var $: any;

@Component({
  selector: 'app-servo',
  templateUrl: './servo.component.html',
  styleUrls: ['./servo.component.css']
})


export class ServoComponent implements OnInit {

  constructor(private socket: Socket) { }

  ngOnInit() {
      var controller = this;
      $("#appearance7").roundSlider({
        min: 0,
        max: 180,
        step: 1,
        value: 0,
        width: 20,
        radius: 150,
        handleSize: "+10",
        circleShape: "half-top",
        startAngle: 0,
        editableTooltip: false,
        handleShape: "dot",
        sliderType: "min-range",

      });
      
      $("#appearance7").roundSlider({
        drag: function (e) {
          //console.log(e.value);          
          controller.socket.emit("moverServo",{ grados:e.value });
        },
        change:function (e) {
          //console.log(e.value);
          controller.socket.emit("moverServo",{ grados:e.value });
        }, 
        tooltipFormat: function (args) {
          return args.value + "°";
        }
      });
    
    
  }

  


}
