import './rankRequirements.css'
import advancementImage from './cardImages/advancement.png'
import whiteSashImage from './cardImages/white-sash.png'
import whiteTechImage from './cardImages/white-tech.png'
import whiteMindImage1 from './cardImages/white-mindset-tiu.png'
import whiteMindImage2 from './cardImages/white-mindset-css.png'

export default function rankRequirements(containerElement)
{
    // Create HTML element and insert text
    const rankRequirements = document.createElement('section')
    rankRequirements.classList.add('rank-requirements', 'rank-requirements-whiteSash')
    containerElement.appendChild(rankRequirements)


    // Create grid container element for large card display on left
    const cardDisplayPanel = document.createElement('div')
    cardDisplayPanel.classList.add('rank-requirements-card-display')
    rankRequirements.appendChild(cardDisplayPanel)

    const curriculumDisplayPanel = document.createElement('div')
    curriculumDisplayPanel.classList.add('rank-requirements-curriculum-display')
    rankRequirements.appendChild(curriculumDisplayPanel)

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
    const whiteAdvancement2 = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')
    const whiteAdvancement3 = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')
    const whiteAdvancement4 = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')
    const whiteAdvancement5 = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')
    const whiteAdvancement6 = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')
    const whiteAdvancement7 = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')

    const rankRequirementsWhite = [
        whiteSash, whiteMindTiu, whiteMindCheuiSaamSau, whiteTechIronPhoenixCombo1, whiteTech8ChainPunch2,  whiteAdvancement
        // whiteAdvancement3, whiteAdvancement4, whiteAdvancement5, whiteAdvancement2
    ]

    function displayFocalCard(cardName)
    {
        for(let i=0; i < rankRequirementsWhite.length; i++)
        {
            if(rankRequirementsWhite[i] == cardName)
            {
                cardDisplayPanel.appendChild(rankRequirementsWhite[i])
            }
            else
            {
                curriculumDisplayPanel.appendChild(rankRequirementsWhite[i])
                rankRequirementsWhite[i].classList.add('card-curriculum-display')
            }
        }
    }

    displayFocalCard(whiteSash);
    // Function to change 'active' card, resizing it and moving it to left, while also changing background and content


    // Create array for class list
    const rankRequirementsStyles = [
        'rank-requirements-whiteSash', 'rank-requirements-yellowSash', 'rank-requirements-orangeSash', 'rank-requirements-purpleSash', 'rank-requirements-blueSash', 'rank-requirements-greenSash', 'rank-requirements-brownSash', 'rank-requirements-goldSash', 'rank-requirements-redSash', 'rank-requirements-blackSash'
    ]


    // Style-switching functionality
    rankRequirements.rankChange = function(rank)
    {
        for(let i=0; i < rankRequirementsStyles.length; i++)
        {
            rankRequirements.classList.remove(rankRequirementsStyles[i]);
        }

        rankRequirements.classList.add(rankRequirementsStyles[rank])
    }

    // rankTitle.rankChange(0);

    return rankRequirements;
}