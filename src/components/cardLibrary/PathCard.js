export default class Card
{
    constructor(cardImage, cardTitle, cardSubtitle, description, challenges, rewards)
    {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card-container')

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
        cardContainer.cardDescription.innerHTML = description
        cardContainer.cardDescription.classList.add('card-description', 'rank-requirements-hidden')

        cardContainer.cardChallenges = document.createElement('div')
        cardContainer.cardChallenges.innerHTML = 'Challenges go here'
        cardContainer.cardChallenges.classList.add('card-challenges', 'rank-requirements-hidden')

        cardContainer.cardRewards = document.createElement('div')
        cardContainer.cardRewards.innerHTML = 'Rewards go here'
        cardContainer.cardRewards.classList.add('card-rewards', 'rank-requirements-hidden')

        // Visible in all contexts
        cardContainer.append(cardContainer.cardImage)
        cardContainer.append(cardContainer.cardTitle)
        cardContainer.append(cardContainer.cardSubtitle)

        return cardContainer;
    }
}