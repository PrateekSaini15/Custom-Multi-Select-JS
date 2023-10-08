let selectedValues = [];

let select = document.querySelector("#selectControl");
let selectValue = select.querySelector(".select-value");
let clearButton = select.querySelector(".select-clear-btn");
let selectOptions = select.querySelector(".select-options");

select.addEventListener("click", toggleOptions);
select.addEventListener("blur", closeOptions);
clearButton.addEventListener("click", clearSelectedOptions);
selectOptions.addEventListener("click", selectOption);
selectValue.addEventListener("click", removeOption);

function toggleOptions() {
    selectOptions.classList.toggle("show");
}

function closeOptions() {
    selectOptions.classList.remove("show");
}

function clearSelectedOptions(event) {
    event.stopPropagation();

    selectValue.innerHTML = "";
    selectedValues = [];

    for (const li of selectOptions.children) {
        li.classList.remove("selected");
    }
}

function selectOption(event) {
    event.stopPropagation();

    if (event.target.tagName != "LI") {
        return;
    }

    if (selectedValues.findIndex(s => s.value == event.target.value) == -1) {
        selectedValues = [...selectedValues, { text: event.target.innerText, value: event.target.value }];

        event.target.classList.add("selected");
    }
    else {
        selectedValues = selectedValues.filter(s => s.value != event.target.value);

        event.target.classList.remove("selected");
    }

    renderSelectedValues();
}

function clearSelectedOptions(event) {
    event.stopPropagation();

    selectValue.innerHTML = "";
    selectedValues = [];

    for (const li of selectOptions.children) {
        li.classList.remove("selected");
    }
}

function renderSelectedValues() {

    selectValue.innerHTML = "";

    selectedValues.forEach(v => {
        let button = document.createElement("button");
        let timesIcon = document.createElement("span");

        timesIcon.innerHTML = "&times;";

        button.classList.add("select-value-button");
        button.innerText = v.text;
        button.value = v.value;
        button.appendChild(timesIcon);

        selectValue.appendChild(button);
    });
}

function removeOption(event) {

    if (event.target.tagName != "BUTTON" && event.target.parentElement.tagName != "BUTTON") {
        return;
    }

    event.stopPropagation();

    if (event.target.tagName == "BUTTON") {
        selectedValues = selectedValues.filter(s => s.value != event.target.getAttribute("value"));

        for (const item of selectOptions.children) {
            if (item.getAttribute("value") == event.target.getAttribute("value")) {
                item.classList.remove("selected");
            }
        }

        renderSelectedValues();
    }

    if (event.target.tagName == "SPAN") {
        let button = event.target.parentElement;

        selectedValues = selectedValues.filter(s => s.value != button.getAttribute("value"));

        for (const item of selectOptions.children) {
            if (item.getAttribute("value") == button.getAttribute("value")) {
                item.classList.remove("selected");
            }
        }

        renderSelectedValues();
    }

}
