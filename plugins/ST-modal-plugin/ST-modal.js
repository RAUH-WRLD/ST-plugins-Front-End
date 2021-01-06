import {getSTmodalMarkup} from "../ST-modal-plugin/ST-modal-markup";
export function activateSTmodal(object) {
    const loadSTmodalMarkup = (object) => {
        const place = document.querySelector(object.dischargePlace);
        return place.innerHTML = getSTmodalMarkup();
    };
    loadSTmodalMarkup(object);
    class STmodal {
        constructor(object) {
            this.modalWindow = document.querySelector(object.modal);
            this.btn1 = document.querySelector(object.openButton);
            this.btn2 = document.querySelector(object.confirmButton);
            this.btn3 = document.querySelector(object.cancelButton);
            this.btn4 = document.querySelector(object.exitButton);
            this.stModal([this.modalWindow, this.btn1, this.btn2, this.btn3, this.btn4]);
        };
        stModal([modal, btn, ok, cancel, exit]) {
            const modalWindow = ([open, ok, cancel, close]) => {
                const buttonsWhichCloseModal = [ok, cancel, close];
                const actionOnModalWindow = ([item1, item2, item3, item4]) => {
                    return item1.addEventListener("click", () => {
                        item2.classList.remove(item3);
                        item2.classList.add(item4);
                    });
                };
                buttonsWhichCloseModal.forEach(element => actionOnModalWindow([element, modal, "active", "not-active"]));
                return actionOnModalWindow([open, modal, "not-active", "active"]);
            };
            return modalWindow([btn, ok, cancel, exit]);
        };
    };
    const stModal = new STmodal(object);
};