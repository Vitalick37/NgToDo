import { Todo } from "../../model/todo";
import { TodoActions, todoActionsType } from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
    idIncrement: number;
    todoList: Todo[];
}

const initalState: TodoState = {
    idIncrement: 1,
    todoList: []
}

export const todoReducer = (state: TodoState = initalState, action: TodoActions) => {

    switch(action.type) {
        case todoActionsType.create:
            return {
                ...state,
                idIncrement: state.idIncrement + 1,
                todoList: [
                    ...state.todoList,
                    {
                        id: state.idIncrement,
                        name: action.payload.name,
                        completed: false
                    }

                ]
            };

        case todoActionsType.delete:
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload.id),
            };

        case todoActionsType.edit:
            return {
                ...state,
                todoList: state.todoList.map(todo => todo.id === action.payload.id ? {
                    ...todo,
                    name: action.payload.name
                } : todo),
            };

        case todoActionsType.toggle:
            return {
                ...state,
                todoList: state.todoList.map(todo => todo.id === action.payload.id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo),
            };

        default:
            return state;
    }


    return state;
};