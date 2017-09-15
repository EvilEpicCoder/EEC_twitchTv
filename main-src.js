//Main js EEC_twitchTv
var globalData=[];
var globalStreamData=[];
var channelList=["blizzheroes","jovironebr","jankos","rakin","gosu","halo","2kgames","ubisoft","rockstar","bethesda","esl_csgo","theliquidduck","danzhizzle","starladder1","jujushinobi","firstearth","tuzson","baradul","f0rcedinducti0n","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "RobotCaleb", "noobs2ninjas","lgamezzonel"].sort();
var webResources=["https://api.twitch.tv/kraken/channels/","https://api.twitch.tv/kraken/streams/"];
var lastUrl="?client_id=axjhfp777tflhy0yjb5sftsil&callback=?";
var x=0;
$(document).ready(function(){
	//statusReport(sendRequest());
	//statusReport(buildUserInterface());
	getObjects("live");
	globalStreamData.sort(function(a,b) {return (a.stream.channel.name > b.stream.channel.name) ? 1 : ((b.stream.channel.name > a.stream.channel.name) ? -1 : 0);} );
	getObjects("base");
	globalData.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );


	$(".red").click(function(){
		$(".row").html('');
		for (var i = 0; i < globalStreamData.length; i++) {
			buildUserInterface(globalStreamData[i],"live");
		}
	});
	$(".gray").click(function(){
		$(".row").html('');
		for (var i = 0; i < globalData.length; i++) {
		buildUserInterface(globalData[i],"base");
		}
	});
	$(".green").click(function(){
		$(".row").html('');
		for (var i = 0; i < globalStreamData.length; i++) {
			buildUserInterface(globalStreamData[i],"live");
		}
		for (var i = 0; i < globalData.length; i++) {
			buildUserInterface(globalData[i],"base");
		}
	});
	$(".blue").click(function(){
		window.open("https://twitter.com/intent/tweet?text="+"I love Twitch :heart:\n "+" \n https://codepen.io/EvilEpicCoder/full/LzVZMp/ \n ",'_blank');
	});

});
function getObjects(type){
	if(type=="live"){
		for (var i = 0; i < channelList.length; i++) {
		 sendRequestLive(webResources[1]+channelList[i]+lastUrl,"live");
	 }
	}else{
		for (var i = 0; i < channelList.length; i++) {
		 sendRequest(webResources[0]+channelList[i]+lastUrl,"");
	 }
	}

}

function sendRequest(targetURL){
$.getJSON(targetURL,function(data,status,xhr){
				globalData.push(data);
				buildUserInterface(data,"base");
		});
}
function sendRequestLive(targetURL){
$.getJSON(targetURL,function(data,status,xhr){
				globalStreamData.push(data);
				buildUserInterface(data,"live");
		});
}
function buildUserInterface(globalDataArr, type){
	//channel.logo
	//channel.profile_banner
	//channel.name
	//channel.url
	//channel.views
	//channel.display_name
	//channel.game
	//<img src="'+globalDataArr.profile_banner+'">'+
	//'<a href="'+data+'">'+data+"</a>"
if(type=="live"){
	if(globalDataArr.stream!=null){
		$(".row").append('<div class="col s12 m6 l4 xl4"><div class="card">'+
		"<div style='background-image:url("+globalDataArr.stream.channel.profile_banner+")' class=\"card-image\">"+
		'<span class="card-title">'+globalDataArr.stream.channel.display_name+'</span>'+
		'</div>'+'<div class="card-content"><p>Dedicated to : <br> '+globalDataArr.stream.channel.game+ '</p><a href="'+globalDataArr.stream.channel.url+'">'+globalDataArr.stream.channel.url+"</a><p> Total views : "+globalDataArr.stream.channel.views+"</p></div>"+
		'<div class="card-action"><a href="'+globalDataArr.stream.channel.url+'">LIVE stream</a></div>'+
		"</div></div>");
		}
	}else{
	$(".row").append('<div class="col s12 m6 l4 xl4"><div class="card">'+
	"<div style='background-image:url("+globalDataArr.profile_banner+")' class=\"card-image\">"+
	'<span class="card-title">'+globalDataArr.display_name+'</span>'+
	'</div>'+'<div class="card-content"><p>Dedicated to : <br>'+globalDataArr.game+ '</p><a href="'+globalDataArr.url+'">'+globalDataArr.url+"</a><p> Total views : "+globalDataArr.views+"</p></div>"+
	'<div class="card-action"><a href="'+globalDataArr.url+'">Visit Channel</a></div>'+
	"</div></div>");
}

}
function statusReport(statusData){
	console.log(statusData);
}
