function solve() {
    let adoptionSection = document.getElementById('adoption').getElementsByTagName('ul')[0];
    let adoptedSection = document.getElementById('adopted').getElementsByTagName('ul')[0];
    document.getElementsByTagName('button')[0].addEventListener('click', function (event) {
        event.preventDefault();
        let values = [];
        let inputArr = Array.from(document.getElementsByTagName('input'));
        inputArr.forEach(element => {
            values.push(element)
        });
        if (!(values.some(x => x.value === ''))) {
            if (!isNaN(document.getElementsByTagName('input')[1].value)) {
                let newPet = {};
                newPet.Name = document.getElementsByTagName('input')[0].value;
                newPet.Age = document.getElementsByTagName('input')[1].value;
                newPet.Kind = document.getElementsByTagName('input')[2].value;
                newPet.CurrentOwner = document.getElementsByTagName('input')[3].value;


                let newPetLi = document.createElement('li');

                let liP = document.createElement('p');

                let ownerSpan = document.createElement('span');
                ownerSpan.textContent += `Owner: ${newPet.CurrentOwner}`;
                let button = document.createElement('button');
                button.textContent = 'Contact with owner';


                let nameStrong = document.createElement('strong');
                nameStrong.textContent = newPet.Name;

                let ageStrong = document.createElement('strong');
                ageStrong.textContent = newPet.Age;

                let kindStrong = document.createElement('strong');
                kindStrong.textContent = newPet.Kind;

                liP.innerHTML += `<strong>${newPet.Name}</strong> is a <strong>${newPet.Age}</strong> year old <strong>${newPet.Kind}</strong>`
                newPetLi.appendChild(liP)

                newPetLi.appendChild(ownerSpan)

                newPetLi.appendChild(button);

                adoptionSection.appendChild(newPetLi)



                document.getElementsByTagName('input')[0].value = ''
                document.getElementsByTagName('input')[1].value = ''
                document.getElementsByTagName('input')[2].value = ''
                document.getElementsByTagName('input')[3].value = ''

                button.addEventListener('click', function a() {
                    let newDiv = document.createElement('div');
                    let input = document.createElement('input');
                    input.setAttribute('placeholder', 'Enter your names')
                    button.textContent = 'Yes! I take it!'
                    newDiv.appendChild(input);
                    newDiv.appendChild(button)
                    newPetLi.appendChild(newDiv);
                    button.removeEventListener('click', a)
                    button.addEventListener('click', function b(){
                        if(input.value != ''){
                            // let button = newPetLi.getElementsByTagName('div')[0].getElementsByTagName('button')[0];
                            button.textContent = 'Checked';
                            newDiv.remove()
                            input.remove()

                            ownerSpan.textContent = `New Owner: ${input.value}`;
                            adoptedSection.appendChild(newPetLi);
                            newPetLi.appendChild(button)
                            button.removeEventListener('click', b);
                            button.addEventListener('click', function(){
                                newPetLi.remove()

                            })
                        }
                    })
                })

            }
        }

    })
}