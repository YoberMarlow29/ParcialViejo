import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRepartidorComponent } from './page-repartidor.component';

describe('PageRepartidorComponent', () => {
  let component: PageRepartidorComponent;
  let fixture: ComponentFixture<PageRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRepartidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
