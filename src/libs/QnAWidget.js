import { get, addScript } from './utils';
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
                    return Promise.all([
                        addScript(this.getApiScriptUrl(data.version)),
                        data
                    ]);
                }
            })
            .then(([js, data]) => {
                window.__initPendingQuestionsPopup && window.__initPendingQuestionsPopup(data);
            })
            .catch(this.handleError)
    }
    loadData() {
        const { devMode, domain, ...urlParams } = this.config;
        let url = this.getAJAXUrl(domain, urlParams);

        if (devMode) {
            url = 'https://demo8280979.mockable.io/pending-questions';
        }

        return fetch(url)
            .then((res) => res.json());
    }
    getApiScriptUrl(fileName) {
        const { domain, devMode } = this.config;

        if (devMode) {
            return `dist/${fileName}`;
        }

        return `${domain}/js/libs/${fileName}`;
    }
    getAJAXUrl(domain, params) {
        return `${domain}/ajax/ask/sellerPendingData/?${stringify(params)}`
    }
    handleError(err) {
        console.log(err);
    }
}

export default QnAWidget;
