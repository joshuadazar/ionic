import { TaskList } from './taskList';

export class List {
    id: number;
    title: string;
    created: Date;
    finished: Date;
    status: boolean;
    items: TaskList[];

    constructor(title: string) {
        this.title = title;
        this.created = new Date();
        this.items = [];
        this.id = new Date().getTime();
    }
}