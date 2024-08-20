import { Component, OnInit, Input, Output } from '@angular/core';
import {
  REMINDER_ICON,
  COLLABRATOR_ICON,
  COLOR_PALATTE_ICON,
  IMG_ICON,
  ARCHIVE_ICON,
  MORE_ICON,
  DELETE_FOREVER_ICON,
  RESTORE_ICON,
  UNARCHIVE_ICON,
  PIN_ICON,
} from '../../assets/svg.icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { EventEmitter } from 'stream';
@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss'],
})
export class NotecardComponent implements OnInit {
  @Input() noteDetails: any;
  //  @Output() sendDataToParent=new EventEmitter();
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'reminder-icon',
      sanitizer.bypassSecurityTrustHtml(REMINDER_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'collabrator-icon',
      sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'color-palatte-icon',
      sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'img-icon',
      sanitizer.bypassSecurityTrustHtml(IMG_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'archive-icon',
      sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'more-icon',
      sanitizer.bypassSecurityTrustHtml(MORE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'delete-forever-icon',
      sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'restore-icon',
      sanitizer.bypassSecurityTrustHtml(RESTORE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'unarchive-icon',
      sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'pin-icon',
      sanitizer.bypassSecurityTrustHtml(PIN_ICON)
    );
  }
  ngOnInit(): void {}

  handleDelete() {
    // this.sendDataToParent.emit("data from child deleted");
  }

  remainder(){
    console.log("Remainder");
    
    
  } 
}