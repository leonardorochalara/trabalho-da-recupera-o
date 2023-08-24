import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoEditorComponent } from './foto-editor.component';

describe('FotoEditorComponent', () => {
  let component: FotoEditorComponent;
  let fixture: ComponentFixture<FotoEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotoEditorComponent]
    });
    fixture = TestBed.createComponent(FotoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
