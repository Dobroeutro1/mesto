export default class UserInfo {
    constructor(nameProfile, infoProfile) {
        this._nameProfile = nameProfile;
        this._infoProfile = infoProfile;
    }

    getUserInfo() {
        this._userInfo = {
            name: this._nameProfile.textContent,
            info: this._infoProfile.textContent
        }

        return this._userInfo;
    }

    setUserInfo(name, link) {
        this._nameProfile.textContent = name;
        this._infoProfile.textContent = link;
    }
}