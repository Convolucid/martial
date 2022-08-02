import PathCard from './PathCard.js'

import generalCurrency from './tier0-general/generalCurrency.js'
import brownRankContent from './tier3-refinement/rank7Brown.js'
import goldRankContent from './tier3-refinement/rank8Gold.js'
import redRankContent from './tier3-refinement/rank9Red.js'

export default function refinementTier()
{
    const t3 = {}

    const t0 = generalCurrency()
    const r7 = brownRankContent();
    const r8 = goldRankContent();
    const r9 = redRankContent();

    t3.brownSash = new PathCard(r7.sash)
    t3.brownMind8Weakening = new PathCard(r7.mind1);
    t3.brownMind8Devastation = new PathCard(r7.mind2);
    t3.brownMindSeNgoiLin = new PathCard(r7.mind3);
    t3.brownMindSeiNaapLin = new PathCard(r7.mind4);
    t3.brownMindBatJikBatLei = new PathCard(r7.mind5);
    t3.brownTechDaaiFuNgaan = new PathCard(r7.tech1);
    t3.brownTechSixHarmonyStaff = new PathCard(r7.tech2);
    t3.brownTechAny = new PathCard(r7.techX);
    t3.brownTrainingManual = new PathCard(r7.manual);
    t3.brownProficiency = new PathCard(r7.prof1)
    t3.brownSeals = new PathCard(r7.seals)
    // t3.brownTechMuiFaLou = new PathCard({}, yellowTechImage, 'Mui Fa Lou Kyun', 'Plum Blossom Routine Boxing');
    t3.brownEvaluation = new PathCard(r7.eval)
    t3.brownAdvancement = new PathCard(r7.adv)

    t3.brown = [
        t3.brownSash, 
        t3.brownMind8Weakening, 
        t3.brownMind8Devastation, 
        t3.brownMindSeNgoiLin, 
        t3.brownMindSeiNaapLin, 
        t3.brownMindBatJikBatLei, 
        t3.brownTechDaaiFuNgaan, 
        t3.brownTechSixHarmonyStaff, 
        t3.brownTechAny, 
        t3.brownTrainingManual, 
        t3.brownProficiency, 
        t3.brownSeals, 
        t3.brownEvaluation, 
        t3.brownAdvancement
    ]

    t3.goldSash = new PathCard(r8.sash)
    t3.goldMindBatDiuBatDeng = new PathCard(r8.mind1);
    t3.goldMindYanJeunLaaiHung = new PathCard(r8.mind2);
    t3.goldMindFongYun = new PathCard(r8.mind3);
    t3.goldMind4Ounces = new PathCard(r8.mind4);
    t3.goldMindSiuDikDaai = new PathCard(r8.mind5);
    t3.goldTechTongLongCheutDung = new PathCard(r8.tech1);
    t3.goldTechYinChingDaanDou = new PathCard(r8.tech2);
    t3.goldTechSpeedOfHands = new PathCard(r8.tech3);
    t3.goldTechAny = new PathCard(r8.techX);
    t3.goldTrainingManual = new PathCard(r8.manual);
    t3.goldProficiency = new PathCard(r8.prof1)
    t3.goldSeals = new PathCard(r8.seals)
    t3.goldAdvancement = new PathCard(r8.adv)

    t3.gold = [
        t3.goldSash, 
        t3.goldMindBatDiuBatDeng, 
        t3.goldMindYanJeunLaaiHung, 
        t3.goldMindFongYun, 
        t3.goldMind4Ounces, 
        t3.goldMindSiuDikDaai, 
        t3.goldTechTongLongCheutDung, 
        t3.goldTechYinChingDaanDou, 
        t3.goldTechSpeedOfHands, 
        t3.goldTechAny, 
        t3.goldTrainingManual, 
        t3.goldProficiency, 
        t3.goldSeals, 
        t3.goldAdvancement
    ]

    t3.redSash = new PathCard(r9.sash)
    t3.redMind1= new PathCard(r9.mystery);
    t3.redMind2 = new PathCard(r9.mystery);
    t3.redMind3 = new PathCard(r9.mystery);
    t3.redMind4 = new PathCard(r9.mystery);
    t3.redMind5 = new PathCard(r9.mystery);
    t3.redTech1 = new PathCard(r9.mystery);
    t3.redTech2 = new PathCard(r9.mystery);
    t3.redTech3 = new PathCard(r9.mystery)
    t3.redTechAny = new PathCard(r9.mystery);
    t3.redTrainingManual = new PathCard(r9.mystery);
    t3.redProficiency1 = new PathCard(r9.mystery)
    t3.redProficiency2 = new PathCard(r9.mystery)
    t3.redSeals = new PathCard(r9.mystery)
    t3.redAdvancement = new PathCard(r9.adv)

    t3.red = [
        t3.redSash, t3.redMind1, t3.redMind2, t3.redMind3, t3.redMind4, t3.redMind5, t3.redTech1, t3.redTech2, t3.redTech3, t3.redTechAny, t3.redTrainingManual, t3.redProficiency1, t3.redProficiency2, t3.redSeals, t3.redAdvancement
    ]

    return t3;
}