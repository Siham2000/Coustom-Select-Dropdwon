import Select from  "./select.js"

const selectElemnts = document.querySelectorAll('[data-custom]')

console.log(selectElemnts);
selectElemnts.forEach(selectElemnt =>{
new Select(selectElemnt);
})






