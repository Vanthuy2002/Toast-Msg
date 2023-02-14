const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let main = $("#toast");

function showToast({
  title = "",
  msg = "",
  type = "success",
  duration = 3000,
}) {
  if (main) {
    let toast = document.createElement("div");
    toast.addEventListener("click", (e)=>{
        if(e.target.closest(".toast__close")){
            main.removeChild(toast);
            clearTimeout(removeToast);
        }
    })
    const icons = {
        success : "fa-solid fa-circle-check",
        error : "fa-solid fa-bug",
    };
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft 0.5s ease, fadeOut 1s ${delay}s linear forwards`;
    toast.innerHTML = `<div class="toast__icon">
            <i class="toast__icon ${icons[type]}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${msg}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>`;
        main.appendChild(toast);
        let removeToast = setTimeout(()=>{
           main.removeChild(toast);
        }, duration);
  }
}

function showSuccessToast(){
    showToast({
        title: "Success",
        msg: "Hello he so lili everybody hehe",
        type: "success",
        duration: 6000,
    });
}

function showErrorToast(){
    showToast({
        title: "Error",
        msg: "Hmm...something is failed, try again",
        type: "error",
        duration: 6000,
    });
}