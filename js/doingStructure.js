let doingStructure = {

    btnsStructure : function () {

        function btnAdd () {

            const btnAdd = document.querySelector('.add-btn')

            let body = document.querySelector('body')

            function windowAdd () {
                let windowForEdd = document.createElement('form')
                windowForEdd.classList.add('window-edd')
                body.append(windowForEdd)

                function input (info, type) {
                    let input = document.createElement('input')
                    input.classList.add('input')
                    input.classList.add('input-' + info)
                    input.setAttribute('type', type)
                    windowForEdd.append(input)
                }

                const addTitle = document.createElement('h2')
                addTitle.classList.add('addTitle')
                addTitle.textContent = 'Данные студента'
                windowForEdd.append(addTitle)

                input ('names', 'text')
                input ('faculty', 'text')
                input ('birthday', 'date')
                input ('study', 'date')

                const btnAddStudent = document.createElement('button')
                btnAddStudent.classList.add('btn-addStudent')
                windowForEdd.append(btnAddStudent)

                const btnClose = document.createElement('button')
                btnClose.textContent = '+'
                btnClose.classList.add('btn-close')
                windowForEdd.append(btnClose)
            }
       
            btnAdd.addEventListener('click', () => {
                windowAdd()

            })



        }

        btnAdd ()

    }

}

export let workBtn = doingStructure.btnsStructure