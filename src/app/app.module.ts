import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BodysectionComponent } from './bodysection/bodysection.component';
import { VideocontaierComponent } from './bodysection/videocontaier/videocontaier.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    BodysectionComponent,
    VideocontaierComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'bodysection',component:BodysectionComponent},
      {path:'bodysection/:id/:src',component:VideocontaierComponent},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
