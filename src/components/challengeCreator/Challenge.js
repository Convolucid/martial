import './challenge.css'

import {gsap} from 'gsap'

import challengeNode from './challenge-node.svg?raw'
import sashRanksImage from './sashRanks.svg?raw'

export default class Challenge
{

    constructor(challengeContent, challengeType, name, description, repetitions, uniqueIdentifier)
    {
        const challenge = document.createElement('div')
        challenge.classList.add('challenge-container')


        if(challengeType)
        {
            challenge.image = document.createElement('div')
            challenge.image.innerHTML = challengeNode

            challenge.repetitions = repetitions;

            // Need a function to get all element IDs and re-assign them unique IDs.
            function createUniqueElementIDs()
            {
                const elements = challenge.image.querySelectorAll(`[id]`)


                for(let i=0; i < elements.length; i++)
                {
                    const id = elements[i].id
                    elements[i].id = id + uniqueIdentifier
                }

                const clipPaths = challenge.image.getElementsByTagName('clipPath')
                const clipPathGroups = challenge.image.querySelectorAll(`[clip-path]`)
                for(let i=0; i < clipPaths.length; i++)
                {
                    clipPathGroups[i].style.clipPath = 'url(#' + clipPaths[i].id + ')'
                    console.log(clipPaths[i].id)
                    console.log(clipPathGroups[i].style.clipPath)
                }
            }
            createUniqueElementIDs()
            
            // This gets the first clipPath and its first path, assigning it an arc value.  The arc value is later used to move the dial around the circle and uncover the underlying layer.
            challenge.image.clipPath = challenge.image.getElementsByTagName('clipPath')
            challenge.image.clipPath[0].path = challenge.image.clipPath[0].getElementsByTagName('path')
            

            challenge.image.clipPath[0].path[0].arc = {  
                start: 0,
                end: 0,
                cx: 13.83,
                cy: 13.83,
                r: 13.83
            };

            challenge.image.classList.add('challenge-image')
    
            challenge.name = document.createElement('h3')
            challenge.name.innerText = name
            challenge.name.classList.add('challenge-title')
            
            challenge.description = document.createElement('p')
            challenge.description.innerText = description
            challenge.description.classList.add('challenge-description')
        }
        else
        {
            challenge.image = new Image()
            challenge.image.src = challengeContent.img
            challenge.image.classList.add('challenge-image')
    
            challenge.name = document.createElement('h3')
            challenge.name.innerText = challengeContent.name
            challenge.name.classList.add('challenge-title')
            
            challenge.description = document.createElement('p')
            challenge.description.innerText = challengeContent.desc
            challenge.description.classList.add('challenge-description')
        }

        challenge.append(challenge.image)
        challenge.append(challenge.name)
        challenge.append(challenge.description)



        challenge.addEventListener('click', this.incrementDial)

        return challenge;
    }


    createUniqueElementIDs()
    {
        console.log(this.image)
    }

    incrementDial()
    {

        function getPath(cx, cy, r, a1, a2)
        {
            const RAD  = Math.PI / 180;
            const PI_2 = Math.PI / 2;
            const delta = a2-a1;
    
            if (delta >= 360)
            {
                return "M " + (cx - r) + " " + cy + " a " + r + " " + r + " 0 1 0 " + r * 2 + " 0 a " + r + " " + r + " 0 1 0 " + -r * 2 + " 0z"; 
            }
            
            const largeArc = delta > 180 ? 1 : 0;

            a1 = a1 * RAD - PI_2;
            a2 = a2 * RAD - PI_2;

            const x1 = cx + r * Math.cos(a2);
            const y1 = cy + r * Math.sin(a2);

            const x2 = cx + r * Math.cos(a1);
            const y2 = cy + r * Math.sin(a1);

            return "M " + x1 + " " + y1 + " A " + r + " " + r + " 0 " + largeArc + " 0 " + x2 + " " + y2 + " L " + cx + " " + cy + "z";
        }

        this.image.clipPath[0].path[0].arc.end += 360 / this.repetitions;

        this.image.clipPath[0].path[0].setAttribute("d", getPath(
            this.image.clipPath[0].path[0].arc.cx, this.image.clipPath[0].path[0].arc.cy, this.image.clipPath[0].path[0].arc.r, this.image.clipPath[0].path[0].arc.start, this.image.clipPath[0].path[0].arc.end
        ))

    }


}