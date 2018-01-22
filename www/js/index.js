document.addEventListener("deviceready", onDeviceReady, false); 


function onDeviceReady() {

alert('teste');

var conn = navigator.connection.type;
if( conn == 'none' || conn == 'NONE' ){ //conn

alert('O aplicativo nao detectou conexao com internet.');

} else {

cordova.InAppBrowser.open(encodeURI('http://fazerja.com.br/site/index.php?app=s'), '_self', 'location=no,hidden=no');

}

}


	   

