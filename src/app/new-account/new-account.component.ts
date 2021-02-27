import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

})
export class NewAccountComponent {
 

  constructor(private _loggingService:LoggingService, private accountService:AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
   // this._loggingService.loggingMsg(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
    //const service = new LoggingService;
   // console.log(service.loggingMsg(accountStatus))
  }
}
