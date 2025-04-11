# HubX Frontend Assignment

Please implement the given design with responsive, mobile-first approach and cross-browser support and try to follow it as closely as possible. The functionality described in the Figma file needs to be implemented for this assignment to be completed successfully. Make sure to format and lint your code before submitting it.

## Design

Figma design URL:

```
https://www.figma.com/file/fqq3IGqxAiIUEItAWHZ54W/Frontend-Case-(HubX)?type=design&node-id=896%3A263&mode=design&t=7TvYeaXudwa3TGy5-1
```

Example implementation videos:

```
https://drive.google.com/drive/folders/1kkicvHG7UMc-MY9npv_fy4gW1cZF3QiO?usp=drive_link
```

## Feature Showcase App

This is a React application that showcases different features of a document scanner app with an interactive UI.

### Components

- **App.tsx**: Main container component that manages active state between navigation and features.
- **Navigation.tsx**: Bottom navigation bar with 5 navigation items that handle active state changes.
- **FeatureSlider.tsx**: Component that displays the scrollable feature slides.
- **PhoneDisplay.tsx**: Component that shows the phone mockup with animations.
- **Feature.tsx**: Individual feature slide with title, subtitle, description, and heading.

### Running the App

```
npm install
npm run dev
```

### Structure

The app uses a responsive layout that works well on both desktop and mobile. On desktop, the phone display and feature content are side by side, while on mobile they stack vertically.

Navigation is fixed to the bottom of the screen and persists across pages. Clicking on a navigation item will:

1. Change the active section
2. Update the phone display with an animation
3. Scroll to the appropriate feature slide

### Customization

To modify the feature content, edit the `SECTION_TEXT` object in `src/types.ts`.

## Start development server

```sh
npm run dev
```

## Lint the code

```sh
npm run lint
```

## Format the code

```sh
npm run format
```
