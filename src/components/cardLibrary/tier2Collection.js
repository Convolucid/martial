import PathCard from './PathCard.js'

import generalCurrency from './tier0-general/generalCurrency.js'
import purpleRankContent from './tier2-development/rank4Purple.js'
import blueRankContent from './tier2-development/rank5Blue.js'
import greenRankContent from './tier2-development/rank6Green.js'

export default function developmentTier()
{
    const t2 = {}

    const t0 = generalCurrency()
    const r4 = purpleRankContent();
    const r5 = blueRankContent();
    const r6 = greenRankContent();

    t2.purpleSash = new PathCard(r4.sash)
    t2.purpleMindGates = new PathCard(r4.mind1);
    t2.purpleMindSung= new PathCard(r4.mind2);
    t2.purpleMindPokLauFung = new PathCard(r4.mind3);
    t2.purpleTechSevenKicks = new PathCard(r4.tech1);
    t2.purpleTrainingManual = new PathCard(r4.manual);
    t2.purpleProficiency = new PathCard(r4.prof)
    t2.purpleEvaluation = new PathCard(r4.eval)
    // t2.purpleTechDaaiFaanChe = createCard(yellowTechImage, 'Daai Faan Che Kyun', 'Big Wheel Fist');
    // t2.purpleTechYiLouJaakYiu = createCard(yellowTechImage, 'Yi Lou Jaak Yiu', '2nd Route Essentials');
    t2.purpleAdvancement = new PathCard(r4.adv)

    t2.purple = [
        t2.purpleSash, 
        t2.purpleMindGates, 
        t2.purpleMindSung, 
        t2.purpleMindPokLauFung, 
        t2.purpleTechSevenKicks, 
        t2.purpleTrainingManual, 
        t2.purpleProficiency, 
        t2.purpleEvaluation, 
        t2.purpleAdvancement
    ]

    t2.blueSash = new PathCard(r5.sash)
    t2.blueMindSimJau = new PathCard(r5.mind1);
    t2.blueMindTangNo = new PathCard(r5.mind2);
    t2.blueMindManGam= new PathCard(r5.mind3);
    t2.blueTechGungLik = new PathCard(r5.tech1);
    t2.blueTechFootwork = new PathCard(r5.tech2)
    t2.blueTrainingManual = new PathCard(r5.manual);
    t2.blueProficiency = new PathCard(r5.prof)
    // t2.blueTechDoGong = createCard(yellowTechImage, 'Do Gong Kyun', 'Avoiding the Hard');
    // t2.blueTechMuiFaSau = createCard(yellowTechImage, 'Mui Fa Sau', 'Plum Blossom Hand');
    t2.blueAdvancement = new PathCard(r5.adv)

    t2.blue = [
        t2.blueSash, 
        t2.blueMindSimJau, 
        t2.blueMindTangNo, 
        t2.blueMindManGam, 
        t2.blueTechGungLik, 
        t2.blueTechFootwork, 
        t2.blueTrainingManual, 
        t2.blueProficiency, 
        t2.blueAdvancement
    ]

    t2.greenSash = new PathCard(r6.sash)
    t2.greenMindRoot = new PathCard(r6.mind1);
    t2.greenMindWanCham = new PathCard(r6.mind2);
    t2.greenMindLengHeng= new PathCard(r6.mind3);
    t2.greenTechTongLongBouSyun = new PathCard(r6.tech1);
    t2.greenTrainingManual = new PathCard(r6.manual);
    t2.greenProficiency1 = new PathCard(r6.prof1)
    t2.greenProficiency2 = new PathCard(r6.prof2)
    // t2.greenTechBaakYunTauTou = createCard(yellowTechImage, 'Baak Yun Tau Tou', 'White Ape Steals the Peach');
    // t2.greenTechHaakFuGaauCha = createCard(yellowTechImage, 'Haak Fu Gaau Cha', 'Black Tiger Crossing');
    t2.greenAdvancement = new PathCard(r6.adv)

    t2.green = [
        t2.greenSash, 
        t2.greenMindRoot, 
        t2.greenMindWanCham, 
        t2.greenMindLengHeng, 
        t2.greenTechTongLongBouSyun, 
        t2.greenTrainingManual, 
        t2.greenProficiency1, 
        t2.greenProficiency2, 
        t2.greenAdvancement
    ]

    return t2;
}