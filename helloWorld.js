    console.log("HELLO WORLD")
    console.log(process.argv)
var sum=0;
 for(var i=2;i<process.argv.length;i++)
 {
     sum = sum+Number(process.argv[2]);
 }
 console.log(sum);