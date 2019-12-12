import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { rutas } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { ProximidadComponent } from './proximidad/proximidad.component';
import { SensorluzComponent } from './sensorluz/sensorluz.component';
import { ServoComponent } from './servo/servo.component';
import { HsComponent } from './hs/hs.component';
import { MotorComponent } from './motor/motor.component';
import { RpmComponent } from './rpm/rpm.component';


const config: SocketIoConfig = { url: 'http://192.168.43.142:8080', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    rutas,
    ProximidadComponent,
    SensorluzComponent,
    ServoComponent,
    HsComponent,
    MotorComponent,
    RpmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
