

$(document).ready(function(){
      var clickIsOn = false;
      var t;
	var gaptime = 3000;
	delete Chat.display;
	delete Chat.fetch; 
	delete Chat.send; 
        $("li").remove();
         $(".draft").keyup(checkBox);
	
         parseOnce(initialDisplay,10);
	
         getParse();
     
$(".send").on("click",function(event){
	clickIsOn = true;
	var textContent = Chat.username + ": " + $('.draft').val();
	var obj = {"text": textContent, "username": Chat.username};	
	$('.draft').val('');
	sendParse(obj);

});

function sendParse(obj){
	var json = JSON.stringify(obj);
	$.ajax({url:'https://api.parse.com/1/classes/chats',
	   type: 'POST',
	   dataType: 'json',
           contentType:'application/json',
	   processData: false,		
	   data:json,	
	   headers:{"Content-Type": "application/json"},
	   success: function(res){
	      getParse();}//parseOnce(displayRemove,6000);} 
	});	
}

function parseOnce(func,gaptime){
	$.ajax({url:'https://api.parse.com/1/classes/chats',
	dataType: 'json',
	contentType:'application/json',
	type: 'GET', 
	data:{"order":"-createdAt"}, 
	error: errorFunc,
        success: function (res){
              	   $.each (res["results"],function(i,item){
			setTimeout(func, i*gaptime,item.text);
           });
	   }
	});
}

function getParse(){

	$.ajax({url:'https://api.parse.com/1/classes/chats',
	   type: 'GET',
	   dataType: 'json',
           contentType:'application/json',
	   data:{"order":"-createdAt"},
           success: function (res){
		   $.each (res["results"],function(i,item){
			setTimeout(displayRemove, i*gaptime,item.text);
           });		
	   },
	   complete: function (){		
		if (clickIsOn === true){
			clearTimeout(t);
			//console.log("timeout reset");
			clickIsOn = false;
			t = setTimeout(getParse,gaptime*10);
		}
		else{
			t = setTimeout(getParse,gaptime*10);
		}//console.log(t);}
	   },
	   error: errorFunc
	});
}

function errorFunc (){
	console.log("There is something Wrong!");
}

function displayRemove (response){
		    initialDisplay(response);
		     $('li').first().remove();
}

function initialDisplay (response){
		    $(".messages").append("<li>" + response + "</li>");
}

function checkBox(){
if ($(".draft").val() == "") 
	$('.send').prop({'disabled':true});
if ($(".draft").val() != "") 
	$('.send').prop({'disabled':false});
}

});
////////////////////////////
//Chat.fetch(function (list){
//	
//	for(var i = 0; i < list.length; i++){
//		setTimeout(Chat.display,i*3000,list[i]);}
//});
//you cannot use setTimeout(function(item){..}
//nor to use setTimeout(Chat.display(list[i]),i*3000)//b/c what passed to setTimeout is a pointer but if using Chat.display(x), Chat.display(x) will be executed, rather than waiting for the input of list[i];

//Everything after the timeout needs to have a delay after it as well, or else it is executed prior to the timeout finishing. i *300 is needed to make it work!!!!!!!!!!!!!!!!!!!!!
//http://stackoverflow.com/questions/9243675/just-out-of-curiosity-could-someone-explain-the-oddities-of-settimeout-to-me
///setTimeout is used as one starting timeout ID, any 3000, or i*3000 is the time spent after the unique id is set up.

//	Chat.send(content);
	//$().find('input[type=text]').val('');
	
	//$(".messages").append("<li>" + $(".draft").val() +"</li>");});
	//var addedLine = "<li>" + $(".draft").val() +"</li>";
//setTimeout(function (){   $('li').first().remove,(i+2)*3000, )
	
