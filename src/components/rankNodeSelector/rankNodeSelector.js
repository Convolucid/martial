import {gsap} from 'gsap'

import './rankNodeSelector.css'
import svgRankNodeSelector from './sashRanks.svg?raw'

export default function rankNodeSelector()
{
// Create HTML element and insert SVG
const rankNodeSelector = document.createElement('div')
rankNodeSelector.classList.add('rank-selector')
rankNodeSelector.innerHTML = svgRankNodeSelector;
document.body.appendChild(rankNodeSelector)


const whiteSash = document.getElementById('whiteSash')
const yellowSash = document.getElementById('yellowSash')
const orangeSash = document.getElementById('orangeSash')
const purpleSash = document.getElementById('purpleSash')
const blueSash = document.getElementById('blueSash')
const greenSash = document.getElementById('greenSash')
const brownSash = document.getElementById('brownSash')
const goldSash = document.getElementById('goldSash')
const redSash = document.getElementById('redSash')
const blackSash = document.getElementById('blackSash')

const rankArray = [
    whiteSash, yellowSash, orangeSash, purpleSash, blueSash, greenSash, brownSash, goldSash, redSash, blackSash
]

const whiteNode = document.getElementById('white-node')
const yellowNode = document.getElementById('yellow-node')
const orangeNode = document.getElementById('orange-node')
const purpleNode = document.getElementById('purple-node')
const blueNode = document.getElementById('blue-node')
const greenNode = document.getElementById('green-node')
const brownNode = document.getElementById('brown-node')
const goldNode = document.getElementById('gold-node')
const redNode = document.getElementById('red-node')
const blackNode = document.getElementById('black-node')

const rankNodeArray = [
    whiteNode, yellowNode, orangeNode, purpleNode, blueNode, greenNode, brownNode, goldNode, redNode, blackNode
]

const whiteGlow = document.getElementById('white-glow')
const yellowGlow = document.getElementById('yellow-glow')
const orangeGlow = document.getElementById('orange-glow')
const purpleGlow = document.getElementById('purple-glow')
const blueGlow = document.getElementById('blue-glow')
const greenGlow = document.getElementById('green-glow')
const brownGlow = document.getElementById('brown-glow')
const goldGlow = document.getElementById('gold-glow')
const redGlow = document.getElementById('red-glow')
const blackGlow = document.getElementById('black-glow')

const rankGlowArray = [
    whiteGlow, yellowGlow, orangeGlow, purpleGlow, blueGlow, greenGlow, brownGlow, goldGlow, redGlow, blackGlow
]

const whiteOverlay = document.getElementById('white-overlay-gradients').getElementsByTagName('circle')
const yellowOverlay = document.getElementById('yellow-overlay-gradients').getElementsByTagName('circle')
const orangeOverlay = document.getElementById('orange-overlay-gradients').getElementsByTagName('circle')
const purpleOverlay = document.getElementById('purple-overlay-gradients').getElementsByTagName('circle')
const blueOverlay = document.getElementById('blue-overlay-gradients').getElementsByTagName('circle')
const greenOverlay = document.getElementById('green-overlay-gradients').getElementsByTagName('circle')
const brownOverlay = document.getElementById('brown-overlay-gradients').getElementsByTagName('circle')
const goldOverlay = document.getElementById('gold-overlay-gradients').getElementsByTagName('circle')
const redOverlay = document.getElementById('red-overlay-gradients').getElementsByTagName('circle')
const blackOverlay = document.getElementById('black-overlay-gradients').getElementsByTagName('circle')

const rankOverlayArray = [
    whiteOverlay, yellowOverlay, orangeOverlay, purpleOverlay, blueOverlay, greenOverlay, brownOverlay, goldOverlay, redOverlay, blackOverlay
]

// Create gradient movement methods
for(let i=0; i < rankOverlayArray.length; i++)
{
    for(let j=0; j < rankOverlayArray[i].length; j++)
    {
        rankOverlayArray[i][j].moveGradient = 
            gsap.to(
                rankOverlayArray[i][j],
                {
                    duration: 3,
                    x: 'random(-7,7)',
                    y: 'random(-7,7)',
                    repeatRefresh: true,
                    repeat: -1,
                    ease: 'power1.inOut',
                    paused: true
                }
            )
        ;
    }
}

// Create glow expansion methods
for(let i=0; i < rankGlowArray.length; i++)
{
    rankGlowArray[i].expandGlow = 
        gsap.fromTo(
            rankGlowArray[i],
            {
                opacity: 0
            },
            {
                duration: 0.5,
                opacity: 1,
                paused: true
            }
        )
}


// Selector function
function rankSelection(sashRank)
{
    for(let i=0; i < rankNodeArray.length; i++)
    {
        if(sashRank == rankArray[i])
        {
            rankNodeArray[i].style.transition = '1s'
            rankNodeArray[i].style.transform = 'scale(2.0, 2.0)'
            rankGlowArray[i].expandGlow.play();

            for(let j=0; j < rankOverlayArray[i].length; j++)
            {
                rankOverlayArray[i][j].moveGradient.play()
            }

        }
        else
        {
            rankNodeArray[i].style.transform = 'scale(1.0, 1.0)'
            rankGlowArray[i].expandGlow.reverse();

            for(let j=0; j < rankOverlayArray[i].length; j++)
            {
                rankOverlayArray[i][j].moveGradient.pause()
            }
        }
    }
}

rankSelection(whiteSash)

// Add Event Listeners to all ranks
for(let i=0; i < rankArray.length; i++)
{
    rankArray[i].addEventListener('mouseover', () => {rankSelection(rankArray[i])})
}


}

