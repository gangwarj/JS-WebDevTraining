function GetPostsData(){
    return new Promise((resolve, reject) => {
        // dependent code
        var xmlHttpObj = new XMLHttpRequest();
        xmlHttpObj.open('GET', 'https://jsonplaceholder.typicode.com/posts');
        xmlHttpObj.send();
        xmlHttpObj.onreadystatechange = function(){
            if(xmlHttpObj.readyState == 4 && xmlHttpObj.status == 200){
                // resolve the promise when this is the case
                resolve(xmlHttpObj.responseText);
            }else if(xmlHttpObj.readyState == 4 && xmlHttpObj !== 200){
                //reject the promise if this happens
                reject(xmlHttpObj.statusText);
            }
        }
    } );
}