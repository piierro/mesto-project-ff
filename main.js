(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(e){e.remove()}function n(e){e.classList.toggle("card__like-button_is-active")}function r(t,n,r,o){var c=e.querySelector(".places__item").cloneNode(!0);c.querySelector(".card__image").src=t.link,c.querySelector(".card__image").alt=t.name,c.querySelector(".card__title").textContent=t.name,c.querySelector(".card__delete-button").addEventListener("click",(function(){return n(c)}));var u=c.querySelector(".card__like-button");return u.addEventListener("click",(function(){return r(u)})),c.querySelector(".card__image").addEventListener("click",(function(){return o(t)})),c}function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",p)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",p)}var u=function(e){e.target===e.currentTarget&&c(document.querySelector(".popup_is-opened"))},p=function(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))},d=document.querySelector(".profile__edit-button"),a=document.querySelectorAll(".popup__close"),i=document.querySelector(".popup_type_edit"),l=document.querySelector(".places__list"),s=document.querySelector(".profile__add-button"),_=document.querySelector(".popup_type_new-card"),m=document.querySelector(".profile__title"),y=document.querySelector(".profile__description"),v=document.querySelector("[name='edit-profile']"),f=document.querySelector(".popup__input_type_name"),k=document.querySelector(".popup__input_type_description"),q=document.querySelector(".popup_type_image"),S=document.querySelector(".popup__input_type_card-name"),g=document.querySelector(".popup__input_type_url"),E=document.querySelector("[name='new-place']"),L=document.querySelector(".popup__image"),h=document.querySelector(".popup__caption");function x(e){L.src=e.link,L.alt=e.name,h.textContent=e.name,o(q)}d.addEventListener("click",(function(){f.value=m.textContent,k.value=y.textContent,o(i)})),s.addEventListener("click",(function(){o(_)})),a.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){c(t)})),t.addEventListener("mousedown",u)})),v.addEventListener("submit",(function(e){e.preventDefault(),m.textContent=f.value,y.textContent=k.value,c(i)})),E.addEventListener("submit",(function(e){e.preventDefault();var o={};o.name=S.value,o.link=g.value;var u=r(o,t,n,x);l.prepend(u),S.value="",g.value="",c(_)})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){return o=e,void l.append(r(o,t,n,x));var o}))})();