let doingStructure = {

    btnsStructure : function () {

        function btnAdd () {

            const btnAdd = document.querySelector('.add-btn')

            let body = document.querySelector('body')

            function windowAdd () {  /// вікно збору даних
                let windowForEdd = document.createElement('form')
                windowForEdd.classList.add('window-edd')
                body.append(windowForEdd)

                function input (info, type, plac = '') {
                    let input = document.createElement('input')
                    input.classList.add('input')
                    input.classList.add('input-' + info)
                    input.setAttribute('type', type)
                    input.setAttribute('placeholder', plac)
                    windowForEdd.append(input)
                }

                const addTitle = document.createElement('h2')
                addTitle.classList.add('addTitle')
                addTitle.textContent = 'Данные студента'
                windowForEdd.append(addTitle)

                input ('names', 'text', 'Введите Имя')
                input ('surname', 'text', 'Введите Фамилию')
                input ('lastname', 'text', 'Введите Отчество')
                input ('faculty', 'text', 'Введите название Факультета')
                input ('birthday', 'date', 'Введите дату рождения')
                input ('study', 'date')

                const btnAddStudent = document.createElement('button')
                btnAddStudent.classList.add('btn-addStudent')
                btnAddStudent.textContent = 'Добавить студента'
                windowForEdd.append(btnAddStudent)

                const btnClose = document.createElement('button')
                btnClose.textContent = 'x'
                btnClose.classList.add('btn-close')
                body.append(btnClose)

                btnClose.addEventListener('click', () => {
                    windowForEdd.remove()
                    btnClose.remove()
                    console.log('+')
                })

                function checkAdded (text = 'names') {
                    let item = document.querySelector('input-' + text)

                    console.log(item)
                    
                    if (item.value.length == 0) {
                        let error = document.createElement('span')
                        classList.add('error-' + text)
                        windowForEdd.append(error)
                    }


                }

                windowForEdd.addEventListener('submit', e => {
                    e.preventDefault()
                    checkAdded ('names')
                    
                })
            }
       
            btnAdd.addEventListener('click', () => {
                windowAdd()

            })




        }

        btnAdd ()

    }

}

export let workBtn = doingStructure.btnsStructure