import PathCard from '../PathCard.js'

import generalCurrency from '../tier0-general/generalCurrency.js'

import whiteMindContent from './rank1-white/white-mind.md'
import whiteSashImage from './rank1-white/white-sash.png'
import whiteMindImage1 from './rank1-white/white-mind-tiu.png'
import whiteMindImage2 from './rank1-white/white-mind-css.png'

export default function whiteRankContent()
{
    const r1 = {}
    const t0 = generalCurrency()

    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', whiteMindContent)

    // Sash
    r1.sash = {
        title: 'White Sash',
        subtitle: 'Initiate Chamber',
        image: whiteSashImage,
    }

    // Mindset 1 - Tiu
    r1.mind1 = {
        title: 'Tiu',
        subtitle: 'The Warding Principle',
        image: whiteMindImage1,
        description: container.querySelector('#r1-mind1-desc'),
        challenges: container.querySelector('#r1-mind1-tasks'),
        rewards: [
            new PathCard(t0.advancementTier1)
        ]
    }

    // Mindset 2 - Cheui Saam Sau
    r1.mind2 = {
        title: 'Cheui Saam Sau',
        subtitle: 'Three Hands of Mantis',
        image: whiteMindImage2
    }

    return r1;
}