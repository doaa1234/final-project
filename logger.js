class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }


    loginfo(message){
console.log("info message"+message);
    }



logerror(message){
    console.log("error message"+message);
        }
    
    


    logwarn(message){
        console.log("warn message"+message);
            }
        
        
        

        logdebug(message){
            console.log("debug message"+message);
                }
            
         };   
            


class Singleton {

  constructor() {
      if (!Singleton.instance) {
          Singleton.instance = new Logger();
      }
  }

  getInstance() {
      return Singleton.instance;
  }

}


module.exports = {
    Logger : Logger,
    Singleton : Singleton
  }
