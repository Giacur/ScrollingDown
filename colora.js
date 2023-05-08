        

        window.addEventListener('scroll', ()=>{
            let due = document.querySelector('#due');
            let positionDue = due.getBoundingClientRect();
            let tre = document.querySelector('#tre');
            let positionTre = tre.getBoundingClientRect();
            let quattro = document.querySelector('#quattro');
            let positionQuattro = quattro.getBoundingClientRect();
            let cinque = document.querySelector('#cinque');
            let positionCinque = cinque.getBoundingClientRect();
            let sei = document.querySelector('#sei');
            let positionSei = sei.getBoundingClientRect();
            let sette = document.querySelector('#sette');
            let positionSette = sette.getBoundingClientRect();
            let otto = document.querySelector('#otto');
            let positionOtto = otto.getBoundingClientRect();

            if(positionDue.top >= 0 && positionDue.bottom <= window.innerHeight) {
                due.classList.add("mostra");
            }if(positionTre.top >= 0 && positionTre.bottom <= window.innerHeight) {
                tre.classList.add("mostra");
            }if(positionQuattro.top >= 0 && positionQuattro.bottom <= window.innerHeight) {
                quattro.classList.add("mostra");
            }if(positionCinque.top >= 0 && positionCinque.bottom <= window.innerHeight) {
                cinque.classList.add("mostra");
            }if(positionSei.top >= 0 && positionSei.bottom <= window.innerHeight) {
                sei.classList.add("mostra");
            }if(positionSette.top >= 0 && positionSette.bottom <= window.innerHeight) {
                sette.classList.add("mostra");
            }if(positionOtto.top >= 0 && positionOtto.bottom <= window.innerHeight) {
                otto.classList.add("mostra");
            }
        })

        

        