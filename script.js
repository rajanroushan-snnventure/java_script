/*********************************
 * variable and datatypes
 */
/*
console.log('My First Demo...');

var firstName = 'Rajan';

console.log(firstName);

var lastName = 'Choudhary';

var age = 28;

var job;
console.log(job);

job = 'Engineer';

console.log(job);
 */

/******************************************
 * variable mutation and type coercion
 *  */ 

 //type coercion

 /*
 var firstName = 'Rajan';
 var age = 28;

 console.log('My first name '+firstName + ' and age '+ age);

 var job, isMarried;
 job = 'Teacher';
 isMarried = false;

 console.log('My job to do is ' + job + ' and is he married ' + isMarried);

 //here number is converted to string this type of chage in data type is called as Type Coercion.

 //Variable mutation

 age = "twenty eight"

 console.log(age);

 isMarried = true;

 console.log(isMarried);
 */

 /*******************************************
  * Basic Operator
  */
/*
var year = 2020;

var rajanAge = 28;
var ashokAge = 33;

// Math Operator

var rajanBirthYear = 2020 - 28;
var ashokBirthYear = 2020 - 33;

console.log(rajanBirthYear + ' ' + ashokBirthYear);

var addAge = rajanAge+ashokAge;

console.log(addAge);


//logical operator

var isRajanOlder = rajanAge > ashokAge;

console.log(isRajanOlder);


//typeof data

console.log(typeof isRajanOlder);
console.log(typeof addAge);
console.log(typeof 'Hi, how are you?');

var city;
console.log(city);
*/

/**********************************
 * Operator precedence
 */

/*
var now = 2020;
var rajanYear = 1992;
var age = 21;

var check = now - rajanYear >= rajanYear;
console.log(check);
var ashokAge = 22;
//group precedence
var average = (age+ ashokAge)/ 2;
console.log(average);

//multiple assignment

var x = 10 + 12 - 18;

var x1 = y1 = 10 - 31 + 32;

console.log(x , x1 , y1);

//More assignment
var a,b = 0;
x *= 2;

x += 3;
*/
//Alert - alert(message);
//prompt("input message") it will ask to give the ans.

/************************************************
 * Asignment by the instructor
 * 
 * 
 * 
 * Mark and john are trying to compare there BMI(Body mass index), which is calculated using formula: BMI = mass/height^2 = mass/(height * height) 
 * (Mass in kg and height in meter)
 * strore mark and john height & mass in a veriable 
 * calculate both their BMI's 
 * check the bol value for john has heigher than mark
 * 
 */

 /*
 var markMass = 18;
 var johnMass = 21;
 var markHeight = 5;
 var johnHeight = 6;

 var markBMI = markMass/(markHeight*markHeight);
 var johnBMI = johnMass/(johnHeight*markHeight);

 console.log(markBMI,johnBMI);

 var isGreater = johnBMI > markBMI;
 
 console.log(isGreater);
*/

/**************************************************
 * 
 * if / else statement
 */
/*
var age = 24;
if(age>20){
    console.log('it is lesser than '+age );
}else{
    console.log('it is greater than '+age);
}

var markMass = 18;
 var johnMass = 21;
 var markHeight = 5;
 var johnHeight = 6;

 var markBMI = markMass/(markHeight*markHeight);
 var johnBMI = johnMass/(johnHeight*markHeight);

 console.log(markBMI,johnBMI);

 if(johnBMI > markBMI){
     console.log('john mass has greater than mark');
 }
*/

/*******************************************************
 * Boolean statement
 */
/*
 var markMass = 21;
 var johnMass = 18;
 var markHeight = 5;
 var johnHeight = 6;

 var markBMI = markMass/(markHeight*markHeight);
 var johnBMI = johnMass/(johnHeight*markHeight);
 console.log(markBMI,johnBMI);
 
 var isGreater = johnBMI < markBMI;
 console.log(isGreater);
 if(isGreater){
     console.log('john mass has greater than mark');
 }

 var isMale = false;
 if(isMale){
     console.log('is male '+isMale);
 }
*/

/*********************************************************
 * Ternary operator and switch statement.
 * 
 */

 /*
 var age = 14;
 if(age >= 18){
     console.log('voter should be equal and greater that 18');
 }else if(age<15 && age>13){
     console.log('he can able to give the HLC exam');
 }else{
     console.log('He is kid age');
 }


 var job = 'Engineer';

 switch(job){
         case 'teacher':
             console.log('He is teacher');
             break;
         case 'Engineer':
             console.log('He is an Engineer');
             break;
        defaulf:
            console.log('He is doing something');
 }


 switch(true){
    case age >= 18:
        console.log('voter should be equal and greater that 18');
        break;
    case age<15 && age>13: 
        console.log('he can able to give the HLC exam');
        break;
    default:
        console.log('He is kid age');
 }
*/

/**********************************************
 * Falsy and Truthy
 */

 /*
 var age = 18;
 var personFirstName = 'Rajan';
 if(age == '18'){
     console.log('his age is '+age)
 }else{
     console.log('do not know');
 }

 if(personFirstName === 'Rajan'){
     console.log('His name is '+ personFirstName);
 }
*/

/****************************************************
 * Asignment by instructor
 * 
 * John has score - 89,120 & 103
 * Mark has score - 116,94 & 123
 * calculate avg and check the greater value.
 */

/*
 var johnScore1 = 89;
 var johnScore2 = 120;
 var johnScore3 = 103;

 var markScore1 = 116;
 var markScore2 = 94;
 var markScore3 = 123;

 var johnAvg, markAvg;

 johnAvg = (johnScore1+johnScore2+johnScore3)/3
 console.log('John Avg score is '+ johnAvg);

 markAvg = (markScore1+markScore2+markScore3)/3
 console.log('Mark avg score is '+ markAvg);

 markAvg >= johnAvg  ? console.log('Mark has greater score than John.'): console.log('John has greater score than Mark.');
 */


/******************************************************
 * 
 * Function
 */

 /***
  * Function declaration
  */

  /*
  function calculateRetirement(birthYear){

            var now = 2020;
            var age = now - birthYear;
            return age;
  } 

  console.log(calculateRetirement(1990));

  //Function expression

  var retirementCalculation = function(job , birthYear)
    {
        var now = 2020;
        var retirement = 65 - (now - birthYear);
        
        if(retirement>0){
            console.log('retire in '+retirement);
        }else{
            console.log('you already retired');
        }
        switch(job){
            case 'teacher': console.log('Teacher teaches kids');
            break;
            case 'designer': console.log('Designer design very good website');
            break;
            default:
                console.log('I do not have idea.');
        }

        
    }

        retirementCalculation('teacher' , 1977);
        retirementCalculation('designer' , 1977);
*/

/***************************************************
 * 
 * Array
 */

 /*
 var ar = new Array('Rajan' , 'Choudhary' , 1992 , 'Engineer' , 'Single');

 console.log(ar , ar[0],ar[2],ar[4] , ar.length);

 //ar.push('Ashok');
 //ar.pop();
 //ar.unshift('Mr.');
 //ar.shift();
 ar.push(prompt('what\'s the next? '))
 console.log(ar.indexOf(1992));
*/

//Today EOD 12/10/20
/***********************************************
 * Asignment  13/10/20
 * john and his family bill array - 124,48,268.
 * waiter tip - if >50 then 20%, in between 50 to 200 then 15% & more than 200 then 10%.
 * 
 */
/*
 var waiterTip = function(billAmount){
    
     if(billAmount <= 50){
        var tip = billAmount*0.20;
        alert('Bill 50 '+ tip);
     }else if(billAmount > 50 && billAmount < 200){
        var tip = billAmount*0.15;
        alert('Bill between 50-200 ' + tip);
     }else{
        var tip = billAmount*0.10;
        alert(tip); 
     }
 }

 waiterTip(prompt('Please enter bill amount.'));

*/

/*************************************************
 * Objects & Properties
 */
//create the object
/*
 var rajan = {
     firstName: 'Rajan',
     lastName: 'Choudhary',
     address:'Bangalore',
     pin: '560100',
     birthYear: 1992,
     calAge: function(){
        return 2020-this.birthYear;
     },
     calRetireAge: function(){
        this.retirement = 65-this.calAge;
     }
 }

 console.log(rajan.lastName);
 //console.log(rajan.calRetireAge.retirement);
 
 rajan.retirement= rajan.calRetireAge();
 rajan.age = rajan.calAge();
 console.log(rajan.retirement)
 //Mutate the object properties.
 rajan.pin = '560068'

 console.log(rajan);
*/

/**************************************************
 * create the object with full name, mass , height
 * add the method to calculate the BMI into the object
 * BMI = mass/height^2
 */
 
/*
 var person = {
    fullName:'Rajan Choudhary',
    mass: 50,
    height:120,
    bmi: function(){
        return this.mass/(this.height*this.height);
    }
 }

 person.bmiCal= person.bmi()

 console.log(person);
 */

 /*****************************************************
  * 
  * loops - for while continue and break
  */

//For loop
/*
for(var i =0; i<10; i++){
    console.log('current iterator '+i);
}

var values = ['Rajan' , 'Suman' , 1992 , 'Bangalore' , 'Delhi'];

for(var i =0; i<values.length; i++){
    console.log('current array element '+values[i]);
}
*/

//While
/*
var i = 0;
var values = ['Rajan' , 'Suman' , 1992 , 'Bangalore' , 'Delhi'];
while(i < values.length){
    console.log('Array index value '+values[i]);
    i++;
}
*/

//continue
/*
var values = ['Rajan' , 'Suman' , 1992 , 'Bangalore' , 'Delhi'];
for(var i =0; i<values.length; i++){
    //console.log('current array element '+ typeof values[i]);
    if(typeof values[i] !== 'string') continue;
    console.log('current array element '+ typeof values[i]);
}
*/

//break
/*
var values = ['Rajan' , 'Suman' , 1992 , 'Bangalore' , 'Delhi'];
for(var i =0; i<values.length; i++){
    //console.log('current array element '+ typeof values[i]);
    if(typeof values[i] !== 'string') break;
    console.log('current array element '+ typeof values[i]);
}
*/



























