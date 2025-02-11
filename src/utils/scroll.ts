export function handleScroll(id: string) {
  const topBarHeight = 120;
  if (id === "startseite") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - topBarHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  }
}
