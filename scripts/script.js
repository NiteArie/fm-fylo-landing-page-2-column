const app = (() => {
    const headerForm = document.querySelector(".js-header-form");
    const headerEmailInput = document.querySelector(".js-header-input");
    const headerErrorElement = document.querySelector(".js-header-error");
    const accessForm = document.querySelector(".js-access-form");
    const accessEmailInput = document.querySelector(".js-access-email");
    const accessErrorElement = document.querySelector(".js-access-error");

    const emailRegex = /\S+@\S+/;

    function checkValidEmail(email) {
        return email.match(emailRegex);
    }

    headerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let email = headerEmailInput.value;
        if (!checkValidEmail(email)) {
            showHeaderError();
        } else {
            hideHeaderError();
        }
    })

    accessForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let email = accessEmailInput.value;
        if (!checkValidEmail(email)) {
            showAccessError();
        } else {
            hideAccessError();
        }
    })

    function showHeaderError() {
        headerErrorElement.classList.remove("header__error--hidden");
        headerEmailInput.classList.add("header__input--error");
    }

    function hideHeaderError() {
        headerErrorElement.classList.add("header__error--hidden");
        headerEmailInput.classList.remove("header__input--error");

    }

    function showAccessError() {
        accessErrorElement.classList.remove("access__error--hidden");
        accessEmailInput.classList.add("access__email--error");
    }

    function hideAccessError() {
        accessErrorElement.classList.add("access__error--hidden");
        accessEmailInput.classList.remove("access__email--error");
    }

})();