import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../Utils/utility.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  messageFromOthers: string;

  constructor(private data: UtilityService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(
      message => {
        if (message) {
          this.messageFromOthers = message;
        }
      }, err => console.log(err) );
  }

  newMsg() {
    this.data.changeMessage('Lannisters Send Their Regards...');
  }

}
