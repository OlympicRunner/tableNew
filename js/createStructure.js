let startCraft =  {

    createGrid : function () {

        let container = document.querySelector('.container')

        const addBtn = document.createElement('button')
        addBtn.classList.add('add-btn')
        addBtn.textContent = '+'
        container.append(addBtn)

        const talbeHeader = document.createElement('ul')
        container.append(talbeHeader)
        talbeHeader.classList.add('table-header')

        let numbersUl = document.createElement('ul')
        numbersUl.classList.add('numbers')
        container.append(numbersUl)
        
        let tableBody = document.createElement('ul')
        tableBody.classList.add('table-body')
        container.append(tableBody)


        function filterElement (nameFilter) {
            const filterItem = document.createElement('li')
            filterItem.classList.add('filter-' + nameFilter)
            filterItem.classList.add('filter-item')
            talbeHeader.append(filterItem)

            const filterInput = document.createElement('input')
            filterItem.append(filterInput)
        }

        function sortElement (nameSort, names) {
            const sortItem = document.createElement('li')
            sortItem.classList.add('sort-' + nameSort)
            sortItem.classList.add('sort-item')
            talbeHeader.append(sortItem)

            const sortBtn = document.createElement('button')
            sortBtn.classList.add('sort-btn')
            sortItem.append(sortBtn)

            sortBtn.textContent = 'Сортировка по ' + names
        }

        filterElement('names')
        filterElement('faculty')
        filterElement('date')
        filterElement('birthday')
        sortElement('names', 'Инициалам')
        sortElement('faculty', 'Факультету')
        sortElement('date', 'Дате')
        sortElement('birthday', 'дате рождения')

    }

}

export let createStructure = startCraft.createGrid