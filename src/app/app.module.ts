import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Router, RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSidenavModule} from '@angular/material/sidenav';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MobileComponent } from './product/mobile/mobile.component';
import { WatchComponent } from './product/watch/watch.component';
import { TvComponent } from './product/tv/tv.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { HttpClientModule } from '@angular/common/http';
import { DesignDependancyService } from './design-dependancy.service';
import { SingleuserComponent } from './contact/singleuser/singleuser.component';
import { NgContentDemoComponent } from './ng-content-demo/ng-content-demo.component';
import { CardsComponent } from './ng-content-demo/cards/cards.component';
import { ChilComponentComponent } from './ng-content-demo/chil-component/chil-component.component';
import { ServicedependancyComponent } from './servicedependancy/servicedependancy.component';
import { SubjectbehaviorsubjectComponent } from './subjectbehaviorsubject/subjectbehaviorsubject.component';
import { Test1Component } from './subjectbehaviorsubject/test1/test1.component';
import { Test2Component } from './subjectbehaviorsubject/test2/test2.component';
import { Test3Component } from './subjectbehaviorsubject/test3/test3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormConceptComponent } from './form-concept/form-concept.component';
import { TemplateDrivenComponent } from './form-concept/template-driven/template-driven.component';
import { ReactiveformconceptComponent } from './form-concept/reactiveformconcept/reactiveformconcept.component';
import { PipeconceptComponent } from './pipeconcept/pipeconcept.component';

const appRoutes:Routes=[
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginPageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'singleuser/:id',component:SingleuserComponent},
  {path:'ngcontentdemo',component:NgContentDemoComponent},
  {path:'servicedependancy',component:ServicedependancyComponent},
  {path:'subbehaviour',component:SubjectbehaviorsubjectComponent},
  {path:'forminput',component:FormConceptComponent},
  {path:'product',component:ProductComponent,children:[
    {path:'laptop',component:LaptopComponent},
    {path:'mobile',component:MobileComponent},
    {path:'watch',component:WatchComponent},
    {path:'tv',component:TvComponent},
  ]},
  {path:'**',component:PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    LaptopComponent,
    MobileComponent,
    WatchComponent,
    TvComponent,
    SingleuserComponent,
    NgContentDemoComponent,
    CardsComponent,
    ChilComponentComponent,
    ServicedependancyComponent,
    SubjectbehaviorsubjectComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    FormConceptComponent,
    TemplateDrivenComponent,
    ReactiveformconceptComponent,
    PipeconceptComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DesignDependancyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
