  let str="naman";
  let bag="";
  for(let i=str.length-1;i>=0;i--){
    bag+=str[i];
  }
  if(bag==str){
  console.log("Palindrom");
  }else{
  console.log("Not Palindrom");