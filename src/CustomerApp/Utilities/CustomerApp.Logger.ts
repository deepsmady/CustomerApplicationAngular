export interface ILogger {
    Log():void;
}

export class BaseLogger implements ILogger {
    Log() {   
        console.log("From Base Logger");
    }
}

export class ConsoleLogger extends BaseLogger {
    override Log() {
        console.log("Using Console Logger");
    }
}

export class DbLogger extends BaseLogger {
    override Log() {
        console.log("Using DB Logger");
    }
}

export class FileLogger extends BaseLogger {
    override Log() {
        console.log("Using File Logger");
    }
}
