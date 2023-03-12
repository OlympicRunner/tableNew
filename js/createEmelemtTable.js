
let createElements = {

    addelements : function (obj) {
        let ul = document.querySelector('.table-body')
        let li = document.createElement('li')
        li.classList.add('students-li')
        ul.append(li)

        function lis () {
            let item = document.createElement('span')
            item.classList.add('lis')
            li.append(item)
        }
        lis ()
        lis ()
        lis ()
        lis ()

        let id = document.createElement('i')
        id.setAttribute('alt', obj.id)
        li.append(id)

        let today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()); //Текущя дата без времени
        let dob = obj.birthday; //Дата рождения
        let dobnow = new Date(today.getFullYear(), obj.birthday.getMonth(), obj.birthday.getDate()); //ДР в текущем году
        let age
        age = today.getFullYear() - dob.getFullYear();
        //Если ДР в этом году ещё предстоит, то вычитаем из age один год
        if (today < dobnow) {
        age = age-1;
        }

        let stillInfo = ''
        let still = new Date().getFullYear() - obj.study
        if (still <= 4) {
            stillInfo += ' (' + still + ' курс)'
        } else {
            stillInfo += ' (закончил)'
        }
            
            

        let listItems = li.childNodes
        listItems[0].textContent = obj.surname  + ' ' + obj.name + ' ' + obj.lastname
        listItems[1].textContent = obj.faculty
        listItems[2].textContent = obj.birthday.toISOString().slice(0,10) + ' ' + '(' + age + ' лет)'
        listItems[3].textContent = obj.study + "-" + (Number(obj.study) + 4) + stillInfo
    }

}

export let addItem = createElements.addelements