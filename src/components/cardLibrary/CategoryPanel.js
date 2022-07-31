export default class CategoryPanel
{
    constructor(array, container)
    {
        const categoryPanel = document.createElement('article')
        categoryPanel.classList.add('rank-requirements')
        container.appendChild(categoryPanel)

        categoryPanel.cardDisplayPanel = document.createElement('div')
        categoryPanel.cardDisplayPanel.classList.add('rank-requirements-card-display')
        categoryPanel.appendChild(categoryPanel.cardDisplayPanel)

        categoryPanel.curriculumDisplayPanel = document.createElement('div')
        categoryPanel.curriculumDisplayPanel.classList.add('rank-requirements-curriculum-display')
        categoryPanel.appendChild(categoryPanel.curriculumDisplayPanel)

        for(let i=0; i < array.length; i++)
        {
            if(i == 0)
            {
                categoryPanel.cardDisplayPanel.appendChild(array[0])
            }
            else
            {
                categoryPanel.curriculumDisplayPanel.appendChild(array[i])
            }
        }

        categoryPanel.array = array

        return categoryPanel;
    }
}