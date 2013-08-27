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

////
function ArrayAdditionI(arr) { 
  // code goes here  
  var m = arr[0];
  for (var i=0; i<arr.length-1;i++)
     m =  Number(arr[i]) > Number(arr[i+1]) ? arr[i]:arr[i+1];

  arr.slice(arr.indexOf(m),arr.indexOf(m));//splice the m from arr.
  //var k =0;
  var combiAdd = function (a){
    var sum = 0;
   
    for (var j=0; j<a.length;j++){
       sum += a[j];
      if (sum == m)
        throw true;
      else if (sum != m && j==a.length-1){
        if (a.length == 1)
          throw false;//"return false; else return combiAdd" doesn't work.????????
        else
           combiAdd(a.slice(1,a.length));//keep the sec(1,a.length) into a new array.
      }
      }
        
    }
    
      try {
        combiAdd(arr);
      }
  catch(exp){
    if (exp !=true && exp!=false)
      throw exp;
  else 
    return exp;}
                 
}
///
//arr.splice(start,end) cause arr to be spliced,the remnaint of arr is void of (start,end);while newarr=arr.splice(start,end) is the spliced part of arr-> arr(start,end) .
///
function LetterCountI(str) { 

  function chToObj(word){
    var obj = {};
    for (var i = 0; i < word.length; i++) 
      obj[word[i]] = obj[word[i]] ? obj[word[i]] + 1 : 1;//if undefined, =1, if there is a number, ++;
    return obj; 
  }
  function maxWord(obj){
    var max = 1;
    for (var letter in obj)
      max = (obj[letter] > max) ? obj[letter] : max; //use obj[letter],but not obj.letter;
    return max;
  }      
  function max(k){
    return maxWord(chToObj(set[k]));
  }
  
  
  var ix = 0;
  var set= str.split(" ");
  for (var j = 0; j < set.length; j++) 
    ix = max (j) > max (ix) ? j: ix;
  if (max(ix) == 1)
    return -1;
  else 
    return set[ix];
}
   
///// 1st version of SecondGreatLow that works.
function SecondGreatLow(arr) { 
  // L-large,sl-secondLarge,s-small,ss-secondsmall
  if (arr.length == 2){
    if (arr[0] > arr[1]) 
      return arr[0] +" " + arr[1];
    else
      return arr[1] +" " + arr[0];
}
  else{
    function findsL(){
    if (arr[0] > arr[1]) {
       var L = arr[0];
       var sL = arr[1];
    }
    else 
       var L = arr[1];
       var sL = arr[0];

  for (var i = 2; i < arr.length; i++) {
    if (arr[i] >= L) {
      sL = L;
      L = arr[i];
    }
    if (arr[i] < L && arr[i] >=sL) 
      sL = arr[i];
  }
      return sL;
    }

    function findss(s,ss){
    if (arr[0] > arr[1]) {
       ss = arr[0];
       s = arr[1];
    }
    else 
       ss = arr[1];
       s = arr[0];

  for (var i = 2; i < arr.length; i++) {
    if (arr[i] <= s) {
      ss = s;
      s = arr[i];
    }
    if (arr[i] < ss && arr[i] >s) 
      ss = arr[i];
  }
      return ss;
    }
   return findsL() + " " + findss();      
}
}

/// 2nd version 
var operators = {
    "<=":function(a,b){return a <= b},
    ">=":function(a,b){return a >= b},
    "<":function(a,b){return a < b},
    ">":function(a,b){return a > b}
};

function SecondGreatLow(arr) { 
  // L-large,sl-secondLarge,s-small,ss-secondsmall
  function firstTwo(i){
    var L=0;
      var sL=0;
     if (arr[i] > arr[i+1]) {
        L = arr[i];
        sL = arr[i+1];
  //       return [L,sL];
    }
      else if (arr[i] < arr[i+1]) {
        L = arr[i+1];
        sL = arr[i];
  //          return [L,sL];
      }
      else if (arr[i] == arr[i+1]){
         i++;
         return firstTwo(i); //notice the return must be added here;
       }
  return [L,sL]; //either one return here, or two returns in 1st if and else if;
   }
   L = firstTwo(0)[0];
   sL = firstTwo(0)[1];
     function findsL(L,sL,op1,op2,op3){
      for (var i = 2; i < arr.length; i++) {
        if (operators[op1](arr[i], L)) {
          sL = L;
          L = arr[i];
         }
        else if (operators[op2](arr[i], L) && operators[op3](arr[i], sL)) //use operators[],rather than operators();
          sL = arr[i];
                  
      } 
        return sL;
      }

   return  findsL(sL,L,"<",">=","<=") + " " + findsL(L,sL,">","<",">") ;      
}
//////
//notice the update of len div rem in the stepadd, to execute closure. ???but how to update variables related??
function DivisionStringified(num1,num2) { 
  var res = Math.ceil(num1/num2).toString();
  var newres=[];
  var len,div,rem;
  var  len = res.length;
  var  div = Math.floor(len/3);
  var  rem = len%3;
  function stepadd(a) {
    newres.push(res.slice(0,a));
    newres.push(",");
    res = res.slice(a);
    len = res.length;
    div = Math.floor(len/3);
    rem = len%3;
    } 
  while (div > 1){
    if (rem !=0)
      stepadd(rem);       
    else 
      stepadd(3);
    }
  if (div == 1 && rem !=0)
   stepadd(rem);
  newres.push(res);
  return newres.join("");
}

/////
function CountingMinutesI(str) { 
  var list = str.split("-");
  var obj = [];
  var minarr=[];
  function record (h,m){
    return {hour:h, min: m};
  }
 
  function findHour(timeStr){
    var h = Number(timeStr.slice(0,timeStr.indexOf(":")));
    if (h == 12)
      h = h - 12;
    if (timeStr.indexOf("pm")!= -1)
      h = h + 12;
    return h;
   }
  
   function findMin(timeStr){
     return Number(timeStr.slice(timeStr.indexOf(":")+1,timeStr.indexOf(":")+3));
   }
  for (i = 0; i < list.length; i++){
    obj[i]=record(findHour(list[i]),findMin(list[i]));
    minarr.push(obj[i].hour*60 + obj[i].min);
           }
  timelap = minarr[1]-minarr[0];
  return timelap >=0? timelap:(60*24+timelap);

         
}
////
function MeanMode(arr) { 
  function findMean(){
    var total = 0;
    var i = 0;
    forEach (arr,function (num){
      total +=num; i++;});//num=arr[i] here;
    return total/i;
  }
  
  function findMode(){
    var newarr=[];
    var maxFreq=0;
    var ModeIx=0; var i = 0;
    forEach(arr, function(num){
      newarr[num]= newarr[num]? newarr[num]+1:1;});
    forEach(arr, function(num){
      if (maxFreq < newarr[i]){
       maxFreq = newarr[i];
       ModeIx = i;
      }
      i++;
    });
    return ModeIx;
  }
 //   return ModeIx;
  
      
  function forEach(list,func){
    for (i = 0; i < list.length; i++) {
      func(list[i]);
    }
  }

  return findMean() == findMode()? 1:0;
         
}
       
function DashInsert(num) { 

  var arr = num.toString().split("");
  var newarr=[];
  for ( var i = 0; i < arr.length; i++) {
    newarr.push(arr[i]);
    if (arr[i]%2 != 0 && arr[i+1]%2 !=0 && arr[i+1]!=undefined )
      newarr.push("-");
  }
  return newarr.join("");
}      

function SwapCase(str) { 
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = lowerCase.toUpperCase();
  var arr=str.split("");
  for (var i = 0; i < arr.length; i++) {
    if(lowerCase.indexOf(arr[i])!= -1)
      arr[i]=arr[i].toUpperCase();
    else if (upperCase.indexOf(arr[i])!= -1)
      arr[i]=arr[i].toLowerCase();
  }

  return arr.join("");
  
         
}

function NumberAddition(str) { 
   function isNum(str1){
    if (str1 == " ")
      return false;
    else
      return !isNaN(Number(str1));
  }
  
  var sum = 0;
  var i = 0;
  while (i < str.length) {
    if (!isNum(str[i])){
        sum = sum + Number(str.slice(0,i));
        str=str.slice(i+1);
        i = 0;
    }
    else
      i++;
  }

  return sum + Number(str);
}

/////
function ThirdGreatest(strArr) { 
///place the wordcount into a new arry, preserving sequence in the array.
  var arr = [];
  for (var i = 0; i < strArr.length; i++)
    arr.push(strArr[i].length);
  return strArr[ixOfThirdGreatNum(arr)];     
}

function ixOfThirdGreatNum(arr){ ///to create a [{..},{..},...] structure, in which index of {..} is the arr[i] value,
//{...}={counter of all items whose value is arr[i](counter):number,index of all items whose value is arr[i](ix):i,...etc};
  var newarr = [];
  var greatnum =0;
  for (var i=0; i < arr.length; i++) {
    if (newarr[arr[i]] == undefined){ ///tricky step to initialize {} first,if omitted, there is mistakes.
      newarr[arr[i]] = {};
      function addset(){
      newarr[arr[i]]["counter"] = (newarr[arr[i]]["counter"] ? newarr[arr[i]]["counter"]+1:1);
      function a (){if (newarr[arr[i]]["ix"] ==undefined)  ///tricky step to initialize [] first,if omitted, there is mistakes."? :"function cannot work.
          newarr[arr[i]]["ix"]=  [i];
                    else newarr[arr[i]]["ix"].push(i);}
        a();
      }
    addset();}
    else
       addset();      
  }
  
  function findIx(n,j){///recursive function to find the index from the " ix:[]"
    if (newarr[j]!=undefined)  {
      var counter = newarr[j]["counter"];
      if (counter>=n){
      return newarr[j]["ix"][n-1];
    }
      else {
        return findIx(n-counter,j-1);}
    }
    else
      return findIx(n,j-1);
  }
  
  
  return (findIx(3, newarr.length-1));

}
///////////////////medium difficulty......fail to write......
function PrimeChecker(num) { 
  num = num.toString();
  var arr=scramble(num);
  var res = 0;
  for(var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])){
      res = 1;
      break;
  }
  }
    return res;
}
   
function scramble(str) {
  var arr = [];
  var n=str.length;
  function concateRecur(n,i){
    if (n > 0){
      for (var i = 0; i < n; i ++){
        for (var j= 0; j < n; j++){
          if (j!=i)
        oneStr = str[i].concat(concateRecu(n,j));
        oneStr.concat(scramble(str[i]))
    
      for (var j = i
</html>

