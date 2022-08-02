import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
import greenRankContent from './rank6Green.js'

// import blueContent from './rank5-blue/blue-content.md'
// import blueChallenges from './rank5-blue/blue-challenges.js'
import blueSashImage from './rank5-blue/blue-sash.png'
import blueMindImage1 from './rank5-blue/blue-mind-mangam.png'
import blueMindImage2 from './rank5-blue/blue-mind-simjau.png'
import blueMindImage3 from './rank5-blue/blue-mind-tangno.png'
import blueTechImage1 from './rank5-blue/blue-tech-chinwoo.png'
import blueTechImage2 from './rank5-blue/blue-tech-creation.png'
import blueTrainingManualImage from './rank5-blue/blue-trainingManual.png'
import proficiencySilverInitiateImage from '../tier0-general/proficiency-silver-initiate.png'


export default function purpleRankContent()
{
    const r5 = {}
    const r6 = greenRankContent()

    const t = techniqueLibrary()
    // const ch = blueChallenges()
    const gen = generalCurrency()


    const container = document.createElement('div')
    // container.insertAdjacentHTML('beforeend', blueContent)

    // Sash
    r5.sash = {
        title: 'Blue Sash',
        subtitle: 'Development Chamber',
        image: blueSashImage,
    }

    // Technical 1 - Gung Lik Kyun
    r5.tech1 = {
        title: 'Gung Lik Kyun',
        subtitle: 'Powerful Boxing',
        image: blueTechImage1,
        // description: container.querySelector('#r5-tech1-desc'),
        techniques: [
            new Technique(t.fist2), 
            new Technique(t.fist3), 
            new Technique(t.kick1), 
            new Technique(t.fist4), 
            new Technique(t.hand2), 
            new Technique(t.hand5), 
            new Technique(t.step1), 
            new Technique(t.step2)
        ],
        // challenges: [
        //     new Challenge(ch.a),
        //     new Challenge(ch.a),
        //     new Challenge(ch.a),
        //     new Challenge(ch.a),
        //     new Challenge(ch.a),
        // ],
        rewards: [
            new PathCard(gen.advancementInvitation),
            new PathCard(gen.iron10)
        ]
    }

    // Mindset 1 - Man Gam
    r5.mind1 = {
        title: 'Man Gam',
        subtitle: 'Spatial Contextual Awareness',
        image: blueMindImage1,
        // description: container.querySelector('#r5-mind1-desc'),
        // challenges: [container.querySelector('#r5-mind1-tasks')],
        rewards: [
            new PathCard(r5.tech1),
            new PathCard(gen.iron10)
        ]
    }

    // Training Manual - Forests of Laoshan
    r5.manual = {
        title: 'The Forests of Laoshan',
        subtitle: 'Choose one Technical card',
        image: blueTrainingManualImage,
        // description: container.querySelector('#r5-tech2-desc'),
        // techniques: [
        //     new Technique(t.hand2), 
        //     new Technique(t.hand3), 
        //     new Technique(t.hand5), 
        //     new Technique(t.fist3), 
        //     new Technique(t.fist4), 
        //     new Technique(t.fist5), 
        //     new Technique(t.step3), 
        //     new Technique(t.step4), 
        //     new Technique(t.step5)
        // ],
        // challenges: '',
        rewards: [
            new PathCard(gen.advancementInvitation),
            new PathCard(gen.iron10)
        ]
    }

    // Mindset 2 - Sim, Jau
    r5.mind2 = {
        title: 'Sim, Jau',
        subtitle: 'Dodging and Stalking',
        image: blueMindImage2,
        // description: container.querySelector('#r5-mind2-desc'),
        // challenges: [container.querySelector('#r5-mind2-tasks')],
        rewards: [
            new PathCard(r5.manual),
            new PathCard(gen.iron10)
        ]
    }


    // Technical 2 - Stance Routine
    r5.tech2 = {
        title: 'Stance Routine',
        subtitle: 'Personal Creation',
        image: blueTechImage2,
        // description: container.querySelector('#r5-tech1-desc'),
        techniques: [
            new Technique(t.fist2), 
            new Technique(t.fist3), 
            new Technique(t.kick1), 
            new Technique(t.fist4), 
            new Technique(t.hand2), 
            new Technique(t.hand5), 
            new Technique(t.step1), 
            new Technique(t.step2)
        ],
        // challenges: [
        //     new Challenge(ch.a),
        //     new Challenge(ch.a),
        //     new Challenge(ch.a),
        //     new Challenge(ch.a),
        //     new Challenge(ch.a),
        // ],
        rewards: [
            new PathCard(gen.advancementInvitation),
            new PathCard(gen.iron10)
        ]
    }


    // Mindset 3 - Tang No
    r5.mind3 = {
        title: 'Tang No',
        subtitle: 'Bouncing Step',
        image: blueMindImage3,
        // description: container.querySelector('#r5-mind2-desc'),
        // challenges: [container.querySelector('#r5-mind2-tasks')],
        rewards: [
            new PathCard(r5.tech2),
            new PathCard(gen.iron10)
        ]
    }
    
    // Silver Proficiency Requirement
    r5.prof = {
        title: 'Silver Proficiency',
        subtitle: 'Initiate Tier or Higher',
        image: proficiencySilverInitiateImage
    }

    // Advancement Invitation
    r5.adv = gen.advancementTier2
    r5.adv.rewards = [
        new PathCard(r6.sash)
    ]

    return r5;
}