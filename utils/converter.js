function converter(conversion) {
	switch (conversion.type) {
		case 'UPPERCASE':
			return conversion.text.toUpperCase();
		case 'LOWERCASE':
			return conversion.text.toLowerCase();
		case 'ENCODE_BASE64':
			return btoa(conversion.text);
		case 'DECODE_BASE64':
			return atob(conversion.text);
	}
}
export default converter;
