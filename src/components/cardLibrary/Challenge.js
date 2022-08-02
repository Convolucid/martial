import './challenge.css'

export default class Challenge
{

    // In the future this will be a much more involved suite of options to describe the challenge type, increment, etc.

    constructor(challengeContent, graphic, name, description)
    {
        const challenge = document.createElement('div')
        challenge.classList.add('challenge-container')


        if(graphic)
        {
            challenge.image = new Image()
            challenge.image.src = graphic
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

        return challenge;
    }
}