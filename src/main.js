import './main.css';

let _hash = null;
let _interval = 7000;

function renderPopup(data) {

    return `<div class="pending-questions" id="pending-questions">
        You have total
        <a class="pending-questions__link" target="_blank" href="${data.url}" id="total-pending-question">${data.total}</a>
        pending questions!<br/>
        <small>(I am created by Js after AJAX)</small>
    </div>`
}

function appendPopup(html) {

    var $prev = document.getElementById('pending-questions');
    $prev && $prev.remove();

    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);

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

export function setIntervalTimeout(interval) {
    _interval = interval;
}

export function init() {
    if (typeof _hash !== 'string') {
        throw new Error('Please addHash([hash])');
    }
    getData()
        .then(renderPopup)
        .then(appendPopup)
        .catch((err) => console.warn(err));

    setInterval(() => {
        getData()
            .then(renderPopup)
            .then(appendPopup)
            .catch((err) => console.warn(err));
    }, _interval);
}
