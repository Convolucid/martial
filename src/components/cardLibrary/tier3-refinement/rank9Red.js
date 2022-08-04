import PathCard from '../PathCard.js'
import Technique from '../../techniqueLibrary/Technique.js'
import Challenge from '../../challengeCreator/Challenge.js'

import techniqueLibrary from '../../techniqueLibrary/techniqueLibrary.js'
import generalCurrency from '../tier0-general/generalCurrency.js'
// import blackRankContent from '../tier4-adept/rank10Black.js'

import redContent from './rank9-red/red-content.md'
import redChallenges from './rank9-red/red-challenges.js'
import redSashImage from './rank9-red/red-sash.png'
import forgeInvitationImage from '../tier0-general/currency/forge-invitation.png'


export default function redRankContent()
{
    const r9 = {}
    // const r10 = blackRankContent()

    const t = techniqueLibrary()
    const ch = redChallenges()
    const gen = generalCurrency()


    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', redContent)

    // Sash
    r9.sash = {
        title: 'Red Sash',
        subtitle: 'Refinement Chamber',
        image: redSashImage,
    }

    // Mystery card
    r9.mystery = {
        title: '?',
        subtitle: '',
        image: forgeInvitationImage,
    }

    // Advancement Invitation
    r9.adv = gen.advancementTier3
    // r9.adv.rewards = [
    //         new PathCard(r10.sash)
    // ]

    return r9;
}