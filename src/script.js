import './style.css'
import html from './index.html'
import rankNodeSelector from './components/rankNodeSelector/rankNodeSelector.js'

function component(htmlStructure)
{
    const element = document.createElement('div')
    element.classList.add('container')
    element.innerHTML = htmlStructure
    
    return element;
}

document.body.appendChild(component(html));
rankNodeSelector();