import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy loaded webinar module
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./webinar/webinar.module').then((m) => m.WebinarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
