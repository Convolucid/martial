import PathCard from '../PathCard.js'

import brownSashImage from './rank7-brown/brown-sash.png'
import brownMindImage1 from './rank7-brown/brown-mind-8weak.png'
import brownMindImage2 from './rank7-brown/brown-mind-8devastation.png'
import brownMindImage3 from './rank7-brown/brown-mind-4external.png'
import brownMindImage4 from './rank7-brown/brown-mind-4internal.png'
import brownMindImage5 from './rank7-brown/brown-mind-batjikbatlei.png'
import brownTechBigSmallImage from './rank7-brown/brown-tech-bigsmall.png'
import brownTechLongPoleImage from './rank7-brown/brown-tech-longpole.png'
import brownTechMantisImage from './rank7-brown/brown-tech-mantis.png'
import brownTrainingManualImage from './rank7-brown/brown-trainingManual.png'

import goldSashImage from './rank8-gold/gold-sash.png'
import goldMindImage1 from './rank8-gold/gold-mind-batdiubatdeng.png'
import goldMindImage2 from './rank8-gold/gold-mind-fongyun.png'
import goldMindImage3 from './rank8-gold/gold-mind-4ounces.png'
import goldMindImage4 from './rank8-gold/gold-mind-siudikdaai.png'
import goldMindImage5 from './rank8-gold/gold-mind-yanjeunlaaihung.png'
import goldTechMantisImage from './rank8-gold/gold-tech-mantis.png'
import goldTechBladedImage from './rank8-gold/gold-tech-bladed.png'
import goldTechCreationImage from './rank8-gold/gold-tech-creation.png'
import goldTrainingManualImage from './rank8-gold/gold-trainingManual.png'

import redSashImage from './rank9-red/red-sash.png'

import advancementImage from '../general/advancement.png'
import forgeInvitationImage from '../general/forge-invitation.png'
import proficiencySilverInitiateImage from '../general/proficiency-silver-initiate.png'
import sealLeopardImage from '../general/seal-leopard.png'
import sealMonkeyImage from '../general/seal-monkey.png'

export default function refinementTier()
{
    const refinementTier = {}
    const brownSash = new PathCard(brownSashImage, 'Brown Sash', 'Refinement Chamber')
    const brownMind8Weakening = new PathCard(brownMindImage1, '8 Points of Weakening', '');
    const brownMind8Devastation = new PathCard(brownMindImage2, '8 Points of Devastation', '');
    const brownMindSeNgoiLin = new PathCard(brownMindImage3, 'Sei Ngoi Lin', 'Four External Practices');
    const brownMindSeiNaapLin = new PathCard(brownMindImage4, 'Sei Naap Lin', 'Four Internal Practices');
    const brownMindBatJikBatLei = new PathCard(brownMindImage5, 'Bat Jik Bat Lei', 'Engagement Distance');
    const brownTechDaaiFuNgaan = new PathCard(brownTechBigSmallImage, 'Daai Fu Ngaan Kyun', 'Big Tigers and Wild Geese');
    const brownTechSixHarmonyStaff = new PathCard(brownTechLongPoleImage, 'Luk Hap Gwan', 'Six Harmony Staff');
    const brownTechAny = new PathCard(brownTechMantisImage, 'Any Acquired Set', 'Choose one Technical Card');
    const brownTrainingManual = new PathCard(brownTrainingManualImage, 'The Jade Emperor Temple', 'Choose one Technical Card');
    const brownProficiency = new PathCard(proficiencySilverInitiateImage, 'Silver Proficiency', 'Development Tier or Higher')
    const brownSeals = new PathCard(sealLeopardImage, '10 Seals Collected', 'Any combination of Leopard, Snake, and Crane')
    // const brownTechMuiFaLou = new PathCard(yellowTechImage, 'Mui Fa Lou Kyun', 'Plum Blossom Routine Boxing');
    const brownEvaluation = new PathCard(forgeInvitationImage, 'Development Chamber Evaluation', '80% score or greater')
    const brownAdvancement = new PathCard(advancementImage, 'Advancement', 'Refinement Tier or higher')

    refinementTier.brown = [
        brownSash, brownMind8Weakening, brownMind8Devastation, brownMindSeNgoiLin, brownMindSeiNaapLin, brownMindBatJikBatLei, brownTechDaaiFuNgaan, brownTechSixHarmonyStaff, brownTechAny, brownTrainingManual, brownProficiency, brownSeals, brownEvaluation, brownAdvancement
    ]

    const goldSash = new PathCard(goldSashImage, 'Gold Sash', 'Refinement Chamber')
    const goldMindBatDiuBatDeng = new PathCard(goldMindImage1, 'Bat Diu Bat Deng', 'Cling without Resistance');
    const goldMindFongYun = new PathCard(goldMindImage2, 'Fong Yun', 'Square and Round');
    const goldMind4Ounces = new PathCard(goldMindImage3, 'Sei Leung But Chin Gan', '4 Ounces Overcome 1000 Pounds');
    const goldMindSiuDikDaai = new PathCard(goldMindImage4, 'Siu Dik Daai, Maan Dik Faai', 'Defeat Big with Small, Fast with Slow');
    const goldMindYanJeunLaaiHung = new PathCard(goldMindImage5, 'Yan Jeun Laai Hung', 'Attract into Emptiness');
    const goldTechTongLongCheutDung = new PathCard(goldTechMantisImage, 'Tong Long Cheut Dung Kyun', 'Praying Mantis Exits the Cave');
    const goldTechYinChingDaanDou = new PathCard(goldTechBladedImage, 'Yin Ching Daan Dou', "Yin Ching's Broadsword");
    const goldTechSpeedOfHands = new PathCard(goldTechCreationImage, 'Speed of Hands Routine', 'Personal Creation');
    const goldTechAny = new PathCard(goldTechMantisImage, 'Any Acquired Set', 'Choose one Technical Card');
    const goldTrainingManual = new PathCard(goldTrainingManualImage, 'The Shandong Countryside', 'Choose one Technical Card');
    const goldProficiency = new PathCard(proficiencySilverInitiateImage, 'Silver Proficiency', 'Development Tier or Higher')
    const goldSeals = new PathCard(sealMonkeyImage, '10 Seals Collected', 'Any combination of Monkey, Tiger, and Dragon')
    const goldAdvancement = new PathCard(advancementImage, 'Advancement', 'Refinement Tier or higher')

    refinementTier.gold = [
        goldSash, goldMindBatDiuBatDeng, goldMindFongYun, goldMind4Ounces, goldMindSiuDikDaai, goldMindYanJeunLaaiHung, goldTechTongLongCheutDung, goldTechYinChingDaanDou, goldTechSpeedOfHands, goldTechAny, goldTrainingManual, goldProficiency, goldSeals, goldAdvancement
    ]

    const redSash = new PathCard(redSashImage, 'Red Sash', 'Refinement Chamber')
    const redMind1= new PathCard(forgeInvitationImage, '?', '');
    const redMind2 = new PathCard(forgeInvitationImage, '?', '');
    const redMind3 = new PathCard(forgeInvitationImage, '?', '');
    const redMind4 = new PathCard(forgeInvitationImage, '?', '');
    const redMind5 = new PathCard(forgeInvitationImage, '?', '');
    const redTech1 = new PathCard(forgeInvitationImage, '?', '');
    const redTech2 = new PathCard(forgeInvitationImage, '?', '');
    const redTech3 = new PathCard(forgeInvitationImage, '?', 'Personal Creation')
    const redTechAny = new PathCard(forgeInvitationImage, 'Any Acquired Set', 'Choose one Technical Card');
    const redTrainingManual = new PathCard(forgeInvitationImage, '?', 'Choose one Technical Card');
    const redProficiency1 = new PathCard(forgeInvitationImage, 'Gold Proficiency', 'Development Tier or Higher')
    const redProficiency2 = new PathCard(forgeInvitationImage, 'Speed of Hands Routine', 'Silver Proficiency or Higher')
    const redSeals = new PathCard(forgeInvitationImage, '10 Seals Collected', 'Any combination of Tortoise, Lion, and Bird')
    const redAdvancement = new PathCard(advancementImage, 'Advancement', 'Refinement Tier or higher')

    refinementTier.red = [
        redSash, redMind1, redMind2, redMind3, redMind4, redMind5, redTech1, redTech2, redTech3, redTechAny, redTrainingManual, redProficiency1, redProficiency2, redSeals, redAdvancement
    ]

    return refinementTier;
}