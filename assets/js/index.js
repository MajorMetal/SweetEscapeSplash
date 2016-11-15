// function ready() {
// 	document.removeEventListener('DOMContentLoaded', ready);


// 	postNotification();

// 	if (iOSversion()) {
// 		var iframe = document.getElementsByClassName('video');

// 		iframe.width = '560';
// 		iframe.height = '315';
// 		iframe.src = 'https://www.youtube.com/embed/ooHhvZ2CUEg';
// 	}
// }

// function iOSversion() {
// 	return (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
// }

$(document).ready(function(){
 
    $.ajax({type: "POST",
            url: "https://hooks.slack.com/services/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",
            data: "payload=" + JSON.stringify({ 
            	  "channel": "#sweetescape", 
            	  "username": "webhookbot", 
            	  "text": "Some one is in sweetescape.", 
            	  "icon_emoji": ":ghost:" }),
            dataType: 'json',
            success:function(result){
      		console.log("It Worked");
    }});
});

// function sendRequest() {

//     $.ajax({
//         type: "POST",
//         url: "https://hooks.slack.com/services/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",
//         data: { "channel": "#sweetescape", "username": "webhookbot", "text": "This is posted to #sweetescape and comes from a bot named webhookbot.", "icon_emoji": ":ghost:" }
//     }).done(function (data) {
//         alert(data);
//     }).error(function (jqXHR, textStatus, errorThrown) {
//         alert(jqXHR.responseText || textStatus);
//     });
// }


// $(document).ready(function(){
//   $(".button").click(function(e){
//       e.preventDefault();
//     $.ajax({type: "POST",
//             url: "https://hooks.slack.com/services/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",
//             data: "payload=" + JSON.stringify({ 
//             	  "channel": "#sweetescape", 
//             	  "username": "webhookbot", 
//             	  "text": "Some one is in sweetescape.", 
//             	  "icon_emoji": ":ghost:" }),
//             dataType: 'json',
//             success:function(result){
//       		console.log("It Worked");
//     }});
//   });
// });
 //document.body.addEventListener('DOMContentLoaded', ready);


// var url = 
// var text = // Text to post
// $.ajax({
//     data: 'payload=' + JSON.stringify({
//         "text": text
//     }),
//     dataType: 'json',
//     processData: false,
//     type: 'POST',
//     url: url
// });

