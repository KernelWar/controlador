import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import 'round-slider';
declare var $: any;

@Component({
  selector: 'app-rpm',
  templateUrl: './rpm.component.html',
  styleUrls: ['./rpm.component.css']
})
export class RpmComponent implements OnInit {
  public rpm = 0;
  constructor(public socket: Socket) { }

  ngOnInit() {
    
    Observable.create((observer) => {
      this.socket.on("interfaz-res", (data) => {
        observer.next(data);
      });
      
    }).subscribe((datos) => {
      this.rpm = datos.velocidad;
      $("#handle1").roundSlider("option", "value", this.rpm);      
    });
    
    $("#handle1").roundSlider({
      sliderType: "min-range",
      editableTooltip: false,
      step: 1,
      disabled: true,
      radius: 150,
      width: 20,
      min: 0,
      max: 5000,
      value: 0,
      handleSize: 0,
      handleShape: "square",
      circleShape: "pie",
      startAngle: 315,
      tooltipFormat: "changeTooltip"
    });
    $("#handle1").roundSlider({
      tooltipFormat: function(e){
        return e.value+" rpm";
      }
    });
  }

}
