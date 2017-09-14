//Main js EEC_twitchTv
var globalData=[];
var channelList=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","lgamezzonel"];
//var channelList=["ESL_SC2", "OgamingSC2", "cretetion"];
var webResources=["https://api.twitch.tv/kraken/channels/","https://api.twitch.tv/kraken/streams/"];
var lastUrl="?client_id=axjhfp777tflhy0yjb5sftsil&callback=?";
$(document).ready(function(){
	//statusReport(sendRequest());
	//statusReport(buildUserInterface());
	getObjects();

	$(".green").click(function(){
		buildUserInterface(globalData[4]);
	});

});
function getObjects(type){
	if(type=="live"){
		for (var i = 0; i < channelList.length; i++) {
		 sendRequest(webResources[1]+channelList[i]+lastUrl);
		 setTimeout(statusReport("list parsing"), 1000);
	 }
	}else{
		for (var i = 0; i < channelList.length; i++) {
		 sendRequest(webResources[0]+channelList[i]+lastUrl);
		 setTimeout(statusReport("list parsing"), 1000);
	 }
	}

}

function sendRequest(targetURL){
$.getJSON(targetURL,function(data,status,xhr){
			globalData.push(data);
			//buildUserInterface(data);
			statusReport(data);
		});
	//return "sendRequest OK";
}
function buildUserInterface(globalDataArr){
	//channel.logo
	//channel.profile_banner
	//channel.name
	//channel.url
	//channel.views
	//channel.display_name
	//channel.game
	//<img src="'+globalDataArr.profile_banner+'">'+
if(globalDataArr.stream!=null){
		//stream
		console.log("STREAMS--------------------");
		// $(".row").append('<div class="col s4 m4"><div class="card">'+
		// "<div style='background-image:url("+globalDataArr.profile_banner+")' class=\"card-image\">"+
		// '<span class="card-title">'+globalDataArr.display_name+'</span>'+
		// '</div>'+'<div class="card-content"><p>Channel dedicated to : '+globalDataArr.game+ '</p><a href="'+globalDataArr.url+'">'+globalDataArr.url+"</a><p> Total channel views : "+globalDataArr.views+"</p></div>"+
		// '<div class="card-action"><a href="'+globalDataArr.url+'">Visit Channel</a></div>'+
		// "</div></div>");

}else{
	$(".row").append('<div class="col s4 m4"><div class="card">'+
	"<div style='background-image:url("+globalDataArr.profile_banner+")' class=\"card-image\">"+
	'<span class="card-title">'+globalDataArr.display_name+'</span>'+
	'</div>'+'<div class="card-content"><p>Channel dedicated to : '+globalDataArr.game+ '</p><a href="'+globalDataArr.url+'">'+globalDataArr.url+"</a><p> Total channel views : "+globalDataArr.views+"</p></div>"+
	'<div class="card-action"><a href="'+globalDataArr.url+'">Visit Channel</a></div>'+
	"</div></div>");
}


	//$("div.col").append('</div>');
}
function statusReport(statusData){
	console.log(statusData);
}
