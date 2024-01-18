let listStudent = 
[
    {
     name: "Teo",
     gpa:10,
    },
    {
        name: "Nam",
        gpa:3,
       },
    {
        name: "Linh",
        gpa:4,
    },
    {
        name: "Tam",
        gpa:2,
    },

];

listStudent.sort ((a,b) => {
    return a.gpa - b.gpa 

});
listStudent.forEach((x) =>{
    console.log(x)
} ) 

 