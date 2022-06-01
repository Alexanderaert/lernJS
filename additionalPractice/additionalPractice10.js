const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
       languages: ['ru', 'eng'],
       programmingLangs: {
           js: '20%',
           php: '10%'
       },
       exp: '1 month'
   },
   showAgeAndLangs: function(plan){
      const {languages} = plan['skills'];
      let str = '';

      for (let key in languages){
         str += `${languages[key].toUpperCase()} `;
      }
      const strNew = `Мне ${plan['age']} и я владею языками: ${str}`;
      return strNew;
   }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
   const {exp} = plan['skills'];
   return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
   let str = '';
   const learn = plan['skills']['programmingLangs'];

   for (let key in learn){
      str += `Язык ${key} изучен на ${learn[key]}\n`;
   }
   return str;
}

console.log(showProgrammingLangs(personalPlanPeter));