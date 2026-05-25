function clock(){
    let time = new Date();

    document.getElementById('hh').innerHTML= time.getHours();
    document.getElementById('mm').innerHTML= time.getMinutes();
    document.getElementById('ss').innerHTML=time.getSeconds();
}
// hr 1 second me update
setInterval(clock, 1000);