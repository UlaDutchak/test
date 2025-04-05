[Demo Page](https://uladutchak.github.io/test/)

- ### I Used HTTrack
 to copy the site instead of using “Save Page As” in the browser.
 HTTrack gave me a cleaner folder structure and working links, which made it easier to work with the files. The browser method would have made everything messy and harder to manage.


- ### Assets from CDN:
Many assets (like JavaScript and CSS) were loaded from a CDN, such as:
 https://cdn.prod.website-files.com/...
 So I didn’t need to download all of them manually into my folder.


- ### Custom Files Added:
I created index.css and index.js to collect and organize styles and scripts that were originally written inline in the HTML.


- ### Image Optimization:
I downloaded the images and converted them to WebP format to make the page load faster.


- ### Code Improvements:
  - Used async and defer for scripts to improve loading speed.
  - Removed extra font families that weren’t used
  - Added decoding="async" to small images to help them load quicker.
  - Moved all inline styles and scripts into separate files (index.css, index.js) to keep the HTML clean.
  - Cleaned up the main CSS file and removed over 20,000 lines of unused styles
  - All links, except Contact pages, Privacy policy, Terms of service Support pages, Social media links,  Legal documents, are replaced with ‘www.click.example.com/click’

- ### Scripts in the <head>
 I didn’t remove scripts like tracking tools (VWO, Mixpanel, etc.) from the <head> section because I wasn’t sure if they were still needed. I just made sure to add async or defer where it made sense.
