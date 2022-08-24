import currencyContent from './currency/currency-content.md'

import stepImage from './techCategories/step-card.png'


export default function generalTechCategories()
{
    const t0 = {}

    const container = document.createElement('div')
    container.insertAdjacentHTML('beforeend', currencyContent)

    // Advancement Invitations
    t0.step = {
        title: 'Stances and Footwork',
        subtitle: '',
        image: stepImage
    }

    t0.hand = {
        title: 'Empty Hand Defense',
        subtitle: '',
        image: stepImage
    }

    t0.fist = {
        title: 'Fists and Elbows',
        subtitle: '',
        image: stepImage
    }

    t0.palm = {
        title: 'Palm Techniques',
        subtitle: '',
        image: stepImage
    }

    t0.kick = {
        title: 'Kicks and Sweeps',
        subtitle: '',
        image: stepImage
    }

    t0.poet = {
        title: 'Poetic Techniques',
        subtitle: '',
        image: stepImage
    }

    t0.pole = {
        title: 'Pole Weapon Techniques',
        subtitle: '',
        image: stepImage
    }

    t0.blade = {
        title: 'Bladed Weapon Techniques',
        subtitle: '',
        image: stepImage
    }

    t0.flex = {
        title: 'Flexible Weapon Techniques',
        subtitle: '',
        image: stepImage
    }

    t0.exotic = {
        title: 'Exotic Weapon Techniques',
        subtitle: '',
        image: stepImage
    }

    return t0;
}