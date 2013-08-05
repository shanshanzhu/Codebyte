<!DoCTYPE html>
<html>

<script>
function FirstReverse(str) { 

  var newstr = ""; //note the var in newstr and i;
  for (var i=0;i < str.length;i++) {
    newstr = newstr.concat(str[str.length-i-1]);
  } //note newstr= cannot be missed
  return newstr; 
         

}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down

alert(FirstReverse("hello"));  

}
</script>
/////////////////////////////////////////Factorial///////////////
function FirstFactorial(num) { 

  // code goes here  
  var fact = 1;
  for (var i=1; i<=num; i++)
    fact = fact*i;
  return fact; 
         
}
print(FirstFactorial(readline()));   
/////////////////////
//this following code cannot ignore punctuation.
function LongestWord(sen) { 

  // code goes here  
  var list = sen.split(" ");
  var strLength = list[0].length;
  var newSen = list[0];
  for (var i = 0; i < list.length; i++) {
    if (list[i].length > strLength) {
        strLength = list[i].length;
        newSen = list[i];
    }
  }
  return newSen; 
         
}
//for (var i = 0; i in list; i++)
   // alert(list[i]);
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(LongestWord(readline())); 

/////////////
function LetterChanges(str) { 

  // code goes here  
  
  var aLow = "abcdefghijklmnopqrstuvwxyza";
  var aUp = aLow.toUpperCase();
  var vowLow = "aeiou";

  function replace (aLow,aUp,str,step) {
      var newstr = "";
      for (i = 0; i < str.length; i++) {
        var ixLow = aLow.indexOf(str[i]);
        var ixUp = aUp.indexOf(str[i]);
    
        if (ixLow >= 0 && ixUp == -1) 
          newstr = newstr.concat(aLow.charAt(ixLow + step));
        else if (ixLow == -1 && ixUp >= 0)
          newstr = newstr.concat(aUp.charAt(ixUp + step));
        else if (ixLow == -1 && ixUp == -1)
          newstr = newstr.concat(str[i]);
  }
      return newstr;
    }
  function capitalize(vowLow, str){
    var newstr = "";
    for (i = 0; i < str.length; i++) {
      var ixLow = vowLow.indexOf(str[i]);
      if (ixLow >=0)
        newstr = newstr.concat(str[i].toUpperCase());
      else
        newstr = newstr.concat(str[i]);
    }
    return newstr;
  }
    
  var newstr1 = replace (aLow,aUp,str,1);
  var newstr2 = capitalize (vowLow,newstr1);

  return newstr2; 
         
}

///////////
function SimpleAdding(num) { 
  var result = 0;
  for (var i = num; i > 0; i--){
      result = i + result;}
  // code goes here  
  return result; 
  
}

function mathAdd(n){
    return results=(n+1)*n/2;
}
alert(SimpleAdding(10));
alert(mathAdd(10));
/////////
function LetterCapitalize(str) { 
  var array = str.split(" ");

  for (var i = 0; i < array.length; i++) {
      array[i] = array[i][0].toUpperCase() + array[i].slice(1,array[i].length)
      }
  newstr = array.join(" ");
  // code goes here  
  return newstr; 
         
}

alert (LetterCapitalize("i goes here"));
/////////
function SimpleSymbols(str) { 
  var alp="abcdefghijklmnopqrstuvwxyz";
  var alpUp=alp.toUpperCase();
  var alpTotal=alp+alpUp;
  var res = true;
  var nonAlpCount = 0;
  
  for (i=0; i < str.length; i++) {
    if (!found(str[i], alpTotal)){
      nonAlpCount += 1;
      if (nonAlpCount == str.length)
        res = false;
      else
      continue;
    }
    else{
      if (str[i-1] != "+" || str[i+1] != "+" || i == 0)
        res = res && false;//if using res &= false; it returns 0 but not boolean(false).
      else if (str[i-1] == "+" && str[i+1] == "+" && i != 0)
        res = res && true;
    }
  }
  return res;
}

function found (letter, str) {
  if (str.indexOf(letter) != -1)
    return true;
  else
    return false;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
print(SimpleSymbols(readline()));                            
////////////  
   
function CheckNums(num1,num2) { 
  var results = "-1";
  if (num2 > num1)
    results = "true";
  else if (num2 < num1)
    results = "false";
  return results
         
}
    
////
function TimeConvert(num) { 

  // code goes here  
  
  var min =Number(num)%60;
  var hours =(Number(num) - min)/60;
  return hours + ":" + min; 
    }
///
function AlphabetSoup(str) { 
  var list=str.split("");
  list.sort();
  return list.join("");
  // code goes here  

         
}
///quicksort from ioa lecture 4. Notice the difference between my code (which is working, from lec4quicksort code(called partition),which is cleaner and more straightforward. 


function partition(a,p,q){ //not tested
	var pivot = a[p];
	var j=p;//
	for(i=p+1;i<=q;i++){
		if (a[i]<=pivot){
			j++;
			var temp=a[j];
			a[j]=a[i];
			a[i]=temp;
}
    a[p]=a[j];
    a[j]=pivot;
    return j;
    
}


///quicksort from ioa lecture 4. my code
var templist=[7,6,8,1,3];
function quicksort(a,p,q){ 
    var pivot = a[p];
    var j = p+1;
    
    for (i = p+1; i <= q; i++) {//we don't need if here.i<=q rather than i<q

        if (a[i] <= pivot) {

            var temp = a[j];
            a[j]=a[i];
            a[i] = temp;
             j++;           
        }
    }
    a[p]=a[j-1];
    a[j-1]=pivot;
    return j-1;
    
}
alert(quicksort(templist,3,3));
alert(templist);
function sort(list,start,end){
    if (start < end) { //original code i didn't give this if, and it turns out that when start=end,there is an error.
    var r = quicksort(list,start,end);
    sort(list,start,r-1);//note it is r-1 rather than r (I wrote r in original code.
    sort(list,r+1,end);
    }
}
sort(templist,0,4);
alert(templist);
/////insertion sort, my code
var templist=[7,6,8,1,3];
alert(templist);
function insertionsort(list){
   for (var i=1;i<list.length;i++) {
        var key = list[i];
        var j=i;
        while (key < list[j-1] && j >= 0) {
            list[j]=list[j-1];
            list[j-1]=key;
            //exchange(list[j],list[j-1]); for some reason exchange is not working well.
                j--;
                }
       
    }
}                 

insertionsort(templist);
alert(templist);
////insertionsort,their code different while/
        while (key < list[j-1] && j >= 0) {
            list[j]=list[j-1];
            j--;
                }
             list[j]=key;


</body>
//////////
function PrimeTime(num) { 
  var res = true;
  // code goes here  
  if (num%2==0||num%3==0||num%5==0)
    res = false;
  else 
    for ( var i=7; i < num; i++){
      if (num%i==0){
        res = false;
        break;
      }
   
    }
     
      return res;
}
////////
function ABCheck(string) { 
  var aIx = ixlist(string,"a");
  var bIx = ixlist(string,"b");
  var res = false;
    if (aIx[0]!=-1 && bIx[0]!=-1) {  
        for (var j=0; j<aIx.length; j++){    
            if (res == true)      
              break;    
              else{                  
                for (var k=0; k<bIx.length; k++){
                    if (Math.abs(aIx[j]-bIx[k]) == 4){        
                        res = true;        
                        break;      
                    }
                    else        
                    res = false;    
              }
        }
    }      
    return res;
}
}

function ixlist(str,letter){
  var list = [];
  list[0] = str.indexOf(letter);
  var i = 0;
  while (str.indexOf(letter,list[i]+1) != -1)  {
    list[i+1]=str.indexOf(letter,list[i]+1);
    i++;      
  }
  return list;
}   
/////play with function about above codes, with try and catch --worked
function ABCheck(string) { 
  var aIx = ixlist(string,"a");
  var bIx = ixlist(string,"b");

    function check(){
     if (aIx[0]!=-1 && bIx[0]!=-1) {  
        for (var j=0; j<aIx.length; j++){
            for (var k=0; k<bIx.length; k++){
                    if (Math.abs(aIx[j]-bIx[k]) == 4){        
                        throw true;      
                    }
              }
            }
        }
    }
    try {
        check(); 
        return false;
    }
    catch(validation){
   if (validation === true)
     return validation;
}
   
}
//////play ABCheck again with functional argument / work partially, hard to complete.
function ABCheck(string) { 
  var aIx = ixlist(string,"a");
  var bIx = ixlist(string,"b");
  var res = false;
    if (aIx[0]!=-1 && bIx[0]!=-1) {
        forEach(aIx,function(){
         forEach(bIx,alert)});
   }
    //return res;
}
   
function forEach(list,func){
  for (var i = 0; i < list.length; i++) 
    func(list[i]);
}
////
function VowelCount(str) { 
  var vow="aeiouAEIOU";
  var count=0;
  for (var i = 0; i < str.length; i++){
    if (vow.indexOf(str[i]) != -1)
      count++;
  }
  return count;
}
///
function WordCount(str) { 
  return str.split(" ").length;
         
}
///
function ExOh(str) { 

  // code oes here  
  var cnt={x:0,o:0};
  
  for (var i = 0; i < str.length; i++){
    str[i]=="x" ? cnt.x++:cnt.o++;
  }

  return cnt.x == cnt.o ? true:false;
       
}
///
function Palindrome(str) { 
  str=str.split(" ").join("");
  var res= true;
  for (var i = 0; i < str.length/2; i++)
     res = res && (str[i] == str[str.length-i-1] ? true:false);
  // code goes here  
  return res; 
         
}
///rewrite with try and catch
function Palindrome(str) { 
  str=str.split(" ").join("");
  try {
    for (var i = 0; i < str.length/2; i++)
     if (str[i] != str[str.length-i-1])
       throw false;
  }
  // code goes here  
    catch(sign){
      if (sign!=false)
        throw exception;
      else
        return false;
    }
  return true; 
         
}
///
function ArithGeo(arr) { 

  function isArith(arr){
    var res = true;
    for (var i = 0; i < arr.length-2; i++) 
      res = res && (arr[i+1] == (arr[i+2]+arr[i])/2 ? true:false);
  // code goes here  
  return res;
  }
  function isGeo(arr){
    var res = true;
    for (var i = 0; i < arr.length-2; i++) 
      res = res && (arr[i+1] == Math.sqrt(arr[i+2]*arr[i]) ? true:false);
  // code goes here  
  return res;
  }
  
  if (isArith(arr))
    return "Arithmetic";
  else if (isGeo(arr))
    return "Geometric";
  else if (!isArith(arr) && !isGeo(arr))
    return -1;
         
}                   
</html>

