import './challenge.css'

import {gsap} from 'gsap'

import challengeNode from './challenge-node.svg?raw'

export default class Challenge
{

    constructor(obj)
    {
        this.challenge = document.createElement('div')
        this.challenge.classList.add('challenge-container')


     
        this.challenge.image = document.createElement('div')
        this.challenge.image.innerHTML = challengeNode

        this.challenge.totalRepetitions = obj.repetitions;

        // A function to get all element IDs and re-assign them unique IDs.  This allows the same SVG to be used as input and then manipulated on a per challenge basis.

        

        this.createUniqueElementIDs(obj)
        

        // This gets the first clipPath and its first path, assigning it an arc value.  The arc value is later used to move the dial around the circle and uncover the underlying layer.
        this.challenge.image.clipPath = this.challenge.image.getElementsByTagName('clipPath')
        this.challenge.image.clipPath[0].path = this.challenge.image.clipPath[0].getElementsByTagName('path')
        

        this.challenge.image.clipPath[0].path[0].arc = {  
            start: 0,
            end: 0,
            cx: 13.83,
            cy: 13.83,
            r: 13.83
        };

        // this.animateDial(0)

        // Append elements to the challenge container and assign styles
        this.challenge.image.classList.add('challenge-image')


        this.challenge.counterContainer = document.createElement('form')

        // Input field and default value
        this.challenge.counterInput = document.createElement('input')
        this.challenge.counterInput.type = 'number'
        this.challenge.counterInput.max = this.challenge.totalRepetitions
        this.challenge.counterInput.value = 0

        // Submit for enter key submission and accessibility
        this.challenge.counterSubmit = document.createElement('submit')

        // Display the current value
        this.challenge.counterCurrent = document.createElement('span')
        this.challenge.counterCurrent.innerText = this.challenge.counterInput.value

        this.challenge.counterTotal = document.createElement('span')
        this.challenge.counterTotal.innerText = ' / ' + this.challenge.totalRepetitions
        // this.challenge.counterCurrent.contentEditable = 'true'

        this.challenge.counterContainer.append(this.challenge.counterCurrent, this.challenge.counterTotal, this.challenge.counterSubmit)

        this.challenge.counterContainer.addEventListener('click', ()=>{
            this.challenge.counterCurrent.replaceWith(this.challenge.counterInput)
            this.challenge.counterInput.focus()
        })

        this.challenge.counterInput.addEventListener('blur', this.blurInput)

        this.challenge.counterContainer.addEventListener('submit', this.submitValue)
        //     event.preventDefault()
        //     this.submitValue()
        // }
            // event.preventDefault();
            // this.challenge.counterInput.blur()
            // this.challenge.counterCurrent.innerText = this.challenge.counterInput.value
            // this.submitValue()
        // )

        this.challenge.counterContainer.classList.add('challenge-counter')


        this.challenge.name = document.createElement('h3')
        this.challenge.name.innerText = obj.name
        this.challenge.name.classList.add('challenge-title')
        
        this.challenge.description = document.createElement('p')
        this.challenge.description.innerText = obj.desc
        this.challenge.description.classList.add('challenge-description')


        this.challenge.append(this.challenge.image)
        this.challenge.append(this.challenge.name)
        this.challenge.append(this.challenge.counterContainer)
        this.challenge.append(this.challenge.description)

        this.challenge.image.addEventListener('click', this.incrementDial)

        return this.challenge;
    }

    // animateDial(endArc)
    // {
    //     const dial = this.challenge.image.clipPath[0].path[0].arc

    //     gsap.to(dial, {
    //         end: endArc
    //     })
    //     console.log(dial)
    // }

    createUniqueElementIDs(obj)
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
    }

    blurInput()
    {
        const moveDial = () =>
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
    
            const challenge = this.parentNode.parentNode;

            challenge.counterInput.replaceWith(challenge.counterCurrent)
            challenge.counterCurrent.innerText = challenge.counterInput.value
            
            challenge.image.clipPath[0].path[0].arc.end = challenge.counterInput.value * (360 / challenge.totalRepetitions);

            challenge.counterCurrent.innerText = challenge.counterInput.value
            

    
            challenge.image.clipPath[0].path[0].setAttribute("d", getPath(
                challenge.image.clipPath[0].path[0].arc.cx, challenge.image.clipPath[0].path[0].arc.cy, challenge.image.clipPath[0].path[0].arc.r, challenge.image.clipPath[0].path[0].arc.start, challenge.image.clipPath[0].path[0].arc.end
            ))
        }
        moveDial()
    }

    submitValue(event)
    {

        event.preventDefault()
        const challenge = this.parentNode

        challenge.counterInput.blur()
        challenge.counterCurrent.innerText = challenge.counterInput.value
        
        const moveDial = () =>
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
    
            const challenge = this.parentNode;
            
            challenge.image.clipPath[0].path[0].arc.end = challenge.counterInput.value * (360 / challenge.totalRepetitions);

            challenge.counterCurrent.innerText = challenge.counterInput.value
            

    
            challenge.image.clipPath[0].path[0].setAttribute("d", getPath(
                challenge.image.clipPath[0].path[0].arc.cx, challenge.image.clipPath[0].path[0].arc.cy, challenge.image.clipPath[0].path[0].arc.r, challenge.image.clipPath[0].path[0].arc.start, challenge.image.clipPath[0].path[0].arc.end
            ))
        }
        
        moveDial()

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

        const challenge = this.parentNode;

        console.log()

        if(challenge.counterInput.value < challenge.totalRepetitions)
        {
            challenge.counterInput.value++
            challenge.image.clipPath[0].path[0].arc.end += 360 / challenge.totalRepetitions;
        }
        challenge.counterCurrent.innerText = challenge.counterInput.value

        challenge.image.clipPath[0].path[0].setAttribute("d", getPath(
            challenge.image.clipPath[0].path[0].arc.cx, challenge.image.clipPath[0].path[0].arc.cy, challenge.image.clipPath[0].path[0].arc.r, challenge.image.clipPath[0].path[0].arc.start, challenge.image.clipPath[0].path[0].arc.end
        ))

    }





}