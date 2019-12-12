import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-hs',
  templateUrl: './hs.component.html',
  styleUrls: ['./hs.component.css']
})
export class HsComponent implements OnInit {
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'line';
  public x = 0;

  public humedad = 0;
  constructor(private socket: Socket) { }

  ngOnInit() {
    Observable.create((observer) => {
      this.socket.on("interfaz-res", (data) =>{
        observer.next(data);
      });
    }).subscribe((datos) =>{
      this.humedad = datos["humedad"];
      this.pieChartData.push(this.humedad);
      this.pieChartLabels.push(this.x);
      this.x++;
    });
  }

}
