export default class Api {
    constructor({baseUrl, authorization}, group) {
        this.baseUrl = baseUrl;
        this.authorization = authorization;
        this.group = group;
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/${this.group}/users/me`, {
            headers: {
                authorization: `${this.authorization}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.log(err);
            })
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/${this.group}/cards`, {
            headers: {
                authorization: `${this.authorization}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.log(err);
            })
    }

    changeUserInfo(nameValue, aboutValue) {
        return fetch(`${this.baseUrl}/${this.group}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `${this.authorization}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameValue,
                about: aboutValue
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    changeUserAvatar(avatarLink) {
        return fetch(`${this.baseUrl}/${this.group}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: `${this.authorization}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatarLink
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    addNewCard(item) {
        return fetch(`${this.baseUrl}/${this.group}/cards`, {
            method: 'POST',
            headers: {
                authorization: `${this.authorization}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: item.name,
                link: item.link
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/${this.group}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: `${this.authorization}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    addLike(card) {
        return fetch(`${this.baseUrl}/${this.group}/cards/likes/${card._id}`, {
            method: 'PUT',
            headers: {
                authorization: `${this.authorization}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deleteLike(card) {
        return fetch(`${this.baseUrl}/${this.group}/cards/likes/${card._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `${this.authorization}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}