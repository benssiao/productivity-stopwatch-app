
class clock {
    constructor(secondVal = 0, minuteVal = 0, hourVal = 0){
        this.hour = new hour(hourVal);
        this.minute = new minute(minuteVal);
        this.second = new second(secondVal);
    }
    increment() {
        this.second.increment();
        if (!this.second.isValid()) {
            this.second.reset();
            this.minute.increment();
            if (!this.minute.isValid()) {
                this.minute.reset();
                this.hour.increment();
            }
        }
    }
    toString() {
        let secondStr = this.second.secondVal < 10 ? `0${this.second.secondVal}` 
        : this.second.secondVal.toString();
        let minuteStr = this.minute.minuteVal < 10 ? `0${this.minute.minuteVal}`
        : this.minute.minuteVal.toString();
        let hourStr = this.hour.hourVal < 10 ? `0${this.hour.hourVal}`
        : this.hour.hourVal.toString();
        return hourStr + ':' + minuteStr + ':' + secondStr;
    }
    displayTime() {
        console.log(this.toString())
    }

}

class hour {
    constructor(hourVal = 0){
        this.hourVal = hourVal;
    }
    increment(){
        ++this.hourVal;
    }
    reset(){
        this.hourVal = 0;
    }

    isValid() {
        return -1 < this.hourVal;
    }
}

class minute {
    constructor(minuteVal = 0){
        this.minuteVal = minuteVal;
    }
    increment(){
        ++this.minuteVal;

    }
    reset(){
        this.minuteVal = 0;
    }
    isValid(){
        return -1 < this.minuteVal && this.minuteVal < 60; 
    }
}

class second{
    constructor(secondVal = 0){
        this.secondVal = secondVal;
    }
    increment(){
        ++this.secondVal;
    }
    reset(){
        this.secondVal = 0;
    }
    
    isValid(){
        return -1 < this.secondVal && this.secondVal < 60;
    }
}

myTime = new clock();
for (let i = 0; i < 60*60*60; i++) {
    myTime.increment();

}
myTime.displayTime();