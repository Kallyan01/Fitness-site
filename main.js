function openmenu()
{
    document.getElementById("nav-bar").style.width = "100%";
    document.getElementById("nav-bar").style.animation = "mynav 0.8s ease";
     document.getElementById("nav-bar").style.display = "";
    document.getElementById("sico").style.display="flex";
    document.getElementById("h61").style.display = "block";
    document.getElementById("bdy").style.overflow="hidden";

}
function closemenu()
{
        document.getElementById("nav-bar").style.width = "0%";
    document.getElementById("nav-bar").style.display = "none";
    document.getElementById("nav-bar").style.animation = "closemenu 1.8s ease ";
      document.getElementById("sico").style.display="none";
    document.getElementById("bdy").style.overflow="visible";
}
function closelog()
{
        document.getElementById("popbox1").style.display = "none";
    
}
function loading()
{
    document.getElementById("load").style.display="none";
}

