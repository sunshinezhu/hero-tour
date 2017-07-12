import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {FormsModule} from "@angular/forms";
import {HeroService} from "./hero.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  //空路由表示默认路由
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'heroes',component:HeroListComponent}
] ;

@NgModule({
  declarations: [
    //声明用到组件
    AppComponent,
    HeroListComponent,
    DashboardComponent
  ],
  imports: [
    //导入依赖模块
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HeroService], //提供用到服务
  bootstrap: [AppComponent]
})
export class AppModule { }
