import './technique.css'

// import CategoryPanel from './CategoryPanel.js'
import CategoryPanel from '../panelCreator/CategoryPanel.js'
import Technique from './Technique.js'

import techniqueLibrary from './techniqueLibrary.js'

import initiateTierCollection from '../cardLibrary/tier1Collection'
import developmentTierCollection from '../cardLibrary/tier2Collection'
import refinementTierCollection from '../cardLibrary/tier3Collection'
import adeptTierCollection from '../cardLibrary/tier4Collection'

export default function techniqueCategories(containerElement)
{
    // Create HTML element section for rank requirements
    const techCategoriesSection = document.createElement('section')
    techCategoriesSection.classList.add('tech-categories-section')
    containerElement.appendChild(techCategoriesSection)

    // Create categories from techniqueLibrary
    const stepTechs = []
    const handTechs = []
    const fistTechs = []
    const palmTechs = []
    const kickTechs = []
    const poetTechs = []
    const poleTechs = []
    const bladeTechs = []
    const flexTechs = []
    const exoticTechs = []

    const lib = techniqueLibrary()


    function assignCategory(regex, array)
    {
        Object.keys(lib).forEach(function(key)
        {
            if(regex.test(key))
            {
                let tech = new Technique(Object.entries)
                array.push(tech)
            }
        })
    }

    // Do NOT use global flag in regex, because it skips every other element
    assignCategory(/step/, stepTechs);
    assignCategory(/hand/, handTechs);
    // assignCategory(/fist/g, fistTechs);
    // assignCategory(/palm/g, palmTechs);
    // assignCategory(/kick/g, kickTechs);
    // assignCategory(/comp/g, poetTechs);
    // assignCategory(/glk/g, poetTechs);
    // assignCategory(/ipma/g, poetTechs);
    // assignCategory(/pole/g, poleTechs);
    // assignCategory(/blade/g, bladeTechs);
    // assignCategory(/flex/g, flexTechs);
    // assignCategory(/exotic/g, exoticTechs);

    // Create panels from rank requirement arrays
    const initiateTier = initiateTierCollection()
    const developmentTier = developmentTierCollection()
    const refinementTier = refinementTierCollection()
    const adeptTier = adeptTierCollection()

    const stepTechsPanel = new CategoryPanel(initiateTier.white, techCategoriesSection)

    const requirementsPanelArray = [
        stepTechsPanel
    ]


    // Function to choose panel to display
    function displayCurriculum(panel)
    {
        for(let i=0; i < requirementsPanelArray.length; i++)
        {
            if(requirementsPanelArray[i] == panel)
            {
                requirementsPanelArray[i].panel.classList.remove('hidden')
                requirementsPanelArray[i].focalCardSelector(
                    requirementsPanelArray[i].collection[0]
                )
            }
            else
            {
                requirementsPanelArray[i].panel.classList.add('hidden')
            }
        }
    }

    // Create array for style class list
    const rankRequirementsStyles = [
        'tech-categories-whiteSash', 'tech-categories-yellowSash', 'tech-categories-orangeSash', 'tech-categories-purpleSash', 'tech-categories-blueSash', 'tech-categories-greenSash', 'tech-categories-brownSash', 'tech-categories-goldSash', 'tech-categories-redSash', 'tech-categories-blackSash'
    ]


    // Style-switching functionality
    techCategoriesSection.rankChange = function(rank)
    {
        for(let i=0; i < rankRequirementsStyles.length; i++)
        {
            techCategoriesSection.classList.remove(rankRequirementsStyles[i]);
        }

        displayCurriculum(requirementsPanelArray[rank])
        techCategoriesSection.classList.add(rankRequirementsStyles[rank])
    }

    techCategoriesSection.rankChange(0);


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


    return techCategoriesSection;
}