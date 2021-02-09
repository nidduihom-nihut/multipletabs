var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button")
var tabPannels=document.querySelectorAll(".tabContainer .tabPannel")

function showPannel(panelIndex, colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPannels.forEach(function(node){
        node.style.display="none";
    });
    tabPannels[panelIndex].style.display="block";
    tabPannels[panelIndex].style.backgroundColor=colorCode;
}
