export default function getQueryVariable(variable) {
    const urlParams = new URL(window.location.href);
    let qstMark =urlParams.href.split("?")
     var vars = qstMark[1].split("&");
     for (var i=0;i<vars.length;i++) {
             var pair = vars[i].split("=");
             if(pair[i] == variable){return pair[1];}
     }
}