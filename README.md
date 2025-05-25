# 🎧 Echo-Box

A sleek and stylish music player web app built with React and Tailwind CSS. Echo-Box features track switching, play/pause controls, a visual progress bar, and a full-screen video or image background with frosted glass UI elements.
![image](https://github.com/user-attachments/assets/b469b278-7a38-4704-a0eb-0a85d48d7d1c)

---

## 🚀 Features

- 🎵 Play, pause, next, and previous track functionality
- 📀 Displays track image and title from a media list
- 🎚 Live progress bar with current time and duration
- 🖼 Beautiful full-screen background (supports image or video)
- ❄️ Frosted glass UI using Tailwind's `backdrop-blur`
- 🔁 Looping and auto-playing audio on track change

---

## 🛠 Technologies Used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- HTML5 Audio API

---

## 📁 Folder Structure
```
public/
│
├── bg-video.mp4 # Optional background video
├── bg.jpg # Optional background image
├── logo.png # App logo
│
src/
├── mediaItems.js # Array of music track data
├── App.js
└── Container.jsx # Main player component
```
---

## 🖼 Media Items Format
```js
// mediaItems.js
const mediaItems = [
  {
    title: "Track Name",
    image: "/path-to-image.jpg",
    audio: "/path-to-audio.mp3",
  },
  // Add more...
];

export default mediaItems;

 ``` 

##💡 Customization Tips
-🌅 To use a YouTube background, embed it using an <iframe> inside a relative container.

-🎬 To use a local video, add it to public/ and use an <video> tag.

-🎨 Tweak Tailwind classes for shadows, opacity, spacing, and more.

