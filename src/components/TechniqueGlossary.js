import buildTechniqueNodeSelector from './nodeSelectors/techniqueNodeSelector.js'
import buildRankTitle from './rankTitle/rankTitle.js'
import buildTechniqueCategories from './techniqueLibrary/techniqueCategories.js'

// Will add shadered background canvas

export default class TechniqueGlossary
{
    constructor(containerElement)
    {
        // Container Element for Rank Curriculum UI
        const techniqueGlossary = document.createElement('section')
        containerElement.appendChild(techniqueGlossary)

        // Animated SVG Node Selector for sash ranks
        const techniqueNodeSelector = buildTechniqueNodeSelector(techniqueGlossary);

        // Card-based Frames for individual sash ranks
        const techniqueCategories = buildTechniqueCategories(techniqueGlossary);


        // Add EventListeners to all rank nodes
        for(let i=0; i < techniqueNodeSelector.rankArray.length; i++)
        {
            // Activates glow and overlay effect on mouseover
            techniqueNodeSelector.rankArray[i].addEventListener('mouseover', () => 
            {
                techniqueNodeSelector.rankSelection(techniqueNodeSelector.rankArray[i])
            })

            // Deactivates glow and overlay on mouseout, and activates it on the active rank
            techniqueNodeSelector.rankArray[i].addEventListener('mouseout', () => 
            {
                techniqueNodeSelector.rankSelection(techniqueNodeSelector.rankArray[rankTitle.rank])
            })

            // Click activates the current rank
            techniqueNodeSelector.rankArray[i].addEventListener('click', () => 
            {
                techniqueCategories.rankChange(i)
            })
        }

    }

}