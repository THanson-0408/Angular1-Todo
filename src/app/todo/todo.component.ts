import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';

//Decarator
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'Clean the gutters',
      completed: true,
    },
    {
      task: 'Fix the toliet',
      completed: true,
    },
    {
      task: 'Get mom a birthday card',
      completed: false,
    },
    {
      task: 'Finish angular lab 1 over the weekend',
      completed: false,
    },
  ];

  searchTerm: string;

  showIndex: number;

  //methods below here
  constructor() {}

  setShowIndex(index: number) {
    this.showIndex = index;
  }

  resetShowIndex() {
    this.showIndex = undefined;
  }

  addTask(form: NgForm) {
    console.log(form);
    let newTodo: Todo = {
      task: form.value.todo,
      completed: false,
    };
    this.todos.push(newTodo);
    form.reset();
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  completeTask(index: number) {
    this.todos[index].completed = true;
  }

  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.trim().toLowerCase();
  }

  myFilterMethod() {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((objective) => {
        let currentTodo = objective.task.toLowerCase().trim();
        return currentTodo.includes(this.searchTerm);
      });
    }
  }

  ngOnInit(): void {}
}
