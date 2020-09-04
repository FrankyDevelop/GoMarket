import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabReservasPage } from './tab-reservas.page';

describe('TabReservasPage', () => {
  let component: TabReservasPage;
  let fixture: ComponentFixture<TabReservasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabReservasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
