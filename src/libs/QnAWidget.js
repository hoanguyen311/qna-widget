import styles from './styles.css';
import { get } from './utils';

class QnAWidget {
    constructor({ token }) {
        this.handleError = this.handleError.bind(this);

        if (typeof token !== 'string') {
            this.handleError(new Error('Please provide { token }'));
        }

        this.loadData(token)
            .then(({ success, data }) => {
                if (!success) {
                    throw new Error('call to ask api did not success');
                }
                if (data.total) {
                    this.init(data);
                }
            })
            .catch(this.handleError)
    }
    getTpl() {
        return ({ link, total }) => {
            return `<div class="pending-questions">
                <style>${styles.toString()}</style>
                <div class="pending-questions__body">
                    <p class="pending-questions__text">You have ${total || 0} questions from customers</p>
                    <a href="${link}" target="_blank" class="pending-questions__button">Answer pending questions</a>
                </div>
                <div class="pending-questions__toggler"></div>
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

        this.$root.querySelector('.pending-questions__toggler').addEventListener('click', (e) => {
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
    handleError(err) {
        console.log(err);
    }
    getBlockName() {
        return 'pending-questions';
    }
}

QnAWidget.url = 'https://alice-pdp371.vtdc.lzd.co/ajax/ask/sellerPendingData/';

export default QnAWidget;
