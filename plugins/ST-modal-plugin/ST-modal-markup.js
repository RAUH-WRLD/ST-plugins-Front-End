export function getSTmodalMarkup() {
    return `
    <button id="modal-open">SHOW ST MODAL</button>
        <div class="ST-modal not-active">
            <div class="modal__window">
                <div class="modal__title">
                    <p>Hello, World</p>
                </div>
                <div class="modal__info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a dicta veniam sequi voluptas libero eligendi excepturi culpa possimus dolore, cum quisquam! Fugit nisi sunt exercitationem aspernatur quia libero odio.</p>
                    <button id="modal-confirm">OK</button>
                    <button id="modal-cancel">Cancel</button>
                    <button id="modal-close">X</button>
                </div>
            </div>
        </div>`;
};