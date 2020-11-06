import { Injectable } from '@angular/core';
import { TaskList } from '../models/taskList';


@Injectable({
  providedIn: 'root'
})
export class WishesService {
  taskLists: TaskList[] = [];
  constructor() {
    const lista1 = new TaskList('feed dog')
    const lista2 = new TaskList('feed cat')

    this.taskLists.push(lista1, lista2);
    console.log(this.taskLists, 'listas');
  }
}
