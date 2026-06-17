(function () {
  var publicFallbacks = {
    jollof: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/JOLLOF_RICE.JPG/960px-JOLLOF_RICE.JPG",
    fufu: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Light_soup_with_fufu.JPG/330px-Light_soup_with_fufu.JPG",
    waakye: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Waakye_2.jpg/500px-Waakye_2.jpg",
    carbonara: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Spaghetti_alla_carbonara_classica.jpg/640px-Spaghetti_alla_carbonara_classica.jpg"
  };

  function fallbackKey(src) {
    var value = (src || "").toLowerCase();
    if (value.indexOf("assets/jollof.jpg") !== -1) return "jollof";
    if (value.indexOf("assets/fufu.jpg") !== -1) return "fufu";
    if (value.indexOf("assets/waakye.jpg") !== -1) return "waakye";
    if (value.indexOf("assets/spaghetti-carbonara.jpg") !== -1) return "carbonara";
    return "";
  }

  function fallbackSrc(key) {
    var embedded = window.worldKitchenEmbeddedImages || {};
    return embedded[key] || publicFallbacks[key] || "";
  }

  function applyFallback(img) {
    if (!img || img.tagName !== "IMG" || img.dataset.africanFallbackApplied === "true") return;
    var key = fallbackKey(img.getAttribute("src") || img.currentSrc || "");
    var nextSrc = fallbackSrc(key);
    if (!nextSrc) return;
    img.dataset.africanFallbackApplied = "true";
    img.src = nextSrc;
  }

  function checkImage(img) {
    if (!img || img.tagName !== "IMG") return;
    if (!fallbackKey(img.getAttribute("src") || img.currentSrc || "")) return;
    img.addEventListener("error", function () {
      applyFallback(img);
    }, { once: true });
    if (img.complete && img.naturalWidth === 0) applyFallback(img);
  }

  window.addEventListener("error", function (event) {
    applyFallback(event.target);
  }, true);

  window.addEventListener("load", function () {
    document.querySelectorAll("img").forEach(checkImage);
  });

  new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.tagName === "IMG") checkImage(node);
        if (node.querySelectorAll) node.querySelectorAll("img").forEach(checkImage);
      });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
}());