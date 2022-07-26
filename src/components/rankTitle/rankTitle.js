import './rankTitle.css'

export default function rankTitle(containerElement)
{
    // Create HTML element and insert text
    const rankTitle = document.createElement('h2')
    rankTitle.classList.add('rank-title')
    containerElement.appendChild(rankTitle)


    // Create array for class list
    const rankTitleStyles = [
        'whiteSash', 'yellowSash', 'orangeSash', 'purpleSash', 'blueSash', 'greenSash', 'brownSash', 'goldSash', 'redSash', 'blackSash'
    ]

    const rankTitleText = [
        'White Sash', 'Yellow Sash', 'Orange Sash', 'Purple Sash', 'Blue Sash', 'Green Sash', 'Brown Sash', 'Gold Sash', 'Red Sash', 'Black Sash'
    ]


    // Style-switching functionality
    rankTitle.rankChange = function(rank)
    {
        for(let i=0; i < rankTitleStyles.length; i++)
        {
            rankTitle.classList.remove(rankTitleStyles[i]);
        }

        rankTitle.classList.add(rankTitleStyles[rank])
        rankTitle.innerText = rankTitleText[rank]
        rankTitle.rank = rank

    }

    rankTitle.rankChange(0);

    return rankTitle;
}