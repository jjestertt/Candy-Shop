const date = new Date('2021-07-10').toISOString();

console.log(date);

const parseDateTo = (date, type, typeVariable = 'number') => {
   if (typeof date !== 'string' && date.length !== 24) {
      return console.error('Error parse date');
   }

   const array = date.substring(0, 10).split('-');

   switch (type) {
      case 'DD': {
         return typeVariable === 'number' ? Number(array[2]) : array[2]; // "DD" or Number
      }
      case 'MM': {
         let monthString = (array[1] - 1);
         if (monthString < 10) monthString = '0' + monthString;

         return typeVariable === 'number' ? array[1] - 1 : monthString; // "MM" or Number
      }
      case 'YYYY': {
         return typeVariable === 'number' ? Number(array[0]) : array[0]; // // "YYYY" or Number
      }
      case 'YYYY-DD': {
         return `${array[0]}-${array[1]}`
      }
      case 'DD/MM/YYYY': {
         return `${array[2]}/${array[1]}/${array[0]}` // "DD/MM/YYYY"
      }
      default: {
         return `${array[0]}-${array[1]}-${array[2]}` // "YYYY-MM-DD"
      }
   }
}

console.log(parseDateTo(date, 'DD', 'string'));
console.log(parseDateTo(date, 'MM', 'string'));
console.log(parseDateTo(date, 'YYYY', 'string'));
console.log(parseDateTo(date, 'YYYY-MM', 'string'));
console.log(parseDateTo(date, 'DD/MM/YYYY'));