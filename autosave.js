let post = document.querySelector(".ProseMirror");
let btn = document.querySelector(".right-4");
let LS = window.localStorage;

post.innerHTML = LS.getItem("autosave");

new MutationObserver(i=>{
	if (i.length < 2) LS.setItem("autosave", post.innerHTML);
}).observe(post, { attributes: true });

btn.onclick=i=>post.innerHTML = LS.getItem("autosave");
