(function initialise() {
    const SELECTED_CLASS_NAME = 'desktop-icon--selected';
    const RENAME_MODE_CLASS_NAME = 'desktop-icon--rename-mode';

    const iconElements = document.querySelectorAll('[data-desktop-icon]');

    let lastClickedIconTextElement = null;

    iconElements.forEach(el => {
        // double click handler
        el.addEventListener('dblclick', () => {
            const link = el.getAttribute('data-desktop-icon-link');
            window.open(link, '_blank');
        });

        // click handler
        el.addEventListener('click', (event) => {
            if (!event.ctrlKey) {
                iconElements.forEach(elToResetSelectedClassName => {
                    elToResetSelectedClassName.classList.remove(SELECTED_CLASS_NAME);
                });
            }
            if (!el.classList.contains(SELECTED_CLASS_NAME)) {
                el.classList.add(SELECTED_CLASS_NAME);
            }
        });

        // click handler for text element
        const textElement = el.querySelector('p');

        const inputElement = el.querySelector('input');

        function handleRename() {
            const sourceText = textElement.innerText;
            const targetText = inputElement.value;
            if (sourceText !== targetText) {
                alert('Permission denied');
            }
            el.classList.remove(RENAME_MODE_CLASS_NAME);
        }

        inputElement.addEventListener('blur', () => {
            handleRename();
        });
        inputElement.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                handleRename();
            }
        });

        el.querySelector('p').addEventListener('click', () => {
            if (lastClickedIconTextElement === textElement) {
                if (!el.classList.contains(RENAME_MODE_CLASS_NAME)) {
                    el.classList.add(RENAME_MODE_CLASS_NAME);
                    inputElement.focus();
                    inputElement.value = textElement.innerText;
                }
            }
            lastClickedIconTextElement = textElement;
        });
    });
})()
