# Toastr

## Setup

`step1:` Add ToastrModule to app NgModule

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastrModule } from './toastr/toastr.module';

```
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Use

```
import { ToastrService } from 'ngx-toastr';
 
@Component({...})
export class YourComponent {
  constructor(private toastr: ToastrService) {}
 
  showSuccess() {
    this.toastr.success('Hello world!', 'heading', 'sub heading);
  }
}
```

## Options

There are `Individual Options` and `Global Options`.

`Individual Options`
## Individual Options
Passed to ToastrService.success/warning/error()

| Option        | Type          
| ------------- |:-------------:
| message       | any 
| Heading       | any      
| SubHeading    | any      

## Global Options
Pass values to ToastrModule.forRoot()


| Option          | Type           | Default           |
| -------------   |:-------------: | ---------------:  |
| positionClass   | string         | 'toast-top-right' |
| timeOut         | number         |  5000             |
| maxToastr       | number         |    5              |

```
// root app NgModule
imports: [
  ToastrModule.forRoot({
    timeOut: 5000,
    positionClass: 'toast-top-right',
    maxToast: 5
  }),
]
```