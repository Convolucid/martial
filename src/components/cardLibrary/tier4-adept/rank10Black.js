import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
// import blackRankContent from '../tier4-adept/rank10Black.js'

import forgeInvitationImage from '../tier0-general/currency/forge-invitation.png'


export default function blackRankContent()
{
    const r10 = {}

    const t = techniqueLibrary()
    // const ch = redChallenges()
    const gen = generalCurrency()


    const container = document.createElement('div')
    // container.insertAdjacentHTML('beforeend', redContent)

    // Sash
    r10.sash = {
        title: 'Black Sash',
        subtitle: 'Adept Chamber',
        image: forgeInvitationImage,
    }

    // Mystery card
    r10.mystery = {
        title: '?',
        subtitle: '',
        image: forgeInvitationImage,
        // description: container.querySelector('#r10-tech1-desc'),
        // techniques: [
        //     new Technique(t.fist2), 
        //     new Technique(t.fist3), 
        //     new Technique(t.kick1), 
        //     new Technique(t.fist4), 
        //     new Technique(t.hand2), 
        //     new Technique(t.hand5), 
        //     new Technique(t.step1), 
        //     new Technique(t.step2)
        // ],
        // // challenges: [
        // //     new Challenge(ch.a),
        // //     new Challenge(ch.a),
        // //     new Challenge(ch.a),
        // //     new Challenge(ch.a),
        // //     new Challenge(ch.a),
        // // ],
        // rewards: [
        //     new PathCard(gen.advancementInvitation),
        //     new PathCard(gen.iron10)
        // ]
    }

    // // Mindset 1 - Leng, Heng
    // r10.mind1 = {
    //     title: 'Leng, Heng',
    //     subtitle: 'Lightness and Agility',
    //     image: redMindImage1,
    //     // description: container.querySelector('#r10-mind1-desc'),
    //     // challenges: [container.querySelector('#r10-mind1-tasks')],
    //     rewards: [
    //         new PathCard(r10.tech1),
    //         new PathCard(gen.iron10)
    //     ]
    // }

    // // Training Manual - red Dragon Temple
    // r10.manual = {
    //     title: 'red Dragon Temple',
    //     subtitle: 'Choose one Technical card',
    //     image: redTrainingManualImage,
    //     // description: container.querySelector('#r10-tech2-desc'),
    //     // techniques: [
    //     //     new Technique(t.hand2), 
    //     //     new Technique(t.hand3), 
    //     //     new Technique(t.hand5), 
    //     //     new Technique(t.fist3), 
    //     //     new Technique(t.fist4), 
    //     //     new Technique(t.fist5), 
    //     //     new Technique(t.step3), 
    //     //     new Technique(t.step4), 
    //     //     new Technique(t.step5)
    //     // ],
    //     // challenges: '',
    //     rewards: [
    //         new PathCard(gen.advancementInvitation),
    //         new PathCard(gen.iron10)
    //     ]
    // }

    // // Mindset 2 - Root
    // r10.mind2 = {
    //     title: 'Root',
    //     subtitle: '',
    //     image: redMindImage2,
    //     // description: container.querySelector('#r10-mind2-desc'),
    //     // challenges: [container.querySelector('#r10-mind2-tasks')],
    //     rewards: [
    //         new PathCard(r10.manual),
    //         new PathCard(gen.iron10)
    //     ]
    // }

    // // Mindset 3 - Wan, Cham
    // r10.mind3 = {
    //     title: 'Wan, Cham',
    //     subtitle: 'Stability and Sinking',
    //     image: redMindImage3,
    //     // description: container.querySelector('#r10-mind2-desc'),
    //     // challenges: [container.querySelector('#r10-mind2-tasks')],
    //     rewards: [
    //         new PathCard(r10.manual),
    //         new PathCard(gen.iron10)
    //     ]
    // }
    
    // // Stance Routine Bronze Proficiency Requirement
    // r10.prof1 = {
    //     title: 'Stance Routine',
    //     subtitle: 'Bronze Proficiency or Higher',
    //     image: proficiencyBronzeChoreoImage
    // }

    // // Stance Routine Bronze Proficiency Requirement
    // r10.prof2 = {
    //     title: 'Silver Proficiency',
    //     subtitle: 'Initiate Tier or Higher',
    //     image: proficiencySilverInitiateImage
    // }

    // Advancement Invitation
    r10.adv = gen.advancementTier4
    // r10.adv.rewards = [
    //         new PathCard(r7.sash)
    //     ]

    return r10;
}