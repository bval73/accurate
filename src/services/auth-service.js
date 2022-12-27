
import * as jose from 'jose';
import * as moment from 'moment';

class AuthService{

  tokenKey = 'auth-token';

  getToken() {
    
    return localStorage.getItem(this.tokenKey);
  }

  decode(token) {
    return jose.decode(token);
  }

  saveToken(token) {
    localStorage.setItem(this.tokenKey, token)
  }

  invalidateUser() {
    localStorage.removeItem(this.tokenKey);
  }

  getExpiration(token) {
    const exp = this.decode(token).exp;

    return moment.unix(exp);
  }

  getUsername() {
    return this.decode(this.getToken()).username;
  }

  getUsertype() {
    return this.decode(this.getToken()).usertype;
  }

  isValid(token){
    console.log('isValid auth-service..')
    return moment().isBefore(this.getExpiration(token));
  }

  isAuthenticated() {
    const token = this.getToken();
    return (token && this.isValid(token)) ? true : false;
  }

}



export default new AuthService();