import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TODO_REDUCER_NODE, todoReducer } from './store/todo/todo.reducer';
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import { RouterModule } from '@angular/router';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';
import { TodoListItemUiComponent } from './ui/todo-list-item-ui/todo-list-item-ui.component';
import { TodoListItemEditUiComponent } from './ui/todo-list-item-edit-ui/todo-list-item-edit-ui.component';
import { TodoSyncStorageService } from './service/todo-sync-storage.service';



@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent,
    TodoListItemUiComponent,
    TodoListItemEditUiComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    TodoRoutingModule,
    FormsModule
  ],
  providers: [TodoSyncStorageService],
})
export class TodoModule { }
