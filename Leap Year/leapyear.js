function myleap(year){
    if(year%4===0){
        if (year%100===0) {
            if (year%400===0) {
                return"LeapYear";
            }
            else{
                return"Not LeapYear";
            }
        }
        else{
            return"LeapYear";
        }
    }
    else{
        return"Not LeaapYear";
    }
}
var year = window.prompt("Year :");
document.write(myleap(year));