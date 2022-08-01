import PathCard from './PathCard.js'

import generalCurrency from './tier0-general/generalCurrency.js'

import whiteRankContent from './tier1-initiate/rank1White.js'
import whiteTechImage from './tier1-initiate/rank1-white/white-tech.png'

import yellowSashImage from './tier1-initiate/rank2-yellow/yellow-sash.png'
import yellowTechImage from './tier1-initiate/rank2-yellow/yellow-tech.png'
import yellowMindImage1 from './tier1-initiate/rank2-yellow/yellow-mind-jimnim.png'
import yellowMindImage2 from './tier1-initiate/rank2-yellow/yellow-mind-au.png'

import orangeSashImage from './tier1-initiate/rank3-orange/orange-sash.png'
import orangeMindImage1 from './tier1-initiate/rank3-orange/orange-mind-choi.png'
import orangeMindImage2 from './tier1-initiate/rank3-orange/orange-mind-tipkaau.png'
import orangeTechImage from './tier1-initiate/rank3-orange/orange-tech.png'

import advancementImage from './tier0-general/advancement.png'

export default function initiateTier()
{
    const t1 = {}

    const t0 = generalCurrency()
    const r1 = whiteRankContent();    

    console.log(t0.advancementTier1)
    console.log(r1.mind1)

    t1.whiteSash = new PathCard(r1.sash)
    t1.whiteMindTiu = new PathCard(r1.mind1);
    t1.whiteMindCheuiSaamSau = new PathCard(r1.mind2);
    t1.whiteTechIronPhoenixCombo1 = new PathCard({}, whiteTechImage, 'Iron Phoenix Combination', '1st Route');
    t1.whiteTech8ChainPunch2 = new PathCard({}, whiteTechImage, 'Eight Chain Punch', '2nd Route');
    t1.whiteAdvancement = new PathCard(t0.advancementTier1)

    t1.white = [
        t1.whiteSash, t1.whiteMindTiu, 
        t1.whiteMindCheuiSaamSau, 
        t1.whiteTechIronPhoenixCombo1, t1.whiteTech8ChainPunch2, 
        t1.whiteAdvancement
    ]

    t1.yellowSash = new PathCard({}, yellowSashImage, 'Yellow Sash', 'Initiate Chamber')
    t1.yellowMindJimNim = new PathCard({}, yellowMindImage1, 'Jim, Nim', 'Contact and Cling');
    t1.yellowMindAu = new PathCard({}, yellowMindImage2, 'Au, Diu, Got', 'the Mantis Hook');
    t1.yellowTechIronPhoenixCombo2 = new PathCard({}, yellowTechImage, 'Iron Phoenix Combination', '2nd Route');
    t1.yellowTechInterceptingHammerFist = new PathCard({}, yellowTechImage, 'Intercepting Hammer Fist', '1st Route');
    t1.yellowAdvancement = new PathCard({}, advancementImage, 'Advancement', 'Initiate Tier or higher')

    t1.yellow = [
        t1.yellowSash, t1.yellowMindJimNim, t1.yellowMindAu, t1.yellowTechIronPhoenixCombo2, t1.yellowTechInterceptingHammerFist, t1.yellowAdvancement
    ]

    t1.orangeSash = new PathCard({}, orangeSashImage, 'Orange Sash', 'Initiate Chamber')
    t1.orangeMindChoi= new PathCard({}, orangeMindImage1, 'Choi', 'Plucking Methods');
    t1.orangeMindTipKaau = new PathCard({}, orangeMindImage2, 'Tip, Kaau', 'Lean on the Center');
    t1.orangeTechIronPhoenixCombo3 = new PathCard({}, orangeTechImage, 'Iron Phoenix Combination', '3rd Route');
    t1.orangeTechEightEssentials = new PathCard({}, orangeTechImage, 'Baat Jaak Yiu Sau', 'Eight Essential Movements');
    t1.orangeAdvancement = new PathCard({}, advancementImage, 'Advancement', 'Initiate Tier or higher')

    t1.orange = [
        t1.orangeSash, t1.orangeMindChoi, t1.orangeMindTipKaau, t1.orangeTechIronPhoenixCombo3, t1.orangeTechEightEssentials, t1.orangeAdvancement
    ]

    return t1;
}