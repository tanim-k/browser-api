console.log('putki')
// alert('ma is knocking')

const maComing = () => {
    alert('ammu is coming. open the book')
}
// comfirm using by fn
const askPicnic = () => {
    const response = confirm('are u going to picnic');
    console.log(response);
    if(response===true) {
        alert('AMAKE KISU TK DE')
    }
    else{
        console.log('dure giye mor')
    }
}
const askName = () => {
    const name = prompt('wHAT iS ur name')
    if(name) {
        console.log(name)
    }
}