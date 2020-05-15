import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MybuysPage } from './mybuys.page';

describe('MybuysPage', () => {
  let component: MybuysPage;
  let fixture: ComponentFixture<MybuysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybuysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MybuysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
