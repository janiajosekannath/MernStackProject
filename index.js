document.addEventListener('DOMContentLoaded', function () {
	const header = document.querySelector('h1');
	const button = document.createElement('button');

	button.textContent = 'Click to change text';
	button.className = 'action-button';

	button.addEventListener('click', function () {
		if (header.textContent.includes('Mits')) {
			header.textContent = 'Thanks for visiting Mits!';
		} else {
			header.textContent = 'Welcome to Mits';
		}
	});

	const wrapper = document.createElement('div');
	wrapper.style.display = 'flex';
	wrapper.style.flexDirection = 'column';
	wrapper.style.alignItems = 'center';
	wrapper.style.gap = '1rem';
	wrapper.style.marginTop = '1.5rem';
	wrapper.appendChild(button);

	header.insertAdjacentElement('afterend', wrapper);
});
