import styles from './styles.css';
import { get } from './utils';
import { stringify } from 'querystring';

const _DEFAULT_CFG = {
    token: '',
    domain: 'https://alice-pdp371.vtdc.lzd.co',
    devMode: false,
    language: 'en'
};

class QnAWidget {
    constructor(params) {
        this.config = {
            ..._DEFAULT_CFG,
            ...params
        };


        this.handleError = this.handleError.bind(this);

        if (this.config.token === '') {
            this.handleError(new Error('Please provide { token }'));
        }

        this.loadData()
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
    getTpl(translations) {
        const translate = (key) => {
            if (translations && translations[key]) {
                return translations[key];
            }
            return key;
        };

        return ({ link, total }) => {
            return `<div class="pending-questions">
                <style>${styles.toString()}</style>
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
    render(params) {
        const { translations, ...viewParams } = params;
        let div = document.createElement('div');

        div.innerHTML = this.getTpl(translations)(viewParams);

        return div.firstChild;
    }
    loadData() {

        const { devMode, domain, ...urlParams } = this.config;

        let url = `${domain}/ajax/ask/sellerPendingData/?${stringify(urlParams)}`;

        if (devMode) {
            url = 'https://demo8280979.mockable.io/pending-questions';
        }


        return fetch(url)
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
