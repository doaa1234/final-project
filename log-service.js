class LOG{
  constructor(){
    
  }
};

class VERBOSE extends LOG{
constructor(){
  if (this.logLevels.includes('VERBOSE')) {
    this.log('verbose', message, ...data);
  }

}
};

class DEBUG extends LOG{
  constructor(){
    if (this.logLevels.includes('DEBUG')) {
      this.log('debug', message, ...data);
    }
  
  }
  };


  class INFO extends LOG{
    constructor(){
      this.log('info', message, ...data);

    
    }
    };

    class WARN extends LOG{
      constructor(){
       
   this.log('warn', message, ...data);
      
      }
      };
     
      class ERROR extends LOG{
        constructor(){
          this.log('error', message, ...data);
    
        
        }
        };
   
        class FATAL extends LOG{
          constructor(){
            this.log('fatal', message, ...data);
      
          
          }
          };


          const object=new LOG();

class LogService {
    constructor({
      logLevels, context, log,
    } = {}) {
      this.logLevels = logLevels || process.env.LOG_LEVELS
        ? process.env.LOG_LEVELS.split(',').map(x => x.toUpperCase())
        : [];
      this.context = {
        ...context,
      };
      this.logger = log || console;
    }


  
    log(level, message, ...data) {


      const log = {
        ...this.context,
        level,
        message,
        data: data.map(x => (x instanceof Error ? {
          name: x.name,
          message: x.message,
          stack: x.stack,
          ...x,
        } : x)),
      };
      this.logger.log(JSON.stringify(log));
    }

    
  
    verbose(message, ...data) {
      object.VERBOSE;
      
    }
  
    debug(message, ...data) {
      object.DEBUG;
    }
  
    info(message, ...data) {
      object.INFO;
    }
  
    warn(message, ...data) {
      object.WARN;
    }
  
    error(message, ...data) {
      object.Error;
    }
  
    fatal(message, ...data) {
      object.FATAL;
    }
  
    static middleware() {
      return (req, res, next) => {
        req.log = new LogService({ cid: req.cid });
        next();
      };
    }
  }
  
  module.exports = LogService;
