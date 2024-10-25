---
title: "Wallpapers for Mobile and Desktop"
date: 2024-10-24
tags: ["Wallpaper", "Mobile wallpaper", "Desktop wallpaper"]
---

<style>
.download-btn {
    background-color: #007bff; /* Blue background */
    color: white;              /* White text */
    border: none;              /* No border */
    padding: 5px 10px;         /* Padding */
    cursor: pointer;           /* Pointer cursor on hover */
    margin-top: 5px;           /* Space above button */
    border-radius: 4px;        /* Rounded corners */
}

.download-btn:hover {
    background-color: #0056b3; /* Darker blue on hover */
}
</style>

{{< gallery >}}
{{ range (slice
    "/wallpaper/Mobile/1.jpg"
    "/wallpaper/Mobile/2.jpg"
    "/wallpaper/Mobile/3.png"
    "/wallpaper/Mobile/4.jpg"
    "/wallpaper/Mobile/5.jpg"
    "/wallpaper/Mobile/6.jpg"
    "/wallpaper/Mobile/7.png"
    "/wallpaper/Mobile/8.jpg"
    "/wallpaper/Mobile/9.jpg"
    "/wallpaper/Mobile/10.png"
    "/wallpaper/Mobile/11.png"
    "/wallpaper/Mobile/12.jpg"
    "/wallpaper/Mobile/13.jpg"
    "/wallpaper/Mobile/14.jpg"
    "/wallpaper/Mobile/15.jpg"
    "/wallpaper/Mobile/16.jpg"
    "/wallpaper/Mobile/17.jpg"
    "/wallpaper/Mobile/18.png"
    "/wallpaper/Mobile/19.jpg"
    "/wallpaper/Mobile/20.jpg"
    "/wallpaper/Mobile/21.png"
    "/wallpaper/Mobile/22.jpg"
    "/wallpaper/Mobile/23.jpg"
    "/wallpaper/Mobile/24.jpg"
    "/wallpaper/Mobile/25.jpg"
    "/wallpaper/Mobile/26.jpg"
    "/wallpaper/Mobile/27.jpg"
    "/wallpaper/Mobile/28.png"
    "/wallpaper/Mobile/29.png"
    "/wallpaper/Mobile/30.jpg"
    "/wallpaper/Mobile/31.jpg"
    "/wallpaper/Mobile/32.jpg"
    "/wallpaper/Mobile/33.jpg"
    "/wallpaper/Mobile/34.jpg"
  )}}
<img src="{{ . }}" class="grid-w50 md:grid-w33 xl:grid-w25" alt="Wallpaper" />
<button class="download-btn" onclick="downloadImage('{{ . }}')">Download</button>
{{ end }}
{{< /gallery >}}

<script>
function downloadImage(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();  // Set the filename for download
    link.click();  // Trigger the download
}
</script>

<!-- --- -->
<!---->
<!-- title: "Wallpapers for Mobile and Desktop" -->
<!-- date: 2024-10-24 -->
<!-- tags: ["Wallpaper", "Mobile wallpaper", "Desktop wallpaper"] -->
<!---->
<!-- --- -->
<!---->
<!-- {{< gallery >}} -->
<!-- {{ range (slice -->
<!--     "/wallpaper/Mobile/1.jpg" -->
<!--     "/wallpaper/Mobile/2.jpg" -->
<!--     "/wallpaper/Mobile/3.png" -->
<!--     "/wallpaper/Mobile/4.jpg" -->
<!--     "/wallpaper/Mobile/5.jpg" -->
<!--     "/wallpaper/Mobile/6.jpg" -->
<!--     "/wallpaper/Mobile/7.png" -->
<!--     "/wallpaper/Mobile/8.jpg" -->
<!--     "/wallpaper/Mobile/9.jpg" -->
<!--     "/wallpaper/Mobile/10.png" -->
<!--     "/wallpaper/Mobile/11.png" -->
<!--     "/wallpaper/Mobile/12.jpg" -->
<!--     "/wallpaper/Mobile/13.jpg" -->
<!--     "/wallpaper/Mobile/14.jpg" -->
<!--     "/wallpaper/Mobile/15.jpg" -->
<!--     "/wallpaper/Mobile/16.jpg" -->
<!--     "/wallpaper/Mobile/17.jpg" -->
<!--     "/wallpaper/Mobile/18.png" -->
<!--     "/wallpaper/Mobile/19.jpg" -->
<!--     "/wallpaper/Mobile/20.jpg" -->
<!--     "/wallpaper/Mobile/21.png" -->
<!--     "/wallpaper/Mobile/22.jpg" -->
<!--     "/wallpaper/Mobile/23.jpg" -->
<!--     "/wallpaper/Mobile/24.jpg" -->
<!--     "/wallpaper/Mobile/25.jpg" -->
<!--     "/wallpaper/Mobile/26.jpg" -->
<!--     "/wallpaper/Mobile/27.jpg" -->
<!--     "/wallpaper/Mobile/28.png" -->
<!--     "/wallpaper/Mobile/29.png" -->
<!--     "/wallpaper/Mobile/30.jpg" -->
<!--     "/wallpaper/Mobile/31.jpg" -->
<!--     "/wallpaper/Mobile/32.jpg" -->
<!--     "/wallpaper/Mobile/33.jpg" -->
<!--     "/wallpaper/Mobile/34.jpg" -->
<!--     "/wallpaper/Mobile/35.jpg" -->
<!--     "/wallpaper/Mobile/36.jpg" -->
<!--     "/wallpaper/Mobile/37.jpg" -->
<!--     "/wallpaper/Mobile/38.jpg" -->
<!--     "/wallpaper/Mobile/39.jpg" -->
<!--   )}} -->
<!---->
<!-- <div class="gallery-item"> -->
<!-- <img src="{{ . }}" class="grid-w50 md:grid-w33 xl:grid-w25" alt="Wallpaper" /> -->
<!-- <button class="download-btn" onclick="downloadImage('{{ . }}')">Download</button> -->
<!-- </div> -->
<!-- {{ end }} -->
<!-- {{< /gallery >}} -->

<!-- --- -->
<!---->
<!-- title: "Wallpapers for Mobile and Desktop" -->
<!-- date: 2024-10-24 -->
<!-- tags: ["Wallpaper", "Mobile wallpaper", "Desktop wallpaper"] -->
<!---->
<!-- --- -->
<!---->
<!-- {{< gallery >}} -->
<!-- <img src="/wallpaper/Mobile/1.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/2.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/3.png" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/4.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/5.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/6.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/7.png" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/8.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/9.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/10.png" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/11.png" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/12.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/13.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/14.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/15.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/16.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/17.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/18.png" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/19.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/20.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/21.png" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/22.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/23.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/24.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/25.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/26.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/27.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/28.png" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/29.png" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/30.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/31.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/32.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/33.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/34.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/35.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/36.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/37.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/38.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- <img src="/wallpaper/Mobile/39.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" /> -->
<!-- {{< /gallery >}} -->
