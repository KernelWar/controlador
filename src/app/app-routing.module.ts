import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorHumedadComponent } from './sensor-humedad/sensor-humedad.component';
import { RgbComponent } from './rgb/rgb.component';
import { ProximidadComponent } from './proximidad/proximidad.component';
import { SensorluzComponent } from './sensorluz/sensorluz.component';
import { ServoComponent  } from './servo/servo.component';
import { HsComponent  } from './hs/hs.component';
import { MotorComponent } from './motor/motor.component';
import { RpmComponent } from './rpm/rpm.component';

const routes: Routes = [
  { path: 'dth11', component: SensorHumedadComponent },
  { path: 'rgb', component: RgbComponent },
  { path: 'proximidad', component: ProximidadComponent },
  { path: 'luz', component: SensorluzComponent },
  { path: 'servo', component: ServoComponent },
  { path: 'hs', component: HsComponent },
  { path: 'motor', component: MotorComponent },
  { path: 'rpm', component: RpmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rutas = [ 
  SensorHumedadComponent, 
  RgbComponent, 
  ProximidadComponent,
  SensorluzComponent,
  ServoComponent,
  HsComponent,
  MotorComponent,
  RpmComponent
]
