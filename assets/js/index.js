let suivant = document.getElementById("suivant")
let retour = document.getElementById("retour")
let envoyer = document.getElementById("submit")
let form1 = document.getElementById("form1")
let form2 = document.getElementById("form2")
let tbody = document.getElementById("body")



let listEleves = localStorage.getItem('élève') ? JSON.parse(localStorage.getItem('élève')) : []
let parentEleves = localStorage.getItem('tuteur') ? JSON.parse(localStorage.getItem('tuteur')) : []


let TableauListEleves = listEleves
let TableauListparentEleves = parentEleves

/*Lorsqu'on appuie sur le bouton "retour" */

retour.addEventListener('click', () => {
    form2.style.display = "none"
    form1.style.display = "flex"
})



/*Lorsqu'on appuie sur le bouton "suivant" */

suivant.addEventListener('click', function() {
    form1.style.display = "none"
    form2.style.display = "flex"
    console.log('ok')
})

/* J'affiche les résultats sur le tableau */

for (let i = 0; i < TableauListEleves.length; i++) {
    tbody.innerHTML += `
        <tr>
            <td id="nomEleve">${TableauListEleves[i].studentFistName}</td>
            <td id="sexEleve">${TableauListEleves[i].studentSex}</td>
            <td id="classEleve">${TableauListEleves[i].studentLastName}</td>
            <td id="nomTuteur">${TableauListparentEleves[i].tutorLastName}</td>
            <td id="phoneTuteu">${TableauListparentEleves[i].tutorPhone}</td>
    </tr>
    `
}


/*Lorsqu'on appuie sur le bouton "envoyer" */

envoyer.addEventListener('click', function(e) {

    e.preventDefault()
        /*Je crée un objet qui enregistrera chaque élève  */
    const studentLastName = document.getElementById('lastName').value
    const studentFistName = document.getElementById('firstName').value
    const studentSex = document.getElementById('sex').value
    const studentClass = document.getElementById('classe').value

    const eleve = {
        studentFistName: `${studentFistName}`,
        studentLastName: `${studentLastName}`,
        studentSex: `${studentSex}`,
        studentClass: `${studentClass}`
    }
    
        /*J'ajoute chaque élève à la liste  */
    TableauListEleves.push(eleve)


    /*Je sauvegarde la liste des élèves dans le local storage */
    localStorage.setItem('tuteur', JSON.stringify(TableauListEleves))


    /*Je crée un objet pour enregistrer chaque tuteur */
    const tutorLastName = document.getElementById('tutorLastName').value
    const tutorFirstName = document.getElementById('tutorFirstName').value
    const tutorPhone = document.getElementById('phone').value

    const tuteur = {
        tutorLastName: `${tutorLastName}`,
        tutorFirstName: `${tutorFirstName}`,
        tutorPhone: `${tutorPhone}`

    }

    /*J'ajoute chaque tuteur à la liste (des tuteurs) */
    TableauListparentEleves.push(tuteur)

    /*Je sauvegarde la liste des tuteurs dans le local storage */
    localStorage.setItem('tuteur', JSON.stringify(TableauListparentEleves))

    tbody.innerHTML += `
        <tr>
            <td id="nomEleve">${studentLastName}</td>
            <td id="sexEleve">${studentSex}</td>
            <td id="classEleve">${studentClass}</td>
            <td id="nomTuteur">${tutorLastName}</td>
            <td id="phoneTuteu">${tutorPhone}</td>
    </tr>
    `
})