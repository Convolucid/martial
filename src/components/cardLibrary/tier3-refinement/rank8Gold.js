import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
// import blueRankContent from './rank5Blue.js'

// import greenContent from './rank6-green/green-content.md'
// import greenChallenges from './rank6-green/green-challenges.js'
import greenSashImage from './rank6-green/green-sash.png'
import greenMindImage1 from './rank6-green/green-mind-lengheng.png'
import greenMindImage2 from './rank6-green/green-mind-root.png'
import greenMindImage3 from './rank6-green/green-mind-wancham.png'
import greenTechImage from './rank6-green/green-tech-mantis.png'
import greenTrainingManualImage from './rank6-green/green-trainingManual.png'
import proficiencyBronzeChoreoImage from '../tier0-general/proficiency-bronze-choreo.png'
import proficiencySilverInitiateImage from '../tier0-general/proficiency-silver-initiate.png'


export default function greenRankContent()
{
    const r6 = {}
    // const r5 = blueRankContent()

    const t = techniqueLibrary()
    // const ch = greenChallenges()
    const gen = generalCurrency()


    const container = document.createElement('div')
    // container.insertAdjacentHTML('beforeend', greenContent)

    // Sash
    r6.sash = {
        title: 'Green Sash',
        subtitle: 'Development Chamber',
        image: greenSashImage,
    }

    // Technical 1 - Tong Long Bou Syun
    r6.tech1 = {
        title: 'Tong Long Bou Syun',
        subtitle: 'Mantis Whirlwind Step',
        image: greenTechImage,
        // description: container.querySelector('#r6-tech1-desc'),
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

    // Mindset 1 - Leng, Heng
    r6.mind1 = {
        title: 'Leng, Heng',
        subtitle: 'Lightness and Agility',
        image: greenMindImage1,
        // description: container.querySelector('#r6-mind1-desc'),
        // challenges: [container.querySelector('#r6-mind1-tasks')],
        rewards: [
            new PathCard(r6.tech1),
            new PathCard(gen.iron10)
        ]
    }

    // Training Manual - Green Dragon Temple
    r6.manual = {
        title: 'Green Dragon Temple',
        subtitle: 'Choose one Technical card',
        image: greenTrainingManualImage,
        // description: container.querySelector('#r6-tech2-desc'),
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

    // Mindset 2 - Root
    r6.mind2 = {
        title: 'Root',
        subtitle: '',
        image: greenMindImage2,
        // description: container.querySelector('#r6-mind2-desc'),
        // challenges: [container.querySelector('#r6-mind2-tasks')],
        rewards: [
            new PathCard(r6.manual),
            new PathCard(gen.iron10)
        ]
    }

    // Mindset 3 - Wan, Cham
    r6.mind3 = {
        title: 'Wan, Cham',
        subtitle: 'Stability and Sinking',
        image: greenMindImage3,
        // description: container.querySelector('#r6-mind2-desc'),
        // challenges: [container.querySelector('#r6-mind2-tasks')],
        rewards: [
            new PathCard(r6.manual),
            new PathCard(gen.iron10)
        ]
    }
    
    // Stance Routine Bronze Proficiency Requirement
    r6.prof1 = {
        title: 'Stance Routine',
        subtitle: 'Bronze Proficiency or Higher',
        image: proficiencyBronzeChoreoImage
    }

    // Stance Routine Bronze Proficiency Requirement
    r6.prof2 = {
        title: 'Silver Proficiency',
        subtitle: 'Initiate Tier or Higher',
        image: proficiencySilverInitiateImage
    }

    // Advancement Invitation
    r6.adv = gen.advancementTier2
    // r6.adv.rewards = [
    //         new PathCard(r7.sash)
    //     ]

    return r6;
}