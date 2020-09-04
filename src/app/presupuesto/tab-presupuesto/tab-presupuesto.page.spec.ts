import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabPresupuestoPage } from './tab-presupuesto.page';

describe('TabPresupuestoPage', () => {
  let component: TabPresupuestoPage;
  let fixture: ComponentFixture<TabPresupuestoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPresupuestoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPresupuestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
