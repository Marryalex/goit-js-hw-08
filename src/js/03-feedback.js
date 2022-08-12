import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form')
const formData = {};

updForm()

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(onInput, 500))

function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

}

function onFormSubmit(event) {
    event.preventDefault()

    // localStorage.removeItem(STORAGE_KEY)
    form.reset()
    console.log(formData)
}

function updForm() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedData) {
        Object.entries(savedData).forEach(([name, value]) => {
            form.elements[name].value = value;
            formData[name] = value;
        });
    }
    console.log(savedData)
}
