import { transform } from 'https://episphere.github.io/quest/replace2.js';

let questURL = location.href

window.onload = async() => {
    await transform.render({
        url: questURL,
        activate: true,
    }, 'root');
}