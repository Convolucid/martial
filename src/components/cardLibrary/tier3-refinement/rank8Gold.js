import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../../challengeCreator/Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
import redRankContent from './rank9Red.js'

import goldContent from './rank8-gold/gold-content.md'
import goldChallenges from './rank8-gold/gold-challenges.js'
import goldSashImage from './rank8-gold/gold-sash.png'
import goldMindImage1 from './rank8-gold/gold-mind-batdiubatdeng.png'
import goldMindImage2 from './rank8-gold/gold-mind-yanjeunlaaihung.png'
import goldMindImage3 from './rank8-gold/gold-mind-fongyun.png'
import goldMindImage4 from './rank8-gold/gold-mind-4ounces.png'
import goldMindImage5 from './rank8-gold/gold-mind-siudikdaai.png'
import goldTechImage1 from './rank8-gold/gold-tech-mantis.png'
import goldTechImage2 from './rank8-gold/gold-tech-bladed.png'
import goldTechImage3 from './rank8-gold/gold-tech-creation.png'
import goldTrainingManualImage from './rank8-gold/gold-trainingManual.png'
import proficiencySilverInitiateImage from '../tier0-general/proficiency-silver-initiate.png'
import sealMonkeyImage from '../tier0-general/currency/seal-monkey.png'


export default function goldRankContent()
{
    const r8 = {}
    const r9 = redRankContent()

    const t = techniqueLibrary()
    const ch = goldChallenges()
    const gen = generalCurrency()

    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', goldContent)

    // Sash
    r8.sash = {
        title: 'Gold Sash',
        subtitle: 'Refinement Chamber',
        image: goldSashImage,
    }

    // Technical 1 - Tong Long Cheut Dung Kyun
    r8.tech1 = {
        title: 'Tong Long Cheut Dung Kyun',
        subtitle: 'Praying Mantis Exits the Cave',
        image: goldTechImage1,
        description: container.querySelector('#r8-tech1-desc'),
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
        challenges: [
            new Challenge(ch.a),

        ],
        rewards: [
            new PathCard(gen.advancementInvitation),
            new PathCard(gen.iron30)
        ]
    }

    
    
    // Technical 2 - Yin Ching Daan Dou
    r8.tech2 = {
        title: 'Yin Ching Daan Dou',
        subtitle: "Yin Ching's Broadsword",
        image: goldTechImage2,
        description: container.querySelector('#r8-tech2-desc'),
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
        challenges: [
                new Challenge(ch.b),

        ],
        rewards: [
            new PathCard(gen.advancementInvitation),
            new PathCard(gen.iron30),
            new PathCard(gen.sealTortoise),
        ]
    }
    
    // Technical 3 - Speed of Hands
    r8.tech3 = {
        title: 'Speed of Hands Routine',
        subtitle: 'Personal Creation',
        image: goldTechImage3,
        rewards: [
            new PathCard(gen.advancementInvitation),
            new PathCard(gen.iron30),
            new PathCard(gen.sealBird),
        ]
    }

    // Technical
    r8.tech4 = {
        title: 'Yat Lou Jaak Yìu Kyùn',
        subtitle: '1st Route Essentials Boxing',
        image: goldTechImage1,
    }

    r8.tech5 = {
        title: 'Sei Lou Bàn Dá Kyùn',
        subtitle: 'Four Directions Running Beat',
        image: goldTechImage1,
    }

    r8.tech6 = {
        title: 'Jáam Má Dòu',
        subtitle: 'Horse Chopping Sword',
        image: goldTechImage1,
    }

    r8.tech7 = {
        title: 'Mùi Fà Jí Ng Dàan Dòu',
        subtitle: 'Plum Blossom 5th Meridian Broadsword',
        image: goldTechImage1,
    }

    r8.tech8 = {
        title: 'Wah Lum Kwan Dao',
        subtitle: 'Wah Lum Kwan Dao',
        image: goldTechImage1,
    }
    
    // Technical 3 - Any
    r8.techX = {
        title: 'Any Acquired Set',
        subtitle: 'Choose one Technical card',
        image: goldTechImage1,
    }
    
    // Training Manual - The Shandong Countryside
    r8.manual = {
        title: 'The Shandong Countryside',
        subtitle: 'Choose one Technical card',
        image: goldTrainingManualImage,
        description: container.querySelector('#r8-manual-desc'),
        rewards: [
            new PathCard(r8.tech4),
            new PathCard(r8.tech5),
            new PathCard(r8.tech6),
            new PathCard(r8.tech7),
            new PathCard(r8.tech8),
        ]
    }

    // Mindset 1 - Bat Diu Bat Deng
    r8.mind1 = {
        title: 'Bat Diu Bat Deng',
        subtitle: 'Cling Without Resistance',
        image: goldMindImage1,
        description: container.querySelector('#r8-mind1-desc'),
        challenges: [container.querySelector('#r8-mind1-tasks')],
        rewards: [
            new PathCard(r8.tech1),
            new PathCard(gen.iron30)
        ]
    }
    
    // Mindset 2 - Yan Jeun Laai Hung
    r8.mind2 = {
        title: 'Yan Jeun Laai Hung',
        subtitle: 'Attract into Emptiness',
        image: goldMindImage2,
        description: container.querySelector('#r8-mind2-desc'),
        challenges: [container.querySelector('#r8-mind2-tasks')],
        rewards: [
            new PathCard(r8.tech2),
            new PathCard(gen.iron30)
        ]
    }

    // Mindset 3 - Fong Yun
    r8.mind3 = {
        title: 'Fong Yun',
        subtitle: 'Square and Round',
        image: goldMindImage3,
        description: container.querySelector('#r8-mind3-desc'),
        challenges: [container.querySelector('#r8-mind3-tasks')],
        rewards: [
            new PathCard(r8.manual),
            new PathCard(gen.iron30)
        ]
    }
    
    // Mindset 4 - Sei Leung But Chin Gan
    r8.mind4 = {
        title: 'Sei Leung But Chin Gan',
        subtitle: '4 Ounces Overcome 1000 Pounds',
        image: goldMindImage4,
        description: container.querySelector('#r8-mind4-desc'),
        challenges: [container.querySelector('#r8-mind4-tasks')],
        rewards: [
            new PathCard(r8.tech3),
            new PathCard(gen.iron30)
        ]
    }
    
    // Mindset 5 - Siu Dik Daai, Maan Dik Faai
    r8.mind5 = {
        title: 'Siu Dik Daai, Maan Dik Faai',
        subtitle: 'Defeat Big with Small, Fast with Slow',
        image: goldMindImage5,
        description: container.querySelector('#r8-mind5-desc'),
        challenges: [container.querySelector('#r8-mind5-tasks')],
        rewards: [
            new PathCard(gen.iron30),
            new PathCard(gen.sealDragon)
        ]
    }

    
    // Silver Proficiency Requirement
    r8.prof1 = {
        title: 'Silver Proficiency',
        subtitle: 'Development Tier or Higher',
        image: proficiencySilverInitiateImage
    }

    // Seals Requirement
    r8.seals = {
        title: '10 Seals Collected',
        subtitle: 'Any combination of Monkey, Tiger, and Dragon',
        image: sealMonkeyImage
    }

    // Advancement Invitation
    r8.adv = gen.advancementTier3
    r8.adv.rewards = [
            new PathCard(r9.sash)
    ]

    return r8;
}