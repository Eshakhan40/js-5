// var user=prompt("please enter your name?")
// document.write("Hello Dear:" + user)
// var u= "pakistani"
// var word=u.indexOf('n')
// document.write("string: pakistani" +"<br>")
// document.write( "IndexOf 'n':"+word)

    // var model=prompt("your fav mobile modal?")
    // var length= model.length;
    // document.write("my fav modeo is:"+ model + "<br>")
    // document.write("length of string:"+length)
// var u=prompt("enter your name")

// document.write("Hello" +"" +u+""+  "welcome!")
// var user=("HELLO WORLD!")
// var u=user.lastIndexOf('l')
// document.write("string : HELLO WORLD"+"<br>")
// document.write("Last index of'L' " + u)
//  var coumtry=("Pakistan")
//  var name=coumtry.charAt(3)
//  document,write("pakistan")
//  document.write("Charcter at index:"+ name)
//  var orignl="karachi";
//  var replace=orignl.replace("karachi","isl");
//  document.write("original country"+orignl +"<br>");
//   document.write(" replace country"+replace +"<br>");
//  var u="Ali and Sami arebestfriends. They play cricket and football together.";
//  var e=u.replace(/and/g,"&");
//  document.write(u +"<br>");
//  document.write(e);
// var u="472"
// var r=parseInt(u)
//     document.write(u+ r)
// var  input="peanut"
// var b=input.toUpperCase();
// document.write(b)
// var input=35.36
// var b=input.toString().replace(".","")
// document.write(input +"<br>")
// document.write(b)
// var a=["cake","applepie","cookie","chips","Patties"]
// var u=prompt("enter any item")
// found=false
// for( var i=0; i<a,length; i++){
//     if (u.toLowerCase===a[i].toLowerCase()){
//         found=true
//         break;
//     }
//     if (found){
//         alert(avaiable)
//     }
//     else{
//         alert(not)
//         }
//     }
let Arr = ["cake", "apple pie", "cookie", "chips", "patties"];


let user = prompt("Enter an item to search:");


let found = false;
for (let i = 0; i < A.length; i++) {
    if (user.toLowerCase() === A[i].toLowerCase()) {
        found = true;
        break;
    }
}

if (found) {
    alert("Yes, '" + user + "' is found in the list.");
} else {
    alert("No, '" + user + "' is not found in the list.");
}