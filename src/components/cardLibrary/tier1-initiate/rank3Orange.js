import PathCard from '../PathCard.js'

import generalCurrency from '../tier0-general/generalCurrency.js'

// import whiteMindContent from './rank1-white/white-mind.md'
import orangeSashImage from './rank3-orange/orange-sash.png'
import orangeMindImage1 from './rank3-orange/orange-mind-choi.png'
import orangeMindImage2 from './rank3-orange/orange-mind-tipkaau.png'
import orangeTechImage from './rank3-orange/orange-tech.png'

export default function orangeRankContent()
{
    const r3 = {}
    const t0 = generalCurrency()

    // const container = document.createElement('div')
    // container.insertAdjacentHTML('beforeend', whiteMindContent)

    // Sash
    r3.sash = {
        title: 'Orange Sash',
        subtitle: 'Initiate Chamber',
        image: orangeSashImage,
    }

    // Technical 1 - Iron Phoenix Combo 3
    r3.tech1 = {
        title: 'Iron Phoenix Combination',
        subtitle: '3rd Route',
        image: orangeTechImage,
        rewards: [
            new PathCard(t0.advancementInvitation),
            new PathCard(t0.iron10)
        ]
    }

    // Mindset 1 - Choi
    r3.mind1 = {
        title: 'Choi',
        subtitle: 'Plucking Methods',
        image: orangeMindImage1,
        // description: container.querySelector('#r3-mind1-desc'),
        // challenges: container.querySelector('#r3-mind1-tasks'),
        rewards: [
            new PathCard(r3.tech1),
            new PathCard(t0.iron10)
        ]
    }

    // Technical 1 - Eight Essentials
    r3.tech2 = {
        title: 'Baat Jaak Yiu Sau',
        subtitle: 'Eight Essential Movements',
        image: orangeTechImage,
        rewards: [
            new PathCard(t0.advancementInvitation),
            new PathCard(t0.iron10)
        ]
    }

    // Mindset 2 - Tip, Kaau
    r3.mind2 = {
        title: 'Tip, Kaau',
        subtitle: 'Connect and Lean',
        image: orangeMindImage2,
        rewards: [
            new PathCard(r3.tech2),
            new PathCard(t0.iron10)
        ]
    }

    return r3;
}