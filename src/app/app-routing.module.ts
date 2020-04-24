import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TouristattractionComponent } from './components/famousplaces/touristattraction/touristattraction.component'
const routes: Routes = [
  {path: "touristattraction", component:TouristattractionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents= [TouristattractionComponent];
