// console.log('hello world');
// alert("testing");
// console.log('linking');

// let x=3;
// let y=12.36;
// let u=45.3;
// var age=4
// var a;
// a=age+y;
// sum=y+u;
// console.log(a)
// console.log(sum)
// console.log('age :'+ x);
// console.log(`Age : ${age}`);

function add(){
    
    var firstnumber=document.getElementById('txtFirstnumber').value;

    var secoundnumber=document.getElementById('txtSecondnumber').value;
    var result=parseFloat(firstnumber) + parseFloat(secoundnumber);
    if (result>50)
    {
        document.getElementById("spanOutput").innerHTML=result;
    }
    else
    {
        document.getElementById("spanOutput").innerHTML=secoundnumber;
    }
    
    console.log(result)
}

// var age = prompt("enter value");
// if(age>100)
// {
//     console.log(`invalid`)

// }
// else if(age>=80)
// {
//     console.log(`you scored a grade A`)

// }
// else if(age>=60)
// {
//     console.log(`you scored a grade B`)

// }
// else if(age>=40)
// {
//     console.log(`you scored a grade F better Luck next time`)

// }
// else   {
//     console.log(`invalid data`)
// }

// let student=["ali","roshan","mehta"];
// let student2=["feroz","roshani","meher"];
// student.sort(student);

// console.log(student)


// table ka code hai
// var tabel=prompt("Enter any number");
// for(i=0; i<10; i++){
//     console.log(tabel,`*`,i,`=`,tabel*i);
// }

let names=prompt("Enter names");
names.toString();
console.log(names);


