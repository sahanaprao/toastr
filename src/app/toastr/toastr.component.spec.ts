import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrComponent } from './toastr.component';
import { Notifications } from './notifications';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('ToastrComponent', () => {

  let store: Store<Notifications>;
  const initialState = {  heading: '',
    subHeading:'',
    message: '',
    type: '' };
  let component: ToastrComponent;
  let fixture: ComponentFixture<ToastrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastrComponent ],
      providers: [provideMockStore({ initialState })],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should variable maxTo number', () => {
    component.maxToast = 5;
    expect(component.maxToast).toEqual(jasmine.any(Number));
  });
});
