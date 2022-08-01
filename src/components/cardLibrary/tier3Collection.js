import PathCard from './PathCard.js'

import generalCurrency from './tier0-general/generalCurrency.js'

import brownSashImage from './tier3-refinement/rank7-brown/brown-sash.png'
import brownMindImage1 from './tier3-refinement/rank7-brown/brown-mind-8weak.png'
import brownMindImage2 from './tier3-refinement/rank7-brown/brown-mind-8devastation.png'
import brownMindImage3 from './tier3-refinement/rank7-brown/brown-mind-4external.png'
import brownMindImage4 from './tier3-refinement/rank7-brown/brown-mind-4internal.png'
import brownMindImage5 from './tier3-refinement/rank7-brown/brown-mind-batjikbatlei.png'
import brownTechBigSmallImage from './tier3-refinement/rank7-brown/brown-tech-bigsmall.png'
import brownTechLongPoleImage from './tier3-refinement/rank7-brown/brown-tech-longpole.png'
import brownTechMantisImage from './tier3-refinement/rank7-brown/brown-tech-mantis.png'
import brownTrainingManualImage from './tier3-refinement/rank7-brown/brown-trainingManual.png'

import goldSashImage from './tier3-refinement/rank8-gold/gold-sash.png'
import goldMindImage1 from './tier3-refinement/rank8-gold/gold-mind-batdiubatdeng.png'
import goldMindImage2 from './tier3-refinement/rank8-gold/gold-mind-fongyun.png'
import goldMindImage3 from './tier3-refinement/rank8-gold/gold-mind-4ounces.png'
import goldMindImage4 from './tier3-refinement/rank8-gold/gold-mind-siudikdaai.png'
import goldMindImage5 from './tier3-refinement/rank8-gold/gold-mind-yanjeunlaaihung.png'
import goldTechMantisImage from './tier3-refinement/rank8-gold/gold-tech-mantis.png'
import goldTechBladedImage from './tier3-refinement/rank8-gold/gold-tech-bladed.png'
import goldTechCreationImage from './tier3-refinement/rank8-gold/gold-tech-creation.png'
import goldTrainingManualImage from './tier3-refinement/rank8-gold/gold-trainingManual.png'

import redSashImage from './tier3-refinement/rank9-red/red-sash.png'

import forgeInvitationImage from './tier0-general/currency/forge-invitation.png'
import proficiencySilverInitiateImage from './tier0-general/proficiency-silver-initiate.png'
import sealLeopardImage from './tier0-general/currency/seal-leopard.png'
import sealMonkeyImage from './tier0-general/currency/seal-monkey.png'

export default function refinementTier()
{
    const t3 = {}

    const t0 = generalCurrency()

    t3.brownSash = new PathCard({}, brownSashImage, 'Brown Sash', 'Refinement Chamber')
    t3.brownMind8Weakening = new PathCard({}, brownMindImage1, '8 Points of Weakening', '');
    t3.brownMind8Devastation = new PathCard({}, brownMindImage2, '8 Points of Devastation', '');
    t3.brownMindSeNgoiLin = new PathCard({}, brownMindImage3, 'Sei Ngoi Lin', 'Four External Practices');
    t3.brownMindSeiNaapLin = new PathCard({}, brownMindImage4, 'Sei Naap Lin', 'Four Internal Practices');
    t3.brownMindBatJikBatLei = new PathCard({}, brownMindImage5, 'Bat Jik Bat Lei', 'Engagement Distance');
    t3.brownTechDaaiFuNgaan = new PathCard({}, brownTechBigSmallImage, 'Daai Fu Ngaan Kyun', 'Big Tigers and Wild Geese');
    t3.brownTechSixHarmonyStaff = new PathCard({}, brownTechLongPoleImage, 'Luk Hap Gwan', 'Six Harmony Staff');
    t3.brownTechAny = new PathCard({}, brownTechMantisImage, 'Any Acquired Set', 'Choose one Technical Card');
    t3.brownTrainingManual = new PathCard({}, brownTrainingManualImage, 'The Jade Emperor Temple', 'Choose one Technical Card');
    t3.brownProficiency = new PathCard({}, proficiencySilverInitiateImage, 'Silver Proficiency', 'Development Tier or Higher')
    t3.brownSeals = new PathCard({}, sealLeopardImage, '10 Seals Collected', 'Any combination of Leopard, Snake, and Crane')
    // t3.brownTechMuiFaLou = new PathCard({}, yellowTechImage, 'Mui Fa Lou Kyun', 'Plum Blossom Routine Boxing');
    t3.brownEvaluation = new PathCard({}, forgeInvitationImage, 'Development Chamber Evaluation', '80% score or greater')
    t3.brownAdvancement = new PathCard(t0.advancementTier3)

    t3.brown = [
        t3.brownSash, t3.brownMind8Weakening, t3.brownMind8Devastation, t3.brownMindSeNgoiLin, t3.brownMindSeiNaapLin, t3.brownMindBatJikBatLei, t3.brownTechDaaiFuNgaan, t3.brownTechSixHarmonyStaff, t3.brownTechAny, t3.brownTrainingManual, t3.brownProficiency, t3.brownSeals, t3.brownEvaluation, t3.brownAdvancement
    ]

    t3.goldSash = new PathCard({}, goldSashImage, 'Gold Sash', 'Refinement Chamber')
    t3.goldMindBatDiuBatDeng = new PathCard({}, goldMindImage1, 'Bat Diu Bat Deng', 'Cling without Resistance');
    t3.goldMindFongYun = new PathCard({}, goldMindImage2, 'Fong Yun', 'Square and Round');
    t3.goldMind4Ounces = new PathCard({}, goldMindImage3, 'Sei Leung But Chin Gan', '4 Ounces Overcome 1000 Pounds');
    t3.goldMindSiuDikDaai = new PathCard({}, goldMindImage4, 'Siu Dik Daai, Maan Dik Faai', 'Defeat Big with Small, Fast with Slow');
    t3.goldMindYanJeunLaaiHung = new PathCard({}, goldMindImage5, 'Yan Jeun Laai Hung', 'Attract into Emptiness');
    t3.goldTechTongLongCheutDung = new PathCard({}, goldTechMantisImage, 'Tong Long Cheut Dung Kyun', 'Praying Mantis Exits the Cave');
    t3.goldTechYinChingDaanDou = new PathCard({}, goldTechBladedImage, 'Yin Ching Daan Dou', "Yin Ching's Broadsword");
    t3.goldTechSpeedOfHands = new PathCard({}, goldTechCreationImage, 'Speed of Hands Routine', 'Personal Creation');
    t3.goldTechAny = new PathCard({}, goldTechMantisImage, 'Any Acquired Set', 'Choose one Technical Card');
    t3.goldTrainingManual = new PathCard({}, goldTrainingManualImage, 'The Shandong Countryside', 'Choose one Technical Card');
    t3.goldProficiency = new PathCard({}, proficiencySilverInitiateImage, 'Silver Proficiency', 'Development Tier or Higher')
    t3.goldSeals = new PathCard({}, sealMonkeyImage, '10 Seals Collected', 'Any combination of Monkey, Tiger, and Dragon')
    t3.goldAdvancement = new PathCard(t0.advancementTier3)

    t3.gold = [
        t3.goldSash, t3.goldMindBatDiuBatDeng, t3.goldMindFongYun, t3.goldMind4Ounces, t3.goldMindSiuDikDaai, t3.goldMindYanJeunLaaiHung, t3.goldTechTongLongCheutDung, t3.goldTechYinChingDaanDou, t3.goldTechSpeedOfHands, t3.goldTechAny, t3.goldTrainingManual, t3.goldProficiency, t3.goldSeals, t3.goldAdvancement
    ]

    t3.redSash = new PathCard({}, redSashImage, 'Red Sash', 'Refinement Chamber')
    t3.redMind1= new PathCard({}, forgeInvitationImage, '?', '');
    t3.redMind2 = new PathCard({}, forgeInvitationImage, '?', '');
    t3.redMind3 = new PathCard({}, forgeInvitationImage, '?', '');
    t3.redMind4 = new PathCard({}, forgeInvitationImage, '?', '');
    t3.redMind5 = new PathCard({}, forgeInvitationImage, '?', '');
    t3.redTech1 = new PathCard({}, forgeInvitationImage, '?', '');
    t3.redTech2 = new PathCard({}, forgeInvitationImage, '?', '');
    t3.redTech3 = new PathCard({}, forgeInvitationImage, '?', 'Personal Creation')
    t3.redTechAny = new PathCard({}, forgeInvitationImage, 'Any Acquired Set', 'Choose one Technical Card');
    t3.redTrainingManual = new PathCard({}, forgeInvitationImage, '?', 'Choose one Technical Card');
    t3.redProficiency1 = new PathCard({}, forgeInvitationImage, 'Gold Proficiency', 'Development Tier or Higher')
    t3.redProficiency2 = new PathCard({}, forgeInvitationImage, 'Speed of Hands Routine', 'Silver Proficiency or Higher')
    t3.redSeals = new PathCard({}, forgeInvitationImage, '10 Seals Collected', 'Any combination of Tortoise, Lion, and Bird')
    t3.redAdvancement = new PathCard(t0.advancementTier3)

    t3.red = [
        t3.redSash, t3.redMind1, t3.redMind2, t3.redMind3, t3.redMind4, t3.redMind5, t3.redTech1, t3.redTech2, t3.redTech3, t3.redTechAny, t3.redTrainingManual, t3.redProficiency1, t3.redProficiency2, t3.redSeals, t3.redAdvancement
    ]

    return t3;
}