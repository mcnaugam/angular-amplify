import { Component, OnInit } from '@angular/core';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import { API, graphqlOperation } from 'aws-amplify';

interface Todo {
  name: string;
  description: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  listData: Todo[];

  constructor() {}

  async addTodo() {
    const todoDetails = {
      name: 'Todo 1',
      description: 'My first todo',
    };

    const newTodo = await API.graphql(
      graphqlOperation(mutations.createTodo, { input: todoDetails })
    );

    this.populateTodos;
  }

  async populateTodos() {
    const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
    this.listData =
      allTodos.data.listTodos.items.map(
        (todo) =>
          ({
            id: todo?.id,
            name: todo?.name,
            description: todo?.description,
          } as Todo)
      ) || [];
  }

  ngOnInit(): void {
    this.populateTodos();
  }
}
