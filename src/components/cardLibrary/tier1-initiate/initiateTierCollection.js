import PathCard from '../PathCard.js'

import whiteSashImage from './rank1-white/white-sash.png'
import whiteTechImage from './rank1-white/white-tech.png'
import whiteMindImage1 from './rank1-white/white-mind-tiu.png'
import whiteMindDescription1 from './rank1-white/white-mind-tiu.md'
import whiteMindImage2 from './rank1-white/white-mind-css.png'
import yellowSashImage from './rank2-yellow/yellow-sash.png'
import yellowTechImage from './rank2-yellow/yellow-tech.png'
import yellowMindImage1 from './rank2-yellow/yellow-mind-jimnim.png'
import yellowMindImage2 from './rank2-yellow/yellow-mind-au.png'
import orangeSashImage from './rank3-orange/orange-sash.png'
import orangeMindImage1 from './rank3-orange/orange-mind-choi.png'
import orangeMindImage2 from './rank3-orange/orange-mind-tipkaau.png'
import orangeTechImage from './rank3-orange/orange-tech.png'

import advancementImage from '../general/advancement.png'

export default function initiateTier()
{
    const initiateTier = {}

    const whiteSash = new PathCard(whiteSashImage, 'White Sash', 'Initiate Chamber')
    const whiteMindTiu = new PathCard(whiteMindImage1, 'Tiu', 'the Warding Principle', whiteMindDescription1);
    const whiteMindCheuiSaamSau = new PathCard(whiteMindImage2, 'Cheui Saam Sau', 'the Three Hands of Mantis');
    const whiteTechIronPhoenixCombo1 = new PathCard(whiteTechImage, 'Iron Phoenix Combination', '1st Route');
    const whiteTech8ChainPunch2 = new PathCard(whiteTechImage, 'Eight Chain Punch', '2nd Route');
    const whiteAdvancement = new PathCard(advancementImage, 'Advancement', 'Initiate Tier or higher')

    initiateTier.white = [
        whiteSash, whiteMindTiu, whiteMindCheuiSaamSau, whiteTechIronPhoenixCombo1, whiteTech8ChainPunch2, whiteAdvancement
    ]

    const yellowSash = new PathCard(yellowSashImage, 'Yellow Sash', 'Initiate Chamber')
    const yellowMindJimNim = new PathCard(yellowMindImage1, 'Jim, Nim', 'Contact and Cling');
    const yellowMindAu = new PathCard(yellowMindImage2, 'Au, Diu, Got', 'the Mantis Hook');
    const yellowTechIronPhoenixCombo2 = new PathCard(yellowTechImage, 'Iron Phoenix Combination', '2nd Route');
    const yellowTechInterceptingHammerFist = new PathCard(yellowTechImage, 'Intercepting Hammer Fist', '1st Route');
    const yellowAdvancement = new PathCard(advancementImage, 'Advancement', 'Initiate Tier or higher')

    initiateTier.yellow = [
        yellowSash, yellowMindJimNim, yellowMindAu, yellowTechIronPhoenixCombo2, yellowTechInterceptingHammerFist, yellowAdvancement
    ]

    const orangeSash = new PathCard(orangeSashImage, 'Orange Sash', 'Initiate Chamber')
    const orangeMindChoi= new PathCard(orangeMindImage1, 'Choi', 'Plucking Methods');
    const orangeMindTipKaau = new PathCard(orangeMindImage2, 'Tip, Kaau', 'Lean on the Center');
    const orangeTechIronPhoenixCombo3 = new PathCard(orangeTechImage, 'Iron Phoenix Combination', '3rd Route');
    const orangeTechEightEssentials = new PathCard(orangeTechImage, 'Baat Jaak Yiu Sau', 'Eight Essential Movements');
    const orangeAdvancement = new PathCard(advancementImage, 'Advancement', 'Initiate Tier or higher')

    initiateTier.orange = [
        orangeSash, orangeMindChoi, orangeMindTipKaau, orangeTechIronPhoenixCombo3, orangeTechEightEssentials, orangeAdvancement
    ]

    return initiateTier;
}