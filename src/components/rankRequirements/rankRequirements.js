import './rankRequirements.css'

export default function rankRequirements(containerElement)
{
    // Create HTML element and insert text
    const rankRequirements = document.createElement('section')
    rankRequirements.classList.add('rank-requirements')
    containerElement.appendChild(rankRequirements)


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