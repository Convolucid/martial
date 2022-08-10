import './categoryPanel.css'

export default class CategoryPanel
{
    constructor(array, container)
    {
        this.panel = document.createElement('article')
        this.panel.classList.add('category-panel')
        container.appendChild(this.panel)

        this.panel.subjectDisplay = document.createElement('section')
        this.panel.subjectDisplay.classList.add('category-subject-display')
        this.panel.appendChild(this.panel.subjectDisplay)

        this.panel.detailsDisplay = document.createElement('section')
        this.panel.detailsDisplay.classList.add('category-collection-display')
        this.panel.appendChild(this.panel.detailsDisplay)

        for(let i=0; i < array.length; i++)
        {
            if(i == 0)
            {
                this.panel.subjectDisplay.appendChild(array[0])
            }
            else
            {
                this.panel.detailsDisplay.appendChild(array[i])
            }
        }

        this.collection = array

        // return panel;
    }

    
    // Card selection function displays focal card and respective information (challenges, rewards, text)
    focalCardSelector(cardName) 
    {
        // When the sash card is clicked, it returns to focal area, and all other cards are revealed and returned to the curriculum display area.
        if(cardName == this.collection[0])
        {
            this.panel.detailsDisplay.classList.replace('category-details-display','category-collection-display')

            this.collection[0].classList.replace('category-subject-overlay', 'category-subject-display')
            this.collection[0].cardTitle.classList.remove('hidden')
            this.collection[0].cardSubtitle.classList.remove('hidden')
            this.collection.forEach(card => {card.classList.remove('hidden')})

            // Index is 1 instead of 0 here because we are always skipping the Sash Card in the initial position
            for(let i=1; i < this.collection.length; i++)
            {
                this.collection[i].cardDescription.classList.add('hidden')
                this.collection[i].techniques.classList.add('hidden')
                this.collection[i].challenges.classList.add('hidden')
                this.collection[i].cardRewards.classList.add('hidden')
                this.panel.detailsDisplay.appendChild(this.collection[i])
            }

        }

        // when a curriculum card is clicked, the sash card is changed to overlay mode, the curriculum card is added to the focal area, and all cards other than it and the sash card are hidden.
        else
        {
            this.panel.detailsDisplay.classList.replace('category-collection-display', 'category-details-display')

            this.collection[0].classList.add('category-subject-overlay')
            this.collection[0].cardTitle.classList.add('hidden')
            this.collection[0].cardSubtitle.classList.add('hidden')
            
            for(let i=1; i < this.collection.length; i++)
            {
                if(this.collection[i] == cardName)
                {
                    this.panel.subjectDisplay.appendChild(this.collection[i])
                    this.panel.detailsDisplay.append(this.collection[i].cardDescription)
                    this.panel.detailsDisplay.append(this.collection[i].techniques)
                    this.panel.detailsDisplay.append(this.collection[i].challenges)
                    this.panel.detailsDisplay.append(this.collection[i].cardRewards)

                    this.collection[i].cardDescription.classList.remove('hidden')
                    this.collection[i].techniques.classList.remove('hidden')
                    this.collection[i].challenges.classList.remove('hidden')
                    this.collection[i].cardRewards.classList.remove('hidden')
                }
                else
                {
                    this.collection[i].classList.add('hidden')
                    this.collection[i].cardDescription.classList.add('hidden')
                    this.collection[i].techniques.classList.add('hidden')
                    this.collection[i].challenges.classList.add('hidden')
                    this.collection[i].cardRewards.classList.add('hidden')
                }
            }
        }

    }

    // Card selection function displays focal card and respective information (challenges, rewards, text)
    focalTechSelector(techName) 
    {
        // When the sash card is clicked, it returns to focal area, and all other cards are revealed and returned to the curriculum display area.
        if(techName == this.collection[0])
        {
            this.panel.detailsDisplay.classList.replace('category-details-display','category-collection-display')

            this.collection[0].classList.replace('category-subject-overlay', 'category-subject-display')
            this.collection[0].name.classList.remove('hidden')
            this.collection[0].altName.classList.remove('hidden')
            this.collection.forEach(tech => {tech.classList.remove('hidden')})

            // Index is 1 instead of 0 here because we are always skipping the Sash Card in the initial position
            for(let i=1; i < this.collection.length; i++)
            {
                // this.collection[i].type.classList.add('hidden')
                // this.collection[i].challenges.classList.add('hidden')
                // this.collection[i].rewards.classList.add('hidden')
                this.panel.detailsDisplay.appendChild(this.collection[i])
            }

        }

        // when a curriculum card is clicked, the sash card is changed to overlay mode, the curriculum card is added to the focal area, and all cards other than it and the sash card are hidden.
        else
        {
            this.panel.detailsDisplay.classList.replace('category-collection-display', 'category-details-display')

            this.collection[0].classList.add('category-subject-overlay')
            this.collection[0].name.classList.add('hidden')
            this.collection[0].altName.classList.add('hidden')
            
            for(let i=1; i < this.collection.length; i++)
            {
                if(this.collection[i] == techName)
                {
                    this.panel.subjectDisplay.appendChild(this.collection[i])
                    this.panel.detailsDisplay.append(this.collection[i].cardDescription)

                    // this.panel.detailsDisplay.append(this.collection[i].challenges)
                    // this.panel.detailsDisplay.append(this.collection[i].rewards)

                    this.collection[i].cardDescription.classList.remove('hidden')

                    // this.collection[i].challenges.classList.remove('hidden')
                    // this.collection[i].rewards.classList.remove('hidden')
                }
                else
                {
                    this.collection[i].classList.add('hidden')
                    this.collection[i].cardDescription.classList.add('hidden')

                    // this.collection[i].challenges.classList.add('hidden')
                    // this.collection[i].rewards.classList.add('hidden')
                }
            }
        }

    }

}