import { observable } from "mobx";

export interface ToDo {
    _id: number;
    title: string;
    desc: string;
}

export default class ToDoState {
    @observable public toDoList: ToDo[];

    constructor() {
        this.toDoList = [];
    }

    public add(title: string, desc?: string) {
        this.toDoList.push({
            _id: Date.now(),
            desc: desc || "",
            title,
        });
    }

    public remove(id: number) {
        this.toDoList = this.toDoList.filter(item => item._id !== id);
    }
}