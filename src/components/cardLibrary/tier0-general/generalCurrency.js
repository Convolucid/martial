import currencyContent from './currency/currency-content.md'

import advancementImage from './currency/advancement.png'
import forgeInvitationImage from './currency/forge-invitation.png'
import iron10Image from './currency/iron10.png'
import iron50Image from './currency/iron50.png'
import iron100Image from './currency/iron100.png'
import sealLeopardImage from './currency/seal-leopard.png'
import sealMonkeyImage from './currency/seal-monkey.png'
import sealCraneImage from './currency/seal-crane.png'
import sealSnakeImage from './currency/seal-snake.png'
import sealDragonImage from './currency/seal-dragon.png'
import sealTigerImage from './currency/seal-tiger.png'
import sealBirdImage from './currency/seal-bird.png'
import sealTortoiseImage from './currency/seal-tortoise.png'
import sealLionImage from './currency/seal-lion.png'

export default function generalCurrency()
{
    const t0 = {}

    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', currencyContent)

    // Advancement Invitations
    t0.advancementInvitation = {
        title: 'Advancement Invitation',
        subtitle: '',
        image: advancementImage
    }

    t0.advancementTier1 = {
        title: 'Advancement',
        subtitle: 'Initiate Tier or Higher',
        image: advancementImage,
        description: container.querySelector('#t0-advancement-tier1')
    }

    t0.advancementTier2 = {
        title: 'Advancement',
        subtitle: 'Development Tier or Higher',
        image: advancementImage
    }

    t0.advancementTier3 = {
        title: 'Advancement',
        subtitle: 'Refinement Tier or Higher',
        image: advancementImage
    }

    t0.advancementTier4 = {
        title: 'Advancement',
        subtitle: 'Adept Tier or Higher',
        image: forgeInvitationImage
    }

    // Iron
    t0.iron10 = {
        title: '10 Iron',
        subtitle: '',
        image: iron10Image
    }

    t0.iron50 = {
        title: '50 Iron',
        subtitle: '',
        image: iron50Image
    }

    t0.iron100 = {
        title: '100 Iron',
        subtitle: '',
        image: iron100Image
    }

    // Seals


    return t0;
}