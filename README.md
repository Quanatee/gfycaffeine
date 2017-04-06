# gfycaffeine

A bookmarklet that allows you to download multiple .mp4 files on the upload page of gfycat, saving you clicks in the process.

![Gfycaffine Bookmarket](https://github.com/rymdluo/gfycaffeine/blob/master/screenshot.png)

### WTF is a bookmarklet?

Bookmarklets are like add-ons and extensions to your web browser, except they live on your bookmark as a *bookmarked page* and does something cool when you click on them. Essentially they are code that lives in the URL of your bookmark, like gfycaffeine!


### Can we call it something else?

I wish. How bout starscripts?


### So what does this ~~starscript~~ bookmarklet do?

Gfycat's compression while maintaining quality is incredible. But you want to use those medias for web, it's not prudent to rely on a free platform to host your medias. So what this does is that it cancels off the 6 clicks and 1 typing action to get to the .mp4 file.


### How do I start using it?

1. Copy the code in gfycaffeine.js.

2. Add a page to your bookmarks.

3. On the URL field, paste the code.

4. Name page Gfycaffeine, or something cool.


### Okay, now what?

Clicking on it the first time will take you to the upload page of gfycat. If you are already there, nothing will happen- cos' d'oh, you're already there!

Gfycaffeine only works when you're uploading multiple medias. If you're only uploading one, pull up your socks and get your .mp4s the traditional way.

Once your medias have been uploaded, click on **Gfycaffeine** again and it will convert the generated links (that go to a viewing page) to direct .mp4 that you can right click and save, or whatever. 


### What if I want .webm?

Look in the code, change ".mp4" to ".webm". FYI .webm is not natively supported in IOS devices.


### What if I want .gif?

Look in the code, change ".mp4" to ".gif". FYI .gif files are bigly. They're huge.


### It doesn't friggin' work!

Gfycat hosts their videos under three subdomains depending on the converted size:
- zippy.gfycat.com (under 1mb)
- fat.gfycat.com (1-3mb)
- giant.gfycat.com (>3mb)

Gfycaffeine automagically creates links under the "zippy" subdomain because the original intent is to host small, ~1-5s loop videos. You can change the "zippy" in the code to get a "fat" or "giant" cat on your lap.

### That's too technical.

What are you doing on github?
