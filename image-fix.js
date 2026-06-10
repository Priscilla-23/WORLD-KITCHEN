function repairImagePath(image) {
  const source = image.getAttribute("src") || "";
  if (!source.startsWith("assets/")) return;

  const fallback = source.replace(/^assets\//, "");
  if (image.dataset.fallbackSrc === fallback) return;

  image.dataset.fallbackSrc = fallback;
  image.src = fallback;
}

document.addEventListener("error", (event) => {
  const target = event.target;
  if (target instanceof HTMLImageElement) repairImagePath(target);
}, true);

document.querySelectorAll("img").forEach((image) => {
  if (image.complete && image.naturalWidth === 0) repairImagePath(image);
});

const imageObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (!(node instanceof Element)) return;
      if (node instanceof HTMLImageElement && node.complete && node.naturalWidth === 0) repairImagePath(node);
      node.querySelectorAll("img").forEach((image) => {
        if (image.complete && image.naturalWidth === 0) repairImagePath(image);
      });
    });
  });
});

imageObserver.observe(document.body, { childList: true, subtree: true });
