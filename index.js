import { transform } from 'https://episphere.github.io/quest/replace2.js';

let questURL = location.search.replace(/[\?]/g, "")

window.onload = async() => {
    await transform.render({
        url: questURL,
        activate: true,
    }, 'root');
}