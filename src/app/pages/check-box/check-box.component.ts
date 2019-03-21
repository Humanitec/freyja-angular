import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {
  public navItems = [
    {
      path: '#overwiev',
      label: 'Overview'
    },
    {
      path: '#type',
      label: 'Type'
    }
  ];
  public checkedState = this.textHelper.dedent`
  <fj-checkbox checked>Checked</fj-checkbox>
  `;

  public uncheckedState = this.textHelper.dedent`
  <fj-checkbox>Checked</fj-checkbox>
  `;

  public disabledState = this.textHelper.dedent`
  <fj-checkbox disabled="true">I am disabled</fj-checkbox>
  <fj-checkbox disabled checked>I am checked</fj-checkbox>
  `;

  public labelPosition = this.textHelper.dedent`
  <fj-checkbox labelPosition="before">Label Before</fj-checkbox>
  <fj-checkbox checked>Label After</fj-checkbox>
  `;

  public checkboxGroup = this.textHelper.dedent`
  <fj-checkbox-group 
  [label]="'Checkboxes'" 
  [options]="[{label: 'Checkbox1', value:  'checkbox1', controlName: '1', formGroup: null }, {label: 'Checkbox2', value:  'checkbox2', controlName: '2', formGroup: null }]">
</fj-checkbox-group>
  `;

  constructor(public textHelper: TextHelper) { }

  ngOnInit() {
  }

  onChange(event) {
    console.log(event);
  }

}
