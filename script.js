function begin_count(callback){
    let cnt = Number(counter.textContent);

    var set_interval = setInterval(function(){
        if(cnt === 100){
            clearInterval(set_interval);

            setTimeout(()=>{
                callback();
            },1700)

            return;
        }

        cnt++;
        counter.textContent = String(cnt).padStart(2,"0");
    },50);
}