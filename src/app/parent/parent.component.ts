import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { UtilityService } from '../Utils/utility.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  parentMessage = 'message from parent';
  message: string;

  messageFromFuture: string;


  recerivedMsgFromParent: string;
  @ViewChild(ChildComponent, { static: true }) child: { message: string; };
  constructor(private service: UtilityService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(msg => {
      if (msg) {
      this.messageFromFuture = msg;
      }
    }, err => { console.log(err); });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.message = this.child.message;
  }

  receiveMessage($event) {
    this.recerivedMsgFromParent = $event;
  }

}
