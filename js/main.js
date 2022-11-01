//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.sprites.front_default
        document.querySelector('h2').innerText = data.species.name
        document.querySelector('.type').innerText = `Type: ${data.types[0].type.name}`
        document.querySelector('.weight').innerText = `Weight: ${data.weight}`
        document.querySelector('.height').innerText = `Height: ${data.height}`
        document.querySelector('.baseHp').innerText = `Base HP: ${data.stats[0].base_stat}`
        document.querySelector('.baseAttack').innerText = `Base Attack: ${data.stats[1].base_stat}`
        document.querySelector('.baseDef').innerText = `Base Defence: ${data.stats[2].base_stat}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

