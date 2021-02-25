import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private _loggingService:LoggingService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this._loggingService.loggingMsg(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
    //const service = new LoggingService;
   // console.log(service.loggingMsg(accountStatus))
  }
}
