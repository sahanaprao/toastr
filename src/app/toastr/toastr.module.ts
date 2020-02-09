import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrComponent } from './toastr.component';
import { StoreModule } from '@ngrx/store';
import { NotificationReducer } from './notificationReducers';
import { ToastrService } from './services/toastr.service';
import { UserServiceConfig, UserService } from './services/user.service';

@NgModule({
  declarations: [ToastrComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({ notifications: NotificationReducer })
  ],
  providers: [ToastrService,UserService],
  exports:[ToastrComponent]
})
export class ToastrModule { 
  constructor (@Optional() @SkipSelf() parentModule: ToastrModule) {
    if (parentModule) {
      throw new Error(
        'ToastrModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: ToastrModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    };
  }
}