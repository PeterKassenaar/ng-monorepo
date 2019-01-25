import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sl-shared-lib',
  template: `
    <p>
      shared-lib works!
    </p>
  `,
  styles: []
})
export class SharedLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
