import './technique.css'

export default class Technique
{
    constructor(primaryName, alternateName, type, chineseCharacters)
    {
        const tech = document.createElement('div')
        tech.classList.add('tech-container')

        tech.name = document.createElement('h3')
        tech.name.innerText = primaryName
        tech.name.classList.add('tech-name')
        
        tech.altName = document.createElement('p')
        tech.altName.innerText = alternateName
        tech.altName.classList.add('tech-altName')
        
        tech.characters = document.createElement('p')
        if(chineseCharacters)
        {
            tech.characters.innerText = chineseCharacters
        }
        else
        {
            tech.characters.innerText = type
        }
        tech.characters.classList.add('tech-characters')

        tech.type = type

        tech.append(tech.characters)
        tech.append(tech.name)
        tech.append(tech.altName)
        
        return tech;
    }
}