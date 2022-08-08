import './challenge.css'

import {gsap} from 'gsap'

export default class Challenge
{

    constructor(obj)
    {
        this.challenge = document.createElement('figure')
        this.challenge.classList.add('challenge-container')

        // Build image and counter elements and add all event listeners for functionality
        this.buildChallengeImage(obj)
        this.buildChallengeCounter(obj)

        // Create challenge title and description
        this.challenge.name = document.createElement('h3')
        this.challenge.name.innerText = obj.name
        this.challenge.description = document.createElement('figcaption')
        this.challenge.description.innerText = obj.desc

        // Append elements to the challenge container and assign styles
        this.challenge.image.classList.add('challenge-image')
        this.challenge.name.classList.add('challenge-title')
        this.challenge.counterForm.classList.add('challenge-counter')
        this.challenge.description.classList.add('challenge-description')

        this.challenge.append(this.challenge.image)
        this.challenge.append(this.challenge.name)
        this.challenge.append(this.challenge.counterForm)
        this.challenge.append(this.challenge.description)
    }

    buildChallengeImage(obj)
    {
        this.challenge.image = document.createElement('div')


        this.challenge.image.innerHTML = obj.img

        // A function to get all element IDs and re-assign them unique IDs.  This allows the same SVG to be used as input and then manipulated on a per challenge basis.
        const createUniqueElementIDs = (obj) =>
        {
            // Get all elements with an ID
            const elements = this.challenge.image.querySelectorAll(`[id]`)

            // Add unique identifier to the end of each ID
            for(let i=0; i < elements.length; i++)
            {
                const id = elements[i].id
                elements[i].id = id + obj.uniqueID
            }

            // Get pairs of clipPaths and clipped elements, then set the clip-path url to the new clipPath ID.
            const clipPaths = this.challenge.image.getElementsByTagName('clipPath')
            const clipPathGroups = this.challenge.image.querySelectorAll(`[clip-path]`)
            for(let i=0; i < clipPaths.length; i++)
            {
                clipPathGroups[i].style.clipPath = 'url(#' + clipPaths[i].id + ')'
            }

            // Get pairs of clipPaths and clipped elements, then set the clip-path url to the new clipPath ID.
            const gradients = this.challenge.image.getElementsByTagName('radialGradient')
            const gradientPaths = this.challenge.image.querySelectorAll(`[fill^=url]`)
            for(let i=0; i < gradients.length; i++)
            {
                gradientPaths[i].style.fill= 'url(#' + gradients[i].id + ')'
            }
        }
        createUniqueElementIDs(obj)

        // This gets the first clipPath and its first path, assigning it an arc value.  The arc value is later used to move the dial around the circle and uncover the underlying layer.
        const clipPathSetter = () =>
        {
            this.challenge.image.clipPath = this.challenge.image.getElementsByTagName('clipPath')
            this.challenge.image.clipPath[0].path = this.challenge.image.clipPath[0].getElementsByTagName('path')
            
    
            this.challenge.image.clipPath[0].path[0].arc = {  
                start: 0,
                end: 0,
                cx: 13.83,
                cy: 13.83,
                r: 13.83
            };
        }
        clipPathSetter();

        this.challenge.image.addEventListener('click', ()=> {
            this.incrementDial()
        })
    }

    buildChallengeCounter(obj)
    {
        this.challenge.counterForm = document.createElement('form')

        // Input field and default value
        this.challenge.counterInput = document.createElement('input')
        this.challenge.counterInput.type = 'number'
        this.challenge.counterInput.value = 0
        this.challenge.counterInput.maxReps = obj.repetitions

        // Display the current value and max value
        this.challenge.counterCurrent = document.createElement('span')
        this.challenge.counterCurrent.innerText = this.challenge.counterInput.value

        this.challenge.counterMax = document.createElement('span')
        this.challenge.counterMax.innerText = ' / ' + obj.repetitions

        // Submit for enter key submission and accessibility
        this.challenge.counterSubmit = document.createElement('submit')

        this.challenge.counterForm.append(this.challenge.counterCurrent, this.challenge.counterMax, this.challenge.counterSubmit)


        // Event Listeners on Form.  Click on form counter switches displayed value out for input, which is automatically highlighted on focus.  When the input is blurred away from or submitted, the span is switched back to display the updated value and the progressive dial is updated.
        this.challenge.counterForm.addEventListener('click', ()=>{
            this.challenge.counterCurrent.replaceWith(this.challenge.counterInput)
            this.challenge.counterInput.focus()
        })

        this.challenge.counterInput.addEventListener('focus', this.challenge.counterInput.select())
        this.challenge.counterInput.addEventListener('blur', ()=> {
            this.moveDial()
        })

        this.challenge.counterForm.addEventListener('submit', (event)=> {
            this.submitValueTest(event)
        })
    }

    // Moves dial to appropriate increment based on new value
    moveDial()
    {
        // Get the full svg path based on appropriate values and output SVG path string
        function getPath(cx, cy, r, a1, a2)
        {
            const RAD  = Math.PI / 180;
            const PI_2 = Math.PI / 2;
            const delta = a2 - a1;
    
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

        const challenge = this.challenge

        challenge.counterInput.replaceWith(challenge.counterCurrent)
        challenge.counterCurrent.innerText = challenge.counterInput.value

        // Getting clipping path arc attributes and set the new end value by degrees on circle
        const clipPath = challenge.image.clipPath[0].path[0]
        const startingPoint = getPath(clipPath.arc.cx, clipPath.arc.cy, clipPath.arc.r, clipPath.arc.start, clipPath.arc.end)
        clipPath.setAttribute("d", startingPoint)

        clipPath.arc.end = challenge.counterInput.value * (360 / challenge.counterInput.maxReps);
        const stoppingPoint = getPath(clipPath.arc.cx, clipPath.arc.cy, clipPath.arc.r, clipPath.arc.start, clipPath.arc.end)
        clipPath.setAttribute("d", stoppingPoint)

        // gsap.to(clipPath, {
        //     duration: 1,
        //     attr: { d: stoppingPoint }
        // })
    }

    // When dial image is clicked, increment the current value by 1 and move the dial.
    incrementDial()
    {
        const challenge = this.challenge;

        if(challenge.counterInput.value < challenge.counterInput.maxReps)
        {
            challenge.counterInput.value++
        }

        this.moveDial()
    }

    // When event is submitted, stop page refresh, change displayed value then blur away from input and move the dial.
    submitValueTest(event)
    {
        event.preventDefault()
        const challenge = this.challenge
        challenge.counterInput.blur()
    }

}