export class TaskList {
    desc: string;
    complete: boolean;

    constructor(desc: string) {
        this.desc = desc;
        this.complete = false;
    }
}