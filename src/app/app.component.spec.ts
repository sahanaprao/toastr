import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ToastrComponent } from './toastr/toastr.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ToastrService } from './toastr/services/toastr.service';
import { Store } from '@ngrx/store';
import { Notifications } from './toastr/notifications';
import { provideMockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {

  let store: Store<Notifications>;
  const initialState = {  heading: '',
    subHeading:'',
    message: '',
    type: '' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ToastrComponent
      ],
      providers: [provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], 
    }).compileComponents();
  }));

  it(`should have as title 'toastr'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('toastr');
  });

  it('should call getToastr function with min 2 params', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    spyOn(component, "getToastr");
    component.getToastr('message','heading');
    // expect(component.getToastr).toHaveBeenCalledWith('message');      // should fail
    expect(component.getToastr).toHaveBeenCalledWith('message','heading');    //should pass
  });

  it('should spy on service', () => {
      const fixture = TestBed.createComponent(AppComponent); 
      const component = fixture.componentInstance;
      let myMockedService = fixture.debugElement.injector.get(ToastrService);
      spyOn(myMockedService, 'success');
      component.getToastr('this is message','header');
      expect(myMockedService.success);
  });

//   it('should spy on service message', () => {
//     let service = TestBed.get(ToastrService);
//   spyOn(service , "success").and.callThrough();
//   fixture = TestBed.createComponent(AppComponent);
//   component = fixture.componentInstance;
//   fixture.detectChanges();
//   // expect(myMockedService.success);
// });

});
