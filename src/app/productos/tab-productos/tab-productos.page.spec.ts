import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabProductosPage } from './tab-productos.page';

describe('TabProductosPage', () => {
  let component: TabProductosPage;
  let fixture: ComponentFixture<TabProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
