document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(document.location.search.substring(1));
  const uuid = params.get("id");

  if (!uuid) {
    window.location.href = "https://lailahealth.github.io/PNIzinho/401.html";

    return;
  }

  const $aTag = document.getElementsByTagName("a")[0];

  $aTag.href = `https://lailahealth.github.io/PNIzinho/index.html?id=${uuid}`;
});
