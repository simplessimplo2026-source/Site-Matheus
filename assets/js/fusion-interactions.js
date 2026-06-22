document.addEventListener("DOMContentLoaded",function(){
  if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();
  document.querySelectorAll(".magnetic-btn,.spec-card,[data-bento-grid] .group").forEach(function(el){
    el.addEventListener("pointermove",function(e){
      var r=el.getBoundingClientRect();
      el.style.setProperty("--mx",e.clientX-r.left+"px");
      el.style.setProperty("--my",e.clientY-r.top+"px");
      el.style.setProperty("--mouse-x",e.clientX-r.left+"px");
      el.style.setProperty("--mouse-y",e.clientY-r.top+"px");
    });
  });
  var reveal=function(el){el.classList.add("is-visible");};
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){if(entry.isIntersecting){reveal(entry.target);io.unobserve(entry.target);}});
    },{threshold:.14,rootMargin:"0px 0px -8% 0px"});
    document.querySelectorAll(".reveal-up,.scroll-reveal").forEach(function(el){io.observe(el);});
  }else document.querySelectorAll(".reveal-up,.scroll-reveal").forEach(reveal);
  document.querySelectorAll("[data-modal-open]").forEach(function(btn){
    btn.addEventListener("click",function(){document.querySelector(btn.dataset.modalOpen).classList.remove("hidden");});
  });
  document.querySelectorAll("[data-modal-close]").forEach(function(btn){
    btn.addEventListener("click",function(){btn.closest("[data-modal]").classList.add("hidden");});
  });
});
