import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sensorluz',
  templateUrl: './sensorluz.component.html',
  styleUrls: ['./sensorluz.component.css']
})
export class SensorluzComponent implements OnInit {
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'line';
  public x = 0;

  constructor(private socket: Socket) { }
  public luz = 0;
  ngOnInit() {
    console.log("iniciado");
    Observable.create((observer) => {
      this.socket.on("interfaz-res", (data) => {
        observer.next(data);
      });
    }).subscribe((datos) => {
      this.luz = datos["luz"];

      this.pieChartData.push(this.luz);
      this.pieChartLabels.push(this.x);

      this.x++;
    });;


  }

}
