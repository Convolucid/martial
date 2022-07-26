import buildRankRequirements from './rankRequirements/rankRequirements.js'
import buildRankTitle from './rankTitle/rankTitle.js'
import buildRankNodeSelector from './rankNodeSelector/rankNodeSelector.js'

export default class RankCurriculum
{
    constructor(containerElement)
    {
        // Container Element for Rank Curriculum UI
        const rankCurriculum = document.createElement('div')
        containerElement.appendChild(rankCurriculum)


        // Card-based Frames for individual sash ranks
        const rankRequirements = buildRankRequirements(rankCurriculum);

        // Color themed text bar for Sash Title
        const rankTitle = buildRankTitle(rankCurriculum);

        // Animated SVG Node Selector for sash ranks
        const rankNodeSelector = buildRankNodeSelector(rankCurriculum);

        // Add EventListeners to all rank nodes
        for(let i=0; i < rankNodeSelector.rankArray.length; i++)
        {
            // Activates glow and overlay effect on mouseover
            rankNodeSelector.rankArray[i].addEventListener('mouseover', () => 
            {
                rankNodeSelector.rankSelection(rankNodeSelector.rankArray[i])
            })

            // Deactivates glow and overlay on mouseout, and activates it on the active rank
            rankNodeSelector.rankArray[i].addEventListener('mouseout', () => 
            {
                rankNodeSelector.rankSelection(rankNodeSelector.rankArray[rankTitle.rank])
            })

            // Click activates the current rank
            rankNodeSelector.rankArray[i].addEventListener('click', () => 
            {
                rankTitle.rankChange(i)
            })
        }

    }

}