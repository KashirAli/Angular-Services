export class LoggingService{
    loggingMsg(status:string){
        console.log('A server status changed, new status: ' + status)
    }
}