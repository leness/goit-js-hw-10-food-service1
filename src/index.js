import postRef from './refs.js';
import menuList from './menu.json';
import changeTheme from './theme.js';
import postTemplates from './templates/menu.hbs';
import './styles.css';


console.log(postRef);
const { toolbar, menuJs } = postRef;
console.log(toolbar, menuJs);

const newPost = postTemplates(menuList);

menuJs.insertAdjacentHTML('afterbegin', newPost)




