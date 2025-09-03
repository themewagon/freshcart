const ghpages = require("gh-pages");
const path = require("path");
const fs = require("fs");

const distDir = "dist";
// const tempDir = ".temp-gh-pages";

// 1. Clean up temporary directory before starting
// if (fs.existsSync(tempDir)) {
//   fs.rmSync(tempDir, { recursive: true, force: true });
// }

// 2. Publish the dist directory to gh-pages branch
ghpages.publish(
  path.join(process.cwd(), distDir),
  {
    dotfiles: true,
    dest: distDir,
    add: true,
    message: "Deploying to GitHub Pages",
  },
  (err) => {
    // 3. This callback runs after the push is complete
    if (err) {
      console.error("Error deploying to GitHub Pages:", err);
    } else {
      console.log("Successfully deployed to GitHub Pages.");
    }

    // 4. Clean up the temporary directory after deployment is complete
    // if (fs.existsSync(tempDir)) {
    //   fs.rmSync(tempDir, { recursive: true, force: true });
    //   console.log("Temporary directory cleaned up.");
    // }
  }
);
