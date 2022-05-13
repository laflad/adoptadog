var button = document.getElementById("buttonform");

button.onclick = function() {
   
    let appName = document.getElementById('aName').value;

    let appEmail = document.getElementById('aEmail').value;

    let appAddress = document.getElementById('aAddress').value;

    let appCity = document.getElementById('aCity').value;

    let appState = document.querySelector('#state').value;

    let appZip = document.getElementById('aZip').value;

    let firstTimer = document.getElementsByName('input[name="firstTimeAdopt"]:checked').value;

    let selectLoc = document.querySelector('#location').value;

    console.log(appName, appEmail, appAddress, appCity, appState, appZip, firstTimer, selectLoc);
    
    alert("Thank you. The form information has been received");

}