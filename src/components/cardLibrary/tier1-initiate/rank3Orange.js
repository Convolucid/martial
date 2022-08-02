import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
import purpleRankContent from '../tier2-development/rank4Purple.js'

import orangeContent from './rank3-orange/orange-content.md'
import orangeChallenges from './rank3-orange/orange-challenges.js'
import orangeSashImage from './rank3-orange/orange-sash.png'
import orangeMindImage1 from './rank3-orange/orange-mind-choi.png'
import orangeMindImage2 from './rank3-orange/orange-mind-tipkaau.png'
import orangeTechImage from './rank3-orange/orange-tech.png'

export default function orangeRankContent()
{
    const r3 = {}
    const r4 = purpleRankContent()
    const t0 = generalCurrency()

    const t = techniqueLibrary()
    const ch = orangeChallenges()
    const gen = generalCurrency()

    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', orangeContent)

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
        description: container.querySelector('#r3-tech1-desc'),
        techniques: [
            new Technique(t.fist9), 
            new Technique(t.fist10), 
            new Technique(t.hand8), 
            new Technique(t.fist11), 
            new Technique(t.comp1), 
            new Technique(t.kick3), 
            new Technique(t.palm1), 
            new Technique(t.fist5),
            new Technique(t.kick4),
            new Technique(t.palm2),
            new Technique(t.step8),
            new Technique(t.step9),
            new Technique(t.comp2)
        ],
        challenges: [
            new Challenge(ch.a),
            new Challenge(ch.a),
            new Challenge(ch.a),
            new Challenge(ch.a),
            new Challenge(ch.a),
        ],
        rewards: [
            new PathCard(t0.advancementInvitation),
            new PathCard(t0.iron10)
        ]
    }

    
    // Technical 2 - Eight Essentials
    r3.tech2 = {
        title: 'Baat Jaak Yiu Sau',
        subtitle: 'Eight Essential Movements',
        image: orangeTechImage,
        description: container.querySelector('#r3-tech2-desc'),
        techniques: [
            new Technique(t.hand8), 
            new Technique(t.palm3), 
            new Technique(t.fist12), 
            new Technique(t.fist5), 
            new Technique(t.kick4), 
            new Technique(t.palm2), 
            new Technique(t.hand9), 
            new Technique(t.step10),
            new Technique(t.step4),
            new Technique(t.step9),
            new Technique(t.comp2)
        ],
        challenges: [
            new Challenge(ch.a),
            new Challenge(ch.a),
            new Challenge(ch.a),
            new Challenge(ch.a),
            new Challenge(ch.a),
        ],
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
        description: container.querySelector('#r3-mind1-desc'),
        challenges: [container.querySelector('#r3-mind1-tasks')],
        rewards: [
            new PathCard(r3.tech1),
            new PathCard(t0.iron10)
        ]
    }

    // Mindset 2 - Tip, Kaau
    r3.mind2 = {
        title: 'Tip, Kaau',
        subtitle: 'Connect and Lean',
        image: orangeMindImage2,
        description: container.querySelector('#r3-mind2-desc'),
        challenges: [container.querySelector('#r3-mind2-tasks')],
        rewards: [
            new PathCard(r3.tech2),
            new PathCard(t0.iron10)
        ]
    }

    // Advancement Invitation
    r3.adv = gen.advancementTier1
    r3.adv.rewards = [
        new PathCard(r4.sash)
    ]

    return r3;
}