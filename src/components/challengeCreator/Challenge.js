import './challenge.css'

import {gsap} from 'gsap'

import challengeNode from './challenge-node.svg?raw'

export default class Challenge
{

    constructor(obj)
    {
        const challenge = document.createElement('div')
        challenge.classList.add('challenge-container')


     
        challenge.image = document.createElement('div')
        challenge.image.innerHTML = challengeNode

        challenge.totalRepetitions = obj.repetitions;

        // A function to get all element IDs and re-assign them unique IDs.  This allows the same SVG to be used as input and then manipulated on a per challenge basis.
        function createUniqueElementIDs()
        {
            // Get all elements with an ID
            const elements = challenge.image.querySelectorAll(`[id]`)

            // Add unique identifier to the end of each ID
            for(let i=0; i < elements.length; i++)
            {
                const id = elements[i].id
                elements[i].id = id + obj.uniqueID
            }

            // Get pairs of clipPaths and clipped elements, then set the clip-path url to the new clipPath ID.
            const clipPaths = challenge.image.getElementsByTagName('clipPath')
            const clipPathGroups = challenge.image.querySelectorAll(`[clip-path]`)
            for(let i=0; i < clipPaths.length; i++)
            {
                clipPathGroups[i].style.clipPath = 'url(#' + clipPaths[i].id + ')'
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


        // Append elements to the challenge container and assign styles
        challenge.image.classList.add('challenge-image')


        challenge.test = document.createElement('div')
        challenge.counter = document.createElement('span')
        challenge.total = document.createElement('span')
        challenge.counter.currentRepetitions = 0
        challenge.counter.innerText = challenge.counter.currentRepetitions
        challenge.total.innerText = ' / ' + challenge.totalRepetitions
        challenge.counter.contentEditable = 'true'

        challenge.test.append(challenge.counter, challenge.total)
        challenge.test.classList.add('challenge-counter')
        // challenge.counter.classList.add('challenge-counter')

        challenge.name = document.createElement('h3')
        challenge.name.innerText = obj.name
        challenge.name.classList.add('challenge-title')
        
        challenge.description = document.createElement('p')
        challenge.description.innerText = obj.desc
        challenge.description.classList.add('challenge-description')


        challenge.append(challenge.image)
        challenge.append(challenge.name)
        challenge.append(challenge.test)
        challenge.append(challenge.description)

        challenge.image.addEventListener('click', this.incrementDial)

        return challenge;
    }

    incrementDial()
    {
        console.log(this.parentNode)
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

        const challenge = this.parentNode;

        if(challenge.counter.currentRepetitions < challenge.totalRepetitions)
        {
            challenge.counter.currentRepetitions += 1
            challenge.image.clipPath[0].path[0].arc.end += 360 / challenge.totalRepetitions;
        }
        challenge.counter.innerText = challenge.counter.currentRepetitions

        challenge.image.clipPath[0].path[0].setAttribute("d", getPath(
            challenge.image.clipPath[0].path[0].arc.cx, challenge.image.clipPath[0].path[0].arc.cy, challenge.image.clipPath[0].path[0].arc.r, challenge.image.clipPath[0].path[0].arc.start, challenge.image.clipPath[0].path[0].arc.end
        ))

    }


}