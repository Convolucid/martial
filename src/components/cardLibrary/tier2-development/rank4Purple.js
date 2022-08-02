import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
import blueRankContent from './rank5Blue.js'

// import purpleContent from './rank4-purple/purple-content.md'
// import purpleChallenges from './rank4-purple/purple-challenges.js'
import purpleSashImage from './rank4-purple/purple-sash.png'
import purpleMindImage1 from './rank4-purple/purple-mind-sung.png'
import purpleMindImage2 from './rank4-purple/purple-mind-gates.png'
import purpleMindImage3 from './rank4-purple/purple-mind-pok.png'
import purpleTechImage from './rank4-purple/purple-tech-7kicks.png'
import purpleTrainingManualImage from './rank4-purple/purple-trainingManual.png'
import forgeInvitationImage from '../tier0-general/currency/forge-invitation.png'
import proficiencyBronzeInitiateImage from '../tier0-general/proficiency-bronze-initiate.png'


export default function purpleRankContent()
{
    const r4 = {}
    const r5 = blueRankContent()

    const t = techniqueLibrary()
    // const ch = purpleChallenges()
    const gen = generalCurrency()


    const container = document.createElement('div')
    // container.insertAdjacentHTML('beforeend', purpleContent)

    // Sash
    r4.sash = {
        title: 'Purple Sash',
        subtitle: 'Development Chamber',
        image: purpleSashImage,
    }

    // Technical 1 - Seven Kicks
    r4.tech1 = {
        title: 'Seven Kicks',
        subtitle: '',
        image: purpleTechImage,
        // description: container.querySelector('#r4-tech1-desc'),
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

    // Mindset 1 - Sung
    r4.mind1 = {
        title: 'Sung',
        subtitle: 'Empty Method',
        image: purpleMindImage1,
        // description: container.querySelector('#r4-mind1-desc'),
        // challenges: [container.querySelector('#r4-mind1-tasks')],
        rewards: [
            new PathCard(r4.tech1),
            new PathCard(gen.iron10)
        ]
    }

    // Training Manual - Shaolin Monastery
    r4.manual = {
        title: 'The Shaolin Monastery',
        subtitle: 'Choose one Technical card',
        image: purpleTrainingManualImage,
        // description: container.querySelector('#r4-tech2-desc'),
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

    // Mindset 2 - Gates
    r4.mind2 = {
        title: 'Gates',
        subtitle: 'Inner and Outer, Life and Death',
        image: purpleMindImage2,
        // description: container.querySelector('#r4-mind2-desc'),
        // challenges: [container.querySelector('#r4-mind2-tasks')],
        rewards: [
            new PathCard(r4.manual),
            new PathCard(gen.iron10)
        ]
    }

    // Mindset 3 - Pok, Lau, Fung
    r4.mind3 = {
        title: 'Pok, Lau, Fung',
        subtitle: 'Ward, Grasp, and Seal',
        image: purpleMindImage3,
        // description: container.querySelector('#r4-mind2-desc'),
        // challenges: [container.querySelector('#r4-mind2-tasks')],
        rewards: [
            new PathCard(r4.manual),
            new PathCard(gen.iron10)
        ]
    }
    
    // Bronze Proficiency Requirement
    r4.prof = {
        title: 'Bronze Proficiency',
        subtitle: 'Initiate Tier or Higher',
        image: proficiencyBronzeInitiateImage
    }

    // Initiate Chamber Evaluation
    r4.eval = {
        title: 'Initiate Chamber Evaluation',
        subtitle: '80% score or greater',
        image: forgeInvitationImage
    }


    // Advancement Invitation
    r4.adv = gen.advancementTier2
    r4.adv.rewards = [
            new PathCard(r5.sash)
        ]

    return r4;
}