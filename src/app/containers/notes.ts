import { Component } from "@angular/core";
import { NoteCard } from "../ui/note-card";
import { NoteCreator } from "../ui/note-creator";
import { NoteService } from "../services/notes";
import { Note } from "../interfaces";
import { StoreHelper } from "../services/store-helper";
import { Store } from "../store";

@Component({
    selector: 'notes-container',
    directives: [NoteCard, NoteCreator],
    styles: [`
.notes {
  padding-top: 50px;
}
.creator {
  margin-bottom: 40px; 
}
`],
    template: `
<div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="createNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row">
          <note-card
          class="col-xs-4"
          *ngFor="let note of notes"
          [note]="note"
          (checked)="onNoteChecked($event)"></note-card>
        </div>
      </div>
    </div>`
})
export class Notes {
    notes:any = [];

    constructor(private noteService:NoteService, private store:Store) {
        /*this.notes = [
         {
         title: "Note 1",
         value: "clean room",
         color: 'seagreen'
         },
         {
         title: "Note 2",
         value: "clean room",
         color: 'skyblue'
         },
         {
         title: "Note 3",
         value: "clean room",
         color: 'teal'
         },
         {
         title: "Note 4",
         value: "clean room",
         color: 'orange'
         }
         ];*/
        /*this.noteService.getNotes()
         .subscribe(res => this.notes = res.data);*/
        this.store.changes.pluck('notes')
            .subscribe((notes:any) => this.notes = notes);
    }

    onNoteChecked(note:Note) {
        /*let index = this.notes.indexOf(note);
         this.notes.splice(index, 1);*/
        this.noteService.completeNote(note)
        /*.subscribe(note => {
         let index = this.notes.findIndex(localNote => localNote.id == note.id);
         this.notes.splice(index, 1);
         })*/
    }

    createNote(note:Note) {
        // this.notes.push(note);
        this.noteService.createNote(note)
        // .subscribe(note => this.notes.push(note));
    }
}