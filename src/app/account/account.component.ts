import { Component, Input } from '@angular/core';
import { AccountService } from '../account.service';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService,AccountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 

  constructor(private _loggingService:LoggingService,private accountService:AccountService ){}


  onSetTo(status: string) {
    this.accountService.updateAccount(this.id,status)
    console.log('A server status changed, new status: ' + status);
    this._loggingService.loggingMsg(status);
    //const service = new LoggingService;
    //console.log(service.loggingMsg(status))
  }
}
