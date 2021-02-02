function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function setCookie(key, value, expires = null) {
	if (expires == null) {
		document.cookie = `${key}=${value}`;
	} else {
		document.cookie = `${key}=${value}; expires=${expires}`;
	}
}

export default {
	getCookie,
	setCookie
};
