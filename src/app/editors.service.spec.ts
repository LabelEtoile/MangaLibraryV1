import { TestBed } from '@angular/core/testing';

import { EditorService } from './editor.service';

describe('EditorsService', () => {
  let service: EditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});