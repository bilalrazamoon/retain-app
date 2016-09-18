import { Injectable } from "@angular/core";
import { ApiService } from "./api";
import { Note } from "../interfaces";
import { Observable } from "rxjs/Rx";
import { StoreHelper } from "./store-helper";

@Injectable()
export class NoteService {
    path = "/notes";

    constructor(private apiService:ApiService, private storeHelper:StoreHelper) {
    }

    createNote(note:Note):Observable<Note> {
        return this.apiService.post(this.path, note)
            .do(res => this.storeHelper.add('notes', res))
    }

    getNotes():Observable<{data:Note[]}> {
        return this.apiService.get(this.path)
            .do(res => this.storeHelper.update('notes', res.data))
    }

    completeNote(note:Note):Observable<Note> {
        return this.apiService.delete(`${this.path}/${note.id}`)
            .do(res => this.storeHelper.findAndDelete('notes', res.id))
    }
}