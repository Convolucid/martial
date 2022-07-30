import './rankRequirements.css'

import advancementImage from './cardImages/advancement.png'
import forgeInvitationImage from './cardImages/forge-invitation.png'
import proficiencyBronzeInitiateImage from './cardImages/proficiency-bronze-initiate.png'
import proficiencyBronzeChoreoImage from './cardImages/proficiency-bronze-choreo.png'
import proficiencySilverInitiateImage from './cardImages/proficiency-silver-initiate.png'

import sealLeopardImage from './cardImages/seal-leopard.png'
import sealMonkeyImage from './cardImages/seal-monkey.png'

import whiteSashImage from './cardImages/tier1-initiate/white-sash.png'
import whiteTechImage from './cardImages/tier1-initiate/white-tech.png'
import whiteMindImage1 from './cardImages/tier1-initiate/white-mind-tiu.png'
import whiteMindImage2 from './cardImages/tier1-initiate/white-mind-css.png'
import yellowSashImage from './cardImages/tier1-initiate/yellow-sash.png'
import yellowTechImage from './cardImages/tier1-initiate/yellow-tech.png'
import yellowMindImage1 from './cardImages/tier1-initiate/yellow-mind-jimnim.png'
import yellowMindImage2 from './cardImages/tier1-initiate/yellow-mind-au.png'
import orangeSashImage from './cardImages/tier1-initiate/orange-sash.png'
import orangeMindImage1 from './cardImages/tier1-initiate/orange-mind-choi.png'
import orangeMindImage2 from './cardImages/tier1-initiate/orange-mind-tipkaau.png'
import orangeTechImage from './cardImages/tier1-initiate/orange-tech.png'

import purpleSashImage from './cardImages/tier2-development/purple-sash.png'
import purpleMindImage1 from './cardImages/tier2-development/purple-mind-sung.png'
import purpleMindImage2 from './cardImages/tier2-development/purple-mind-gates.png'
import purpleMindImage3 from './cardImages/tier2-development/purple-mind-pok.png'
import purpleTech7KicksImage from './cardImages/tier2-development/purple-tech-7kicks.png'
import purpleTrainingManualImage from './cardImages/tier2-development/purple-trainingManual.png'
import blueSashImage from './cardImages/tier2-development/blue-sash.png'
import blueMindImage1 from './cardImages/tier2-development/blue-mind-mangam.png'
import blueMindImage2 from './cardImages/tier2-development/blue-mind-simjau.png'
import blueMindImage3 from './cardImages/tier2-development/blue-mind-tangno.png'
import blueTechChinWooImage from './cardImages/tier2-development/blue-tech-chinwoo.png'
import blueTechCreationImage from './cardImages/tier2-development/blue-tech-creation.png'
import blueTrainingManualImage from './cardImages/tier2-development/blue-trainingManual.png'
import greenSashImage from './cardImages/tier2-development/green-sash.png'
import greenMindImage1 from './cardImages/tier2-development/green-mind-lengheng.png'
import greenMindImage2 from './cardImages/tier2-development/green-mind-root.png'
import greenMindImage3 from './cardImages/tier2-development/green-mind-wancham.png'
import greenTechMantisImage from './cardImages/tier2-development/green-tech-mantis.png'
import greenTrainingManualImage from './cardImages/tier2-development/green-trainingManual.png'

import brownSashImage from './cardImages/tier3-refinement/brown-sash.png'
import brownMindImage1 from './cardImages/tier3-refinement/brown-mind-8weak.png'
import brownMindImage2 from './cardImages/tier3-refinement/brown-mind-8devastation.png'
import brownMindImage3 from './cardImages/tier3-refinement/brown-mind-4external.png'
import brownMindImage4 from './cardImages/tier3-refinement/brown-mind-4internal.png'
import brownMindImage5 from './cardImages/tier3-refinement/brown-mind-batjikbatlei.png'
import brownTechBigSmallImage from './cardImages/tier3-refinement/brown-tech-bigsmall.png'
import brownTechLongPoleImage from './cardImages/tier3-refinement/brown-tech-longpole.png'
import brownTechMantisImage from './cardImages/tier3-refinement/brown-tech-mantis.png'
import brownTrainingManualImage from './cardImages/tier3-refinement/brown-trainingManual.png'
import goldSashImage from './cardImages/tier3-refinement/gold-sash.png'
import goldMindImage1 from './cardImages/tier3-refinement/gold-mind-batdiubatdeng.png'
import goldMindImage2 from './cardImages/tier3-refinement/gold-mind-fongyun.png'
import goldMindImage3 from './cardImages/tier3-refinement/gold-mind-4ounces.png'
import goldMindImage4 from './cardImages/tier3-refinement/gold-mind-siudikdaai.png'
import goldMindImage5 from './cardImages/tier3-refinement/gold-mind-yanjeunlaaihung.png'
import goldTechMantisImage from './cardImages/tier3-refinement/gold-tech-mantis.png'
import goldTechBladedImage from './cardImages/tier3-refinement/gold-tech-bladed.png'
import goldTechCreationImage from './cardImages/tier3-refinement/gold-tech-creation.png'
import goldTrainingManualImage from './cardImages/tier3-refinement/gold-trainingManual.png'


import redSashImage from './cardImages/tier3-refinement/red-sash.png'


export default function rankRequirements(containerElement)
{
    // Create HTML element section for rank requirements
    const rankRequirementsSection = document.createElement('section')
    rankRequirementsSection.classList.add('rank-requirements-section')
    containerElement.appendChild(rankRequirementsSection)


    // Card creation function creates full information about card.  Will add in functions from imported "Card Challenge" and "Card info" sources so that all content is attached to the card element.

    function createCard(cardImage, cardTitle, cardSubtitle)
    {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card-container')

        cardContainer.cardImage = new Image()
        cardContainer.cardImage.src = cardImage
        cardContainer.cardImage.classList.add('card-image')

        cardContainer.cardTitle = document.createElement('h3')
        cardContainer.cardTitle.innerText = cardTitle
        cardContainer.cardTitle.classList.add('card-title')

        cardContainer.cardSubtitle = document.createElement('p')
        cardContainer.cardSubtitle.innerText = cardSubtitle
        cardContainer.cardSubtitle.classList.add('card-title', 'card-subtitle')


        cardContainer.append(cardContainer.cardImage)
        cardContainer.append(cardContainer.cardTitle)
        cardContainer.append(cardContainer.cardSubtitle)

        // Add function to add description

        // Add function to add challenges

        // Add function to add rewards

        return cardContainer;
    }

    // Will need a better grid, built with four sections each, image, title, subtitle, checkbox


    // Full list of curriculum cards sorted into sash rank arrays
    const whiteSash = createCard(whiteSashImage, 'White Sash', 'Initiate Chamber')
    const whiteMindTiu = createCard(whiteMindImage1, 'Tiu', 'the Warding Principle');
    const whiteMindCheuiSaamSau = createCard(whiteMindImage2, 'Cheui Saam Sau', 'the Three Hands of Mantis');
    const whiteTechIronPhoenixCombo1 = createCard(whiteTechImage, 'Iron Phoenix Combination', '1st Route');
    const whiteTech8ChainPunch2 = createCard(whiteTechImage, 'Eight Chain Punch', '2nd Route');
    const whiteAdvancement = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')

    const whiteRankRequirements = [
        whiteSash, whiteMindTiu, whiteMindCheuiSaamSau, whiteTechIronPhoenixCombo1, whiteTech8ChainPunch2, whiteAdvancement
    ]

    const yellowSash = createCard(yellowSashImage, 'Yellow Sash', 'Initiate Chamber')
    const yellowMindJimNim = createCard(yellowMindImage1, 'Jim, Nim', 'Contact and Cling');
    const yellowMindAu = createCard(yellowMindImage2, 'Au, Diu, Got', 'the Mantis Hook');
    const yellowTechIronPhoenixCombo2 = createCard(yellowTechImage, 'Iron Phoenix Combination', '2nd Route');
    const yellowTechInterceptingHammerFist = createCard(yellowTechImage, 'Intercepting Hammer Fist', '1st Route');
    const yellowAdvancement = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')

    const yellowRankRequirements = [
        yellowSash, yellowMindJimNim, yellowMindAu, yellowTechIronPhoenixCombo2, yellowTechInterceptingHammerFist, yellowAdvancement
    ]

    const orangeSash = createCard(orangeSashImage, 'Orange Sash', 'Initiate Chamber')
    const orangeMindChoi= createCard(orangeMindImage1, 'Choi', 'Plucking Methods');
    const orangeMindTipKaau = createCard(orangeMindImage2, 'Tip, Kaau', 'Lean on the Center');
    const orangeTechIronPhoenixCombo3 = createCard(orangeTechImage, 'Iron Phoenix Combination', '3rd Route');
    const orangeTechEightEssentials = createCard(orangeTechImage, 'Baat Jaak Yiu Sau', 'Eight Essential Movements');
    const orangeAdvancement = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')

    const orangeRankRequirements = [
        orangeSash, orangeMindChoi, orangeMindTipKaau, orangeTechIronPhoenixCombo3, orangeTechEightEssentials, orangeAdvancement
    ]

    const purpleSash = createCard(purpleSashImage, 'Purple Sash', 'Development Chamber')
    const purpleMindSung= createCard(purpleMindImage1, 'Sung', 'Empty Method');
    const purpleMindGates = createCard(purpleMindImage2, 'Gates', 'Inner and Outer, Life and Death');
    const purpleMindPokLauFung = createCard(purpleMindImage3, 'Pok, Lau, Fung', 'Ward, Grasp, and Seal');
    const purpleTechSevenKicks = createCard(purpleTech7KicksImage, 'Seven Kicks', '');
    const purpleTrainingManual = createCard(purpleTrainingManualImage, 'The Shaolin Monastery', 'Choose one Technical Card');
    const purpleProficiency = createCard(proficiencyBronzeInitiateImage, 'Bronze Proficiency', 'Initiate Tier or Higher')
    const purpleEvaluation = createCard(forgeInvitationImage, 'Initiate Chamber Evaluation', '80% score or greater')
    // const purpleTechDaaiFaanChe = createCard(yellowTechImage, 'Daai Faan Che Kyun', 'Big Wheel Fist');
    // const purpleTechYiLouJaakYiu = createCard(yellowTechImage, 'Yi Lou Jaak Yiu', '2nd Route Essentials');
    const purpleAdvancement = createCard(advancementImage, 'Advancement', 'Development Tier or higher')

    const purpleRankRequirements = [
        purpleSash, purpleMindSung, purpleMindGates, purpleMindPokLauFung, purpleTechSevenKicks, purpleTrainingManual, purpleProficiency, purpleEvaluation, purpleAdvancement
    ]

    const blueSash = createCard(blueSashImage, 'Blue Sash', 'Development Chamber')
    const blueMindManGam= createCard(blueMindImage1, 'Man Gam', 'Spatial Contextual Awareness');
    const blueMindSimJau = createCard(blueMindImage2, 'Sim, Jau', 'Dodging and Stalking');
    const blueMindTangNo = createCard(blueMindImage3, 'Tang No', 'Bouncing Step');
    const blueTechGungLik = createCard(blueTechChinWooImage, 'Gung Lik Kyun', 'Powerful Boxing');
    const blueTechFootwork = createCard(blueTechCreationImage, 'Stance Routine', 'Personal Creation')
    const blueTrainingManual = createCard(blueTrainingManualImage, 'The Forests of Laoshan', 'Choose one Technical Card');
    const blueProficiency = createCard(proficiencySilverInitiateImage, 'Silver Proficiency', 'Initiate Tier or Higher')
    // const blueTechDoGong = createCard(yellowTechImage, 'Do Gong Kyun', 'Avoiding the Hard');
    // const blueTechMuiFaSau = createCard(yellowTechImage, 'Mui Fa Sau', 'Plum Blossom Hand');
    const blueAdvancement = createCard(advancementImage, 'Advancement', 'Development Tier or higher')

    const blueRankRequirements = [
        blueSash, blueMindManGam, blueMindSimJau, blueMindTangNo, blueTechGungLik, blueTechFootwork, blueTrainingManual, blueProficiency, blueAdvancement
    ]

    const greenSash = createCard(greenSashImage, 'Green Sash', 'Development Chamber')
    const greenMindLengHeng= createCard(greenMindImage1, 'Leng, Heng', 'Lightness and Agility');
    const greenMindRoot = createCard(greenMindImage2, 'Root', '');
    const greenMindWanCham = createCard(greenMindImage3, 'Wan, Cham', 'Stability and Sinking');
    const greenTechTongLongBouSyun = createCard(greenTechMantisImage, 'Tong Long Bou Syun', 'Mantis Whirlwind Step');
    const greenTrainingManual = createCard(greenTrainingManualImage, 'Green Dragon Temple', 'Choose one Technical Card');
    const greenProficiency1 = createCard(proficiencyBronzeChoreoImage, 'Stance Routine', 'Bronze Proficiency or Higher')
    const greenProficiency2 = createCard(proficiencySilverInitiateImage, 'Silver Proficiency', 'Initiate Tier or Higher')
    // const greenTechBaakYunTauTou = createCard(yellowTechImage, 'Baak Yun Tau Tou', 'White Ape Steals the Peach');
    // const greenTechHaakFuGaauCha = createCard(yellowTechImage, 'Haak Fu Gaau Cha', 'Black Tiger Crossing');
    const greenAdvancement = createCard(advancementImage, 'Advancement', 'Development Tier or higher')

    const greenRankRequirements = [
        greenSash, greenMindLengHeng, greenMindRoot, greenMindWanCham, greenTechTongLongBouSyun, greenTrainingManual, greenProficiency1, greenProficiency2, greenAdvancement
    ]

    const brownSash = createCard(brownSashImage, 'Brown Sash', 'Refinement Chamber')
    const brownMind8Weakening = createCard(brownMindImage1, '8 Points of Weakening', '');
    const brownMind8Devastation = createCard(brownMindImage2, '8 Points of Devastation', '');
    const brownMindSeNgoiLin = createCard(brownMindImage3, 'Sei Ngoi Lin', 'Four External Practices');
    const brownMindSeiNaapLin = createCard(brownMindImage4, 'Sei Naap Lin', 'Four Internal Practices');
    const brownMindBatJikBatLei = createCard(brownMindImage5, 'Bat Jik Bat Lei', 'Engagement Distance');
    const brownTechDaaiFuNgaan = createCard(brownTechBigSmallImage, 'Daai Fu Ngaan Kyun', 'Big Tigers and Wild Geese');
    const brownTechSixHarmonyStaff = createCard(brownTechLongPoleImage, 'Luk Hap Gwan', 'Six Harmony Staff');
    const brownTechAny = createCard(brownTechMantisImage, 'Any Acquired Set', 'Choose one Technical Card');
    const brownTrainingManual = createCard(brownTrainingManualImage, 'The Jade Emperor Temple', 'Choose one Technical Card');
    const brownProficiency = createCard(proficiencySilverInitiateImage, 'Silver Proficiency', 'Development Tier or Higher')
    const brownSeals = createCard(sealLeopardImage, '10 Seals Collected', 'Any combination of Leopard, Snake, and Crane')
    // const brownTechMuiFaLou = createCard(yellowTechImage, 'Mui Fa Lou Kyun', 'Plum Blossom Routine Boxing');
    const brownEvaluation = createCard(forgeInvitationImage, 'Development Chamber Evaluation', '80% score or greater')
    const brownAdvancement = createCard(advancementImage, 'Advancement', 'Refinement Tier or higher')

    const brownRankRequirements = [
        brownSash, brownMind8Weakening, brownMind8Devastation, brownMindSeNgoiLin, brownMindSeiNaapLin, brownMindBatJikBatLei, brownTechDaaiFuNgaan, brownTechSixHarmonyStaff, brownTechAny, brownTrainingManual, brownProficiency, brownSeals, brownEvaluation, brownAdvancement
    ]

    const goldSash = createCard(goldSashImage, 'Gold Sash', 'Refinement Chamber')
    const goldMindBatDiuBatDeng = createCard(goldMindImage1, 'Bat Diu Bat Deng', 'Cling without Resistance');
    const goldMindFongYun = createCard(goldMindImage2, 'Fong Yun', 'Square and Round');
    const goldMind4Ounces = createCard(goldMindImage3, 'Sei Leung But Chin Gan', '4 Ounces Overcome 1000 Pounds');
    const goldMindSiuDikDaai = createCard(goldMindImage4, 'Siu Dik Daai, Maan Dik Faai', 'Defeat Big with Small, Fast with Slow');
    const goldMindYanJeunLaaiHung = createCard(goldMindImage5, 'Yan Jeun Laai Hung', 'Attract into Emptiness');
    const goldTechTongLongCheutDung = createCard(goldTechMantisImage, 'Tong Long Cheut Dung Kyun', 'Praying Mantis Exits the Cave');
    const goldTechYinChingDaanDou = createCard(goldTechBladedImage, 'Yin Ching Daan Dou', "Yin Ching's Broadsword");
    const goldTechSpeedOfHands = createCard(goldTechCreationImage, 'Speed of Hands Routine', 'Personal Creation');
    const goldTechAny = createCard(goldTechMantisImage, 'Any Acquired Set', 'Choose one Technical Card');
    const goldTrainingManual = createCard(goldTrainingManualImage, 'The Shandong Countryside', 'Choose one Technical Card');
    const goldProficiency = createCard(proficiencySilverInitiateImage, 'Silver Proficiency', 'Development Tier or Higher')
    const goldSeals = createCard(sealMonkeyImage, '10 Seals Collected', 'Any combination of Monkey, Tiger, and Dragon')
    const goldAdvancement = createCard(advancementImage, 'Advancement', 'Refinement Tier or higher')

    const goldRankRequirements = [
        goldSash, goldMindBatDiuBatDeng, goldMindFongYun, goldMind4Ounces, goldMindSiuDikDaai, goldMindYanJeunLaaiHung, goldTechTongLongCheutDung, goldTechYinChingDaanDou, goldTechSpeedOfHands, goldTechAny, goldTrainingManual, goldProficiency, goldSeals, goldAdvancement
    ]

    const redSash = createCard(redSashImage, 'Red Sash', 'Refinement Chamber')
    const redMind1= createCard(forgeInvitationImage, '?', '');
    const redMind2 = createCard(forgeInvitationImage, '?', '');
    const redMind3 = createCard(forgeInvitationImage, '?', '');
    const redMind4 = createCard(forgeInvitationImage, '?', '');
    const redMind5 = createCard(forgeInvitationImage, '?', '');
    const redTech1 = createCard(forgeInvitationImage, '?', '');
    const redTech2 = createCard(forgeInvitationImage, '?', '');
    const redTech3 = createCard(forgeInvitationImage, '?', 'Personal Creation')
    const redTechAny = createCard(forgeInvitationImage, 'Any Acquired Set', 'Choose one Technical Card');
    const redTrainingManual = createCard(forgeInvitationImage, '?', 'Choose one Technical Card');
    const redProficiency1 = createCard(forgeInvitationImage, 'Gold Proficiency', 'Development Tier or Higher')
    const redProficiency2 = createCard(forgeInvitationImage, 'Speed of Hands Routine', 'Silver Proficiency or Higher')
    const redSeals = createCard(forgeInvitationImage, '10 Seals Collected', 'Any combination of Tortoise, Lion, and Bird')
    const redAdvancement = createCard(advancementImage, 'Advancement', 'Refinement Tier or higher')

    const redRankRequirements = [
        redSash, redMind1, redMind2, redMind3, redMind4, redMind5, redTech1, redTech2, redTech3, redTechAny, redTrainingManual, redProficiency1, redProficiency2, redSeals, redAdvancement
    ]

    const blackSash = createCard(forgeInvitationImage, 'Black Sash', 'Adept Chamber')
    const blackMind1= createCard(forgeInvitationImage, '?', '');
    const blackMind2 = createCard(forgeInvitationImage, '?', '');
    const blackMind3 = createCard(forgeInvitationImage, '?', '');
    const blackMind4 = createCard(forgeInvitationImage, '?', '');
    const blackMind5 = createCard(forgeInvitationImage, '?', '');
    const blackTech1 = createCard(forgeInvitationImage, '?', '');
    const blackTech2 = createCard(forgeInvitationImage, '?', '');
    const blackTech3 = createCard(forgeInvitationImage, '?', 'Personal Creation')
    const blackTrainingManual = createCard(forgeInvitationImage, '?', 'Choose one Technical Card');
    const blackAdvancement = createCard(advancementImage, 'Advancement', 'Adept Tier or higher')

    const blackRankRequirements = [
        blackSash, blackMind1, blackMind2, blackMind3, blackMind4, blackMind5, blackTech1, blackTech2, blackTech3, blackTrainingManual, blackAdvancement
    ]


    // Create panels from rank requirement arrays
    function createRankRequirementsPanel(array)
    {
        const rankRequirements = document.createElement('article')
        rankRequirements.classList.add('rank-requirements')
        rankRequirementsSection.appendChild(rankRequirements)

        rankRequirements.cardDisplayPanel = document.createElement('div')
        rankRequirements.cardDisplayPanel.classList.add('rank-requirements-card-display')
        rankRequirements.appendChild(rankRequirements.cardDisplayPanel)

        rankRequirements.curriculumDisplayPanel = document.createElement('div')
        rankRequirements.curriculumDisplayPanel.classList.add('rank-requirements-curriculum-display')
        rankRequirements.appendChild(rankRequirements.curriculumDisplayPanel)

        for(let i=0; i < array.length; i++)
        {
            if(i == 0)
            {
                rankRequirements.cardDisplayPanel.appendChild(array[0])
            }
            else
            {
                rankRequirements.curriculumDisplayPanel.appendChild(array[i])
            }
        }

        rankRequirements.array = array

        return rankRequirements;
    }

    const whiteRankRequirementsPanel = createRankRequirementsPanel(whiteRankRequirements)
    const yellowRankRequirementsPanel = createRankRequirementsPanel(yellowRankRequirements)
    const orangeRankRequirementsPanel = createRankRequirementsPanel(orangeRankRequirements)
    const purpleRankRequirementsPanel = createRankRequirementsPanel(purpleRankRequirements)
    const blueRankRequirementsPanel = createRankRequirementsPanel(blueRankRequirements)
    const greenRankRequirementsPanel = createRankRequirementsPanel(greenRankRequirements)
    const brownRankRequirementsPanel = createRankRequirementsPanel(brownRankRequirements)
    const goldRankRequirementsPanel = createRankRequirementsPanel(goldRankRequirements)
    const redRankRequirementsPanel = createRankRequirementsPanel(redRankRequirements)
    const blackRankRequirementsPanel = createRankRequirementsPanel(blackRankRequirements)

    const rankRequirementsPanelArray = [
        whiteRankRequirementsPanel, yellowRankRequirementsPanel, orangeRankRequirementsPanel, purpleRankRequirementsPanel, blueRankRequirementsPanel, greenRankRequirementsPanel, brownRankRequirementsPanel, goldRankRequirementsPanel, redRankRequirementsPanel, blackRankRequirementsPanel
    ]


    // Function to choose panel to display
    function displayCurriculum(panel)
    {
        for(let i=0; i < rankRequirementsPanelArray.length; i++)
        {
            if(rankRequirementsPanelArray[i] == panel)
            {
                rankRequirementsPanelArray[i].classList.remove('rank-requirements-hidden')
            }
            else
            {
                rankRequirementsPanelArray[i].classList.add('rank-requirements-hidden')
            }
        }
    }

    // Create array for style class list
    const rankRequirementsStyles = [
        'rank-requirements-whiteSash', 'rank-requirements-yellowSash', 'rank-requirements-orangeSash', 'rank-requirements-purpleSash', 'rank-requirements-blueSash', 'rank-requirements-greenSash', 'rank-requirements-brownSash', 'rank-requirements-goldSash', 'rank-requirements-redSash', 'rank-requirements-blackSash'
    ]


    // Style-switching functionality
    rankRequirementsSection.rankChange = function(rank)
    {
        for(let i=0; i < rankRequirementsStyles.length; i++)
        {
            rankRequirementsSection.classList.remove(rankRequirementsStyles[i]);
        }

        displayCurriculum(rankRequirementsPanelArray[rank])
        rankRequirementsSection.classList.add(rankRequirementsStyles[rank])

    }

    rankRequirementsSection.rankChange(0);

    // Add card selection function
    function focalCardSelector(rankRequirementsPanel, rankCardArray, cardName) 
    {
        for(let i=0; i < rankCardArray.length; i++)
        {
            if(rankCardArray[i] == cardName)
            {
                rankRequirementsPanel.cardDisplayPanel.appendChild(rankCardArray[i])
            }
            else
            {
                rankRequirementsPanel.curriculumDisplayPanel.appendChild(rankCardArray[i])
            }
        }
    }

    // focalCardSelector(whiteRankRequirementsPanel, whiteRankRequirements, whiteMindTiu)
    // focalCardSelector(whiteRankRequirementsPanel, whiteRankRequirements, whiteMindCheuiSaamSau)

    // Run through all cards and add onclicks
    for(let i=0; i < rankRequirementsPanelArray.length; i++)
    {
        for(let j=0; j < rankRequirementsPanelArray[i].array.length; j++)
        {
            rankRequirementsPanelArray[i].array[j].addEventListener('click', function()
                {
                    focalCardSelector(
                        rankRequirementsPanelArray[i], 
                        rankRequirementsPanelArray[i].array, 
                        rankRequirementsPanelArray[i].array[j]
                    )
                }
            )
        }
    }


    return rankRequirementsSection;
}