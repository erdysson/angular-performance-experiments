import { Component, OnInit } from '@angular/core';

import { ChangeDetectionLogger } from './change-detection-logger/change-detection-logger';
import { DataService } from './data/data.service';
import { TodoService } from './data/todo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ChangeDetectionLogger implements OnInit {
    name = 'app';

    pathFromParent = null;

    constructor(private readonly todoService: TodoService) {
        super();
    }

    ngOnInit(): void {
        this.todoService.getTodos().subscribe(console.log);
    }
}
