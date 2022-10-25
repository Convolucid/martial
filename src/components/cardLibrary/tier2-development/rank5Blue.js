import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../../challengeCreator/Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
import greenRankContent from './rank6Green.js'

import blueContent from './rank5-blue/blue-content.md'
import blueChallenges from './rank5-blue/blue-challenges.js'
import blueSashImage from './rank5-blue/blue-sash.png'
import blueMindImage1 from './rank5-blue/blue-mind-simjau.png'
import blueMindImage2 from './rank5-blue/blue-mind-tangno.png'
import blueMindImage3 from './rank5-blue/blue-mind-mangam.png'
import blueTechImage1 from './rank5-blue/blue-tech-chinwoo.png'
import blueTechImage2 from './rank5-blue/blue-tech-creation.png'
import blueTrainingManualImage from './rank5-blue/blue-trainingManual.png'
import proficiencySilverInitiateImage from '../tier0-general/proficiency-silver-initiate.png'


export default function purpleRankContent()
{
    const r5 = {}
    const r6 = greenRankContent()

    const t = techniqueLibrary()
    const ch = blueChallenges()
    const gen = generalCurrency()


    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', blueContent)

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
        description: container.querySelector('#r5-tech1-desc'),
        techniques: [
            new Technique(t.glk1),
            new Technique(t.glk2),
            new Technique(t.glk3),
            new Technique(t.glk4),
            new Technique(t.glk5),
            new Technique(t.glk6),
            new Technique(t.glk7),
            new Technique(t.glk8),
            new Technique(t.glk9),
            new Technique(t.glk10),
            new Technique(t.glk11)
        ],
        challenges: [
            new Challenge(ch.tech1a),
        ],
        rewards: [
            new PathCard(gen.advancementInvitation),
            new PathCard(gen.iron20)
        ]
    }

    // Technical 2 - Stance Routine
    r5.tech2 = {
        title: 'Stance Routine',
        subtitle: 'Personal Creation',
        image: blueTechImage2,
        description: container.querySelector('#r5-tech2-desc'),
        techniques: [
            new Technique(t.step1),
            new Technique(t.step2),
            new Technique(t.step3),
            new Technique(t.step4),
            new Technique(t.step5),
            new Technique(t.step6),
            new Technique(t.step7),
            new Technique(t.step8),
            new Technique(t.comp1),
            new Technique(t.step10),
            new Technique(t.step12),
            new Technique(t.step13),
            new Technique(t.step14),
            new Technique(t.step15),
            new Technique(t.step16),
            new Technique(t.step17),
            new Technique(t.step18),
            new Technique(t.step19),
            new Technique(t.step20),
            new Technique(t.step21)
        ],
        challenges: [
            new Challenge(ch.tech2a),
        ],
        rewards: [
            new PathCard(gen.advancementInvitation),
            new PathCard(gen.iron20)
        ]
    }
    
    // Technical 3
    r5.tech3 = {
        title: 'Dó Gòng Kyùn',
        subtitle: 'Avoiding the Hard Boxing',
        image: blueTechImage1
    }

    // Technical 4
    r5.tech4 = {
        title: 'Mùi Fà Sáu',
        subtitle: 'Plum Blossom Hand',
        image: blueTechImage1
    }    
    
    // Technical 5
    r5.tech5 = {
        title: 'Fēi Ngaan Jéung',
        subtitle: 'Flying Goose Palm',
        image: blueTechImage1
    }

    // Technical 6
    r5.tech6 = {
        title: 'Lok Yìng Jéung',
        subtitle: 'Descending Eagle Palm',
        image: blueTechImage1
    }

    // Technical 7
    r5.tech7 = {
        title: 'Baak Yùn Hin Syū Kyùn',
        subtitle: 'White Ape Offers the Book',
        image: blueTechImage1
    }


    // Training Manual - Forests of Laoshan
    r5.manual = {
        title: 'The Forests of Laoshan',
        subtitle: 'Choose one Technical card',
        image: blueTrainingManualImage,
        description: container.querySelector('#r5-manual-desc'),
        rewards: [
            new PathCard(r5.tech3),
            new PathCard(r5.tech4),
            new PathCard(r5.tech5),
            new PathCard(r5.tech6),
            new PathCard(r5.tech7)
        ]
    }
        
        
    // Mindset 1 - Sim, Jau
    r5.mind1 = {
        title: 'Sim, Jau',
        subtitle: 'Dodging and Stalking',
        image: blueMindImage1,
        description: container.querySelector('#r5-mind1-desc'),
        challenges: [container.querySelector('#r5-mind1-tasks')],
        rewards: [
            new PathCard(r5.tech1),
            new PathCard(gen.iron20)
        ]
    }
    
    // Mindset 2 - Tang No
    r5.mind2 = {
        title: 'Tang No',
        subtitle: 'Bouncing Step',
        image: blueMindImage2,
        description: container.querySelector('#r5-mind2-desc'),
        challenges: [container.querySelector('#r5-mind2-tasks')],
        rewards: [
            new PathCard(r5.tech2),
            new PathCard(gen.iron20)
        ]
    }
    
    // Mindset 3 - Man Gam
    r5.mind3 = {
        title: 'Man Gam',
        subtitle: 'Spatial Contextual Awareness',
        image: blueMindImage3,
        description: container.querySelector('#r5-mind3-desc'),
        challenges: [container.querySelector('#r5-mind3-tasks')],
        rewards: [
            new PathCard(r5.manual),
            new PathCard(gen.iron20)
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