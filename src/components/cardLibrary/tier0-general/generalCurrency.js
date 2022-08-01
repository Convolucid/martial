import advancementImage from './advancement.png'

export default function generalCurrency()
{
    const t0 = {}

    t0.advancementTier1 = {
        title: 'Advancement Invitation',
        subtitle: 'Initiate Tier or Higher',
        image: advancementImage
    }

    t0.advancementTier2 = {
        title: 'Advancement Invitation',
        subtitle: 'Development Tier or Higher',
        image: advancementImage
    }

    t0.invitations = [
        t0.advancementTier1, t0.advancementTier2
    ]

    return t0;
}