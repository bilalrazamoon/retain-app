export interface Note {
    color?:string,
    title:string,
    value:string
    id?:string | number,
    createdAt?:string,
    updatedAt?:string,
    userId?:string
}

export interface State {
    notes:Array<Note>;
}