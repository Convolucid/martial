import PathCard from '../PathCard.js'

import generalCurrency from '../tier0-general/generalCurrency.js'

// import whiteMindContent from './rank1-white/white-mind.md'
import yellowSashImage from './rank2-yellow/yellow-sash.png'
import yellowMindImage1 from './rank2-yellow/yellow-mind-jimnim.png'
import yellowMindImage2 from './rank2-yellow/yellow-mind-au.png'
import yellowTechImage from './rank2-yellow/yellow-tech.png'

export default function yellowRankContent()
{
    const r2 = {}
    const t0 = generalCurrency()

    // const container = document.createElement('div')
    // container.insertAdjacentHTML('beforeend', whiteMindContent)

    // Sash
    r2.sash = {
        title: 'Yellow Sash',
        subtitle: 'Initiate Chamber',
        image: yellowSashImage,
    }

    // Technical 1 - Iron Phoenix Combo 2
    r2.tech1 = {
        title: 'Iron Phoenix Combination',
        subtitle: '2nd Route',
        image: yellowTechImage,
        rewards: [
            new PathCard(t0.advancementInvitation),
            new PathCard(t0.iron10)
        ]
    }

    // Mindset 1 - Jim, Nim
    r2.mind1 = {
        title: 'Jim, Nim',
        subtitle: 'Contact and Cling',
        image: yellowMindImage1,
        // description: container.querySelector('#r2-mind1-desc'),
        // challenges: container.querySelector('#r2-mind1-tasks'),
        rewards: [
            new PathCard(r2.tech1),
            new PathCard(t0.iron10)
        ]
    }

    // Technical 1 - Eight Chain Punch 2
    r2.tech2 = {
        title: 'Intercepting Hammer Fist',
        subtitle: '',
        image: yellowTechImage,
        rewards: [
            new PathCard(t0.advancementInvitation),
            new PathCard(t0.iron10)
        ]
    }

    // Mindset 2 - Au, Diu, Got
    r2.mind2 = {
        title: 'Au, Diu, Got',
        subtitle: 'The Mantis Hook',
        image: yellowMindImage2,
        rewards: [
            new PathCard(r2.tech2),
            new PathCard(t0.iron10)
        ]
    }

    return r2;
}