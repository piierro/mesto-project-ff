const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-6",
    headers: {
        authorization: 'b7eaf45a-fb02-46d0-b878-325cf6338f57',
        "Content-Type": "application/json",
    }
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

//функция информации о польхователе с сервера
function getUserInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "GET",
      headers: config.headers,
    })
    .then(checkResponse);
};

// Функция получения карточек с сервера
function getInitialCards() {
    return fetch(`${config.baseUrl}/cards`, {
      method: "GET",
      headers: config.headers
    })
    .then(checkResponse);
};

// Функция редактирования профиля
function editProfile(name, description) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
          name,
          about: description,
        }),
      })
      .then(checkResponse);
};

//функция добавления новой карточки
function addNewCard(name, link) {
    return fetch(`${config.baseUrl}/cards`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
          name,
          link,
        }),
      })
      .then(checkResponse);
};

// Функция добавления лайка
function addLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: config.headers,
    })
    .then(checkResponse);
};

// Функция удаления лайка
function removeLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    })
    .then(checkResponse);
};

// Функция удаления карточки c сервера
function deleteCard(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    })
    .then(checkResponse);
};

// Функция обновления аватара
function editAvatar(avatar) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    })
    .then(checkResponse);
}

export { getUserInfo, getInitialCards, editProfile, addNewCard, addLike, removeLike, deleteCard, editAvatar };
