# EladmeGo

![GitHub](https://img.shields.io/github/license/shensven/EladmeGo)
[![](https://img.shields.io/github/package-json/dependency-version/shensven/EladmeGo/react-native)](./package.json)
[![](https://img.shields.io/github/package-json/dependency-version/shensven/EladmeGo/react)](./package.json)
[![Test](https://github.com/shensven/EladmeGo/actions/workflows/test.yml/badge.svg?branch=dev)](https://github.com/shensven/EladmeGo/actions/workflows/test.yml)
[![CodeQL](https://github.com/shensven/EladmeGo/actions/workflows/codeql.yml/badge.svg?branch=dev)](https://github.com/shensven/EladmeGo/actions/workflows/codeql.yml)
[![Publish](https://github.com/shensven/EladmeGo/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/shensven/EladmeGo/actions/workflows/publish.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d58e7255046645babad9974c9dab8dc3)](https://app.codacy.com/gh/shensven/EladmeGo/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

A mobile app for accessing the JindiCenter in Kunming

|                        1                        |                          2                           |                            3                            |                          4                          |
| :---------------------------------------------: | :--------------------------------------------------: | :-----------------------------------------------------: | :-------------------------------------------------: |
| ![Screenshot 1](src/assets/screenshot/home.png) | ![Screenshot 2](src/assets/screenshot/dark_mode.png) | ![Screenshot 3](src/assets/screenshot/floor_picker.png) | ![Screenshot 4](src/assets/screenshot/settings.png) |

## 📦 Distribution

### iOS

- [TestFlight](https://testflight.apple.com/join/54UVmWJQ)

### Android

- [GitHub Releases](https://github.com/shensven/EladmeGo/releases)

## 🔨 Build

### Prequisites

- [Node 14](https://nodejs.org) or higher
- [yarn](https://yarnpkg.com/getting-started/install)
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 10](https://developer.apple.com/xcode/resources) or higher
- [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)
- [JDK 11](https://formulae.brew.sh/formula/openjdk@11) or higher
- Android SDK
  - Build-Tools `33.0.0`
  - NDK `23.1.7779620`

For more detailed environment configuration, please refer to the official React Native documentation.👇
https://reactnative.dev/docs/environment-setup

### Get Started

```sh
yarn install
cd ios && pod install
```

### iOS Deployment

```sh
yarn ios --configuration Release --device
```

### Assem the APK

```sh
cd android && chmod +x gradlew
./gradlew assembleRelease
```

### Debug

We recommend you to use [Flipper](https://fbflipper.com/) to debug the app.

### Generate the Splash Screen

```sh
yarn react-native generate-bootsplash src/assets/splash/bootsplash.png \
  --background-color=F2E8E2 \
  --logo-width=288 \
  --flavor=main
```

## ⚖️ License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fshensven%2FEladmeGo.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fshensven%2FEladmeGo?ref=badge_large)

MIT License - Copyright (c) 2023 SvenFE
