import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerContainerComponent } from './primer-container.component';

describe('PrimerContainerComponent', () => {
  let component: PrimerContainerComponent;
  let fixture: ComponentFixture<PrimerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
