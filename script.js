//your JS code here. If required.
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (e) => {
	e.preventDefault();

	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const phoneNumber = document.getElementById('phoneNumber').value;
	const emailID = document.getElementById('emailId').value;

	alert(`First Name: ${firstName} Last Name: ${lastNmame} Phone Number: ${phoneNumber} Email ID: ${emailID}`)
})