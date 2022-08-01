import PathCard from './PathCard.js'

import generalCurrency from './tier0-general/generalCurrency.js'
import whiteRankContent from './tier1-initiate/rank1White.js'
import yellowRankContent from './tier1-initiate/rank2Yellow.js'
import orangeRankContent from './tier1-initiate/rank3Orange.js'

export default function initiateTier()
{
    const t1 = {}

    const t0 = generalCurrency()
    const r1 = whiteRankContent();    
    const r2 = yellowRankContent();   
    const r3 = orangeRankContent();   

    t1.whiteSash = new PathCard(r1.sash)
    t1.whiteMindTiu = new PathCard(r1.mind1);
    t1.whiteTechIronPhoenixCombo1 = new PathCard(r1.tech1);
    t1.whiteMindCheuiSaamSau = new PathCard(r1.mind2);
    t1.whiteTech8ChainPunch2 = new PathCard(r1.tech2);
    t1.whiteAdvancement = new PathCard(r1.adv)

    t1.white = [
        t1.whiteSash, 
        t1.whiteMindTiu, 
        t1.whiteTechIronPhoenixCombo1, 
        t1.whiteMindCheuiSaamSau, 
        t1.whiteTech8ChainPunch2, 
        t1.whiteAdvancement
    ]

    t1.yellowSash = new PathCard(r2.sash)
    t1.yellowMindJimNim = new PathCard(r2.mind1);
    t1.yellowTechIronPhoenixCombo2 = new PathCard(r2.tech1);
    t1.yellowMindAu = new PathCard(r2.mind2);
    t1.yellowTechInterceptingHammerFist = new PathCard(r2.tech2);
    t1.yellowAdvancement = new PathCard(t0.advancementTier1)

    t1.yellow = [
        t1.yellowSash, 
        t1.yellowMindJimNim, 
        t1.yellowTechIronPhoenixCombo2, 
        t1.yellowMindAu, 
        t1.yellowTechInterceptingHammerFist, 
        t1.yellowAdvancement
    ]

    t1.orangeSash = new PathCard(r3.sash)
    t1.orangeMindChoi= new PathCard(r3.mind1);
    t1.orangeTechIronPhoenixCombo3 = new PathCard(r3.tech1);
    t1.orangeMindTipKaau = new PathCard(r3.mind2);
    t1.orangeTechEightEssentials = new PathCard(r3.tech2);
    t1.orangeAdvancement = new PathCard(t0.advancementTier1)

    t1.orange = [
        t1.orangeSash, 
        t1.orangeMindChoi, 
        t1.orangeTechIronPhoenixCombo3, 
        t1.orangeMindTipKaau, 
        t1.orangeTechEightEssentials, 
        t1.orangeAdvancement
    ]

    return t1;
}