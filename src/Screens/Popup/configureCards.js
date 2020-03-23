export const PopupCard = (card, url) => {
    var elem = document.getElementById(card);
    
    elem.style.display = 'block';
    if(url){
        document.getElementById('docIframe').src = url;
    }

}
export const HideCard = (card) => {
    var elem = document.getElementById(card);
    
    elem.style.display = 'none';

}
