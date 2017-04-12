export function get(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = () => req.status === 200 ? resolve(req.response) :
            reject(Error(req.statusText));
        req.onerror = (e) => reject(Error(`Network Error: ${e}`));
        req.send();
    });
}
export function addScript(src) {
    return new Promise((resolve, reject) => {
        let el = document.createElement('script');

        el.onload = el.onreadystatechange = () => {
            resolve();
        };
        el.error = reject;
        el.async = true;
        el.defer = true;
        el.src = src;
        document.body.appendChild(el);
    });
}
