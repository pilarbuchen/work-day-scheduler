//Color Logic
function setColorRow() {
    var rows = document.getElementsByClassName("row");
    let currentHour = parseInt(moment().format('H'));

    Array.from(rows).forEach(row => {
        let
            rowIdString = row.id,
            rowHour;
        if (rowIdString) {
            rowHour = parseInt(rowIdString);
        }
        if (rowHour) {
            // Compares row id to current hour and sets color accordingly
            if (currentHour === rowHour) {
                setColor(row, "red");
            } else if ((currentHour < rowHour) && (currentHour < rowHour + 8)) {
                setColor(row, "green");
            } else if ((currentHour > rowHour) && (currentHour < rowHour + 8)) {
                setColor(row, "lightgrey"); 
            }
        }
    });
}
setColorRow();

function setColor(element, color) {
    element.style.backgroundColor = color;
}
//Editable Text Function
const input = document.getElementsByClassName('.editableText')

//Current Date 
function displayDate() {
    var displayMoments = document.getElementById("currentDay")
    var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    displayMoments.innerHTML = currentDate
}

displayDate();

function clearText()
{  
document.getElementById('text').value = "";
}

clearText(); 

//Set Local Storage
function saveEdits() {
    const text = document.getElementById('text');
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const text4 = document.getElementById('text4');
    const text5 = document.getElementById('text5');
    const text0 = document.getElementById('text0');
    const text7 = document.getElementById('text7');
    const text8 = document.getElementById('text8');
    const text9 = document.getElementById('text9');

    var userVersion = text.innerHTML;
    var userVersion1 = text1.innerHTML;
    var userVersion2 = text2.innerHTML;
    var userVersion3 = text3.innerHTML;
    var userVersion4 = text4.innerHTML;
    var userVersion5 = text5.innerHTML;
    var userVersion0 = text0.innerHTML;
    var userVersion7 = text7.innerHTML;
    var userVersion8 = text8.innerHTML;
    var userVersion9 = text9.innerHTML;

    localStorage.userEdits = userVersion;
    localStorage.userEdits1 = userVersion1;
    localStorage.userEdits2 = userVersion2;
    localStorage.userEdits3 = userVersion3;
    localStorage.userEdits4 = userVersion4;
    localStorage.userEdits5 = userVersion5;
    localStorage.userEdits0 = userVersion0;
    localStorage.userEdits7 = userVersion7;
    localStorage.userEdits8 = userVersion8;
    localStorage.userEdits9 = userVersion9;


   document.getElementById("update").innerHTML = "Changes Saved";
   setTimeout(function(){ 
    document.getElementById("update").innerHTML = "";
}, 3000);

}

function checkEdits() {
    if (localStorage.userEdits !== null)
        document.getElementById('text').innerHTML = localStorage.userEdits || "";
    if (localStorage.userEdits1 !== null)
        document.getElementById('text1').innerHTML = localStorage.userEdits1 || "";
    if (localStorage.userEdits2 !== null)
        document.getElementById('text2').innerHTML = localStorage.userEdits2|| "";
    if (localStorage.userEdits3 !== null)
        document.getElementById('text3').innerHTML = localStorage.userEdits3 || "";
    if (localStorage.userEdits4 !== null)
        document.getElementById('text4').innerHTML = localStorage.userEdits4 || "";
    if (localStorage.userEdits5 !== null)
        document.getElementById('text5').innerHTML = localStorage.userEdits5 || "";
    if (localStorage.userEdits0 !== null)
        document.getElementById('text0').innerHTML = localStorage.userEdits0|| "";
    if (localStorage.userEdits7 !== null)
        document.getElementById('text7').innerHTML = localStorage.userEdits7|| "";
    if (localStorage.userEdits8 !== null)
        document.getElementById('text8').innerHTML = localStorage.userEdits8|| "";
    if (localStorage.userEdits9 !== null)
        document.getElementById('text9').innerHTML = localStorage.userEdits9|| "";
}

checkEdits();

