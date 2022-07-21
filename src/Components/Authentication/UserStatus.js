import { getCookie, RemoveCookie } from 'Utilities/cookie';
import jwt_decode from "jwt-decode";

const AuthTokenName = 'jwt';

function UserIsLoggedIn() {
    let isLoggedIn = false;
    let token = getCookie(AuthTokenName)

    if (token) {
        const jwtData = jwt_decode(token);
        if (Date.now() >= jwtData["exp"] * 1000) {
            return false;
        }

        isLoggedIn = true;
    }
    return isLoggedIn;
}

function GetUser() {
    let token = getCookie(AuthTokenName)
    let user = {
        token: token,
    }

    if (token) {
        const jwtUser = jwt_decode(token);
        user["name"] = jwtUser["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
        user["roles"] = jwtUser["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    }
    return user;
}

function Logout() {
    RemoveCookie(AuthTokenName);
}

const PageWithoutAuthorization = ['Login', 'Register']

export { UserIsLoggedIn, Logout, PageWithoutAuthorization, GetUser };