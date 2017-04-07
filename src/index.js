import QnAWidget from './libs/QnAWidget';

export function init(token) {
    return new QnAWidget({ token });
}
