import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes-service/notes-service.service';
import { error } from 'winston';


@Component({
  selector: 'app-archieve-container',
  templateUrl: './archieve-container.component.html',
  styleUrls: ['./archieve-container.component.scss'],
})
export class ArchieveContainerComponent implements OnInit {
  notesList: any = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getAllNotesApiCall('getArchiveNotesList').subscribe({
      next: (r: any) => {
        this.notesList = r.data.data;
        console.log('result is: ', this.notesList);
      },
      error : (e) => {},
      // error: (e) => {},
    });
  }
}