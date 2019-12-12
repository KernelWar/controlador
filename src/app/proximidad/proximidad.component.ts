import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proximidad',
  templateUrl: './proximidad.component.html',
  styleUrls: ['./proximidad.component.css']
})
export class ProximidadComponent implements OnInit {
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'line';
  public x = 0;

  constructor(private socket: Socket) { }
  public centimetros = 0;
  ngOnInit() {
    Observable.create((observer) => {
      this.socket.on("interfaz-res", (data) =>{
        observer.next(data);
      });
    }).subscribe((datos) =>{
      this.centimetros = datos["cm"];
      this.pieChartData.push(this.centimetros);
      this.pieChartLabels.push(this.x);
      this.x++;
    });
  }

}
