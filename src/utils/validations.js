export const validateEmail = (value) => {
	let re = /\S+@\S+\.\S+/;
	return re.test(value);
};
