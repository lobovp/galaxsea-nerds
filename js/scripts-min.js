var link=document.querySelector(".write-us"),popup=document.querySelector(".modal-content"),close=popup.querySelector(".modal-content-close"),form=popup.querySelector("form"),login=popup.querySelector("[name=name]"),password=popup.querySelector("[name=email]"),storage=localStorage.getItem(".write-us");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("modal-content-show"),storage?(name.value=storage,email.focus()):name.focus()}),close.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(a){name.value&&email.value?localStorage.setItem("name",name.value):(a.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error"))});
