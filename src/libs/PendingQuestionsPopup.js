import styles from './styles.css';

class QnAWidget {
    getTpl(translations) {
        const translate = (key) => {
            if (translations && translations[key]) {
                return translations[key];
            }
            return key;
        };

        return ({ link, total }) => {
            return `<div class="pending-questions">
                <style>${styles}</style>
                <div class="pending-questions__body">
                    <p class="pending-questions__text">
                        ${translate('You have %s questions from customers').replace('%s', total)}
                    </p>
                    <a href="${link}" target="_blank" class="pending-questions__button">
                        ${translate('Answer pending questions')}
                    </a>
                </div>
                <div class="pending-questions__toggler"></div>
            </div>`
        }
    }
    constructor(params) {
        this.init(params);
    }
    render(params) {
        const { translations, ...viewParams } = params;
        let div = document.createElement('div');

        div.innerHTML = this.getTpl(translations)(viewParams);

        return div.firstChild;
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

export default QnAWidget;
