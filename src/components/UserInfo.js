export default class UserInfo {
    constructor(nameProfile, infoProfile, avatar) {
        this._nameProfile = nameProfile;
        this._infoProfile = infoProfile;
        this._avatar = avatar;
    }

    getUserInfo() {
        this._userInfo = {
            name: this._nameProfile.textContent,
            info: this._infoProfile.textContent
        }

        return this._userInfo;
    }

    setUserInfo(name, link, avatar) {
        this._nameProfile.textContent = name;
        this._infoProfile.textContent = link;
        this._avatar.src = avatar
    }
}