import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";
@Injectable()
export class AccountService{
    constructor(private loggingService:LoggingService){}
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      updateStatus = new EventEmitter<string>();
      addAccount(name:string,status:string){
        this.accounts.push({name,status});
        this.loggingService.loggingMsg(status);
      }
      updateAccount(id: number, newStatus: string){
        this.accounts[id].status = newStatus;
        this.loggingService.loggingMsg(newStatus);
      }
      

}