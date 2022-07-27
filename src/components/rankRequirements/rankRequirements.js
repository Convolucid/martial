import './rankRequirements.css'
import advancementImage from './cardImages/advancement.png'
import whiteSashImage from './cardImages/white-sash.png'
import whiteTechImage from './cardImages/white-tech.jpg'
import whiteMindsetImage1 from './cardImages/white-mindset1.jpg'
import whiteMindsetImage2 from './cardImages/white-mindset2.png'

export default function rankRequirements(containerElement)
{
    // Create HTML element and insert text
    const rankRequirements = document.createElement('section')
    rankRequirements.classList.add('rank-requirements', 'rank-requirements-whiteSash')
    containerElement.appendChild(rankRequirements)


// Create grid container element for large card display on left

    function createCard(cardImage, cardTitle, cardSubtitle)
    {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card-container')

        const card = new Image()
        card.src = cardImage
        card.classList.add('card-image', 'card-curriculum-view')
        cardContainer.appendChild(card)

        const title = document.createElement('h3')
        title.innerText = cardTitle
        title.classList.add('card-title')
        cardContainer.appendChild(title)

        const subtitle = document.createElement('p')
        subtitle.innerText = cardSubtitle
        subtitle.classList.add('card-title', 'card-subtitle')
        cardContainer.appendChild(subtitle)


        rankRequirements.appendChild(cardContainer)
        return cardContainer;
    }
    
    const whiteSash = createCard(whiteSashImage, 'White Sash', 'Initiate Chamber')
    const whiteTech8ChainPunch1 = createCard(whiteTechImage, 'Eight Chain Punch', '1st Route');
    const whiteTechIronPhoenixCombo1 = createCard(whiteTechImage, 'Iron Phoenix Combination', '1st Route');
    const whiteMindset1 = createCard(whiteMindsetImage1, 'Tiu', 'the Warding Principle');
    const whiteMindset2 = createCard(whiteMindsetImage2, 'Cheui Saam Sau', 'the Three Hands of Mantis');
    const advancement = createCard(advancementImage, 'Advancement', 'Initiate Tier or higher')



    // Function to change 'active' card, resizing it and moving it to left, while also changing background and content


    // Create array for class list
    const rankRequirementsStyles = [
        'rank-requirements-whiteSash', 'rank-requirements-yellowSash', 'rank-requirements-orangeSash', 'rank-requirements-purpleSash', 'rank-requirements-blueSash', 'rank-requirements-greenSash', 'rank-requirements-brownSash', 'rank-requirements-goldSash', 'rank-requirements-redSash', 'rank-requirements-blackSash'
    ]

    // const rankTitleText = [
    //     'White Sash', 'Yellow Sash', 'Orange Sash', 'Purple Sash', 'Blue Sash', 'Green Sash', 'Brown Sash', 'Gold Sash', 'Red Sash', 'Black Sash'
    // ]


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