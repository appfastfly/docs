---
sidebar_position: 2
---

# Installation

Integrating the Appfastfly React Native SDK into your project relies on installing the npm package and configuring native project files for deep-linking.

## 1. Install the Package

Run the following command in your React Native project root:

```bash
npm install @appfastfly/react-native
# or
yarn add @appfastfly/react-native
```

Since the SDK uses the New Architecture by default, ensure that Codegen is enabled for your project.

### iOS Configuration
Navigate to your `ios` folder and run pod install:
```bash
cd ios && pod install
```

### Android Configuration
Make sure your Android application is compiling against Java 17 and using the New Architecture. The module will be automatically linked via autolinking.

## 2. Setup Native Configuration

You need to initialize the Appfastfly credentials inside your native application properties.

### iOS (`Info.plist`)
Open your `ios/YourApp/Info.plist` and add the following keys to provide your App-Scoped API Key:

```xml
<key>AppfastflyApiKey</key>
<string>YOUR_APP_API_KEY</string>
```

### Android (`AndroidManifest.xml`)
Open `android/app/src/main/AndroidManifest.xml` and add this `meta-data` tag within the `<application>` element:

```xml
<meta-data android:name="com.appfastfly.API_KEY" android:value="YOUR_APP_API_KEY" />
```

## 3. Configure Universal Links & App Links

To ensure standard URL handling opens your application, you must configure associated domains.

### iOS (Associated Domains)
Add the `Associated Domains` capability to your Xcode project and add your Appfastfly tracking domain (e.g. your custom domain or assigned Appfastfly subdomain):
`applinks:your-tracking-domain.com`

### Android (Intent Filters)
Add an intent filter to your `MainActivity` inside `AndroidManifest.xml`:

```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="https" android:host="your-tracking-domain.com" />
</intent-filter>
```
