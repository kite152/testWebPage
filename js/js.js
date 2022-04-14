$(document).ready(function(){
	$("#a4").click(function(){
		prompt("请输入账号");
		prompt("请输入密码");
	});
	var button=document.getElementById("a9").getElementsByTagName("input");
	var pic=document.getElementById("a9").getElementsByTagName("span");
	var key=0;
	var fun=setInterval(change,2000);
	for(var i=0;i<button.length;i++){
		button[i].onmouseover = function(){
			if(fun){
				clearInterval(fun);
			}
			for(var i=0;i<button.length;i++){
				if(button[i]==this){
				pic[i].className = "b4";
				button[i].className="b6";
				}
				else{
				pic[i].className = " ";
				button[i].className="b7";
				}
			}
		}
		button[i].onmouseout = function(){
			fun=setInterval(change,2000);
			}
    }
	function change(){
		++key;
		if(key==button.length)
		{
		key=0;
	    }
	    for (var i=0; i<button.length; i++) {
		pic[i].className = "";
		button[i].className="b7";
		}
		pic[key].className="b4";
		button[key].className="b6";
}
	var Image=document.getElementById("a5");
	Image.innerHTML += Image.innerHTML;
	var span=Image.getElementsByTagName("span");
	var abc=setInterval(def, 30);
	Image.onmouseover=function(){
		clearInterval(abc);
	}
	Image.onmouseout=function(){
		abc=setInterval(def,30);
	};
	function def() {
					if (Image.scrollLeft > span[0].offsetWidth) 
					{
						Image.scrollLeft = 0;
					} 
					else {
						Image.scrollLeft++;
					     }
				 }
});
