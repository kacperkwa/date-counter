const settingsBtn = document.querySelector('.settings-btn');
const settingsMenu = document.querySelector('.settings');
const imageSection = document.querySelector('.image-section');
const dayInput = document.querySelector('#event-day');
const monthInput = document.querySelector('#event-month');
const yearInput = document.querySelector('#event-year');
const nameInput = document.querySelector('#event-name');
const imageInput = document.querySelector('#event-image');
const daysOutput = document.querySelector('.days-count');
const hoursOutput = document.querySelector('.hours-count');
const minutesOutput = document.querySelector('.minutes-count');
const secondsOutput = document.querySelector('.seconds-count');
const saveBtn = document.querySelector('.save');
const eventSpan = document.querySelector('.event');
let userDate;

const setTime = () => {
	const currentTime = new Date();
	const result = userDate - currentTime;
	const days = Math.floor(result / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((result % (1000 * 60)) / 1000);
	daysOutput.textContent = days;
	hoursOutput.textContent = hours;
	minutesOutput.textContent = minutes;
	secondsOutput.textContent = seconds;
};
const appUpdate = () => {
	const userDay = dayInput.value;
	const userMonth = monthInput.value;
	const userYear = yearInput.value;
	userDate = new Date(`${userMonth} ${userDay} ${userYear}`);
	eventSpan.textContent = nameInput.value;
	imageSection.style.backgroundImage = `url('../${imageInput.value}')`;
	settingsMenu.classList.remove('active');
	setTime();
};
appUpdate();
setInterval(setTime, 1000);
const settingsHandler = () => {
	settingsMenu.classList.toggle('active');
};

settingsBtn.addEventListener('click', settingsHandler);
saveBtn.addEventListener('click', appUpdate);
