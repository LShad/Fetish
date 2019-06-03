import Cookies from 'js-cookie';

class FetishCookie {
	constructor(){
		this.cookieName = "FetishCookie"
	}

	getCookie(){
		const auth = Cookies.get("FetishCookie")
		return auth
	}

	checkCookieToken(token){
		const auth = Cookies.get("FetishCookie")
		if(auth === undefined || auth!==token){
			window.location.replace("/");
		}
	}
}

export default FetishCookie;