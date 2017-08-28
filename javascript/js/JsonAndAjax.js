alert();

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://github.com/jinddori/jinddori_server/blob/master/json%26ajax.json');
ourRequest.onload = function () {
    console.log(ourRequest.responseText);
}
ourRequest.send();
