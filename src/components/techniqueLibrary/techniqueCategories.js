import './technique.css'

// import CategoryPanel from './CategoryPanel.js'
import CategoryPanel from '../panelCreator/CategoryPanel.js'
import PathCard from '../cardLibrary/PathCard.js'
import Technique from './Technique.js'

import techniqueLibrary from './techniqueLibrary.js'

import generalCurrency from '../cardLibrary/tier0-general/generalCurrency.js'
import generalTechCategories from '../cardLibrary/tier0-general/generalTechCategories.js'

export default function techniqueCategories(containerElement)
{


    // Create HTML element section for rank requirements
    const techCategoriesSection = document.createElement('section')

    // Create HTML element and insert text
    techCategoriesSection.categoryTitle = document.createElement('h2')
    techCategoriesSection.categoryTitle.classList.add('rank-title')
    containerElement.appendChild(techCategoriesSection.categoryTitle)


    techCategoriesSection.classList.add('tech-categories-section')
    containerElement.appendChild(techCategoriesSection)




    // Create array for class list
    const categoryTitleStyles = [
        'whiteSash', 'yellowSash', 'orangeSash', 'purpleSash', 'blueSash', 'greenSash', 'brownSash', 'goldSash', 'redSash', 'blackSash'
    ]

    const categoryTitleText = [
        'Stances and Footwork', 'Empty Hand Defense', 'Fists and Elbows', 'Palm Techniques', 'Kicks and Sweeps', 'Poetic Techniques', 'Pole Weapon Techniques', 'Bladed Weapon Techniques', 'Flexible Weapon Techniques', 'Exotic Weapon Techniques'
    ]


    // Create categories from techniqueLibrary

    const gen = generalTechCategories()
    const stepCard = new PathCard(gen.step)
    const handCard = new PathCard(gen.hand)
    const fistCard = new PathCard(gen.fist)
    const palmCard = new PathCard(gen.palm)
    const kickCard = new PathCard(gen.kick)
    const poetCard = new PathCard(gen.poet)
    const poleCard = new PathCard(gen.pole)
    const bladeCard = new PathCard(gen.blade)
    const flexCard = new PathCard(gen.flex)
    const exoticCard = new PathCard(gen.exotic)

    const stepTechs = [stepCard]
    const handTechs = [handCard]
    const fistTechs = [fistCard]
    const palmTechs = [palmCard]
    const kickTechs = [kickCard]
    const poetTechs = [poetCard]
    const poleTechs = [poleCard]
    const bladeTechs = [bladeCard]
    const flexTechs = [flexCard]
    const exoticTechs = [exoticCard]




    const lib = techniqueLibrary()

    function assignCategory(regex, array)
    {
        let keys = Object.keys(lib)
        let values = Object.values(lib)

        for(let i=0; i < keys.length; i++)
        {
            if(regex.test(keys[i]))
            {
                let tech = new Technique(values[keys.indexOf(keys[i])])
                array.push(tech)
            }
        }

    }

    // Do NOT use global flag in regex, because it skips every other element
    assignCategory(/step/, stepTechs);
    assignCategory(/hand/, handTechs);
    assignCategory(/fist/, fistTechs);
    assignCategory(/elbow/, fistTechs);
    assignCategory(/palm/, palmTechs);
    assignCategory(/kick/, kickTechs);
    assignCategory(/comp/, poetTechs);
    assignCategory(/glk/, poetTechs);
    assignCategory(/ipma/, poetTechs);
    assignCategory(/pole/, poleTechs);
    assignCategory(/blade/, bladeTechs);
    assignCategory(/flex/, flexTechs);
    assignCategory(/exotic/, exoticTechs);




    // Create panels from rank requirement arrays
    const stepTechsPanel = new CategoryPanel(stepTechs, techCategoriesSection)
    const handTechsPanel = new CategoryPanel(handTechs, techCategoriesSection)
    const fistTechsPanel = new CategoryPanel(fistTechs, techCategoriesSection)
    const palmTechsPanel = new CategoryPanel(palmTechs, techCategoriesSection)
    const kickTechsPanel = new CategoryPanel(kickTechs, techCategoriesSection)
    const poetTechsPanel = new CategoryPanel(poetTechs, techCategoriesSection)
    const poleTechsPanel = new CategoryPanel(poleTechs, techCategoriesSection)
    const bladeTechsPanel = new CategoryPanel(bladeTechs, techCategoriesSection)
    const flexTechsPanel = new CategoryPanel(flexTechs, techCategoriesSection)
    const exoticTechsPanel = new CategoryPanel(exoticTechs, techCategoriesSection)

    const techCategoryPanels = [
        stepTechsPanel, handTechsPanel, fistTechsPanel, palmTechsPanel, kickTechsPanel, poetTechsPanel, poleTechsPanel, bladeTechsPanel, flexTechsPanel, exoticTechsPanel
    ]

    // console.log(stepTechs)
    // Function to choose panel to display
    function displayCurriculum(panel)
    {
        for(let i=0; i < techCategoryPanels.length; i++)
        {
            if(techCategoryPanels[i] == panel)
            {
                techCategoryPanels[i].panel.classList.remove('hidden')
                techCategoryPanels[i].focalTechSelector(
                    techCategoryPanels[i].collection[0]
                )
            }
            else
            {
                techCategoryPanels[i].panel.classList.add('hidden')
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

        for(let i=0; i < categoryTitleStyles.length; i++)
        {
            techCategoriesSection.categoryTitle.classList.remove(categoryTitleStyles[i]);
        }

        techCategoriesSection.categoryTitle.classList.add(categoryTitleStyles[rank])
        techCategoriesSection.categoryTitle.innerText = categoryTitleText[rank]
        techCategoriesSection.categoryTitle.rank = rank

        displayCurriculum(techCategoryPanels[rank])
        techCategoriesSection.classList.add(rankRequirementsStyles[rank])
    }

    techCategoriesSection.rankChange(0);


    // Run through all cards and add onclicks
    for(let i=0; i < techCategoryPanels.length; i++)
    {
        for(let j=0; j < techCategoryPanels[i].collection.length; j++)
        {
            techCategoryPanels[i].collection[j].addEventListener('click', function()
                {
                    techCategoryPanels[i].focalTechSelector(
                        techCategoryPanels[i].collection[j]
                    )
                }
            )
        }
    }


    return techCategoriesSection;
}