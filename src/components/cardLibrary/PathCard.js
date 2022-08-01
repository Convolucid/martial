export default class Card
{
    constructor(cardContent, cardImage, cardTitle, cardSubtitle)
    {
        const card = document.createElement('div')
        card.classList.add('card-container')

        if(cardImage)
        {
            card.cardImage = new Image()
            card.cardImage.src = cardImage
            card.cardImage.classList.add('card-image')
            
            card.cardTitle = document.createElement('h3')
            card.cardTitle.innerText = cardTitle
            card.cardTitle.classList.add('card-title')
            
            card.cardSubtitle = document.createElement('p')
            card.cardSubtitle.innerText = cardSubtitle
            card.cardSubtitle.classList.add('card-title', 'card-subtitle')
            
            card.cardDescription = document.createElement('p')
            card.cardDescription.innerHTML = 'Description'
            card.cardDescription.classList.add('card-description', 'rank-requirements-hidden')
            
            card.cardChallenges = document.createElement('div')
            card.cardChallenges.innerHTML = 'Challenges'
            card.cardChallenges.classList.add('card-challenges', 'rank-requirements-hidden')
            
            card.cardRewards = document.createElement('div')
            card.cardRewards.innerHTML = 'Rewards'
            card.cardRewards.classList.add('card-rewards', 'rank-requirements-hidden')
        }
        else
        {
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
            card.cardDescription.classList.add('card-description', 'rank-requirements-hidden')

            card.techniques = document.createElement('div')
            if(cardContent.techniques)
            {
                const techniquesHeader = document.createElement('h2')
                techniquesHeader.innerText = 'Techniques'
                const techniquesGrid = document.createElement('div')

                card.techniques.append(techniquesHeader)
                card.techniques.append(techniquesGrid)

                for(let i=0; i < cardContent.techniques.length; i++)
                {
                    techniquesGrid.append(cardContent.techniques[i])
                    techniquesGrid.classList.add('card-techniques')
                }
            }
            card.techniques.classList.add('rank-requirements-hidden')

            card.cardChallenges = document.createElement('div')
            if(cardContent.challenges)
            {
                card.cardChallenges = cardContent.challenges
            }
            card.cardChallenges.classList.add('card-challenges', 'rank-requirements-hidden')


            card.cardRewards = document.createElement('div')
            if(cardContent.rewards)
            {
                const rewardsHeader = document.createElement('h2')
                const rewardsGrid = document.createElement('div')
                
                rewardsHeader.innerText = 'Rewards'
                card.cardRewards.append(rewardsHeader)
                card.cardRewards.append(rewardsGrid)

                for(let i=0; i < cardContent.rewards.length; i++)
                {
                    rewardsGrid.append(cardContent.rewards[i])
                    rewardsGrid.classList.add('card-rewards')
                }
            }
            card.cardRewards.classList.add('rank-requirements-hidden')
        }

        // Visible in all contexts
        card.append(card.cardImage)
        card.append(card.cardTitle)
        card.append(card.cardSubtitle)
        
        return card;
    }
}