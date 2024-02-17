(()=>{"use strict";var e=[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"b7eaf45a-fb02-46d0-b878-325cf6338f57","Content-Type":"application/json"}};function n(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function r(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function o(e){return fetch("".concat(t.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}var c=document.querySelector("#card-template").content;function a(e,t,n){n(t).then((function(){e.remove()})).catch((function(e){console.log(e)}))}function u(e,t,o){(e.classList.contains("card__like-button_is-active")?r:n)(o).then((function(n){e.classList.toggle("card__like-button_is-active"),t.textContent=n.likes.length})).catch((function(e){return console.log(e)}))}function i(e,t,n,r,a){var u=c.querySelector(".places__item").cloneNode(!0),i=u.querySelector(".card__image"),s=u.querySelector(".card__like-button"),l=u.querySelector(".card__delete-button"),d=u.querySelector(".card__like-counter");return u.querySelector(".card__title").textContent=e.name,i.src=e.link,i.alt=e.name,d.textContent=e.likes.length,e.owner._id===a?l.addEventListener("click",(function(){return t(u,e._id,o)})):l.setAttribute("style","display: none;"),e.likes.some((function(e){return e._id===a}))&&s.classList.add("card__like-button_is-active"),s.addEventListener("click",(function(){return n(s,d,e._id)})),i.addEventListener("click",(function(){return r(e)})),u}function s(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",p)}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",p)}var d=function(e){e.target.classList.contains("popup_is-opened")&&l(e.target),e.target.closest(".popup__close")&&l(e.target.closest(".popup"))},p=function(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))},f=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},m=function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)},y=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},_=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);y(n,r,t),n.forEach((function(n){f(e,n,t.inputErrorClass,t.errorClass)}))};function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v,b=document.querySelector(".profile__edit-button"),S=document.querySelectorAll(".popup__close"),k=document.querySelector(".popup_type_edit"),g=document.querySelector(".places__list"),q=document.querySelector(".popup__button"),E=document.querySelector(".profile__add-button"),C=document.querySelector(".popup_type_new-card"),j=document.querySelector(".profile__title"),L=document.querySelector(".profile__description"),x=document.querySelector("[name='edit-profile']"),A=x.querySelector(".popup__input_type_name"),w=x.querySelector(".popup__input_type_description"),P=document.querySelector("[name='new-place']"),U=document.querySelector(".popup_type_image"),T=P.querySelector(".popup__input_type_card-name"),O=P.querySelector(".popup__input_type_url"),B=document.querySelector(".popup__image"),D=document.querySelector(".popup__caption"),M=document.querySelector(".popup_type_avatar"),N=document.querySelector("[name='newAvatar']"),I=N.querySelector(".popup__input_type_url-ava"),J=document.querySelector(".profile__image"),z=document.querySelector(".profile__image-cover"),G={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function H(e){q.textContent=e?"Сохранение...":"Сохранить"}function V(e){B.src=e.link,B.alt=e.name,D.textContent=e.name,s(U)}Promise.all([fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))]).then((function(t){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(n,r)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],s=o[1];v=c._id,j.textContent=c.name,L.textContent=c.about,J.setAttribute("style","background-image: url(".concat(c.avatar,");")),0===s.length?e.forEach((function(e){return addCard(e)})):s.forEach((function(e){g.append(i(e,a,u,V,v))}))})).catch((function(e){console.log(e)})),b.addEventListener("click",(function(){A.value=j.textContent,w.value=L.textContent,s(k)})),E.addEventListener("click",(function(){s(C)})),z.addEventListener("click",(function(){s(M),N.reset()})),S.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){l(t)})),t.addEventListener("mousedown",d)})),x.addEventListener("submit",(function(e){var n,r;e.preventDefault(),H(!0),(n=A.value,r=w.value,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){j.textContent=e.name,L.textContent=e.about,l(k),_(x,G)})).catch((function(e){console.log(e)})).finally((function(){H(!1)}))})),P.addEventListener("submit",(function(e){var n,r;e.preventDefault(),H(!0),(n=T.value,r=O.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){var t={_id:e._id,name:e.name,link:e.link,likes:e.likes,owner:e.owner};g.prepend(i(t,a,u,V,v)),_(P,G)})).catch((function(e){console.log(e)})).finally((function(){H(!1)})),T.value="",O.value="",_(P,G),l(C)})),N.addEventListener("submit",(function(e){e.preventDefault(),H(!0),function(e){return fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(I.value).then((function(e){J.setAttribute("style","background-image: url(".concat(e.avatar,");")),l(M),_(N,G)})).catch((function(e){console.log(e)})).finally((function(){H(!1)}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);y(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){m(e,o,t),y(n,r,t)}))}))}(t,e)}))}(G)})();