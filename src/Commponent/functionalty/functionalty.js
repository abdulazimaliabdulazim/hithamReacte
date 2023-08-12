const actived = (activeElement) => {
  activeElement.forEach((a) => {
    a.addEventListener("click", (e) => {
      activeElement.forEach((a) => a.classList.remove("active"));
      e.currentTarget.classList.add("active");
    });
  });
};

export default actived;
