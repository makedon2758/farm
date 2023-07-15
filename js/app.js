(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const script_link = document.querySelectorAll("a");
    script_link.forEach((el => {
        el.addEventListener("click", (e => {
            e.preventDefault();
        }));
    }));
    const modalOpen = document.querySelector(".balans-heder__menu");
    const modal = document.querySelector(".modal");
    const modalClose = document.querySelector(".titl__right");
    document.querySelector(".button__deposites");
    document.querySelector(".button__conclusion");
    const modalReffOpen = document.querySelector(".header-page__reff");
    const modalReffClose = document.querySelector(".mpdal__reff-close");
    const modalReff = document.querySelector(".modal__reff");
    function modalHidden(modal) {
        modal.classList.add("hidden");
    }
    modalHidden(modal);
    modalHidden(modalReff);
    function openModal(button, modal) {
        button.addEventListener("click", (() => {
            modal.classList.add("show");
            modal.classList.remove("hidden");
        }));
    }
    openModal(modalOpen, modal);
    openModal(modalReffOpen, modalReff);
    function closeModal(button, modal) {
        button.addEventListener("click", (() => {
            modal.classList.remove("show");
            modal.classList.add("hidden");
        }));
        modal.addEventListener("click", (e => {
            if (e.target === modal) {
                modal.classList.remove("show");
                modal.classList.add("hidden");
            }
        }));
    }
    closeModal(modalClose, modal);
    closeModal(modalReffClose, modalReff);
    window["FLS"] = true;
    isWebp();
})();