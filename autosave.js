let post = document.querySelector(".ProseMirror");
let btn1 = document.querySelector(".right-4");
let btn2 = document.querySelectorAll("button")[9]
let LS = window.localStorage;

post.innerHTML = LS.getItem("autosave");

new MutationObserver(i=>{
	if (i.length < 2) LS.setItem("autosave", post.innerHTML);
}).observe(post, { attributes: true });

btn1.onclick=i=>post.innerHTML = LS.getItem("autosave");
btn2.onclick=i=>LS.setItem("autosave","");
