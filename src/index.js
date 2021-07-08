document.addEventListener('DOMContentLoaded', getDogsRender)

function getDogsRender (){
    fetch('http://localhost:3000/dogs')
    .then(response => response.json())
    .then((data) => {seperateDogList(data)})

    function seperateDogList(dogObject){
        dogObject.forEach(dog => {
        //    console.log(document.querySelector('#table-body'))
            let tr = document.createElement('tr')
            let tdName = document.createElement('td')
            let tdBreed = document.createElement('td')
            let tdSex = document.createElement('td')
            let tdBtnContainer = document.createElement('td')
            let btn = document.createElement('button')
            let container = document.querySelector('#table-body')
            
            let dogName = dog.name
            let dogBreed = dog.breed
            let dogSex = dog.sex
            let dogId = dog.dogId
            

            tdName.textContent = dogName
            tdBreed.textContent = dogBreed
            tdSex.textContent = dogSex
            btn.textContent = 'Edit Dog'
            tdBtnContainer.append(btn)
            tr.append(tdName, tdBreed, tdSex,tdBtnContainer)
            container.append(tr)

            // function updateDogInfo(){
            //     console.log(document.querySelector('#dog-form'))
            // }

            btn.addEventListener('click', (value) => {
                document.querySelectorAll('#dog-form input')[0].value = dog.name
                document.querySelectorAll('#dog-form input')[1].value = dog.breed
                document.querySelectorAll('#dog-form input')[2].value = dog.sex
                })
                
        })

    }




}