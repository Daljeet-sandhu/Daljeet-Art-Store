function RemoveItem()
{
document.getElementById("item").remove();
document.getElementById("item3").remove();
}

function RemoveItem1()
{
document.getElementById("item1").remove();
document.getElementById("item4").remove();
}

function RemoveItem2()
{
document.getElementById("item2").remove();
document.getElementById("item5").remove();
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}