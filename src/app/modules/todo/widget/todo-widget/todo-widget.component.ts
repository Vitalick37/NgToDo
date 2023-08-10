import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoState } from '../../store/todo/todo.reducer';
import { TodoCreateAction, TodoDeleteAction, TodoEditAction, TodoToggleAction } from '../../store/todo/todo.actions';
import { todoListSelector } from '../../store/todo/todo.selectors';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent {

  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(
    private store$: Store<TodoState>
  ) {}

  onCreate(name: string) {
    this.store$.dispatch(new TodoCreateAction({name: name}));
  }

  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteAction({id}));
  }

  onToggle(id:number) {
    this.store$.dispatch(new TodoToggleAction({id}));
  }

  onEdit({id, name}: {id: number, name: string}) {
    this.store$.dispatch(new TodoEditAction({id, name}));
  }

}
