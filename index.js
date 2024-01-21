/* Your Code Here */

function createEmployeeRecord (array){

    const [firstName,familyName,title,payPerHour] = array;
    

    const employeeObj = {
        firstName : firstName,
        familyName : familyName,
        title : title,
        payPerHour : payPerHour,
        timeInEvents :[],
        timeOutEvents :[]
    }

    return employeeObj;

}



function createEmployeeRecords (arrays){

    const employeeRecords = arrays.map( employeeArray => createEmployeeRecord(employeeArray));
return employeeRecords;
}



function createTimeInEvent (dateStamp){

    const trimmedDateStamp = dateStamp.trim()
    const [date, hour] = trimmedDateStamp.split(" ");

    this.timeInEvents.push({
        type: "TimeIn",
        hour : parseInt(hour),
        date : date
    });
    
    return this;

}

function createTimeOutEvent (dateStamp){

    const trimmedDateStamp = dateStamp.trim()
    const [date, hour] = trimmedDateStamp.split(" ");

    this.timeOutEvents.push({
        type: "TimeOut",
        hour : parseInt(hour),
        date: date
    });

    return this;
}

function hoursWorkedOnDate(dateStamp){


    const timeInObj = createTimeInEvent.call(this,dateStamp);
    const timeOutObj = createTimeOutEvent.call(this,dateStamp);



    console.log(timeInObj);
    console.log(timeOutObj);

    const hoursWorked = (timeOutObj.timeOutEvents[0].hour - timeInObj.timeInEvents[0].hour) / 100;

    return hoursWorked;
}

function wagesEarnedOnDate (dateStamp){
    
    const employeePayPerHour = this.payPerHour;
    const hourWorked = hoursWorkedOnDate.call(employeeRecordObj,dateStamp);
    const payOwed = hourWorked * employeePayPerHour;
    
    return payOwed;
}



function calculatePayroll(){
    
}

function findEmployeeByFirstName(collection, firstNameString){
    
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



