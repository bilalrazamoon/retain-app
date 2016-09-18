import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject"
import "rxjs/add/operator/distinctUntilChanged";
import { State, Note } from "./interfaces";

const defaultState = {
    notes: []
};

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
    private _store = _store;
    changes = this._store.asObservable().distinctUntilChanged()
        .do(() => console.log('changes'));

    setState(state:State) {
        console.log('Set State', state);
        return this._store.next(state)
    }

    getState() {
        return this._store.value;
    }

    purge() {
        this._store.next(defaultState);
    }
}