import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExitPage } from './exit.page';

describe('ExitPage', () => {
  let component: ExitPage;
  let fixture: ComponentFixture<ExitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
