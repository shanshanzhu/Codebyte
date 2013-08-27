
$(document).ready(function(){
	delete Chat.display;
	delete Chat.fetch; 
	delete Chat.send; 
       // $("li").remove();
	
        // getParse(initialDisplay,10);
         $(".draft").keyup(checkBox);

     
$(".send").on("click",function(event){

	var textContent = Chat.username + ": " + $('.draft').val();
	var obj = {"text": textContent, "username": Chat.username};	
	var counter = 1;
	$('.draft').val('');
	sendParse(obj, counter);

});

});

function sendParse(obj,counter){
	var json = JSON.stringify(obj);
	$.ajax({url:'https://api.parse.com/1/classes/chats',
	   type: 'POST',
	   dataType: 'json',
           contentType:'application/json',
	   processData: false,		
	   data:json,	
	   headers:{"Content-Type": "application/json"},
	   success: function(res){
	      getParse(displayRemove,3000,res["objectId"]);} 
});	

}

function getParse(func,gaptime,str){
	$.ajax({url:'https://api.parse.com/1/classes/chats',
	   type: 'GET',
	   dataType: 'json',
           contentType:'application/json',
	   data:{"order":"createdAt"},
           success: function (res){
              	   $.each (res["results"],function(i,item){
			setTimeout(func, i*gaptime,item.text);
           });
	   },
	   error: function(res){
		console.log("There is something Wrong!");
		}
		});

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


////////////////////////////
Chat.fetch(function (list){
	
	for(var i = 0; i < list.length; i++){
		setTimeout(Chat.display,i*3000,list[i]);}
});
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
	
