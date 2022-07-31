import PathCard from '../PathCard.js'

import purpleSashImage from './rank4-purple/purple-sash.png'
import purpleMindImage1 from './rank4-purple/purple-mind-sung.png'
import purpleMindImage2 from './rank4-purple/purple-mind-gates.png'
import purpleMindImage3 from './rank4-purple/purple-mind-pok.png'
import purpleTech7KicksImage from './rank4-purple/purple-tech-7kicks.png'
import purpleTrainingManualImage from './rank4-purple/purple-trainingManual.png'
import blueSashImage from './rank5-blue/blue-sash.png'
import blueMindImage1 from './rank5-blue/blue-mind-mangam.png'
import blueMindImage2 from './rank5-blue/blue-mind-simjau.png'
import blueMindImage3 from './rank5-blue/blue-mind-tangno.png'
import blueTechChinWooImage from './rank5-blue/blue-tech-chinwoo.png'
import blueTechCreationImage from './rank5-blue/blue-tech-creation.png'
import blueTrainingManualImage from './rank5-blue/blue-trainingManual.png'
import greenSashImage from './rank6-green/green-sash.png'
import greenMindImage1 from './rank6-green/green-mind-lengheng.png'
import greenMindImage2 from './rank6-green/green-mind-root.png'
import greenMindImage3 from './rank6-green/green-mind-wancham.png'
import greenTechMantisImage from './rank6-green/green-tech-mantis.png'
import greenTrainingManualImage from './rank6-green/green-trainingManual.png'

import advancementImage from '../general/advancement.png'
import forgeInvitationImage from '../general/forge-invitation.png'
import proficiencyBronzeInitiateImage from '../general/proficiency-bronze-initiate.png'
import proficiencyBronzeChoreoImage from '../general/proficiency-bronze-choreo.png'
import proficiencySilverInitiateImage from '../general/proficiency-silver-initiate.png'

export default function developmentTier()
{
    const developmentTier = {}

    const purpleSash = new PathCard(purpleSashImage, 'Purple Sash', 'Development Chamber')
    const purpleMindSung= new PathCard(purpleMindImage1, 'Sung', 'Empty Method');
    const purpleMindGates = new PathCard(purpleMindImage2, 'Gates', 'Inner and Outer, Life and Death');
    const purpleMindPokLauFung = new PathCard(purpleMindImage3, 'Pok, Lau, Fung', 'Ward, Grasp, and Seal');
    const purpleTechSevenKicks = new PathCard(purpleTech7KicksImage, 'Seven Kicks', '');
    const purpleTrainingManual = new PathCard(purpleTrainingManualImage, 'The Shaolin Monastery', 'Choose one Technical Card');
    const purpleProficiency = new PathCard(proficiencyBronzeInitiateImage, 'Bronze Proficiency', 'Initiate Tier or Higher')
    const purpleEvaluation = new PathCard(forgeInvitationImage, 'Initiate Chamber Evaluation', '80% score or greater')
    // const purpleTechDaaiFaanChe = createCard(yellowTechImage, 'Daai Faan Che Kyun', 'Big Wheel Fist');
    // const purpleTechYiLouJaakYiu = createCard(yellowTechImage, 'Yi Lou Jaak Yiu', '2nd Route Essentials');
    const purpleAdvancement = new PathCard(advancementImage, 'Advancement', 'Development Tier or higher')

    developmentTier.purple = [
        purpleSash, purpleMindSung, purpleMindGates, purpleMindPokLauFung, purpleTechSevenKicks, purpleTrainingManual, purpleProficiency, purpleEvaluation, purpleAdvancement
    ]

    const blueSash = new PathCard(blueSashImage, 'Blue Sash', 'Development Chamber')
    const blueMindManGam= new PathCard(blueMindImage1, 'Man Gam', 'Spatial Contextual Awareness');
    const blueMindSimJau = new PathCard(blueMindImage2, 'Sim, Jau', 'Dodging and Stalking');
    const blueMindTangNo = new PathCard(blueMindImage3, 'Tang No', 'Bouncing Step');
    const blueTechGungLik = new PathCard(blueTechChinWooImage, 'Gung Lik Kyun', 'Powerful Boxing');
    const blueTechFootwork = new PathCard(blueTechCreationImage, 'Stance Routine', 'Personal Creation')
    const blueTrainingManual = new PathCard(blueTrainingManualImage, 'The Forests of Laoshan', 'Choose one Technical Card');
    const blueProficiency = new PathCard(proficiencySilverInitiateImage, 'Silver Proficiency', 'Initiate Tier or Higher')
    // const blueTechDoGong = createCard(yellowTechImage, 'Do Gong Kyun', 'Avoiding the Hard');
    // const blueTechMuiFaSau = createCard(yellowTechImage, 'Mui Fa Sau', 'Plum Blossom Hand');
    const blueAdvancement = new PathCard(advancementImage, 'Advancement', 'Development Tier or higher')

    developmentTier.blue = [
        blueSash, blueMindManGam, blueMindSimJau, blueMindTangNo, blueTechGungLik, blueTechFootwork, blueTrainingManual, blueProficiency, blueAdvancement
    ]

    const greenSash = new PathCard(greenSashImage, 'Green Sash', 'Development Chamber')
    const greenMindLengHeng= new PathCard(greenMindImage1, 'Leng, Heng', 'Lightness and Agility');
    const greenMindRoot = new PathCard(greenMindImage2, 'Root', '');
    const greenMindWanCham = new PathCard(greenMindImage3, 'Wan, Cham', 'Stability and Sinking');
    const greenTechTongLongBouSyun = new PathCard(greenTechMantisImage, 'Tong Long Bou Syun', 'Mantis Whirlwind Step');
    const greenTrainingManual = new PathCard(greenTrainingManualImage, 'Green Dragon Temple', 'Choose one Technical Card');
    const greenProficiency1 = new PathCard(proficiencyBronzeChoreoImage, 'Stance Routine', 'Bronze Proficiency or Higher')
    const greenProficiency2 = new PathCard(proficiencySilverInitiateImage, 'Silver Proficiency', 'Initiate Tier or Higher')
    // const greenTechBaakYunTauTou = createCard(yellowTechImage, 'Baak Yun Tau Tou', 'White Ape Steals the Peach');
    // const greenTechHaakFuGaauCha = createCard(yellowTechImage, 'Haak Fu Gaau Cha', 'Black Tiger Crossing');
    const greenAdvancement = new PathCard(advancementImage, 'Advancement', 'Development Tier or higher')

    developmentTier.green = [
        greenSash, greenMindLengHeng, greenMindRoot, greenMindWanCham, greenTechTongLongBouSyun, greenTrainingManual, greenProficiency1, greenProficiency2, greenAdvancement
    ]

    return developmentTier;
}