function GerarQRCode(){
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=230x230&chld=M&chl=';
    var ConteudoQRCode = GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRCodeImage'). src = ConteudoQRCode;
}