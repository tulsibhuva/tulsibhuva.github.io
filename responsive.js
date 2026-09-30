(function(){
function build(nav){
 if(nav.dataset.mm)return;nav.dataset.mm='1';
 var links=nav.children[1];if(!links)return;
 var b=document.createElement('button');b.className='mm-btn';b.type='button';b.setAttribute('aria-label','Menu');b.innerHTML='<i></i><i></i><i></i>';
 var p=document.createElement('div');p.className='mm-panel';
 links.querySelectorAll('a').forEach(function(a){var c=document.createElement('a');c.href=a.getAttribute('href');c.textContent=a.textContent;if(/^https?:/.test(c.getAttribute('href'))){c.target='_blank';c.rel='noopener';}p.appendChild(c);});
 document.body.appendChild(p);nav.appendChild(b);
 function close(){document.documentElement.classList.remove('mm-open');}
 b.addEventListener('click',function(e){e.stopPropagation();document.documentElement.classList.toggle('mm-open');});
 p.addEventListener('click',function(e){var a=e.target.closest('a');if(!a)return;var h=a.getAttribute('href');close();if(h&&h.charAt(0)==='#'){e.preventDefault();var t=document.querySelector(h);if(t)window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-84,behavior:'smooth'});}});
 document.addEventListener('click',function(e){if(!p.contains(e.target))close();});
 window.addEventListener('scroll',close,{passive:true});window.addEventListener('resize',close);
}
function scan(){var n=document.querySelector('#root nav');if(n)build(n);}
new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});scan();
})();
