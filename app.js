function submitMsg(){
    alert("Your message has been sent successfully");
}
var status= 1;
function profileList(){
    var list=document.querySelector(".profile-list");
    if(list.innerHTML==""){
        if(status==1){
            list.innerHTML="<li><a href='signin.html'>Sign In</a></li><li><a href='signup.html'>Sign Up</a></li>";
            status=0;
        }else{
            list.innerHTML="<li><a href='#'>Gallery</a></li><li><a href='wishlist.html'>Wishlist</a></li><li><a href='cart.html'>Cart</a></li>";
            status=1;
        }
    }else{
        list.innerHTML="";
    }
}
