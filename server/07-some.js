//'SOME' just return true or false.
//EXAMPLE 1

const numbers = [1, 2, 3, 4];

//'some' large version
let ans = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        ans = true;
        break;
    }
}
console.log(ans);

//'some' one line code

const ans2 = numbers.some(item => item % 2 === 0);

console.log('ans2', ans2);

//EXAMPLE 2

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName:'Taylor',
        total: 240,
        delivered: true,
    },
    {
        customerName:'Nicole',
        total: 2322,
        delivered: false,
    },
];

const ans3 = orders.some(item => item.delivered);

console.log('ans3', ans3);

//EXAMPLE 3

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
};

//a JS dates library using the terminal with the phrase 'npm i date-fns'
//'areIntervalsOverlapping' is able to show if a date is in the same time than other
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment));

//for my future consideration using 'some' structure:
//array.some(function(element, index, array));

