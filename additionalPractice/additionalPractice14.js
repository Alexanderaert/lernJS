const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Bernard','Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
   const a = [], b = [], c = [], rest = [];

   let student = arr.sort();

   for (let i = 0; i < student.length; i++){
      if (i < 3){
         a.push(student[i]);
      } else if (i < 6) {
         b.push(student[i]);
      } else if (i < 9){
         c.push(student[i]);
      } else {
         rest.push(student[i]);
      }
   }
   return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

console.log(sortStudentsByGroups(students));