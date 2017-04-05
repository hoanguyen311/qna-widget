import styles from './main.css';

class QnAWidget {
    constructor({ token }) {
        if (typeof token !== 'string') {
            throw new Error('Please provide { token }');
        }

        this.loadData(token)
            .then((data) => this.init(data));
    }
    getTpl() {
        return ({ link, pendingCount }) => {
            return `<div class="pending-questions">
                <style>${styles.toString()}</style>
                <div class="pending-questions__toggler"></div>
                <p class="pending-questions__text">You have ${pendingCount || 0} questions from customer</p>
                <a href="${link}" target="_blank" class="pending-questions__button">Answer pending questions</a>
            </div>`
        }
    }
    render(params) {
        let div = document.createElement('div');
        div.innerHTML = this.getTpl()(params);

        return div.firstChild;
    }
    loadData(token) {
        return fetch(`${QnAWidget.url}?token=${token}`)
            .then((res) => res.json());
    }
    init(params) {
        this.$root = this.render(params);
        document.body.appendChild(this.$root);

        this.bindEvents();

        setTimeout(() => {
            this.addMod('expanded');
        }, 200);
    }
    bindEvents() {
        this.$root.addEventListener('click', (e) => {
            if (!this.hasMod('expanded')) {
                this.addMod('expanded')
            }
        });

        document.querySelector('.pending-questions__toggler').addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.hasMod('expanded')) {
                this.removeMod('expanded')
            }
        });
    }
    addMod(modeName) {
        const className = `${this.getBlockName()}_${modeName}`;
        this.$root.classList.add(className);
    }
    removeMod(modeName) {
        const className = `${this.getBlockName()}_${modeName}`;
        this.$root.classList.remove(className);
    }
    hasMod(modeName) {
        const className = `${this.getBlockName()}_${modeName}`;
        return this.$root.classList.contains(className);
    }
    getBlockName() {
        return 'pending-questions';
    }
}

QnAWidget.url = 'https://demo8280979.mockable.io/pending-questions';

export function init(token) {
    return new QnAWidget({ token });
}
