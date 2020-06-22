var ID;

self.addEventListener('message', (ev)=>{
    console.log('Web worker started with request: ', ev.data.method);
    
    let data = ev.data.method;
    switch(data){
        case 'fetch':
            let url = '';
            if (ev.data.url != undefined){
                url = ev.data.url;
            }
            var delay = 0;
            if (ev.data.delay != undefined){
                delay = ev.data.delay;
            }
            setTimeout(function () {
                console.log('Waiting for: ' + delay + ' ms');
                fetch(url)
                .then(response=>response.json() )
                .then( data =>{
                    self.postMessage( data );
                })
                .catch(err=>console.log(err));
            }, delay);
            break;
        default:
            console.log(JSON.stringify(ev.data) + ' Invalid access');
            self.postMessage('Closing web worker');
            self.close();
    }
    
})