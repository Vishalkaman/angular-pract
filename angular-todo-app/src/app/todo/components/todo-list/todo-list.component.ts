import { Component } from '@angular/core';
import { type Todo,  TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  onTodoCompleted(todoId: number): void {
    const todo: Todo | undefined = this.todos.find(item => item.id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
