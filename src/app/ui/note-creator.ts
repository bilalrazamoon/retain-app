import { Component, Output, EventEmitter } from "@angular/core";
import { ColorPicker } from "./color-picker";
import { Note } from "../interfaces";

@Component({
    selector: 'note-creator',
    directives: [ColorPicker],
    styles: [`
.note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
`],
    template: `
<div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
      <form class="row" (submit)="onCreateNote()">
        <input
          type="text"
          [(ngModel)]="newNote.title"
          name="newNoteTitle"
          placeholder="Title"
          *ngIf="fullForm"
          class="col-xs-10 title">
        <input
          type="text"
          (focus)="toggle(true)"
          [(ngModel)]="newNote.value"
          name="newNoteValue"
          placeholder="Take a note..."
          class="col-xs-10">
        <div class="actions col-xs-12 row between-xs">
            <div class="col-xs-3">
                <color-picker [colors]="colors"
                (selected)="onColorSelect($event)"
                *ngIf="fullForm"></color-picker>
            </div>
          <button
            type="submit"
            *ngIf="fullForm"
            class="btn-light">
            Done
          </button>
        </div>
      </form>
    </div>
`
})
export class NoteCreator {
    @Output() createNote = new EventEmitter();
    newNote:Note = {
        title: "",
        value: "",
        color: "white"
    };
    colors = [
        'green',
        'yellow',
        'pink',
        'orange'
    ];
    fullForm = false;

    onCreateNote() {
        console.log('onCreateNote');
        const {title, value} = this.newNote;
        if (title && value) {
            this.createNote.emit(this.newNote);
            this.reset();
        }
    }

    onColorSelect(color:string) {
        this.newNote.color = color;
    }

    private reset() {
        this.newNote = {
            title: "",
            value: "",
            color: "white"
        };
        this.toggle(false);
    }

    private toggle(val:boolean = false) {
        this.fullForm = val;
    }
}