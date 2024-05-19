const shareButton = document.querySelector('button');
const socialMediaPopUp = document.querySelector('.social-media');

const authorContainerLeft = document.querySelector('.author-container-left');
const arrowDown = document.querySelector('.arrow-down');
const iconContainer = document.querySelector('.icon-container');
const articleBottom = document.querySelector('.article-bottom');

function handleShareButtonClick() {
	shareButton.classList.toggle('desktop-active');
	shareButton.classList.toggle('mobile-active');
	socialMediaPopUp.classList.toggle('hidden');
	socialMediaPopUp.classList.toggle('move');
	authorContainerLeft.classList.toggle('hidden-mobile');
	arrowDown.classList.toggle('visibility');
	iconContainer.classList.toggle('move');
	articleBottom.classList.toggle('move');
}

shareButton.addEventListener('click', handleShareButtonClick);
