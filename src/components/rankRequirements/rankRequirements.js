import './rankRequirements.css'

import CategoryPanel from '../cardLibrary/CategoryPanel.js'

import initiateTierCollection from '../cardLibrary/tier1Collection'
import developmentTierCollection from '../cardLibrary/tier2Collection'
import refinementTierCollection from '../cardLibrary/tier3Collection'
import adeptTierCollection from '../cardLibrary/tier4Collection'

export default function rankRequirements(containerElement)
{
    // Create HTML element section for rank requirements
    const rankRequirementsSection = document.createElement('section')
    rankRequirementsSection.classList.add('rank-requirements-section')
    containerElement.appendChild(rankRequirementsSection)

    // Will need a better grid, built with four sections each, image, title, subtitle, checkbox

    // Create panels from rank requirement arrays
    const initiateTier = initiateTierCollection()
    const developmentTier = developmentTierCollection()
    const refinementTier = refinementTierCollection()
    const adeptTier = adeptTierCollection()

    const whiteRankRequirementsPanel = new CategoryPanel(initiateTier.white, rankRequirementsSection)
    const yellowRankRequirementsPanel = new CategoryPanel(initiateTier.yellow, rankRequirementsSection)
    const orangeRankRequirementsPanel = new CategoryPanel(initiateTier.orange, rankRequirementsSection)

    const purpleRankRequirementsPanel = new CategoryPanel(developmentTier.purple, rankRequirementsSection)
    const blueRankRequirementsPanel = new CategoryPanel(developmentTier.blue, rankRequirementsSection)
    const greenRankRequirementsPanel = new CategoryPanel(developmentTier.green, rankRequirementsSection)

    const brownRankRequirementsPanel = new CategoryPanel(refinementTier.brown, rankRequirementsSection)
    const goldRankRequirementsPanel = new CategoryPanel(refinementTier.gold, rankRequirementsSection)
    const redRankRequirementsPanel = new CategoryPanel(refinementTier.red, rankRequirementsSection)

    const blackRankRequirementsPanel = new CategoryPanel(adeptTier.black, rankRequirementsSection)

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



    // Card selection function displays focal card and respective information (challenges, rewards, text)
    function focalCardSelector(rankRequirementsPanel, rankCardArray, cardName) 
    {
        // When the sash card is clicked, it returns to focal area, and all other cards are revealed and returned to the curriculum display area.
        if(cardName == rankCardArray[0])
        {
            rankRequirementsPanel.curriculumDisplayPanel.classList.replace('rank-requirements-card-information-display','rank-requirements-curriculum-display')

            rankCardArray[0].classList.replace('rank-requirements-card-display-overlay', 'rank-requirements-card-display')
            rankCardArray[0].cardTitle.classList.remove('rank-requirements-hidden')
            rankCardArray[0].cardSubtitle.classList.remove('rank-requirements-hidden')
            rankCardArray.forEach(card => {card.classList.remove('rank-requirements-hidden')})

            // Index is 1 instead of 0 here because we are always skipping the Sash Card in the initial position
            for(let i=1; i < rankCardArray.length; i++)
            {
                rankCardArray[i].cardDescription.classList.add('rank-requirements-hidden')
                rankCardArray[i].cardChallenges.classList.add('rank-requirements-hidden')
                rankCardArray[i].cardRewards.classList.add('rank-requirements-hidden')
                rankRequirementsPanel.curriculumDisplayPanel.appendChild(rankCardArray[i])
            }

        }

        // when a curriculum card is clicked, the sash card is changed to overlay mode, the curriculum card is added to the focal area, and all cards other than it and the sash card are hidden.
        else
        {
            rankRequirementsPanel.curriculumDisplayPanel.classList.replace('rank-requirements-curriculum-display', 'rank-requirements-card-information-display')

            rankCardArray[0].classList.add('rank-requirements-card-display-overlay')
            rankCardArray[0].cardTitle.classList.add('rank-requirements-hidden')
            rankCardArray[0].cardSubtitle.classList.add('rank-requirements-hidden')
            
            for(let i=1; i < rankCardArray.length; i++)
            {
                if(rankCardArray[i] == cardName)
                {
                    rankRequirementsPanel.cardDisplayPanel.appendChild(rankCardArray[i])
                    rankRequirementsPanel.curriculumDisplayPanel.append(rankCardArray[i].cardDescription)
                    rankRequirementsPanel.curriculumDisplayPanel.append(rankCardArray[i].cardChallenges)
                    rankRequirementsPanel.curriculumDisplayPanel.append(rankCardArray[i].cardRewards)

                    rankCardArray[i].cardDescription.classList.remove('rank-requirements-hidden')
                    rankCardArray[i].cardChallenges.classList.remove('rank-requirements-hidden')
                    rankCardArray[i].cardRewards.classList.remove('rank-requirements-hidden')
                }
                else
                {
                    rankCardArray[i].classList.add('rank-requirements-hidden')
                    rankCardArray[i].cardDescription.classList.add('rank-requirements-hidden')
                    rankCardArray[i].cardChallenges.classList.add('rank-requirements-hidden')
                    rankCardArray[i].cardRewards.classList.add('rank-requirements-hidden')
                }
            }
        }

    }



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