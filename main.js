let api = "https://currency-converter-pro1.p.rapidapi.com/convert"


const url = "https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e42952c14emsh5525641d2b0c043p1c9d90jsn72685ab00a7c",
    "x-rapidapi-host": "currency-converter-pro1.p.rapidapi.com",
  },
};

let select_from = document.querySelector('.select_from')
let select_to = document.querySelector('.select_to')
let amountInput = document.querySelector('#amount')
let converterBtn = document.querySelector('.converter-btn')
let money = document.querySelector('.money')
let fromImg = document.querySelector('.fromImg')
let toImg = document.querySelector('.toImg')

const SelectData = async () => {

  const res = await fetch(url, options)
  const { result } = await res.json()

  for (const key in result) {
    const option = document.createElement('option')
    option.key = key
    option.textContent = key

    select_from.appendChild(option)
  }
  for (const key in result) {
    const option = document.createElement('option')
    option.key = key
    option.textContent = key

    select_to.appendChild(option)
  }
}

SelectData();



select_from.addEventListener("change", (e)=> {
  let dinamicURL = e.target.value.toLowerCase().slice(0,2)
  fromImg.src = `https://flagcdn.com/20x15/${dinamicURL}.png`
})

select_to.addEventListener("change", (e)=> {
  let dinamicURL = e.target.value.toLowerCase().slice(0,2)
  toImg.src = `https://flagcdn.com/20x15/${dinamicURL}.png`
})






converterBtn.addEventListener('click',  ()=> {
  if(!amountInput.value) {
    alert('Tupay amount inputni toldir')
  } else {
    CursConverter()
  }
})

const CursConverter = async ()=> {
  if(select_from.value!="Country" || select_to.value!="Country")  {
    const response = await fetch(`${api}?from=${select_from.value}&to=${select_to.value}&amount=${amountInput.value}`, options)
    const {result} = await response.json()
    
    let finallyAmount = result.toFixed()
  
    money.textContent = `Money: ${finallyAmount}`
    money.classList.add('text-[#84cc16]')
  } else {
    alert(
      'Tupay selectlarni  tanla'
    )
  }

}