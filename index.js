const shareButton = document.querySelector('button');
const socialMediaPopUp = document.querySelector('.social-media');

function handleShareButtonClick() {
	socialMediaPopUp.classList.toggle('hidden');
}

shareButton.addEventListener('click', handleShareButtonClick);
