import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  @Input() showButton: boolean;


  message = 'Hola Mundo from Child!';

  messageToParent = 'Hola Senoras From Child';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendMsg() {
    this.messageEvent.emit(this.messageToParent);
  }

}
