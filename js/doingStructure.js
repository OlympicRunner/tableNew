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

                    let error = document.createElement('span')
                    error.classList.add('error-' + info)
                    error.classList.add('error-entry')
                    error.textContent = 'Поле не заполнено'
                    windowForEdd.append(error)
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

                function checkAdded (text = 'names') { /// визуальная часть проверки на наличие пустых строк
                    let item = document.querySelector('.input-' + text)
                    let checkError = document.querySelector('.error-' + text)

                    if (item.value == '' && checkError !== null) {
                        let error = document.querySelector('.error-' + text)
                        error.textContent = 'Данные из поля выше введены не верно или отсуцтвуют'
                    }

                    if (item.value !== '') {
                        checkError.textContent = ''
                    }
                }

                function checkForSave () {   /// продолжаем тут
                    let inputs = document.querySelectorAll('.input')
                    let index = 0
                    inputs.forEach(function(item) {
                        if (!item.value == '') {
                            index++
                        }
                    })
                    
                    if (index == 6) {

                    }
                }

                windowForEdd.addEventListener('submit', e => {
                    e.preventDefault()
                    checkAdded ('names')
                    checkAdded ('surname')
                    checkAdded ('lastname')
                    checkAdded ('faculty')
                    checkAdded ('birthday')
                    checkAdded ('study')

                    checkAndSave () /// функиця сохраняет в локал и закрывает форму  <= сюда вставим функцию из другого js где будет синхрон в локал стор
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