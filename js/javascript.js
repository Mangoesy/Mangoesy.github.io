var url = "https://cors-anywhere.herokuapp.com/https://www.nu.nl/rss/Algemeen";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");

xhr.onreadystatechange = function () {
if (xhr.readyState === 4) {
    //console.log(xhr.status);
    //console.log(xhr.responseText);
    loadArticles(xhr);
}};

xhr.send();


function testFunction(xml, articleNumber) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("item")[articleNumber];
    //console.log(x);
    var y = x.childNodes;
    console.log(y);
    //var z = y[1].textContent;
    //console.log(z)
    
    let tempArticleArr = [];
    var amoundOfExtraLinks = 0;

    for (let i = 0; i < y.length; i++) {
    if (y[i].getAttribute('href') !== null) {
        //console.log(y[i].getAttribute('href'));
        tempArticleArr.push(y[i].getAttribute('href'));
        amoundOfExtraLinks++;
    } else if(y[i].getAttribute('url') !== null) {
        //console.log(y[i].getAttribute('url'));
        tempArticleArr.push(y[i].getAttribute('url'));
    } else {
        //console.log(y[i].textContent);
        tempArticleArr.push(y[i].textContent);
    }
    }  
    tempArticleArr.push(amoundOfExtraLinks)
    //console.log(tempArticleArr);
    //console.log(amoundOfExtraLinks);
    return tempArticleArr;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
    

