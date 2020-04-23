import headerAnimation from "./modules/HeaderAnimation.js";

/* HeaderAnimation */
const HeaderAnimation = new headerAnimation;
	HeaderAnimation.cabecalho = 
		document.querySelector("#cabecalho");
	HeaderAnimation.deslocar = 
		false;
	window.onscroll = () => 
		HeaderAnimation.scrollAnimation(window.innerWidth, window.scrollY);
	window.onresize = () => 
		HeaderAnimation.resize();
/* END HeaderAnimation */