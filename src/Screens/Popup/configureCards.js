export const PopupCard = (card, data) => {
    var elem = document.getElementById(card);
    
    elem.style.display = 'block'
    if(card === 'pdfDoc'){
        document.getElementById('docIframe').src = data;
    }
    if(card === 'addDoc'){
        document.getElementById('docAddr').value = data;
    }

}
export const HideCard = (instance ,card) => {
    var elem = document.getElementById(card);
    console.log("Hide ", card," Instance ",instance);
    elem.style.display = 'none';
    // instance.forEach(inst => inst.close());
    window.location.reload(true);
}