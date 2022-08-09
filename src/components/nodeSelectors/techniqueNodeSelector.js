import {gsap} from 'gsap'

import './nodeSelector.css'
import svgTechniqueNodeSelector from './techniqueCategories.svg?raw'

export default function techniqueNodeSelector(containerElement)
    {
    // Create HTML element and insert SVG
    const techniqueNodeSelector = document.createElement('div')
    techniqueNodeSelector.classList.add('node-selector')
    techniqueNodeSelector.innerHTML = svgTechniqueNodeSelector;
    containerElement.appendChild(techniqueNodeSelector)


    // This separates the generic gradient ids produced by Adobe Illustrator and appends 'tech' to each of them, then loops through all the elements filled by the gradients and reassigns them the new id.
    const gradients = techniqueNodeSelector.querySelectorAll(`radialGradient[id]`)
    for(let i=0; i < gradients.length; i++)
    {
        const id = gradients[i].id
        gradients[i].id = 'tech-' + id 
    }

    const gradientFills = techniqueNodeSelector.querySelectorAll(`[fill^=url]`)
    for(let i=0; i < gradientFills.length; i++)
    {
        gradientFills[i].style.fill= 'url(#' + gradients[i].id + ')'
    }

    const clipPaths = techniqueNodeSelector.querySelectorAll(`clipPath[id]`)
    for(let i=0; i < clipPaths.length; i++)
    {
        const id = clipPaths[i].id
        clipPaths[i].id = 'tech-' + id 
    }
    
    const clipPathTargets = techniqueNodeSelector.querySelectorAll(`[clip-path^=url]`)
    for(let i=0; i < clipPathTargets.length; i++)
    {
        clipPathTargets[i].style.clipPath= 'url(#' + clipPaths[i].id + ')'
    }

    const stepTech = document.getElementById('stepTech')
    const handTech = document.getElementById('handTech')
    const fistTech = document.getElementById('fistTech')
    const palmTech = document.getElementById('palmTech')
    const kickTech = document.getElementById('kickTech')
    const poetTech = document.getElementById('poetTech')
    const poleTech = document.getElementById('poleTech')
    const bladeTech = document.getElementById('bladeTech')
    const flexTech = document.getElementById('flexTech')
    const exoticTech = document.getElementById('exoticTech')

    techniqueNodeSelector.rankArray = [
        stepTech, handTech, fistTech, palmTech, kickTech, poetTech, poleTech, bladeTech, flexTech, exoticTech
    ]

    const stepNode = document.getElementById('step-node')
    const handNode = document.getElementById('hand-node')
    const fistNode = document.getElementById('fist-node')
    const palmNode = document.getElementById('palm-node')
    const kickNode = document.getElementById('kick-node')
    const poetNode = document.getElementById('poet-node')
    const poleNode = document.getElementById('pole-node')
    const bladeNode = document.getElementById('blade-node')
    const flexNode = document.getElementById('flex-node')
    const exoticNode = document.getElementById('exotic-node')

    const rankNodeArray = [
        stepNode, handNode, fistNode, palmNode, kickNode, poetNode, poleNode, bladeNode, flexNode, exoticNode
    ]

    const stepGlow = document.getElementById('step-glow')
    const handGlow = document.getElementById('hand-glow')
    const fistGlow = document.getElementById('fist-glow')
    const palmGlow = document.getElementById('palm-glow')
    const kickGlow = document.getElementById('kick-glow')
    const poetGlow = document.getElementById('poet-glow')
    const poleGlow = document.getElementById('pole-glow')
    const bladeGlow = document.getElementById('blade-glow')
    const flexGlow = document.getElementById('flex-glow')
    const exoticGlow = document.getElementById('exotic-glow')

    const rankGlowArray = [
        stepGlow, handGlow, fistGlow, palmGlow, kickGlow, poetGlow, poleGlow, bladeGlow, flexGlow, exoticGlow
    ]

    const stepOverlay = document.getElementById('step-overlay-gradients').getElementsByTagName('circle')
    const handOverlay = document.getElementById('hand-overlay-gradients').getElementsByTagName('circle')
    const fistOverlay = document.getElementById('fist-overlay-gradients').getElementsByTagName('circle')
    const palmOverlay = document.getElementById('palm-overlay-gradients').getElementsByTagName('circle')
    const kickOverlay = document.getElementById('kick-overlay-gradients').getElementsByTagName('circle')
    const poetOverlay = document.getElementById('poet-overlay-gradients').getElementsByTagName('circle')
    const poleOverlay = document.getElementById('pole-overlay-gradients').getElementsByTagName('circle')
    const bladeOverlay = document.getElementById('blade-overlay-gradients').getElementsByTagName('circle')
    const flexOverlay = document.getElementById('flex-overlay-gradients').getElementsByTagName('circle')
    const exoticOverlay = document.getElementById('exotic-overlay-gradients').getElementsByTagName('circle')

    const rankOverlayArray = [
        stepOverlay, handOverlay, fistOverlay, palmOverlay, kickOverlay, poetOverlay, poleOverlay, bladeOverlay, flexOverlay, exoticOverlay
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
                        delay: [j],
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
    techniqueNodeSelector.rankSelection = function(techCat)
    {
        for(let i=0; i < rankNodeArray.length; i++)
        {
            if(techCat == techniqueNodeSelector.rankArray[i])
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

    // Begin with initial stepTech node
    techniqueNodeSelector.rankSelection(stepTech)

    return techniqueNodeSelector;
}

