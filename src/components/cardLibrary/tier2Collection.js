import PathCard from './PathCard.js'

import generalCurrency from './tier0-general/generalCurrency.js'
import purpleRankContent from './tier2-development/rank4Purple.js'

import purpleSashImage from './tier2-development/rank4-purple/purple-sash.png'
import purpleMindImage1 from './tier2-development/rank4-purple/purple-mind-sung.png'
import purpleMindImage2 from './tier2-development/rank4-purple/purple-mind-gates.png'
import purpleMindImage3 from './tier2-development/rank4-purple/purple-mind-pok.png'
import purpleTech7KicksImage from './tier2-development/rank4-purple/purple-tech-7kicks.png'
import purpleTrainingManualImage from './tier2-development/rank4-purple/purple-trainingManual.png'

import blueSashImage from './tier2-development/rank5-blue/blue-sash.png'
import blueMindImage1 from './tier2-development/rank5-blue/blue-mind-mangam.png'
import blueMindImage2 from './tier2-development/rank5-blue/blue-mind-simjau.png'
import blueMindImage3 from './tier2-development/rank5-blue/blue-mind-tangno.png'
import blueTechChinWooImage from './tier2-development/rank5-blue/blue-tech-chinwoo.png'
import blueTechCreationImage from './tier2-development/rank5-blue/blue-tech-creation.png'
import blueTrainingManualImage from './tier2-development/rank5-blue/blue-trainingManual.png'

import greenSashImage from './tier2-development/rank6-green/green-sash.png'
import greenMindImage1 from './tier2-development/rank6-green/green-mind-lengheng.png'
import greenMindImage2 from './tier2-development/rank6-green/green-mind-root.png'
import greenMindImage3 from './tier2-development/rank6-green/green-mind-wancham.png'
import greenTechMantisImage from './tier2-development/rank6-green/green-tech-mantis.png'
import greenTrainingManualImage from './tier2-development/rank6-green/green-trainingManual.png'

import forgeInvitationImage from './tier0-general/currency/forge-invitation.png'
import proficiencyBronzeInitiateImage from './tier0-general/proficiency-bronze-initiate.png'
import proficiencyBronzeChoreoImage from './tier0-general/proficiency-bronze-choreo.png'
import proficiencySilverInitiateImage from './tier0-general/proficiency-silver-initiate.png'

export default function developmentTier()
{
    const t2 = {}

    const t0 = generalCurrency()
    const r4 = purpleRankContent();

    t2.purpleSash = new PathCard(r4.sash)
    t2.purpleMindSung= new PathCard(r4.mind1);
    t2.purpleMindGates = new PathCard(r4.mind2);
    t2.purpleMindPokLauFung = new PathCard(r4.mind3);
    t2.purpleTechSevenKicks = new PathCard(r4.tech1);
    t2.purpleTrainingManual = new PathCard(r4.manual);
    t2.purpleProficiency = new PathCard(r4.prof)
    t2.purpleEvaluation = new PathCard(r4.eval)
    // t2.purpleTechDaaiFaanChe = createCard(yellowTechImage, 'Daai Faan Che Kyun', 'Big Wheel Fist');
    // t2.purpleTechYiLouJaakYiu = createCard(yellowTechImage, 'Yi Lou Jaak Yiu', '2nd Route Essentials');
    t2.purpleAdvancement = new PathCard(r4.adv)

    t2.purple = [
        t2.purpleSash, t2.purpleMindSung, t2.purpleMindGates, t2.purpleMindPokLauFung, t2.purpleTechSevenKicks, t2.purpleTrainingManual, t2.purpleProficiency, t2.purpleEvaluation, t2.purpleAdvancement
    ]

    t2.blueSash = new PathCard({}, blueSashImage, 'Blue Sash', 'Development Chamber')
    t2.blueMindManGam= new PathCard({}, blueMindImage1, 'Man Gam', 'Spatial Contextual Awareness');
    t2.blueMindSimJau = new PathCard({}, blueMindImage2, 'Sim, Jau', 'Dodging and Stalking');
    t2.blueMindTangNo = new PathCard({}, blueMindImage3, 'Tang No', 'Bouncing Step');
    t2.blueTechGungLik = new PathCard({}, blueTechChinWooImage, 'Gung Lik Kyun', 'Powerful Boxing');
    t2.blueTechFootwork = new PathCard({}, blueTechCreationImage, 'Stance Routine', 'Personal Creation')
    t2.blueTrainingManual = new PathCard({}, blueTrainingManualImage, 'The Forests of Laoshan', 'Choose one Technical Card');
    t2.blueProficiency = new PathCard({}, proficiencySilverInitiateImage, 'Silver Proficiency', 'Initiate Tier or Higher')
    // t2.blueTechDoGong = createCard(yellowTechImage, 'Do Gong Kyun', 'Avoiding the Hard');
    // t2.blueTechMuiFaSau = createCard(yellowTechImage, 'Mui Fa Sau', 'Plum Blossom Hand');
    t2.blueAdvancement = new PathCard(t0.advancementTier2)

    t2.blue = [
        t2.blueSash, t2.blueMindManGam, t2.blueMindSimJau, t2.blueMindTangNo, t2.blueTechGungLik, t2.blueTechFootwork, t2.blueTrainingManual, t2.blueProficiency, t2.blueAdvancement
    ]

    t2.greenSash = new PathCard({}, greenSashImage, 'Green Sash', 'Development Chamber')
    t2.greenMindLengHeng= new PathCard({}, greenMindImage1, 'Leng, Heng', 'Lightness and Agility');
    t2.greenMindRoot = new PathCard({}, greenMindImage2, 'Root', '');
    t2.greenMindWanCham = new PathCard({}, greenMindImage3, 'Wan, Cham', 'Stability and Sinking');
    t2.greenTechTongLongBouSyun = new PathCard({}, greenTechMantisImage, 'Tong Long Bou Syun', 'Mantis Whirlwind Step');
    t2.greenTrainingManual = new PathCard({}, greenTrainingManualImage, 'Green Dragon Temple', 'Choose one Technical Card');
    t2.greenProficiency1 = new PathCard({}, proficiencyBronzeChoreoImage, 'Stance Routine', 'Bronze Proficiency or Higher')
    t2.greenProficiency2 = new PathCard({}, proficiencySilverInitiateImage, 'Silver Proficiency', 'Initiate Tier or Higher')
    // t2.greenTechBaakYunTauTou = createCard(yellowTechImage, 'Baak Yun Tau Tou', 'White Ape Steals the Peach');
    // t2.greenTechHaakFuGaauCha = createCard(yellowTechImage, 'Haak Fu Gaau Cha', 'Black Tiger Crossing');
    t2.greenAdvancement = new PathCard(t0.advancementTier2)

    t2.green = [
        t2.greenSash, t2.greenMindLengHeng, t2.greenMindRoot, t2.greenMindWanCham, t2.greenTechTongLongBouSyun, t2.greenTrainingManual, t2.greenProficiency1, t2.greenProficiency2, t2.greenAdvancement
    ]

    return t2;
}