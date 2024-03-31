# MealsToGo


### Getting Started

Instead of installing Expo CLI globally on your system, you should now use `npx` to run Expo commands. This approach ensures you're always using the latest version of Expo CLI without having to update a global package.

To run the app on your phone, you need to install the Expo Go app on your phone. You can download it from the Apple App Store or Google Play Store.

### Create a New Expo Project

1. **Starting a New Expo Project:**
   To create a new Expo project, open your terminal or command prompt and run the following command:
   ```
   npx create-expo-app my-new-expo-project
   ```
   Replace `my-new-expo-project` with whatever you wish to name your project. This command creates a new directory with all the boilerplate code needed to get started with an Expo app.

2. **Running Expo Commands:**
   To run Expo commands without having a global installation of the Expo CLI, you prepend your commands with `npx`. For example, to start your Expo project, navigate to your project directory in the terminal and run:
   ```
   npx expo start
   ```
   This command will start the Expo development server and open a web-based interface in your default web browser. From there, you can run your app on a connected Android or iOS device, or in an emulator/simulator.

3. **Upgrading an Expo Project:**
   If you need to upgrade an existing Expo project to a newer version of the Expo SDK, you would use:
   ```
   npx expo upgrade
   ```


### Development Tips

You can now lint your code by running:

```bash
npm run lint
```

Automatically fix issues with:

```bash
npm run lint:fix
```

Format your code with Prettier:

```bash
npm run format
```