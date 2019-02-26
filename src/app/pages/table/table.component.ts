import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public tableExampleHTML;
  public tableExampleTS;
  rows = [
    {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
    {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
    {first_name: 'Sherlock', last_name: 'Holmes', address: 'Baker Street 5', phone: '123421'}
  ];
  tableOptions = {
    columns: [
      {name: 'First Name', prop: 'first_name', flex: 2, sortable: true, filtering: true},
      {name: 'Last Name', prop: 'last_name', flex: 2, sortable: true, filtering: true},
      {name: 'Address', prop: 'address', flex: 2, sortable: true, filtering: true},
      {name: 'Phone', prop: 'phone', flex: 2, sortable: true, filtering: true},
      {name: '', flex: 1, cellTemplate: 'actions', actions: ['delete']},
    ]
  };

  constructor(
    private textHelper: TextHelper
  ) { }

  ngOnInit() {
    this.tableExampleTS = this.textHelper.dedent`
    rows = [
      {first_name: 'Michael', last_name: 'Jackson', address: 'Sunset Boulevard 2', phone: '33456321'},
      {first_name: 'James', last_name: 'Bond', address: 'Bond Street 7', phone: '0070071'},
      {first_name: 'Sherlock', last_name: 'Holmes', address: 'Bond Street 5', phone: '0070071'}
    ];
    tableOptions = {
      columns: [
        {name: 'First Name', prop: 'first_name', flex: 2, sortable: true, filtering: true},
        {name: 'Last Name', prop: 'last_name', flex: 2, sortable: true, filtering: true},
        {name: 'Address', prop: 'address', flex: 2, sortable: true, filtering: true},
        {name: 'Phone', prop: 'phone', flex: 2, sortable: true, filtering: true},
        {name: '', flex: 1, cellTemplate: 'actions', actions: ['delete']},
      ]
    };
  `;
    this.tableExampleHTML = this.textHelper.dedent`
    <fj-table
      [rows]= "rows"
      [columns]="tableOptions.columns"
    ></fj-table>
  `;
  }

}