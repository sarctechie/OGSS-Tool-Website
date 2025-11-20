// Basic interactivity for PSI marketing site

function $(id){return document.getElementById(id);}

// Current year in footer
(function setYear(){
  const y = $("year");
  if(y) y.textContent = new Date().getFullYear();
})();

// Mobile nav
(function mobileNav(){
  const burger = $("navBurger");
  const drawer = $("navDrawer");
  if(!burger || !drawer) return;
  burger.addEventListener("click", ()=>{
    drawer.classList.toggle("open");
  });
  drawer.querySelectorAll("a,button").forEach(el=>{
    el.addEventListener("click", ()=>drawer.classList.remove("open"));
  });
})();

// Portal modal
(function portalModal(){
  const openBtns = ["btn-open-portal","btn-open-portal-mobile"]
    .map(id => $(id))
    .filter(Boolean);
  const modal = $("portalModal");
  const closeBtn = $("portalModalClose");
  const contactBtn = $("portalModalContact");
  if(!modal) return;

  openBtns.forEach(btn => btn.addEventListener("click", ()=>{
    modal.classList.add("open");
  }));
  closeBtn && closeBtn.addEventListener("click", ()=>modal.classList.remove("open"));
  contactBtn && contactBtn.addEventListener("click", ()=>{
    modal.classList.remove("open");
    const contact = document.getElementById("contact");
    if(contact) contact.scrollIntoView({behavior:"smooth"});
  });
  modal.addEventListener("click", (e)=>{
    if(e.target === modal) modal.classList.remove("open");
  });
})();

// Demo modal
(function demoModal(){
  const openBtn = $("btn-open-demo-form");
  const modal = $("demoModal");
  const closeBtn = $("demoModalClose");
  const form = $("demoForm");
  if(!modal || !openBtn) return;
  openBtn.addEventListener("click", ()=>modal.classList.add("open"));
  closeBtn && closeBtn.addEventListener("click", ()=>modal.classList.remove("open"));
  modal.addEventListener("click", (e)=>{
    if(e.target === modal) modal.classList.remove("open");
  });
  form && form.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("Thanks! We’ll email you a scheduling link shortly.");
    modal.classList.remove("open");
    form.reset();
  });
})();

// Pricing buttons -> prefill contact tier
(function pricingButtons(){
  document.querySelectorAll("[data-tier]").forEach(btn => {
    btn.addEventListener("click", ()=>{
      const tier = btn.getAttribute("data-tier");
      const select = $("contactTier");
      if(select){
        select.value = tier;
      }
      const contact = document.getElementById("contact");
      if(contact) contact.scrollIntoView({behavior:"smooth"});
    });
  });
})();

// Email signup (stub)
(function signupForm(){
  const form = $("signupForm");
  const email = $("signupEmail");
  if(!form || !email) return;
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!email.value) return;
    alert("Thanks! We’ll let you know when PSI is ready for wider rollout.");
    email.value = "";
  });
})();

// Contact form (stub)
(function contactForm(){
  const form = $("contactForm");
  if(!form) return;
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("Thanks for reaching out! We’ll respond within one business day.");
    form.reset();
  });
})();
