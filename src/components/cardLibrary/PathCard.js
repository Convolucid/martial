import './pathCard.css'

export default class Card
{
    constructor(cardContent)
    {
        const card = document.createElement('div')
        card.classList.add('card-container')

        card.cardImage = new Image()
        card.cardImage.src = cardContent.image
        card.cardImage.classList.add('card-image')

        card.cardTitle = document.createElement('h3')
        card.cardTitle.innerText = cardContent.title
        card.cardTitle.classList.add('card-title')

        card.cardSubtitle = document.createElement('p')
        card.cardSubtitle.innerText = cardContent.subtitle
        card.cardSubtitle.classList.add('card-title', 'card-subtitle')

        
        card.cardDescription = document.createElement('p')
        if(cardContent.description)
        {
            card.cardDescription = cardContent.description
        }
        card.cardDescription.classList.add('card-description', 'hidden')

        card.techniques = document.createElement('div')
        if(cardContent.techniques)
        {
            const techniquesHeader = document.createElement('h2')
            const techniquesGrid = document.createElement('div')

            techniquesHeader.innerText = 'Techniques'
            card.techniques.append(techniquesHeader)
            card.techniques.append(techniquesGrid)
            techniquesGrid.classList.add('card-techniques')

            for(let i=0; i < cardContent.techniques.length; i++)
            {
                techniquesGrid.append(cardContent.techniques[i])

            }
        }
        card.techniques.classList.add('hidden')

        card.challenges = document.createElement('div')
        if(cardContent.challenges)
        {
            const challengesHeader = document.createElement('h2')
            const challengesGrid = document.createElement('div')

            challengesHeader.innerText = 'Challenges'
            card.challenges.append(challengesHeader)
            card.challenges.append(challengesGrid)
            challengesGrid.classList.add('card-challenges')

            for(let i=0; i < cardContent.challenges.length; i++)
            {
                if(cardContent.challenges[i].challenge)
                {
                    challengesGrid.append(cardContent.challenges[i].challenge)
                }
                else
                {
                    challengesGrid.append(cardContent.challenges[i])
                }


            }

        }
        card.challenges.classList.add('hidden')


        card.cardRewards = document.createElement('div')
        if(cardContent.rewards)
        {
            const rewardsHeader = document.createElement('h2')
            const rewardsGrid = document.createElement('div')
            
            rewardsHeader.innerText = 'Rewards'
            card.cardRewards.append(rewardsHeader)
            card.cardRewards.append(rewardsGrid)
            rewardsGrid.classList.add('card-rewards')

            for(let i=0; i < cardContent.rewards.length; i++)
            {
                rewardsGrid.append(cardContent.rewards[i])
            }

        }
        card.cardRewards.classList.add('hidden')


        // Visible in all contexts
        card.append(card.cardImage)
        card.append(card.cardTitle)
        card.append(card.cardSubtitle)
        
        return card;
    }
}