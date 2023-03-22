position=0

right.onclick = function(){
    if (position<900) {
        position=position+100
        gallery.style.right=position+"%"
    }
    else{
        position=0
        gallery.style.right=position+"%"
    }
}

left.onclick = function(){
    if (position>0) {
        position=position-100
        gallery.style.right=position+"%"
    }
    else{
        position=900
        gallery.style.right=position+"%"
    }
}
