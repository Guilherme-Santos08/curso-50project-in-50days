const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = 0;

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerHTML;

    const increment = target / 200; // velocidade ao carregar os numero na tela

    if (c < target) {
      counter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});