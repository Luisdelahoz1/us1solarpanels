let cont1 = document.getElementById('cont1'),
    cont2 = document.getElementById('cont2'),
    cont3 = document.getElementById('cont3'),
    cont4 = document.getElementById('cont4')
    let cant1=0,cant2=0,cant3=0,cant4=0,
    tiem=10     

   let tiempo1 = setInterval(() => {
        cont1.textContent = cant1 += 1

        if(cant1===2.2000)
        {
            clearInterval(tiempo1)
        }

    }, `${tiem}`);

    let tiempo2 = setInterval(() => {
        cont2.textContent = cant2 += 1

        if(cant2===8.3320)
        {
            clearInterval(tiempo2)
        }

    }, `${tiem}`);

    let tiempo3 = setInterval(() => {
        cont3.textContent = cant3 += 1

        if(cant3===1000000)
        {
            clearInterval(tiempo3)
        }

    }, `${tiem}`);

    let tiempo4 = setInterval(() => {
        cont4.textContent = cant4 += 1

        if(cant4===3000)
        {
            clearInterval(tiempo4)
        }

    }, `${tiem}`);

