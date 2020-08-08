import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/mock_data_(4).json';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';
import { BooleanConverterService } from './boolean-converter.service';

interface DataItem {
  id: number;
  first_name: string;
  last_name: string;
  job_title: string;
  codeclan_graduate: boolean;
  gender: string;
}

interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  listData: DataItem[] = (data as any).default;

  listOfColumns: ColumnItem[] = [
    {
      name: 'First Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) =>
        a.first_name.localeCompare(b.first_name),
    },
    {
      name: 'Last Name',
    },
    {
      name: 'Job Title',
    },
    {
      name: 'CodeClan Graduate',
      filterMultiple: false,
      listOfFilter: [
        { text: 'Yes', value: true },
        { text: 'No', value: false },
      ],
      filterFn: (ccg: boolean, item: DataItem) =>
        item.codeclan_graduate === ccg,
    },

    {
      name: 'Gender',

      filterMultiple: false,
      listOfFilter: [
        { text: 'Male', value: 'Male' },
        { text: 'Female', value: 'Female' },
      ],
      filterFn: (gender: string, item: DataItem) =>
        item.gender.indexOf(gender) !== -1,
    },
  ];

  constructor(public booleanConverterService: BooleanConverterService) {}

  ngOnInit(): void {
    console.log('list data is: ' + this.listData);
  }
}
