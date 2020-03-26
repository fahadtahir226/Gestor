export const PopupCard = (card, url) => {
    var elem = document.getElementById(card);
    
    elem.style.display = 'block'
    if(url){
        document.getElementById('docIframe').src = url;
    }

}
export const HideCard = (instance ,card) => {
    var elem = document.getElementById(card);
    console.log("Hide ", card," Instance ",instance);
    elem.style.display = 'none';
    instance[0].close();
}