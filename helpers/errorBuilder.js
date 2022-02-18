module.exports = (status, message, instance) => ({
	status: status || 400,
	message,
	instance,
});
