import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NOTE_ICON1, CHECKBOX, IMAGE, BRUSH_ICON} from 'src/assets/svg.icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  noteIcon1 = NOTE_ICON1;
  checkbox = CHECKBOX;
  image = IMAGE;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'brush-icon',
      sanitizer.bypassSecurityTrustHtml(BRUSH_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'image',
      sanitizer.bypassSecurityTrustHtml(IMAGE)
    );
    iconRegistry.addSvgIconLiteral(
      'checkbox',
      sanitizer.bypassSecurityTrustHtml(CHECKBOX)
    );
    iconRegistry.addSvgIconLiteral(
      'noteicon1',
      sanitizer.bypassSecurityTrustHtml(NOTE_ICON1)
    );
  }

  ngOnInit(): void {
  }

}