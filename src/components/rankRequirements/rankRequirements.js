import './rankRequirements.css'
import advancementImage from './cardImages/advancement.png'
import whiteSashImage from './cardImages/white-sash.png'
import whiteTechImage from './cardImages/white-tech.png'
import whiteMindImage1 from './cardImages/white-mindset-tiu.png'
import whiteMindImage2 from './cardImages/white-mindset-css.png'
import yellowSashImage from './cardImages/yellow-sash.png'
import yellowTechImage from './cardImages/yellow-tech.png'
import yellowMindImage1 from './cardImages/yellow-mindset-jimnim.png'
import yellowMindImage2 from './cardImages/yellow-mindset-au.png'

export default function rankRequirements(containerElement)
{
    // Create HTML element section for rank requirements
    const rankRequirementsSection = document.createElement('section')
    rankRequirementsSection.classList.add('rank-requirements-section')
    containerElement.appendChild(rankRequirementsSection)






    // Create grid container element for large card display on left
    // const cardDisplayPanel = document.createElement('div')
    // cardDisplayPanel.classList.add('rank-requirements-card-display')
    // rankRequirements.appendChild(cardDisplayPanel)

    // const curriculumDisplayPanel = document.createElement('div')
    // curriculumDisplayPanel.classList.add('rank-requirements-curriculum-display')
    // rankRequirements.appendChild(curriculumDisplayPanel)

    function createCard(cardImage, cardTitle, cardSubtitle)
    {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card-container')

        const card = new Image()
        card.src = cardImage
        card.classList.add('card-image')
        cardContainer.appendChild(card)

        const title = document.createElement('h3')
        title.innerText = cardTitle
        title.classList.add('card-title')
        cardContainer.appendChild(title)

        const subtitle = document.createElement('p')
        subtitle.innerText = cardSubtitle
        subtitle.classList.add('card-title', 'card-subtitle')
        cardContainer.appendChild(subtitle)

        return cardContainer;
    }
    
    const whiteSash = createCard(whiteSashImage, 'White Sash', 'Initiate Chamber')
    const whiteMindTiu = createCard(whiteMindImage1, 'Tiu', 'the Warding Principle');
    const whiteMindCheuiSaamSau = createCard(whiteMindImage2, 'Cheui Saam Sau', 'the Three Hands of Mantis');
    const whiteTechIronPhoenixCombo1 = createCard(whiteTechImage, 'Iron Phoenix Combination', '1st Route');
    const whiteTech8ChainPunch2 = createCard(whiteTechImage, 'Eight Chain Punch', '2nd Route');
    const whiteAdvancement = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')

    const whiteRankRequirements = [
        whiteSash, whiteMindTiu, whiteMindCheuiSaamSau, whiteTechIronPhoenixCombo1, whiteTech8ChainPunch2,  whiteAdvancement
    ]

    const yellowSash = createCard(yellowSashImage, 'Yellow Sash', 'Initiate Chamber')
    const yellowMindJimNim = createCard(yellowMindImage1, 'Jim, Nim', 'Contact and Cling');
    const yellowMindAu = createCard(yellowMindImage2, 'Au, Diu, Got', 'the Mantis Hook');
    const yellowTechIronPhoenixCombo2 = createCard(yellowTechImage, 'Iron Phoenix Combination', '2nd Route');
    const yellowTechInterceptingHammerFist = createCard(yellowTechImage, 'Intercepting Hammer Fist');
    const yellowAdvancement = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')

    const yellowRankRequirements = [
        yellowSash, yellowMindJimNim, yellowMindAu, yellowTechIronPhoenixCombo2, yellowTechInterceptingHammerFist,  yellowAdvancement
    ]


    // Create panels from rank requirement arrays
    function createRankRequirementsPanel(array)
    {
        const rankRequirements = document.createElement('article')
        rankRequirements.classList.add('rank-requirements')
        rankRequirementsSection.appendChild(rankRequirements)

        const cardDisplayPanel = document.createElement('div')
        cardDisplayPanel.classList.add('rank-requirements-card-display')
        rankRequirements.appendChild(cardDisplayPanel)

        const curriculumDisplayPanel = document.createElement('div')
        curriculumDisplayPanel.classList.add('rank-requirements-curriculum-display')
        rankRequirements.appendChild(curriculumDisplayPanel)

        for(let i=0; i < array.length; i++)
        {
            if(i == 0)
            {
                cardDisplayPanel.appendChild(array[0])
            }
            else
            {
                curriculumDisplayPanel.appendChild(array[i])
            }
        }

        return rankRequirements;
    }

    const whiteRankRequirementsPanel = createRankRequirementsPanel(whiteRankRequirements)
    const yellowRankRequirementsPanel = createRankRequirementsPanel(yellowRankRequirements)

    const rankRequirementsPanelArray = [
        whiteRankRequirementsPanel, yellowRankRequirementsPanel
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

    return rankRequirementsSection;
}