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

// Open and Close full screen youtube video
const modalTarget = document.getElementById("youtube-embed");
const modalClose = "<div onClick='closeYoutubeModal()' class='modal-close'><i class='fas fa-times'></i></div>"
const youtube = "<iframe width='853' height='480' src='https://www.youtube.com/embed/Qnp63uHuAhc' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
const backgroundVideo = document.getElementById("bgvid");

function openYoutubeModal () {
    modalTarget.classList.add('youtube-modal');
    modalTarget.innerHTML += modalClose;
    modalTarget.innerHTML += youtube;
    backgroundVideo.pause();
};

function closeYoutubeModal () {
    modalTarget.classList.remove('youtube-modal');
    modalTarget.innerHTML = "";
    backgroundVideo.play();
}; 