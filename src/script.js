import './style.css'
import html from './index.html'
import buildRankNodeSelector from './components/rankNodeSelector/rankNodeSelector.js'
import RankCurriculum from './components/RankCurriculum.js'

function component(htmlStructure)
{
    const element = document.createElement('div')
    element.classList.add('container')
    element.innerHTML = htmlStructure
    
    return element;
}
document.body.appendChild(component(html));

const rankCurriculum = new RankCurriculum( document.getElementById('rank-curriculum') );