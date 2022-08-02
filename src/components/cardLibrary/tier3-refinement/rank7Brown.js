import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
import goldRankContent from './rank8Gold.js'

import brownContent from './rank7-brown/brown-content.md'
import brownChallenges from './rank7-brown/brown-challenges.js'
import brownSashImage from './rank7-brown/brown-sash.png'
import brownMindImage1 from './rank7-brown/brown-mind-8weak.png'
import brownMindImage2 from './rank7-brown/brown-mind-8devastation.png'
import brownMindImage3 from './rank7-brown/brown-mind-4external.png'
import brownMindImage4 from './rank7-brown/brown-mind-4internal.png'
import brownMindImage5 from './rank7-brown/brown-mind-batjikbatlei.png'
import brownTechImage1 from './rank7-brown/brown-tech-bigsmall.png'
import brownTechImage2 from './rank7-brown/brown-tech-longpole.png'
import brownTechImage3 from './rank7-brown/brown-tech-mantis.png'
import brownTrainingManualImage from './rank7-brown/brown-trainingManual.png'
import forgeInvitationImage from '../tier0-general/currency/forge-invitation.png'
import proficiencySilverInitiateImage from '../tier0-general/proficiency-silver-initiate.png'
import sealLeopardImage from '../tier0-general/currency/seal-leopard.png'


export default function brownRankContent()
{
    const r7 = {}
    const r8 = goldRankContent()

    const t = techniqueLibrary()
    const ch = brownChallenges()
    const gen = generalCurrency()


    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', brownContent)

    // Sash
    r7.sash = {
        title: 'Brown Sash',
        subtitle: 'Refinement Chamber',
        image: brownSashImage,
    }

    // Technical 1 - Daai Fu Ngaan Kyun
    r7.tech1 = {
        title: 'Daai Fu Ngaan Kyun',
        subtitle: 'Big Tigers and Wild Geese',
        image: brownTechImage1,
        description: container.querySelector('#r7-tech1-desc'),
        techniques: [
            new Technique(t.fist11) 
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
            new PathCard(gen.iron30)
        ]
    }

    // Technical 2 - Luk Hap Gwan
    r7.tech2 = {
        title: 'Luk Hap Gwan',
        subtitle: 'Six Harmony Staff',
        image: brownTechImage2,
        description: container.querySelector('#r7-tech2-desc'),
        techniques: [
            new Technique(t.pole1),
            new Technique(t.pole2),
            new Technique(t.pole3),
            new Technique(t.pole4),
            new Technique(t.pole5),
            new Technique(t.pole6),
            new Technique(t.pole7),
            new Technique(t.pole8),
            new Technique(t.pole9),
            new Technique(t.pole10),
            new Technique(t.glk1),
            new Technique(t.pole11)
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
            new PathCard(gen.iron30),
            new PathCard(gen.sealTortoise)
        ]
    }

    // Technical
    r7.tech3 = {
        title: 'Dàan Chaap Fà Kyùn',
        subtitle: 'Single Thrust Flower Boxing',
        image: brownTechImage1,
    }

    r7.tech4 = {
        title: 'Mùi Fà Lou Kyùn',
        subtitle: 'Plum Blossom Routine Boxing',
        image: brownTechImage1,
    }    
    
    r7.tech5 = {
        title: 'Ng Lòng Baat Gwa Gwan',
        subtitle: 'Fifth Son Eight Diagram Staff',
        image: brownTechImage1,
    }

    r7.tech6 = {
        title: 'Mùi Fà Kyùn',
        subtitle: 'Plum Blossom Fist Boxing',
        image: brownTechImage1,
    }

    r7.tech7 = {
        title: 'Mùi Fà Jéung Kyùn',
        subtitle: 'Plum Blossom Palm Boxing',
        image: brownTechImage1,
    }

    // Training Manual - The Jade Emperor Temple
    r7.manual = {
        title: 'The Jade Emperor Temple',
        subtitle: 'Choose one Technical card',
        image: brownTrainingManualImage,
        description: container.querySelector('#r7-manual-desc'),
        rewards: [
            new PathCard(r7.tech3),
            new PathCard(r7.tech4),
            new PathCard(r7.tech5),
            new PathCard(r7.tech6),
            new PathCard(r7.tech7)
        ]
    }
    
    // Mindset 1 - 8 Points of Weakening
    r7.mind1 = {
        title: '8 Points of Weakening',
        subtitle: '',
        image: brownMindImage1,
        description: container.querySelector('#r7-mind1-desc'),
        challenges: [container.querySelector('#r7-mind1-tasks')],
        rewards: [
            new PathCard(r7.tech1),
            new PathCard(gen.iron30)
        ]
    }
    
    // Mindset 2 - 8 Points of Devastation
    r7.mind2 = {
        title: '8 Points of Devastation',
        subtitle: '',
        image: brownMindImage2,
        description: container.querySelector('#r7-mind2-desc'),
        challenges: [container.querySelector('#r7-mind2-tasks')],
        rewards: [
            new PathCard(r7.tech2),
            new PathCard(gen.iron30)
        ]
    }
    
    // Mindset 3 - Sei Ngoi Lin
    r7.mind3 = {
        title: 'Sei Ngoi Lin',
        subtitle: 'Four External Practices',
        image: brownMindImage3,
        description: container.querySelector('#r7-mind3-desc'),
        challenges: [container.querySelector('#r7-mind3-tasks')],
        rewards: [
            new PathCard(r7.manual),
            new PathCard(gen.iron30)
        ]
    }
    
    // Mindset 4 - Sei Naap Lin
    r7.mind4 = {
        title: 'Sei Naap Lin',
        subtitle: 'Four Internal Practices',
        image: brownMindImage4,
        description: container.querySelector('#r7-mind4-desc'),
        challenges: [container.querySelector('#r7-mind4-tasks')],
        rewards: [
            new PathCard(gen.iron30),
            new PathCard(gen.sealDragon)
        ]
    }
    
    // Mindset 3 - Bat Jik Bat Lei
    r7.mind5 = {
        title: 'Bat Jik Bat Lei',
        subtitle: 'Engagement Distance',
        image: brownMindImage5,
        description: container.querySelector('#r7-mind5-desc'),
        challenges: [container.querySelector('#r7-mind5-tasks')],
        rewards: [
            new PathCard(gen.iron30),
            new PathCard(gen.sealDragon)
        ]
    }

    // Technical - Any
    r7.techX = {
        title: 'Any Acquired Set',
        subtitle: 'Choose one Technical card',
        image: brownTechImage3,
    }
    
    // Silver Proficiency Requirement
    r7.prof1 = {
        title: 'Silver Proficiency',
        subtitle: 'Initiate Tier or Higher',
        image: proficiencySilverInitiateImage
    }
    
    // Seals Requirement
    r7.seals = {
        title: '10 Seals Collected',
        subtitle: 'Any combination of Leopard, Snake, and Crane',
        image: sealLeopardImage
    }
    
    // Development Chamber Evaluation
    r7.eval = {
        title: 'Development Chamber Evaluation',
        subtitle: '80% score or greater',
        image: forgeInvitationImage
    }
    
    // Advancement Invitation
    r7.adv = gen.advancementTier3
    r7.adv.rewards = [
        new PathCard(r8.sash)
    ]
    
    return r7;
}