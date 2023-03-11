
import { decodeJwt } from 'jose';
import * as moment from 'moment';

class AuthService{

  tokenKey = 'acc-token';

  getToken() {
    
    return sessionStorage.getItem(this.tokenKey);
  }

  decode(token) {
    return decodeJwt(token);
  }

  saveToken(token) {
    sessionStorage.setItem(this.tokenKey, token)
  }

  invalidateUser() {
    sessionStorage.removeItem(this.tokenKey);
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
    return moment().isBefore(this.getExpiration(token));
  }

  isAuthenticated() {
    const token = this.getToken();
    return (token && this.isValid(token)) ? true : false;
  }

}



export default new AuthService();