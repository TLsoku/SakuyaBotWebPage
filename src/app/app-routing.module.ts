import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TestPageComponent } from './test-page/test-page.component';

const routes: Routes = [
  {   path: "home", component: HomepageComponent  },
  {   path: "test", component: TestPageComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
