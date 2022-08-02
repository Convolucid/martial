import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
import orangeRankContent from './rank3Orange.js'

import yellowContent from './rank2-yellow/yellow-content.md'
import yellowChallenges from './rank2-yellow/yellow-challenges.js'
import yellowSashImage from './rank2-yellow/yellow-sash.png'
import yellowMindImage1 from './rank2-yellow/yellow-mind-jimnim.png'
import yellowMindImage2 from './rank2-yellow/yellow-mind-au.png'
import yellowTechImage from './rank2-yellow/yellow-tech.png'

export default function yellowRankContent()
{
    const r2 = {}
    const r3 = orangeRankContent()
    const t0 = generalCurrency()

    const t = techniqueLibrary()
    const ch = yellowChallenges()
    const gen = generalCurrency()

    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', yellowContent)

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
        description: container.querySelector('#r2-tech1-desc'),
        techniques: [
            new Technique(t.hand4), 
            new Technique(t.hand6), 
            new Technique(t.hand7), 
            new Technique(t.fist6), 
            new Technique(t.fist7), 
            new Technique(t.fist8), 
            new Technique(t.kick2), 
            new Technique(t.step6)
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
    
    // Technical 2 - Intercepting Hammer Fist
    r2.tech2 = {
        title: 'Intercepting Hammer Fist',
        subtitle: '',
        image: yellowTechImage,
        description: container.querySelector('#r2-tech2-desc'),
        techniques: [
            new Technique(t.hand1), 
            new Technique(t.hand6), 
            new Technique(t.fist6), 
            new Technique(t.hand2), 
            new Technique(t.hand7), 
            new Technique(t.step3), 
            new Technique(t.step2), 
            new Technique(t.step7)
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
    
    // Mindset 1 - Au, Diu, Got
    r2.mind1 = {
        title: 'Au, Diu, Got',
        subtitle: 'The Mantis Hook',
        image: yellowMindImage2,
        description: container.querySelector('#r2-mind1-desc'),
        challenges: [container.querySelector('#r2-mind1-tasks')],
        rewards: [
            new PathCard(r2.tech1),
            new PathCard(t0.iron10)
        ]
    }
    
    // Mindset 2 - Jim, Nim
    r2.mind2 = {
        title: 'Jim, Nim',
        subtitle: 'Contact and Cling',
        image: yellowMindImage1,
        description: container.querySelector('#r2-mind2-desc'),
        challenges: [container.querySelector('#r2-mind2-tasks')],
        rewards: [
            new PathCard(r2.tech2),
            new PathCard(t0.iron10)
        ]
    }
    
    // Advancement Invitation
    r2.adv = gen.advancementTier1
    r2.adv.rewards = [
            new PathCard(r3.sash)
    ]
    

    return r2;
}