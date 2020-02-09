import { Component } from '@angular/core';
import { ToastrService } from './toastr/services/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private toastrService: ToastrService) {} 
  
  getToastr(message: string, heading: string, subHeading?: string) { 
    if(heading === 'success')
   this.toastrService.success(message, heading, subHeading);
    else if(heading === 'warning')
    this.toastrService.warning(message, heading, subHeading);
    else 
    this.toastrService.error(message, heading, subHeading);
  }
   
}
