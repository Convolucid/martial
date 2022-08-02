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
import sealPhoenixImage from './currency/seal-phoenix.png'

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
        image: advancementImage,
        description: container.querySelector('#t0-advancement-tier2')
    }

    t0.advancementTier3 = {
        title: 'Advancement',
        subtitle: 'Refinement Tier or Higher',
        image: advancementImage,
        description: container.querySelector('#t0-advancement-tier3')
    }

    t0.advancementTier4 = {
        title: 'Advancement',
        subtitle: 'Adept Tier or Higher',
        image: forgeInvitationImage,
        description: container.querySelector('#t0-advancement-tier4')
    }

    // Iron
    t0.iron10 = {
        title: '10 Iron',
        subtitle: '',
        image: iron10Image
    }
    
    t0.iron20 = {
        title: '20 Iron',
        subtitle: '',
        image: iron10Image
    }

    t0.iron30 = {
        title: '30 Iron',
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
    t0.sealMaster = {
        title: 'Seal of the Master',
        subtitle: '',
        image: sealPhoenixImage
    }

    t0.sealLion = {
        title: 'Seal of the Jade Lion',
        subtitle: '',
        image: sealLionImage
    }


    t0.sealDragon = {
        title: 'Seal of the Azure Dragon',
        subtitle: '',
        image: sealDragonImage
    }

    t0.sealTortoise = {
        title: 'Seal of the Black Tortoise',
        subtitle: '',
        image: sealTortoiseImage
    }

    t0.sealBird = {
        title: 'Seal of the Vermilion Bird',
        subtitle: '',
        image: sealBirdImage
    }

    t0.sealTiger = {
        title: 'Seal of the White Tiger',
        subtitle: '',
        image: sealTigerImage
    }

    t0.sealMonkey = {
        title: 'Seal of the Monkey',
        subtitle: '',
        image: sealMonkeyImage
    }

    t0.sealLeopard = {
        title: 'Seal of the Leopard',
        subtitle: '',
        image: sealLeopardImage
    }

    t0.sealCrane = {
        title: 'Seal of the Crane',
        subtitle: '',
        image: sealCraneImage
    }

    t0.sealSnake = {
        title: 'Seal of the Snake',
        subtitle: '',
        image: sealSnakeImage
    }

    return t0;
}