export function stAccordion(options) {
    class Accordion {
        constructor(options) {
            this.accordionItems = document.querySelectorAll(options.eachAccordionItem);
            this.accordionItemsInfo = document.querySelectorAll(options.eachAccordionInfo);
            this.accordion(this.accordionItems, this.accordionItemsInfo);
        };
        accordion(items1, items2) {
            function launchAccordion(items1, items2) {
                const items2Arr = [];
                const icons = document.querySelectorAll(".fa-plus");
                const iterateItems = (item1, item2) => {
                    return item1.forEach(i => {
                        return item2.push(i);
                    });
                };
                const showAccordionItem = (item1, item2, icons) => {
                    icons.forEach(icon => {
                        return checkItems([item1, item2, icon]);
                    });
                    function showItem(item, icon) {
                        item.classList.toggle("active");
                        icon.classList.remove("fa-plus");
                        icon.classList.toggle("fa-minus");
                        icon.classList.add("fa-plus");
                    };
                    function checkItems([item1, item2, icon]) {
                        return item2.forEach(element => {
                            if (item1.id === element.id && item1.id === icon.id) {
                                return showItem(element, icon);
                            };
                        });
                    };
                };
                iterateItems(arguments[1], items2Arr);
                return arguments[0].forEach(element1 => {
                    return element1.addEventListener("click", () => {
                        return showAccordionItem(element1, items2Arr, icons);
                    });
                });
            };
            return launchAccordion(items1, items2);
        };
    };
    const accordion = new Accordion(options);
};