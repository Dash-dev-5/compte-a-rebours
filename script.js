let h1= document.getElementById("h3");
function compte(){
let date= document.getElementById("minute").value;
    const now = new Date().getTime();
    let dateRebour = new Date(date).getTime();
    // alert(now+"  "+dateRebour)
    const dif = dateRebour - now;
    const jours = Math.floor(dif/(1000 * 60 * 60 * 24));
    const heurs = Math.floor((dif % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minute = Math.floor((dif % (1000 * 60 * 60))/(1000 * 60));
    const seconds = Math.floor((dif % (1000 * 60))/1000);
    h1.innerHTML = jours+" Jours "+heurs+" Heures "+minute+" Minutes "+seconds+" Secondes";  
}
const intervale = setInterval(() => {
    compte();
},1000)