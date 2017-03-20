import './main.css';

let _hash = null;


function renderPopup(data) {
    return `<div class="pending-questions">
        You have total
        <a class="pending-questions__link" target="_blank" href="${data.url}">${data.total}</a>
        pending questions!<br/>
        <small>(I am created by Js after AJAX)</small>
    </div>`
}

function appendPopup(html) {
    const div = document.createElement('div');
    div.innerHTML = html;

    document.body.appendChild(div);

    setTimeout(() => {
        div.children[0].classList.add('pending-questions_animation-in');
    }, 200);
}

export function addHash(hash) {
    _hash = hash;
}

export function init() {
    if (typeof _hash !== 'string') {
        throw new Error('Please addHash([hash])');
    }
    return fetch(`https://demo8280979.mockable.io/pending-questions?hash=${_hash}`)
        .then((res) => res.json())
        .then(renderPopup)
        .then(appendPopup)
        .catch((err) => console.warn(err));
}
