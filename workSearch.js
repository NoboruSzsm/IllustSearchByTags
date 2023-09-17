/* Coded by Noboru Suzusame
   
   v.1.1

*/


// ニコニコ風表示
const workElements = document.querySelectorAll(".work");
workElements.forEach((work) => {
  const workInfo = work.querySelector(".work-info");

  // Slide in the work info from the bottom on hover or tap
  work.addEventListener("mouseenter", () => {
    workInfo.style.transform = "translateY(0)";
  });

  work.addEventListener("mouseleave", () => {
    workInfo.style.transform = "translateY(100%)";
  });

  work.addEventListener("touchstart", () => {
    if (workInfo.style.transform === "translateY(0%)") {
      workInfo.style.transform = "translateY(100%)";
    } else {
      workInfo.style.transform = "translateY(0%)";
    }
  });
});

// 初期表示は全ての作品を非表示にする
const works = document.querySelectorAll(".works .work");
works.forEach((work) => {
  work.style.display = "none";
});

/// タグがクリックされたら、選択されたタグに関連する作品を表示する
const tagElements = document.querySelectorAll("#tags [data-tag]");

tagElements.forEach((tagElement) => {
  tagElement.addEventListener("click", function () {
    // クリックされたタグに対応する作品を表示する
    const selectedTag = this.getAttribute("data-tag");

    works.forEach((work) => {
      const tags = work.getAttribute("data-tags");
      if (tags) {
        const tagsArray = tags.split(" ");
        const shouldShowWork = tagsArray.includes(selectedTag);
        work.style.display = shouldShowWork ? "block" : "none";
      }
    });
  });
});
