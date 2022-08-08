import './style.css'
import html from './index.html'
import RankCurriculum from './components/RankCurriculum.js'

function component(htmlStructure)
{
    const element = document.createElement('div')
    element.classList.add('container')
    element.innerHTML = htmlStructure
    
    return element;
}
document.body.appendChild(component(html));

// Path experience will provide a guided introduction to the system, beginning with Ma Bou and the Unranked Node

// Rank Curriculum view will show the Path of the Iron Phoenix and other future curricula such as Clan paths or the path of the Jade Lion
const rankCurriculum = new RankCurriculum( document.getElementById('rank-curriculum') );

// Card Collection will show all cards discovered by Category (technical, mindset, etc.) with ability to filter by various attributes.  Cards available to purchase or unlock (and their requirements) will also be displayed.

// Technique Glossary will show all techniques discovered, sorted by type (hand, fist, footwork, etc.).  Individual technical challenges

// Challenge view will show all active challenges with ability to sort by rank, percentage complete, rewards, etc.

// User view will show summary statistics and economy with emphasis on Proficiency medals and Path Ranks.