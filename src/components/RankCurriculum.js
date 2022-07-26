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



        // Color themed text bar for Sash Title
        const rankTitle = buildRankTitle(rankCurriculum);



        // Animated SVG Node Selector for sash ranks
        const rankNodeSelector = buildRankNodeSelector(rankCurriculum);


        // Add 'mouseover' EventListeners to all ranks
        for(let i=0; i < rankNodeSelector.rankArray.length; i++)
        {
            rankNodeSelector.rankArray[i].addEventListener('mouseover', () => 
            {
                rankNodeSelector.rankSelection(rankNodeSelector.rankArray[i])
            })

            rankNodeSelector.rankArray[i].addEventListener('mouseout', () => 
            {
                rankNodeSelector.rankSelection(rankNodeSelector.rankArray[rankTitle.rank])
            })

            rankNodeSelector.rankArray[i].addEventListener('click', () => 
            {
                rankTitle.rankChange(i)
            })
        }

    }

}