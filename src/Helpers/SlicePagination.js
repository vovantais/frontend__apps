export const slicePagination = (array, count) => {
	const parts = [];
	for (let i = 0; i < array.length; i = i + count) {
		const [...newArray] = array;
		parts.push(newArray.splice(i, count));
	}
	return parts;
};