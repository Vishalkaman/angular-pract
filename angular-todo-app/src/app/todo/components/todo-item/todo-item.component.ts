import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoCompleted = new EventEmitter<number>();

  constructor() {}

  onCheckboxChange(): void {
    this.todoCompleted.emit(this.todo.id);
  }
}
