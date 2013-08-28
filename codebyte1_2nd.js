function LetterChanges(str) { 
 var aList="abcdefghijklmnopqrstuvwxyza";
  var vList="aeiou";
  var list=str.split("");
  for (var i = 0; i < list.length; i++){
    if (aList.indexOf(list[i]) !=-1)
      list[i]=aList.charAt((aList.indexOf(list[i])+1));
  }
  
  for (var i = 0; i < list.length; i++){
    if (vList.indexOf(list[i]) != -1)
        list[i]=list[i].toUpperCase();
  }
  return list.join("");
}
   
///why the following cannot work? for LetterChanges(str)
function processStr(str,letdic,func){
  for (var i =0; i < str.length; i++){
    if (letdic.indexOf(str[i]) != -1)
      func(str);
  }
  }
  var j = 0;
  processStr(str,letdic,function (str){
    newstr = newstr.concat(letdic.charAt(letdic.indexOf(str[j+1])));
    j++;
  });
             return newstr;
///string operation: split to list is more convenient than concat.
function LetterChanges(str) { 
  var letdic="abcdefghijklmnopqrstuvwxyza";
  letdic = letdic.concat(letdic.toUpperCase());
  var vowlist="aeiou";
  var newstr = "";
  var newstr1 = "";
  
  for (var i =0; i < str.length; i++){
    if (letdic.indexOf(str[i]) != -1)
      newstr = newstr.concat(letdic.charAt(letdic.indexOf(str[i])+1));
    else
      newstr = newstr.concat(str[i]);
  }
  
  for (var j = 0; j < newstr.length; j++){
    if (vowlist.indexOf(newstr[j]) !=-1)
      newstr1 = newstr1.concat(newstr[j].toUpperCase());
    else
      newstr1 = newstr1.concat(newstr[j]);
  }
             return newstr1;        
}
///
function LetterCapitalize(str) { 
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    var newstrArr = arr[i].split("");
    newstrArr[0] = newstrArr[0].toUpperCase();
    arr[i] = newstrArr.join("");
  }
  str = arr.join(" ");
  return str;         
}
//  
function SimpleSymbols(str) { 
  var letdic="abcdefghijklmnopqrstuvwxyz";
  letdic=letdic+letdic.toUpperCase();
  var res = true;
  for (var i = 0; i < str.length; i++){
    if (letdic.indexOf(str[i]) != -1) {
       if (str[i-1] =="+" && str[i+1] == "+")
         res = res && true;
          else 
            res = res && false;
    }
  }
  
  return res;
         
}
///
function TimeConvert(num) { 

  // code goes here  
  return Math.floor(num/60).toString() + ":" + (num%60).toString(); 
         
}
////
function ThirdGreatest(strArr) {  // test but not worked!!!!!shift and push may not work well in some browser with [] or [0]
  var ixarr=[0];
  var arr=[];
  for (var i = 0; i < strArr.length; i++) {
   arr[i]= strArr[i].length;
  }

  function twoItems(ix){
    print (ixarr);
        if (arr[ix]<=arr[0])
          ixarr.shift(ix);
        else
          ixarr.push(ix);
        print (ixarr);
      }
  twoItems(1);
  print (ixarr);
  
  function threeItems(ix){
    var G = ixarr[1];
    var sG = ixarr[0];
    if (arr[ix]<=arr[sG])
          ixarr.shift(ix);  
    else if (arr[ix] <= arr[G] && arr[ix] > arr[sG]){
          ixarr[1]=ix;
          ixarr.push(G);
    }
    else if (arr[ix]<=arr[sG])
      ixarr.shift(ix);
  }
  
  threeItems(2);
  
  function additionItems(ix){
    var G = ixarr[2];
    var sG = ixarr[1];
    var tG  = ixarr[0];
    if (arr[ix] <= arr[sG] && arr[ix] > arr[tG])
      tG = ix;
    else if (arr[ix] <= arr[G] && arr[ix] > arr[sG]) {
      tG = sG;
      sG = ix;
    }
    else if (arr[ix] > arr[G]){
      tG = sG;
      sG = G;
      G = ix;
    }
    ixarr = [tG,sG,G];
  }
  for (var j=3; j<arr.length;j++)
    additionItems (j);
  
  return strArr[ixarr[0]];
}
   /////with anyi's method!

function ThirdGreatest(strArr) { 
  var arr=[0,0,0];
  for (var i = 0; i < strArr.length; i++) {
    arr[i+3] = strArr[i].length;
  }
  var tG = 0;
  var sG = 1;
  var G = 2;

  for (var ix = 3; ix <arr.length; ix++){
    if (arr[ix] >arr[G]){
      tG = sG;
      sG = G;
      G = ix;
    }
    else if (arr[ix] > arr[sG] && arr[ix] <= arr[G]){
      tG = sG;
      sG = ix;
    }
    else if (arr[ix] > arr[tG] && arr[ix] <= arr[sG]){
      tG = ix;
    }
  }
  return strArr[tG-3]; 
         
}
alert(ThirdGreatest(["hello", "world", "after", "all"] ));                         


//
function FirstReverse(str) { 
  var arr = str.split("");
  // code goes here  
  arr.reverse(); 
  
  return arr.join("");
         
}
   function FirstFactorial(num) { 
  var res = 1;
  for (var i = 1; i <= num; i ++){
    res = res * i;
  }
  return res;
         
}
//
function LongestWord(sen) { 
  var arr = sen.split(" ");
  var letDic="abcdefghijklmnopqrstuvwxyz";
  letDic = letDic.concat(letDic.toUpperCase());
  //print (strip(arr[0]).length);
  function strip(str){
    var newstr = "";
    for (var i = 0; i < str.length; i++){
      if (letDic.indexOf(str[i])!= -1)
        newstr = newstr.concat(str[i]);
    }
    return newstr;
  }
    
  var ix = 0;
  for (var i = 1; i < arr.length; i++) {
    if (strip(arr[i]).length > strip(arr[ix]).length)
      ix = i;
  }
  
  return strip(arr[ix]); 
         
}
///
function AlphabetSoup(str) { 
  var letdict = "abcdefghijklmnopqrstuvwxyz";
  letdict = letdict.toUpperCase() +letdict;
 function soupString(str){
  var rankArr = [];
  for (var i = 0; i < str.length; i++) 
    rankArr[i] = letdict.indexOf(str[i]);
   
  rankArr = rankArr.sort();
  var newstr = "";
  for (var i = 0; i < rankArr.length; i++){
    newstr = newstr.concat(letdict.charAt(rankArr[i]));
      }
      return newstr;
  }
  
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) 
    arr[i] = soupString(arr[i]);
  return arr.join(" ");
}

////
function ABCheck(newstr) { 
 
  function check(str1,str2,str){//note the str here should be different from newstr,or the newstr will be modified.
    var aIx = str.indexOf(str1);
    while (aIx != -1) {
    if (str.charAt(aIx+4) == str2 || str.charAt(aIx-4) == str2){
    return true;
    break;
    }
    else{
    str = str.slice(aIx+1);
    aIx = str.indexOf(str1);
    }
  }
  // code goes here  
  return false; 
  }
  
  return  check("a","b",newstr) ||  check("b","a",newstr) ;
         
}
///
function VowelCount(str) { 
  var vList = "aeiouAEIOU";
  var count = 0;
  for (var i = 0; i < str.length; i++){
    if (vList.indexOf(str[i]) != -1) 
      count++;
  }
  
  // code goes here  
  return count; 
         
}

///
function WordCount(str) { 
  var arr = str.split(" ");
  var count = 0;
  for (var i = 0; i < arr.length; i++){
    if (isWord(arr[i]))
      count++;
  }
  return count;
}

function isWord(str){
  var letdic = "abcdefghijklmnopqrstuvwxyz";
  letdic = letdic.concat(letdic.toUpperCase());
  for (var i = 0; i < str.length; i++){
     if (letdic.indexOf(str[i]) == -1)
       return false;
  }
  return true;
}

///
function ExOh(str) { 
  function count(string){
    var countStr = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] == string)
        countStr ++;
    }
    return countStr;
  }
  // code goes here  
  return count("x") == count ("o"); 
         
}
   //

function Palindrome(str) { 
  str =str.split(" ").join("");
  var arr = str.split("");
  arr.reverse();
  // code goes here  
  return str == arr.join(""); 
         
}


///
function ArithGeo(arr) { 
 // return operators.op1(3,1);
  // code goes here  
  return is(arr,"-") ? "Arithmetic" : is(arr,"/") ? "Geometric" : "-1"; 
         
}

function is(arr,op1){
  var res = true;
  for (i = 0; i < arr.length-1; i++) 
    res = res && (operators[op1](arr[i+1],arr[i]) == operators[op1](arr[1],arr[0]) ? true : false);
   return res;
}
var operators = {
  "-": function (a,b) {return a-b;},
    "/":function (a,b) {return a/b;}
};
////
function ArrayAdditionI(arr) { 
  var max = arr[0];
  var ix = 0;
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i]> max){
      max = arr[i];
      ix = i;
    }
  }
  var newArr = arr.slice(0,ix);
  arr = arr.slice(0,ix).concat(arr.slice(ix+1,arr.length));
  
  function sum(arr){
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  function combine(numArr,checkArr, start){
  if (sum(checkArr) == max)
    throw true;
  else{
    for (var i = start; i < numArr.length; i++){
      checkArr.push(numArr[i]);
      combine(numArr,checkArr,i+1);
      checkArr.pop();
    }
  }
  }
  var c = [];
    try{
    combine(arr,c,0);
    }
  catch (exception){
    if (exception == true)
      return true;
    else
      return exception;
  }
  return false;
}
////
function LetterCountI(str) { 
  var arr = str.split(" ");
  var max = 1;
  var ix = -1;
  for (var i = 0; i < arr.length; i++) {
    if (countLetter(arr[i]) > max){
      max = countLetter(arr[i]);
      ix = i;
    }
  }
  return ix == -1 ? "-1":arr[ix];        
}
function countLetter(str) {
  var max = 1;
  for (var i = 0; i < str.length; i++) {
    var counter = 1;
    function loop(g){
      var a = str.indexOf(str.charAt(i),g);
      if (a!= -1){
        loop (a+1);
        counter++;
      }      
    }
    loop (i+1);
    if (counter > max)
      max = counter;
  }
  return max;
  }  
////

function SecondGreatLow(arr) { 
  //var newarr = [0,0];
  //newarr = newarr.concat(arr);
  var G = - Infinity;
  var sG = - Infinity;
  var sL = + Infinity;
  var L = + Infinity;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > G) {
      sG = G;
      G = arr[i];
    }
    else if (arr[i] > sG && arr[i] <=G) {
      sG = arr[i];
    }
  }
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < L) {
      sL = L;
      L = arr[i];
    }
    else if (arr[i] < sL && arr[i] >= L) 
      sL = arr[i];
  }
  
  return [sL,sG];      
         
}
   
/////
function DivisionStringified(num1,num2) { 
  var ans = Math.floor(num1/num2);
  var res = ans.toString();
  
  function partition(){
    var rem = res.length % 3;
    if (res.length <= 3){
    var temp = res;
      res = "";
    return temp;
    }
    
  else{
    if (rem == 0){
    temp = res.slice(0,3);
    res = res.slice(3);
      return temp.concat(",");
    }
    else{
    temp = res.slice(0,rem);
      res = res.slice(rem);
      return temp.concat(",");
    }
   
  }
  }
  var newstr = "";
  while (res.length > 0)
    newstr = newstr.concat(partition());
  // code goes here  
  return newstr; 
         
}

///function DashInsert(num) { 
  var str = num.toString();
  var newstr = "";
  var start = 0;
  for (var i = 0; i < str.length - 1; i++){
    if (Number(str[i]) % 2 != 0 && Number(str[i+1]) % 2 !=0) {
      newstr = newstr.concat(str.slice(start,i+1)+"-");
      start = i+1;
      }
    }
  newstr = newstr.concat(str.slice(start,str.length));
  return newstr;
}
                            
///
function NumberAddition(str) { 
    var sum = 0;
    var a = 0;
    var numlist = "0123456789";
    for (var i = 0; i < str.length; i++){
      if (numlist.indexOf(str[i]) == -1) {
        var num = str.slice(a,i);
          //alert(num);
        if (num!=""){
          sum =sum + Number(num);
        }
        a = i+1;
      }
    }
    sum += Number(str.slice(a,str.length));
    return sum;
  }

alert(NumberAddition("Argu"));

///
function DivisionStringified(num1,num2) { 
  var num = Math.floor(num1/num2);
  var str = num.toString().split("");
  str.reverse();
  var newstrArr = [];
  
  for (var i = 0; i < str.length; i++) {
    newstrArr.push(str[i]);
    if ((i+1) % 3 == 0 && str[i+1]){
      newstrArr.push(",");
    }
  }
  return newstrArr.reverse().join("");
  
   
         
}


function MeanMode(arr) { 

  // code goes here  
  return mean(arr) ==  mode(arr) ? 1:0; 
         
}
function mean(arr){
  var total = 0;
  for (var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total/arr.length;
}

function mode(arr){
  var max = 1;
  var ix = 0;
  for (var i = 0; i < arr.length; i ++){
    var counter = 1;
    var start = i + 1;
    while (arr.indexOf(arr[i], start) != -1){
      counter ++;
      start = arr.indexOf(arr[i], start) + 1;
    }
    if (counter > max){
      max = counter;
      ix = i;
    }
  }
  return arr[ix];
}

function mode(arr){
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    
    obj[arr[i].toString()] = obj[arr[i].toString()]? obj[arr[i].toString()] + 1: 1;
}
  var max = 1;
  var ix = "";
  for (var item in obj){
    if (obj[item] > max){
      max = obj[item];
      ix = item;
    }
  }
  
  return Number(ix);
}

function CountingMinutesI(str) { 
  var arr = str.split("-");
  for (var i = 0; i < arr.length; i++) 
    arr[i] = convert(arr[i]);
  var res = arr[1] - arr[0];
  return res >= 0? res : (1440 + res);
         
}
   
function convert(str){
  var arr = str.split(":");
  if (arr[0] == "12")
    arr[0] = Number(arr[0]) - 12;
  if (arr[1].indexOf("pm") != -1)
    return Number(arr[0]+12)*60 + Number(arr[1].slice(0,2));
  else
    return Number(arr[0])*60 + Number(arr[1].slice(0,2));
}

function NumberAddition(str) { 

  var numlist = "0123456789";
  var start = 0;
  var numarr = [];
  
  for (var i = 0; i < str.length; i ++){
    var ix = numlist.indexOf(str[i]);
    if (ix == -1) {
      numarr.push(str.slice(start,i));
      start = i + 1;
    }
  }
  numarr.push(str.slice(start,str.length));
  //print(numarr);
  var sum = 0;
  for (var i = 0; i < numarr.length; i++)
    sum += Number(numarr[i]);
    
  return sum;
}
   
///////tue.Aug.10.
function Palindrome(str) { 
  var i = 0;
  var j = str.length - 1; 
  var letlist = "abcdefghijklmnopqrstuvwxyz";
  letlist = letlist + letlist.toUpperCase();
  var ans = true;
  
  while (i < j){
    while (letlist.indexOf(str[i]) == -1)
      i++;
    while (letlist.indexOf(str[j]) == -1)
      j--;
    if (str[i] != str[j]){
      ans = false;
      break;
    }
    i++;
    j--;
    
  }
  
  return ans;
}
///
function LetterCountI(str) { 

  var arr = str.split(" ");
  var max = 1;
  var ix = 0;
  for (var i = 0; i < arr.length; i++){
    if (count(arr[i]) > max){
      max = count(arr[i]);
      ix = i;
    }
  }
  return max > 1 ? arr[ix] : -1;          
}
  
  function count(str){
    var obj = {};
    var maxcount = 1;
    
    for (var i = 0; i < str.length; i++)//add if(letlist.indexOf(str[i]) != -1), for counting letter only;
      obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1: 1;
    
    for (var item in obj){
      if (obj[item] > maxcount)
        maxcount = obj[item] ///use obj[] here;
          }
    return maxcount;
  }
           
/// five mins
function MeanMode(arr) { 
  return mean(arr) == mode(arr) ? 1 : 0;
}

function mean(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length;
}

function mode(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++){
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
  }
  var count = 1;
  var mode = arr[0];
  
  for (var item in obj){
    if (obj[item] > count){
      count = obj[item];
      mode = item;
    }
  }
  return mode;
}
                    
  
function NumberAddition(str) { 
  var numlist = "0123456789";
  var total = null;
  
  for (var i = 0; i < str.length; i++) {
    var num = null;
    while (numlist.indexOf(str[i]) != -1){
      var firstdigit = Number(str[i]);
      num = 10*num + firstdigit;
      i++;
    }
    total += num;
  }
  return total;    
}
   
function reverseNum(str) { 

  var num = null;
  for (var i = str.length -1; i >= 0; i --) {
    num = 10 * num + Number(str[i]); 
    print(num + " ");
  }
  return num;
         
}

function RunLength(str) { 

  var arr = [];
  for (var i = 0; i < str.length; i++){
    var count = 1;
    while (str[i] == str[i + 1]){
      count ++;
      i ++;
    }
    arr.push(count + str[i]);
  }
  
  return arr.join("");         
}
             
///
function PrimeMover(num) { 
  var pArr = [2];
  for (var i = 3; pArr.length < num; i ++) {
    var test = true;
    for  (var j = 0; j < pArr.length; j ++) {
      if (i % pArr[j] == 0){        
        test = false;
        break;
      }
    }
    if (test)
      pArr.push(i);
  }
  return pArr[num-1];        
}               
                            
  











                            
                            
                            
  
