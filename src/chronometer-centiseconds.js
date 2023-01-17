class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval( () => { 
      if(printTimeCallback) {
        printTimeCallback();
      } 
      this.currentTime++;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/(60*100))  
  }

  getSeconds() {
    return Math.floor(this.currentTime/100)%60
  }

  getCentiseconds() {
    return (this.currentTime -(this.getMinutes()*1000))%100
  }
  
  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value.toString().length === 2){
      return value.toString()
    }
    else {
      return '0'+value.toString()
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)

  }

  reset() {
    // ... your code goes here
    this.currentTime=0

  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`

  }
}
