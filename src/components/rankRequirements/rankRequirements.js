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
    const requirementsSection = document.createElement('section')
    requirementsSection.classList.add('rank-requirements-section')
    containerElement.appendChild(requirementsSection)

    // Will need a better grid, built with four sections each, image, title, subtitle, checkbox

    // Create panels from rank requirement arrays
    const initiateTier = initiateTierCollection()
    const developmentTier = developmentTierCollection()
    const refinementTier = refinementTierCollection()
    const adeptTier = adeptTierCollection()

    const whiteRequirementsPanel = new CategoryPanel(initiateTier.white, requirementsSection)
    const yellowRequirementsPanel = new CategoryPanel(initiateTier.yellow, requirementsSection)
    const orangeRequirementsPanel = new CategoryPanel(initiateTier.orange, requirementsSection)

    const purpleRequirementsPanel = new CategoryPanel(developmentTier.purple, requirementsSection)
    const blueRequirementsPanel = new CategoryPanel(developmentTier.blue, requirementsSection)
    const greenRequirementsPanel = new CategoryPanel(developmentTier.green, requirementsSection)

    const brownRequirementsPanel = new CategoryPanel(refinementTier.brown, requirementsSection)
    const goldRequirementsPanel = new CategoryPanel(refinementTier.gold, requirementsSection)
    const redRequirementsPanel = new CategoryPanel(refinementTier.red, requirementsSection)

    const blackRequirementsPanel = new CategoryPanel(adeptTier.black, requirementsSection)

    const requirementsPanelArray = [
        whiteRequirementsPanel, yellowRequirementsPanel, orangeRequirementsPanel, purpleRequirementsPanel, blueRequirementsPanel, greenRequirementsPanel, brownRequirementsPanel, goldRequirementsPanel, redRequirementsPanel, blackRequirementsPanel
    ]


    // Function to choose panel to display
    function displayCurriculum(panel)
    {


        for(let i=0; i < requirementsPanelArray.length; i++)
        {
            if(requirementsPanelArray[i] == panel)
            {
                requirementsPanelArray[i].panel.classList.remove('rank-requirements-hidden')
                requirementsPanelArray[i].focalCardSelector(
                    requirementsPanelArray[i].collection[0]
                )
            }
            else
            {
                requirementsPanelArray[i].panel.classList.add('rank-requirements-hidden')
            }
        }
    }

    // Create array for style class list
    const rankRequirementsStyles = [
        'rank-requirements-whiteSash', 'rank-requirements-yellowSash', 'rank-requirements-orangeSash', 'rank-requirements-purpleSash', 'rank-requirements-blueSash', 'rank-requirements-greenSash', 'rank-requirements-brownSash', 'rank-requirements-goldSash', 'rank-requirements-redSash', 'rank-requirements-blackSash'
    ]


    // Style-switching functionality
    requirementsSection.rankChange = function(rank)
    {
        for(let i=0; i < rankRequirementsStyles.length; i++)
        {
            requirementsSection.classList.remove(rankRequirementsStyles[i]);
        }

        displayCurriculum(requirementsPanelArray[rank])
        requirementsSection.classList.add(rankRequirementsStyles[rank])
    }

    requirementsSection.rankChange(0);


    // Run through all cards and add onclicks
    for(let i=0; i < requirementsPanelArray.length; i++)
    {
        for(let j=0; j < requirementsPanelArray[i].collection.length; j++)
        {
            requirementsPanelArray[i].collection[j].addEventListener('click', function()
                {
                    requirementsPanelArray[i].focalCardSelector(
                        requirementsPanelArray[i].collection[j]
                    )
                }
            )
        }
    }


    return requirementsSection;
}