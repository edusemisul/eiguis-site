// EÍGUIS — inicialização leve
document.addEventListener("DOMContentLoaded", () => {
  // realce do link ativo por seção
  function onScroll(){
    const y = window.scrollY + 80;
    document.querySelectorAll("section[id]").forEach(sec => {
      const a = document.querySelector(`.nav a[href="#${sec.id}"]`);
      if (!a) return;
      const top = sec.offsetTop, bottom = top + sec.offsetHeight;
      a.classList.toggle("active", y >= top && y < bottom);
    });
  }
  document.addEventListener("scroll", onScroll, {passive:true});
  onScroll();
});
