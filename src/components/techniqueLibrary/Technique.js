import './technique.css'

export default class Technique
{
    constructor(techObject, primaryName, alternateName, type, characters)
    {
        // Initial condition allows the creation of a Technique Object that can be used to create the same technique repeatedly
        if(primaryName)
        {
            const tech = {}
            tech.name = primaryName
            tech.altName = alternateName
            tech.type = type
            tech.characters = characters
            
            return tech;
        }
        // Second condition occurs when a Technique object is put in rather than the other conditions.  A clone of the original technique div is created.
        else
        {
            const tech = document.createElement('div')
            tech.classList.add('tech-container')
    
            tech.name = document.createElement('h3')
            tech.name.innerText = techObject.name
            tech.name.classList.add('tech-name')
            
            tech.altName = document.createElement('p')
            tech.altName.innerText = techObject.altName
            tech.altName.classList.add('tech-altName')
            
            tech.characters = document.createElement('p')
            if(techObject.characters)
            {
                tech.characters.innerText = techObject.characters
            }
            else
            {
                tech.characters.innerText = techObject.type
            }
            tech.characters.classList.add('tech-characters')
    
            tech.type = techObject.type
    
            tech.append(tech.characters)
            tech.append(tech.name)
            tech.append(tech.altName)
    
            return tech;
        }
        

    }
}