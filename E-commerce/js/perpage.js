
function clicking(smallImg){
    var fullImg = document.getElementById("imagebox");
    fullImg.src = smallImg.src
}

function openpage(evt, cityName, heading_id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("fas_tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("heading_topic");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "#FFF1F9";
    }
    document.getElementById(cityName).style.display = "block";
    document.getElementById(heading_id).style.backgroundColor = "#F1E8EE";

}
document.getElementById("defaultOpen").click();
