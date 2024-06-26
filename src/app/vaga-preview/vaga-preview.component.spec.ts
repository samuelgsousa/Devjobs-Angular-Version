import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaPreviewComponent } from './vaga-preview.component';

describe('VagaPreviewComponent', () => {
  let component: VagaPreviewComponent;
  let fixture: ComponentFixture<VagaPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagaPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VagaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
