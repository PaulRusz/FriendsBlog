import { jwtDecode} from 'jwt-decode'

class AuthService {
    GetProfile() {
        return jwtDecode(this.GetToken());
    }

    LoggedIn() {
        const Token = this.GetToken();
        // If There's A Token And It Isn't Expired, Return `true`
        return Token && !this.isTokenExpired(Token) ? true : false;
    }

    IsTokenExpired(Token) {
        // Decode Token To Retrieve Expiration Time Set By The Server
        const Decoded = jwtDecode(Token);
        // If Expiration Time Is Less Than Current Time (In Seconds), Token Is Expired & Return `true`
        if (Decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        // If Token Isn't Passed Expiration Time, Return `false`
        return false;
    }

    GetToken() {
        return localStorage.getItem('id_token');
    }

    Login(IdToken) {
        localStorage.setItem('id_token', IdToken);
        window.location.assign('/');
    }

    Logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
    }
}

export default new AuthService();