import { Component, OnInit, Output, Input } from '@angular/core';
import { SongSheet } from 'src/app/services/data-types/common.types';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less']
})
export class SingleSheetComponent implements OnInit {
  @Input() sheet:SongSheet;
  constructor() { }

  ngOnInit(): void {
    
  }
  
}
