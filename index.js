const colorInput = document.getElementById('color-input')
const colorsContainer = document.getElementById('colors-container')
const colorSchemesSelect = document.getElementById('color-schemes-select')


document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault()
    clearOutColorsContainer()
    getColors()
})


function clearOutColorsContainer(){
    colorsContainer.innerHTML = ``
}

function getColors(){
    
    let InputBareValue = colorInput.value.substring(1)
    
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${InputBareValue}&format=json&mode=${colorSchemesSelect.value}&count=5`)
    .then(res => res.json())
    .then(data => {
        let dataColor = data.colors
        
        dataColor.map( (color) => {
          let colorImage = color.image
          let imagePath = colorImage.bare
          let colorHex = color.hex
          colorsContainer.innerHTML += `
            <div class="color-container">
                <img src=${imagePath}>
                <p>${colorHex.value}</p>
            </div>`  
        })
    })
}

getColors()


