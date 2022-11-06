import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogViewComponent } from './blog-view/blog-view.component';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogViewComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
