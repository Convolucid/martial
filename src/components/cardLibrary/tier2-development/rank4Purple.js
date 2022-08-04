import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../../challengeCreator/Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
import blueRankContent from './rank5Blue.js'

import purpleContent from './rank4-purple/purple-content.md'
import purpleChallenges from './rank4-purple/purple-challenges.js'
import purpleSashImage from './rank4-purple/purple-sash.png'
import purpleMindImage1 from './rank4-purple/purple-mind-gates.png'
import purpleMindImage2 from './rank4-purple/purple-mind-sung.png'
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
    const ch = purpleChallenges()
    const gen = generalCurrency()


    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', purpleContent)

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
        description: container.querySelector('#r4-tech1-desc'),
        techniques: [
            new Technique(t.kick5), 
            new Technique(t.kick6), 
            new Technique(t.kick1), 
            new Technique(t.kick7), 
            new Technique(t.kick8), 
            new Technique(t.comp3), 
            new Technique(t.step11)
        ],
        challenges: [
            new Challenge(ch.a),
            new Challenge(ch.a),
            new Challenge(ch.a),
            new Challenge(ch.a),
            new Challenge(ch.a),
        ],
        rewards: [
            new PathCard(gen.advancementInvitation),
            new PathCard(gen.iron20)
        ]
    }

    // Technical 2
    r4.tech2 = {
        title: 'Yi Lou Jaak Yìu',
        subtitle: '2nd Route Essentials Boxing',
        image: purpleTechImage,
    }

    // Technical 3
    r4.tech3 = {
        title: 'Daai Fàan Chè Kyùn',
        subtitle: 'Big Wheel Boxing',
        image: purpleTechImage,
    }

    // Technical 4
    r4.tech4 = {
        title: 'Daai Gá Sīk Kyùn',
        subtitle: 'Large Frame Boxing',
        image: purpleTechImage,
    }

    // Technical 5
    r4.tech5 = {
        title: 'Sap Baat Sáu',
        subtitle: 'Eighteen Elders',
        image: purpleTechImage,
    }
    
    // Technical 6
    r4.tech6 = {
        title: 'Chaap Chèui',
        subtitle: 'Thrust Hammer Fist',
        image: purpleTechImage,
    }

    
    // Training Manual - Shaolin Monastery
    r4.manual = {
        title: 'The Shaolin Monastery',
        subtitle: 'Choose one Technical card',
        image: purpleTrainingManualImage,
        description: container.querySelector('#r4-manual-desc'),
        rewards: [
            new PathCard(r4.tech2),
            new PathCard(r4.tech3),
            new PathCard(r4.tech4),
            new PathCard(r4.tech5),
            new PathCard(r4.tech6),
        ]
    }
    
    // Mindset 1 - Gates
    r4.mind1 = {
        title: 'Gates',
        subtitle: 'Inner and Outer, Life and Death',
        image: purpleMindImage1,
        description: container.querySelector('#r4-mind1-desc'),
        challenges: [container.querySelector('#r4-mind1-tasks')],
        rewards: [
            new PathCard(r4.tech1),
            new PathCard(gen.iron20)
        ]
    }
    
    // Mindset 2 - Sung
    r4.mind2 = {
        title: 'Sung',
        subtitle: 'Empty Method',
        image: purpleMindImage2,
        description: container.querySelector('#r4-mind2-desc'),
        challenges: [container.querySelector('#r4-mind2-tasks')],
        rewards: [
            new PathCard(r4.manual),
            new PathCard(gen.iron20)
        ]
    }
    
    // Mindset 3 - Pok, Lau, Fung
    r4.mind3 = {
        title: 'Pok, Lau, Fung',
        subtitle: 'Ward, Grasp, and Seal',
        image: purpleMindImage3,
        description: container.querySelector('#r4-mind3-desc'),
        challenges: [container.querySelector('#r4-mind3-tasks')],
        rewards: [
            new PathCard(gen.iron20),
            new PathCard(gen.sealDragon)
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