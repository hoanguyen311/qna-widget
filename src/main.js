import './main.css';

let _hash = null;
let _intervalDelay = 7000;
let _placeholderId = null;

function renderPopup({ url, total }) {

    return `
    <div class="pending-questions">
        <div class="pending-questions__toggler">
            <span class="pending-questions__toggler-icon"></span>
        </div>
        <div class="pending-questions__body">
            You have ${total} questions from customer
            <a href="${url}" class="pending-questions__button">Answer pending questions</a>
        </div>
    </div>`
}

function appendPopup(html) {
    const $placeholder = _placeholderId ? document.getElementById(_placeholderId) : document.body;
    var $prev = document.getElementById('pending-questions');
    $prev && $prev.remove();

    const div = document.createElement('div');
    div.setAttribute('id', 'pending-questions');
    div.innerHTML = html;
    $placeholder.appendChild(div);

    setTimeout(() => {
        div.children[0].classList.add('pending-questions_animation-in');
    }, 200);
}

function getData() {
    return fetch(`https://demo8280979.mockable.io/pending-questions?hash=${_hash}`)
        .then((res) => res.json());
}

function updatePopup({total}) {
    document.getElementById('total-pending-question').innerHTML = total;
}

export function addHash(hash) {
    _hash = hash;
}

export function setPlaceholderId(id) {
    _placeholderId = id;
}

export function setIntervalTimeout(interval) {
    _intervalDelay = interval;
}

export function init() {
    if (typeof _hash !== 'string') {
        throw new Error('Please addHash([hash])');
    }
    getData()
        .then(renderPopup)
        .then(appendPopup)
        .catch((err) => console.warn(err));

    // setInterval(() => {
    //     getData()
    //         .then(renderPopup)
    //         .then(appendPopup)
    //         .catch((err) => console.warn(err));
    // }, _intervalDelay);
}
