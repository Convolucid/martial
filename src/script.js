import {gsap} from 'gsap'

import './style.css'
import html from './index.html'

import svgSashRankSelector from './assets/svg/sashRanks.svg?raw'

function component(htmlStructure)
{
    const element = document.createElement('div')
    element.classList.add('container')
    element.innerHTML = htmlStructure
    
    return element;
}

document.body.appendChild(component(html));

// Get HTML elements by id
const sashRankSelector = document.getElementById('rank-selector')

sashRankSelector.innerHTML = svgSashRankSelector;


const whiteOverlay = document.getElementById('white-overlay-gradients').getElementsByTagName('circle')
const whiteGlow = document.getElementById('white-glow')

console.log(whiteGlow.style.opacity)

whiteGlow.style.opacity = 0

for(let i=0; i < whiteOverlay.length; i++)
{
    moveGradient(whiteOverlay[i])
}

expandGlow(whiteGlow);

function moveGradient(gradient)
{
    gsap.to(
        gradient,
        {
            duration: 5,
            x: 'random(-5,5)',
            y: 'random(-5,5)',
            repeatRefresh: true,
            repeat: -1,
            ease: 'power1.inOut'
        }
    )
}

function expandGlow(glow)
{
    gsap.to(
        glow.style,
        {
            duration: 1,
            opacity: 1
        }
    )
}
