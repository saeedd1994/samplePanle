import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';
import { SingleCardComponent } from './component/single-card/single-card.component';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogViewComponent,
    SingleCardComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
