<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>KidoVerse</title>
</head>
<body>

<h1>KidoVerse</h1>

<p>KidoVerse is a cross-platform mobile application built with React Native and Expo. It features interactive 3D graphics using Three.js and provides a seamless navigation experience with React Navigation. This project serves as an engaging platform for users, offering an immersive welcome screen and a home screen with 3D content.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#prerequisites">Prerequisites</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#running-the-app">Running the App</a></li>
  <li><a href="#building-the-app">Building the App</a></li>
  <li><a href="#project-structure">Project Structure</a></li>
  <li><a href="#additional-notes">Additional Notes</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#acknowledgments">Acknowledgments</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#troubleshooting">Troubleshooting</a></li>
</ul>

<hr>

<h2 id="prerequisites">Prerequisites</h2>

<p>Before you begin, ensure you have met the following requirements:</p>
<ul>
  <li><strong>Operating System</strong>: Windows, macOS, or Linux</li>
  <li><strong>Node.js</strong>: LTS version (Node.js 16.x or 18.x)</li>
  <li><strong>Yarn</strong>: Package manager (version 1.22.x)</li>
  <li><strong>Expo CLI</strong>: Not required globally; use <code>npx</code> commands</li>
  <li><strong>Expo Go App</strong>: Installed on your mobile device (iOS or Android) for testing</li>
</ul>

<hr>

<h2 id="installation">Installation</h2>

<p>Follow these steps to set up the project on your local machine:</p>

<h3>1. Clone the Repository</h3>

<pre><code>git clone https://github.com/titanium-code/KidoVerse.git
cd KidoVerse
</code></pre>

<p>Replace <code>yourusername</code> with your actual GitHub username.</p>

<h3>2. Install Dependencies</h3>

<p>Use Yarn to install the project dependencies:</p>

<pre><code>yarn install
</code></pre>

<h3>3. Install Expo Dependencies</h3>

<p>Ensure all Expo dependencies are installed correctly:</p>

<pre><code>npx expo install
</code></pre>

<hr>

<h2 id="running-the-app">Running the App</h2>

<h3>1. Start the Development Server</h3>

<pre><code>npx expo start
</code></pre>

<p>This command will start the Metro bundler and open the Expo Dev Tools in your browser.</p>

<h3>2. Run the App on Your Device</h3>

<h4>Using Expo Go</h4>

<ul>
  <li><strong>Install Expo Go</strong>: Download the Expo Go app from the App Store (iOS) or Google Play Store (Android).</li>
  <li><strong>Connect to the Same Network</strong>: Ensure your development machine and mobile device are on the same Wi-Fi network.</li>
  <li><strong>Scan the QR Code</strong>: Use the Expo Go app to scan the QR code displayed in the terminal or Expo Dev Tools.</li>
</ul>

<h4>Using an Emulator or Simulator</h4>

<ul>
  <li><strong>iOS Simulator</strong>:

<pre><code>npx expo start --ios
</code></pre>
  </li>
  <li><strong>Android Emulator</strong>:

<pre><code>npx expo start --android
</code></pre>
  </li>
</ul>

<hr>

<h2 id="building-the-app">Building the App</h2>

<p>Since this project uses Expo's Managed workflow, you can build standalone apps using Expo's build service.</p>

<h3>1. Install Expo CLI Globally (Optional)</h3>

<p>If you haven't already, you can install the Expo CLI globally:</p>

<pre><code>npm install -g expo-cli
</code></pre>

<h3>2. Build for Android</h3>

<pre><code>eas build -p android
</code></pre>

<h3>3. Build for iOS</h3>

<pre><code>eas build -p ios
</code></pre>

<p><strong>Note</strong>: You may need to set up an Expo account and configure EAS (Expo Application Services) for building the app. Follow the <a href="https://docs.expo.dev/build/introduction/">Expo EAS Build Documentation</a> for detailed instructions.</p>

<hr>

<h2 id="project-structure">Project Structure</h2>

<p>Here's an overview of the project's structure:</p>

<pre><code>KidoVerse
├── App.tsx
├── package.json
├── tsconfig.json
├── .gitignore
├── src
│   ├── assets
│   │   └── welcome.jpg
│   ├── components
│   │   └── ThreeDView.tsx
│   ├── navigation
│   │   └── AppNavigator.tsx
│   ├── screens
│   │   ├── WelcomeScreen.tsx
│   │   └── HomeScreen.tsx
│   └── styles
└── node_modules
</code></pre>

<ul>
  <li><strong>App.tsx</strong>: Entry point of the application.</li>
  <li><strong>src/assets/</strong>: Contains images and other static assets.</li>
  <li><strong>src/components/</strong>: Reusable components like <code>ThreeDView</code>.</li>
  <li><strong>src/navigation/</strong>: Navigation setup with React Navigation.</li>
  <li><strong>src/screens/</strong>: Screen components (<code>WelcomeScreen</code>, <code>HomeScreen</code>).</li>
  <li><strong>src/styles/</strong>: Styling files (if any).</li>
</ul>

<hr>

<h2 id="additional-notes">Additional Notes</h2>

<ul>
  <li><strong>Node.js Version</strong>: Ensure you are using a compatible Node.js version (preferably 16.x or 18.x). Check your version with:

<pre><code>node -v
</code></pre>
  </li>
  <li><strong>Expo Version</strong>: The project is built with Expo SDK 49. Check <code>package.json</code> for the exact version.</li>
  <li><strong>TypeScript</strong>: The project uses TypeScript for type safety.</li>
  <li><strong>Dependencies</strong>:
    <ul>
      <li><code>@react-navigation/native</code> and <code>@react-navigation/native-stack</code>: For navigation between screens.</li>
      <li><code>three</code>, <code>expo-three</code>, <code>expo-gl</code>: For 3D graphics rendering.</li>
      <li><code>expo-linear-gradient</code>: For gradient backgrounds and buttons.</li>
    </ul>
  </li>
  <li><strong>Testing on Physical Devices</strong>: It's recommended to test the app on real devices to fully experience the 3D graphics and interactions.</li>
</ul>

<hr>

<h2 id="license">License</h2>

<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<hr>

<h2 id="contact">Contact</h2>

<p>If you have any questions or need further assistance, please contact:</p>

<ul>
  <li><strong>Name</strong>: Your Name</li>
  <li><strong>Email</strong>: your.email@example.com</li>
  <li><strong>GitHub</strong>: <a href="https://github.com/yourusername">yourusername</a></li>
</ul>

<p>Replace the placeholder information with your actual contact details.</p>

<hr>

<h2 id="acknowledgments">Acknowledgments</h2>

<ul>
  <li><strong>Expo Documentation</strong>: <a href="https://docs.expo.dev/">https://docs.expo.dev/</a></li>
  <li><strong>React Navigation Documentation</strong>: <a href="https://reactnavigation.org/docs/getting-started">https://reactnavigation.org/docs/getting-started</a></li>
  <li><strong>Three.js Documentation</strong>: <a href="https://threejs.org/docs/">https://threejs.org/docs/</a></li>
</ul>

<hr>

<h2 id="contributing">Contributing</h2>

<p>Contributions are welcome! Please open an issue or submit a pull request for any improvements.</p>

<hr>

<h2 id="troubleshooting">Troubleshooting</h2>

<p>If you encounter issues during setup or development, consider the following:</p>

<ul>
  <li><strong>Clear Cache</strong>:

<pre><code>npx expo start -c
</code></pre>
  </li>
  <li><strong>Reinstall Node Modules</strong>:

<pre><code>rm -rf node_modules
yarn install
</code></pre>
  </li>
  <li><strong>Ensure Correct Expo CLI Usage</strong>: Use <code>npx expo</code> commands instead of global <code>expo</code> commands.</li>
</ul>

<hr>

<p>Feel free to customize this README to better suit your project's specifics, and replace placeholder information like repository URL and contact details with actual data.</p>

</body>
</html>
