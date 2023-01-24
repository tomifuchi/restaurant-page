import blue_donut from '../img/blue_donut.png';
import chocolate_donut from '../img/chocolate_donut.png';
import cup from '../img/cup.png';
import orange_donut from '../img/orange_donut.png';
import pink_donut from '../img/pink_donut.png';
import donut_shop from '../img/donut_shop.jpg';
import donut_about from '../img/donut_about.jpg';

const donuts = [blue_donut, pink_donut, chocolate_donut, cup, orange_donut];

export const homePage = () => {
 const doc = document.createRange().createContextualFragment(`
<!--Main menu goes here--><!--Special deal/ combo section hero--><section class="hero"><div class="hero-deal"><h2>Special Friday night deal</h2><p>  <em>"This"</em><span class="icon">👏</span> is what makes life go "Round"! Get the limited 
 <span class="strawberry">Strawberry<span class="icon">🍓</span></span>
 <span class="rainbow">rainbow<span class="icon">🌈</span></span> 
 <span class="sprinkles">sprinkles</span> 
 d<span class="icon">🍩</span>nut.</p><p>Taste the finest donut today !</p><button>Me want !</button></div><div class="hero-img"><div class="img-wraper"><img src="../img/pink_donut.png" alt="hero pink donut" srcset=""/></div></div></section><!--Recommend section--><section class="recommend"><div class="recommend-title"><h3>Our recommendation for the day</h3><p>Freshly made and <span style="text-decoration: underline;">ready just for you</span></p></div><ul class="recommend-item-list"><li class="recommend-item"> <a href="">Item 1<div class="img-wraper"><img src="../img/pink_donut.png" alt="pink donut" srcset=""/></div><p>Pink donut</p><button>Pick me!</button></a></li><li class="recommend-item"> <a href="">Item 2<div class="img-wraper"><img src="../img/chocolate_donut.png" alt="chocolate donut" srcset=""/></div><p>Chocolate donut</p><button>Pick me!</button></a></li><li class="recommend-item"> <a href="">Item 3<div class="img-wraper"><img src="../img/blue_donut.png" alt="blue donut" srcset=""/></div><p>Blue donut</p><button>Pick me!</button></a></li><li class="recommend-item"> <a href="">Item 4<div class="img-wraper"><img src="../img/cup.png" alt="cup" srcset=""/></div><p>Coffee</p><button>Pick me!</button></a></li><li class="recommend-item"> <a href="">Item 5<div class="img-wraper"><img src="../img/orange_donut.png" alt="orange donut" srcset=""/></div><p>Orange donut</p><button>Pick me!</button></a></li><li class="recommend-item"> <a href="">Item 6<div class="img-wraper"><img src="../img/cup.png" alt="cup" srcset=""/></div><p>Cup</p><button>Pick me!</button></a></li></ul><div class="recommend-menu"><h4> Or choose from our menu</h4><button>Menu</button></div></section><!--Location picker--><section class="location-picker"><!--Title and description--><div class="location-picker-tidesc"> <p>Order here or eat at your local Kaf'n'dunk</p><Button>Direction to nearest Kaf'n'dunk</Button></div><div class="location-picker-img"><div class="img-wraper"><img src="../img/donut_shop.jpg" alt="Picture of a bicyle shop" srcset=""/></div></div></section><!--About us core values--><section class="about"><div class="about-img"><div class="img-wraper"><img src="../img/donut_about.jpg" alt="Close up of a pink donut" srcset=""/></div></div><!--Title and description--><div class="about-tidesc"><p>  We put our customers needs priority on top of everything we do everyday,
 we are create magical donuts everyday especially for you. Click to learn
 more about our magic and what we can offers you.</p><button>Find out more</button></div></section>
`);

doc.querySelector('.hero-img .img-wraper img').src = orange_donut;
doc.querySelectorAll('.recommend-item-list .recommend-item .img-wraper img').forEach((list_item) => list_item.src = 
donuts[Math.floor(Math.random() * donuts.length)]);
doc.querySelector('.location-picker-img .img-wraper img').src = donut_shop;
doc.querySelector('.about-img .img-wraper img').src = donut_about;

return doc;
}