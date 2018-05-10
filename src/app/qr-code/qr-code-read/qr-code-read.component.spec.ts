import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeReadComponent } from './qr-code-read.component';

describe('QrCodeReadComponent', () => {
  let component: QrCodeReadComponent;
  let fixture: ComponentFixture<QrCodeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrCodeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
