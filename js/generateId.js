let calc = {
    newId : function () {
        return Math.trunc(Math.random() * (1000 - 1) + 1);
        // еще нужно проверить есть ли оно в данных
    }
}

export let newId = calc.newId