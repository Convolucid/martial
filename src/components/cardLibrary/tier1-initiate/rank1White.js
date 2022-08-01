import PathCard from '../PathCard.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
import yellowRankContent from './rank2Yellow.js'

import whiteContent from './rank1-white/white-content.md'
import whiteSashImage from './rank1-white/white-sash.png'
import whiteMindImage1 from './rank1-white/white-mind-tiu.png'
import whiteMindImage2 from './rank1-white/white-mind-css.png'
import whiteTechImage from './rank1-white/white-tech.png'

export default function whiteRankContent()
{
    const r1 = {}
    const r2 = yellowRankContent()

    const t = techniqueLibrary()
    const gen = generalCurrency()


    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', whiteContent)

    // Sash
    r1.sash = {
        title: 'White Sash',
        subtitle: 'Initiate Chamber',
        image: whiteSashImage,
    }

    // Technical 1 - Iron Phoenix Combo 1
    r1.tech1 = {
        title: 'Iron Phoenix Combination',
        subtitle: '1st Route',
        image: whiteTechImage,
        description: container.querySelector('#r1-tech1-desc'),
        techniques: [t.fist2, t.fist3, t.kick1, t.fist4, t.hand2, t.hand5, t.step1, t.step2],
        challenges: '',
        rewards: [
            new PathCard(gen.advancementInvitation),
            new PathCard(gen.iron10)
        ]
    }

    // Mindset 1 - Tiu
    r1.mind1 = {
        title: 'Tiu',
        subtitle: 'The Warding Principle',
        image: whiteMindImage1,
        description: container.querySelector('#r1-mind1-desc'),
        challenges: container.querySelector('#r1-mind1-tasks'),
        rewards: [
            new PathCard(r1.tech1),
            new PathCard(gen.iron10)
        ]
    }

    // Technical 1 - Eight Chain Punch 2
    r1.tech2 = {
        title: 'Eight Chain Fist',
        subtitle: '2nd Route',
        image: whiteTechImage,
        description: container.querySelector('#r1-tech2-desc'),
        challenges: '',
        rewards: [
            new PathCard(gen.advancementInvitation),
            new PathCard(gen.iron10)
        ]
    }

    // Mindset 2 - Cheui Saam Sau
    r1.mind2 = {
        title: 'Cheui Saam Sau',
        subtitle: 'Three Hands of Mantis',
        image: whiteMindImage2,
        description: container.querySelector('#r1-mind2-desc'),
        challenges: container.querySelector('#r1-mind2-tasks'),
        rewards: [
            new PathCard(r1.tech2),
            new PathCard(gen.iron10)
        ]
    }

    // Advancement Invitation
    r1.adv = gen.advancementTier1
    r1.adv.rewards = [
            new PathCard(r2.sash)
        ]

    return r1;
}