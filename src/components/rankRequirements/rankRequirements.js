import './rankRequirements.css'

// import CategoryPanel from './CategoryPanel.js'
import CategoryPanel from '../panelCreator/CategoryPanel.js'

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
                rankRequirementsPanelArray[i].panel.classList.remove('rank-requirements-hidden')
            }
            else
            {
                rankRequirementsPanelArray[i].panel.classList.add('rank-requirements-hidden')
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

        console.log(rankRequirementsStyles[rank])

    }

    rankRequirementsSection.rankChange(0);


    // Run through all cards and add onclicks
    for(let i=0; i < rankRequirementsPanelArray.length; i++)
    {
        for(let j=0; j < rankRequirementsPanelArray[i].collection.length; j++)
        {
            rankRequirementsPanelArray[i].collection[j].addEventListener('click', function()
                {
                    rankRequirementsPanelArray[i].focalCardSelector(
                        rankRequirementsPanelArray[i].collection[j]
                    )
                }
            )
        }
    }


    return rankRequirementsSection;
}