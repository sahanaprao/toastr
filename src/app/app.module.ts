import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToastrModule } from './toastr/toastr.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right',timeout: 7000, maxToast: 5})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
