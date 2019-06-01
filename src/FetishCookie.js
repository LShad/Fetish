import Cookies from 'js-cookie';

class FetishCookie {
	constructor(){
		this.cookieName = "FetishCookie"
	}

	getCookie(){
		console.log(this.cookieName)
		const auth = Cookies.get("FetishCookie")
		console.log(auth)
		return auth
	}
}

export default FetishCookie;