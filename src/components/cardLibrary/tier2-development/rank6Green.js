import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../../challengeCreator/Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
import brownRankContent from '../tier3-refinement/rank7Brown.js'

import greenContent from './rank6-green/green-content.md'
import greenChallenges from './rank6-green/green-challenges.js'
import greenSashImage from './rank6-green/green-sash.png'
import greenMindImage1 from './rank6-green/green-mind-root.png'
import greenMindImage2 from './rank6-green/green-mind-wancham.png'
import greenMindImage3 from './rank6-green/green-mind-lengheng.png'
import greenTechImage from './rank6-green/green-tech-mantis.png'
import greenTrainingManualImage from './rank6-green/green-trainingManual.png'
import proficiencyBronzeChoreoImage from '../tier0-general/proficiency-bronze-choreo.png'
import proficiencySilverInitiateImage from '../tier0-general/proficiency-silver-initiate.png'


export default function greenRankContent()
{
    const r6 = {}
    const r7 = brownRankContent()

    const t = techniqueLibrary()
    const ch = greenChallenges()
    const gen = generalCurrency()


    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', greenContent)

    // Sash
    r6.sash = {
        title: 'Green Sash',
        subtitle: 'Development Chamber',
        image: greenSashImage,
    }

    // Technical 1
    r6.tech1 = {
        title: 'Tong Long Bou Syun',
        subtitle: 'Mantis Whirlwind Step',
        image: greenTechImage,
        description: container.querySelector('#r6-tech1-desc'),
        techniques: [
            new Technique(t.fist13), 
            new Technique(t.hand10), 
            new Technique(t.hand11), 
            new Technique(t.ipma1), 
            new Technique(t.ipma2), 
            new Technique(t.ipma3), 
            new Technique(t.ipma4), 
            new Technique(t.comp4)
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

    r6.tech2 = {
        title: 'Hāak Fú Gāau Chā Kyùn',
        subtitle: 'Black Tiger Cross Boxing',
        image: greenTechImage,
    }

    r6.tech3 = {
        title: 'Baak Yùn Tāu Tòu Kyùn',
        subtitle: 'White Ape Steals the Peach',
        image: greenTechImage,
    }

    r6.tech4 = {
        title: 'Bāng Bou Kyùn',
        subtitle: 'Burst Step Boxing',
        image: greenTechImage,
    }

    r6.tech5 = {
        title: 'Yàu Lìng Jéung',
        subtitle: 'Soft and Agile Palm',
        image: greenTechImage,
    }

    r6.tech6 = {
        title: 'Làan Jit Kyùn',
        subtitle: 'Intercepting Fist',
        image: greenTechImage,
    }
    
    // Training Manual - Green Dragon Temple
    r6.manual = {
        title: 'Green Dragon Temple',
        subtitle: 'Choose one Technical card',
        image: greenTrainingManualImage,
        description: container.querySelector('#r6-manual-desc'),
        rewards: [
            new PathCard(r6.tech2),
            new PathCard(r6.tech3),
            new PathCard(r6.tech4),
            new PathCard(r6.tech5),
            new PathCard(r6.tech6)
        ]
    }
    
    // Mindset 1 - Root
    r6.mind1 = {
        title: 'Root',
        subtitle: '',
        image: greenMindImage1,
        description: container.querySelector('#r6-mind1-desc'),
        challenges: [container.querySelector('#r6-mind1-tasks')],
        rewards: [
            new PathCard(r6.tech1),
            new PathCard(gen.iron20)
        ]
    }
    
    // Mindset 2 - Wan, Cham
    r6.mind2 = {
        title: 'Wan, Cham',
        subtitle: 'Stability and Sinking',
        image: greenMindImage2,
        description: container.querySelector('#r6-mind2-desc'),
        challenges: [container.querySelector('#r6-mind2-tasks')],
        rewards: [
            new PathCard(r6.manual),
            new PathCard(gen.iron20)
        ]
    }

    // Mindset 3 - Leng, Heng
    r6.mind3 = {
        title: 'Leng, Heng',
        subtitle: 'Lightness and Agility',
        image: greenMindImage3,
        description: container.querySelector('#r6-mind3-desc'),
        challenges: [container.querySelector('#r6-mind3-tasks')],
        rewards: [
            new PathCard(gen.iron20),
            new PathCard(gen.sealDragon)
        ]
    }


    
    // Stance Routine Bronze Proficiency Requirement
    r6.prof1 = {
        title: 'Stance Routine',
        subtitle: 'Bronze Proficiency or Higher',
        image: proficiencyBronzeChoreoImage
    }

    // Silver Proficiency Requirement
    r6.prof2 = {
        title: 'Silver Proficiency',
        subtitle: 'Initiate Tier or Higher',
        image: proficiencySilverInitiateImage
    }

    // Advancement Invitation
    r6.adv = gen.advancementTier2
    r6.adv.rewards = [
            new PathCard(r7.sash)
    ]

    return r6;
}