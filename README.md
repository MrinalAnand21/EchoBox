![image](https://github.com/user-attachments/assets/c032ecfb-375b-4d5e-94ff-00409b6a967c)

# 🎧 Echo-Box

A sleek and stylish music player web app built with React and Tailwind CSS. Echo-Box features track switching, play/pause controls, a visual progress bar, and a full-screen video or image background with frosted glass UI elements.

![Echo-Box Screenshot](./screenshot.png) <!-- optional screenshot -->

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
- Optional: Fullscreen YouTube or MP4 video background

---

## 📁 Folder Structure

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

yaml
Copy
Edit

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
🔧 Setup Instructions
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/echo-box.git
cd echo-box
Install dependencies

bash
Copy
Edit
npm install
Run the app

bash
Copy
Edit
npm start
Visit

arduino
Copy
Edit
http://localhost:3000
💡 Customization Tips
🌅 To use a YouTube background, embed it using an <iframe> inside a relative container.

🎬 To use a local video, add it to public/ and use an <video> tag.

🎨 Tweak Tailwind classes for shadows, opacity, spacing, and more.

