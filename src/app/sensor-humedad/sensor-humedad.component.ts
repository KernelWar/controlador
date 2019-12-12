import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sensor-humedad',
  templateUrl: './sensor-humedad.component.html',
  styleUrls: ['./sensor-humedad.component.css']
})
export class SensorHumedadComponent implements OnInit {
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'line';
  public x = 0;
  

  public pieChartLabels2 = [];
  public pieChartData2 = [];
  public pieChartType2 = 'line';
  public x2 = 0;


  constructor(private socket: Socket) { }
  public humedad = 0;
  public temperatura = 0;
  ngOnInit() {
    console.log("iniciado");
    Observable.create((observer) => {
      this.socket.on("interfaz-res",(data) => {
        observer.next(data);
      });
    }).subscribe((datos) => {
      this.humedad = datos["humedad"];
      this.temperatura = datos["temperatura"];
      


      this.pieChartData.push(this.humedad);
      this.pieChartLabels.push(this.x);

      this.pieChartData2.push(this.temperatura);
      this.pieChartLabels2.push(this.x2);

      this.x2++;
      this.x++;
      
    
    });;

    
  }
  
  activar(){
    this.socket.emit("hola","hola arduino nano");
  }
  
}
