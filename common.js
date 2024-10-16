Pouco armazenamento … 8% restantes do seu armazenamento individual de 15 GB. Para evitar interrupções, libere espaço ou fale com seu administrador.
const getCSS=(variavel) =>{
    const bodyStyles= getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}

const tickConfig={
    family: getCSS('--font'),
    size:16,
    color:getCSS('--primary-color')
}
export{getCSS, tickConfig}
