export function formatDateTime(date) {
    const dataObj = new Date(date)
    if (isNaN(dataObj)) return 'Data inválida'

    const options = {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'};
    return dataObj.toLocaleString('pt-BR', options)
}

//teste
console.log(formatDateTime('2025-09-12T15:45:30'))
console.log(formatDateTime('banana'))