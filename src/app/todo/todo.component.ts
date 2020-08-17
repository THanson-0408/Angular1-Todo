import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

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

  //methods below here
  constructor() {}

  ngOnInit(): void {}
}
