const clock =document.getElementById('clock');

setInterval(function(){
    const date = new Date()
    // clock.innerHTML=date.toLocaleTimeString();
    clock.innerHTML = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      
},1000)