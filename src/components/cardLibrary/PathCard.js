export default class Card
{
    constructor(cardContent, cardImage, cardTitle, cardSubtitle)
    {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card-container')

        if(cardImage)
        {
            cardContainer.cardImage = new Image()
            cardContainer.cardImage.src = cardImage
            cardContainer.cardImage.classList.add('card-image')
            
            cardContainer.cardTitle = document.createElement('h3')
            cardContainer.cardTitle.innerText = cardTitle
            cardContainer.cardTitle.classList.add('card-title')
            
            cardContainer.cardSubtitle = document.createElement('p')
            cardContainer.cardSubtitle.innerText = cardSubtitle
            cardContainer.cardSubtitle.classList.add('card-title', 'card-subtitle')
            
            cardContainer.cardDescription = document.createElement('p')
            cardContainer.cardDescription.innerHTML = 'Description'
            cardContainer.cardDescription.classList.add('card-description', 'rank-requirements-hidden')
            
            cardContainer.cardChallenges = document.createElement('div')
            cardContainer.cardChallenges.innerHTML = 'Challenges'
            cardContainer.cardChallenges.classList.add('card-challenges', 'rank-requirements-hidden')
            
            cardContainer.cardRewards = document.createElement('div')
            cardContainer.cardRewards.innerHTML = 'Rewards'
            cardContainer.cardRewards.classList.add('card-rewards', 'rank-requirements-hidden')
        }
        else
        {
            cardContainer.cardImage = new Image()
            cardContainer.cardImage.src = cardContent.image
            cardContainer.cardImage.classList.add('card-image')
    
            cardContainer.cardTitle = document.createElement('h3')
            cardContainer.cardTitle.innerText = cardContent.title
            cardContainer.cardTitle.classList.add('card-title')
    
            cardContainer.cardSubtitle = document.createElement('p')
            cardContainer.cardSubtitle.innerText = cardContent.subtitle
            cardContainer.cardSubtitle.classList.add('card-title', 'card-subtitle')
    
            
            cardContainer.cardDescription = document.createElement('p')
            if(cardContent.description)
            {
                cardContainer.cardDescription = cardContent.description
            }
            cardContainer.cardDescription.classList.add('card-description', 'rank-requirements-hidden')

            cardContainer.cardChallenges = document.createElement('div')
            if(cardContent.challenges)
            {
                cardContainer.cardChallenges = cardContent.challenges
            }
            cardContainer.cardChallenges.classList.add('card-challenges', 'rank-requirements-hidden')

            cardContainer.cardRewards = document.createElement('div')
            if(cardContent.rewards)
            {
                for(let i=0; i < cardContent.rewards.length; i++)
                {
                    // cardContent.rewards[i].classList.add('card-rewards', 'rank-requirements-hidden')
                    cardContainer.cardRewards.append(cardContent.rewards[i])
                }
            }
            cardContainer.cardRewards.classList.add('card-rewards', 'rank-requirements-hidden')
        }

        // Visible in all contexts
        cardContainer.append(cardContainer.cardImage)
        cardContainer.append(cardContainer.cardTitle)
        cardContainer.append(cardContainer.cardSubtitle)
        
        return cardContainer;
    }
}