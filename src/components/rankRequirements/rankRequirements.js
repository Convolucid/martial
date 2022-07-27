import './rankRequirements.css'
import whiteTechImage from './cardImages/white-tech.png'

export default function rankRequirements(containerElement)
{
    // Create HTML element and insert text
    const rankRequirements = document.createElement('section')
    rankRequirements.classList.add('rank-requirements', 'rank-requirements-whiteSash')
    containerElement.appendChild(rankRequirements)


    function createCard(cardImage, cardText)
    {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card-container')

        const card = new Image()
        card.src = cardImage
        card.classList.add('card-image', 'card-curriculum-view')
        cardContainer.appendChild(card)

        const text = document.createElement('p')
        text.innerText = cardText
        text.classList.add('card-text')
        cardContainer.appendChild(text)


        rankRequirements.appendChild(cardContainer)
        return cardContainer;
    }
    
    const whiteTech8ChainPunch1 = createCard(whiteTechImage, 'Eight Chain Punch, 1st Route');
    const whiteTechIronPhoenixCombo1 = createCard(whiteTechImage, 'Iron Phoenix Combination, 1st Route');



    // // Create array for class list
    // const rankTitleStyles = [
    //     'whiteSash', 'yellowSash', 'orangeSash', 'purpleSash', 'blueSash', 'greenSash', 'brownSash', 'goldSash', 'redSash', 'blackSash'
    // ]

    // const rankTitleText = [
    //     'White Sash', 'Yellow Sash', 'Orange Sash', 'Purple Sash', 'Blue Sash', 'Green Sash', 'Brown Sash', 'Gold Sash', 'Red Sash', 'Black Sash'
    // ]


    // // Style-switching functionality
    // rankTitle.rankChange = function(rank)
    // {
    //     for(let i=0; i < rankTitleStyles.length; i++)
    //     {
    //         rankTitle.classList.remove(rankTitleStyles[i]);
    //     }

    //     rankTitle.classList.add(rankTitleStyles[rank])
    //     rankTitle.innerText = rankTitleText[rank]
    //     rankTitle.rank = rank

    // }

    // rankTitle.rankChange(0);

    return rankRequirements;
}