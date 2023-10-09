import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SingleFaceSnapComponent} from "./components/single-face-snap/single-face-snap.component";
import {FaceSnapListComponent} from "./components/face-snap-list/face-snap-list.component";
import {NewFaceSnapComponent} from "./components/new-face-snap/new-face-snap.component";

const routes: Routes = [
  { path: '', component: FaceSnapListComponent },
  { path: ':id', component: SingleFaceSnapComponent},
  { path: 'create', component: NewFaceSnapComponent},
  ];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class FaceSnapsRoutingModule {

}
