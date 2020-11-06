import { Component } from '@angular/core';
import { TaskList } from 'src/app/models/taskList';
import { WishesService } from 'src/app/services/wishes.service';
import { IonList, IonItem, IonLabel } from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tasks: TaskList[]

  constructor(
    private wishesService: WishesService
  ) {
    this.tasks = this.wishesService.taskLists;
  }



}
