const input = document.querySelector('#userInput');
const subBtn = document.querySelector('#submitBtn');
const toDoList = document.querySelector('#itemList');
const listTitle = document.querySelector('#itemListTitle');

input.addEventListener('click', () => {
    input.setAttribute('placeholder', '');
})

subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.length > 0) {
        listTitle.innerHTML = 'Your List';
        addItem();
        input.value = '';
    } else { return alert('Please enter a valid item!') };
});

function addItem() {
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('id', 'itemDiv');
    toDoList.appendChild(itemDiv);
    const brk = document.createElement('br');

    const radBtn = document.createElement('input');
    radBtn.setAttribute('type', 'radio');
    radBtn.setAttribute('name', 'itemRad');
    radBtn.setAttribute('id', 'itemRad');
    itemDiv.appendChild(radBtn);

    const newItem = document.createElement('label');
    newItem.setAttribute('for', 'itemRad');
    newItem.setAttribute('class', 'itemLabel');
    newItem.innerHTML = input.value;
    itemDiv.appendChild(newItem);

    radBtn.addEventListener('click', function (e) {
        e.preventDefault();
        radBtn.remove();
        newItem.remove();
        itemDiv.remove();
        brk.remove();
    });
};