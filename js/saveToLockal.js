let aboutLocal = {
    addToLocal : function (obj) {
        if (JSON.parse(localStorage.getItem('itemsTable')) == null) {
            let save = []
            localStorage.setItem('itemsTable', JSON.stringify(save.push(obj)))
        } else {
            console.log('1')
        }

    }
}

export let saveToLocal = aboutLocal.addToLocal