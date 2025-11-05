 
 const name="Anique Azhar";
console.log(name[2]);
console.log(name[6]);
console.log(name[5]);
console.log(name);

 // const message='Hello I'am Anique';          it is error thats why we use template 

 const mes=`Hello I' am Anique`;  
 console.log(mes);
 const message="Hello I am Anique"; 
// Upper case
 console.log(message.toUpperCase());
// lower case
 console.log(message.toLowerCase());
 // trim the spaces
 let mess="   how are you    ";
 console.log(mess.trimStart());
 console.log(mess.trimEnd());

 // check the length
 console.log(message.length);

  // check that 3 index which char place
  console.log(message.charAt(3));

// check the ascii code of index number
    console.log(message.charCodeAt(3));

 // replace the word
 console.log(message.replace("Anique","Ali"));

 
 // replace the multiple  word
 console.log(message.replaceAll("l","m"));

 
 // split string into array
 console.log(message.split(" "));

 // combine a word on the last
 console.log(message.concat(" Azhar"));

 // subtring tell us start index to end index
 console.log(message.substring(2,7));

  // include tell us the word is in sentence or not
  console.log(message.includes("Anique"));

    // indexof tell us the word place at whict index
    console.log(message.indexOf("Anique"));
    
    // sentence starts with 
    console.log(message.startsWith("Anique"));

     // sentence ends with 
     console.log(message.endsWith("Anique"));