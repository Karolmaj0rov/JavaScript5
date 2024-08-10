let ism = prompt(`Ism kiriting`)

let harf = prompt(`harf kiriting`)

if (ism.toLocaleLowerCase().includes(harf)) {
    alert(`${ism} ismida ${harf} bor`)    
}else  {
    alert(`${ism} ismida ${harf} mavjud emas`)
}