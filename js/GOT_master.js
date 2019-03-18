(() => {
	console.log('fired');
	// variable stack 
	// grab the shields at the bottom of the page
	const shields     = document.querySelectorAll('.sigil-container'),
	      lightBox    = document.querySelector('.lightbox'),
	      video       = document.querySelector('video');
	      closeLB = document.querySelector('.lightbox-close');

	function showLightbox(){
		//  grab the right video source
		debugger;
        // get the lowercase house name from the class list
		let targetHouse = this.className.split('')[1];

		lightBox.classList.add('show-lightbox');
		video.play();
	}

	function hideLightbox(){
		lightBox.classList.remove('show-lightbox');
		// rewind the video to the begining 
		// and also pause it 
		video,currentTime = 0;
		video.pause();
	}

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();