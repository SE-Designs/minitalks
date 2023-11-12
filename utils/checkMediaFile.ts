const videoExtensions = [".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mp4"]; //you can add more extensions
const imageExtensions = [".gif", ".jpg", ".jpeg", ".png"]; // you can add more extensions

function isImage(v: string) {
  let status = false;

  for (let i = 0; i < imageExtensions.length; i++) {
    const ext = imageExtensions[i];

    if (v.endsWith(ext)) return true;
  }

  return status;
}

function isVideo(v: string) {
  let status = false;

  for (let i = 0; i < videoExtensions.length; i++) {
    const ext = videoExtensions[i];

    if (v.endsWith(ext)) return true;
  }

  return status;
}

export { isImage, isVideo };
