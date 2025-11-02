const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (e) => {
	e.preventDefault();

	const firstName = document.querySelector('input[name="First Name"]').value;
	const lastName = document.querySelector('input[name="Last Name"]').value;
	const phoneNumber = document.querySelector('input[name="Phone Number"]').value;
	const emailID = document.querySelector('input[name="Email ID"]').value;

	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailID}`);});