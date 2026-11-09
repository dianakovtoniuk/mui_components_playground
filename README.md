# mui-components-playground

A playground for exploring Material UI components. Each component comes in two versions: `_functionality` with the default behavior and `_customization` restyled with the `sx` prop.

## Components

- Accordion (single-open and multi-open modes)
- AppBar
- Card
- Paper

## Tech stack

React 18, TypeScript, MUI 5, Emotion, Create React App

## Getting started

```bash
npm install
npm start
```

The app runs at http://localhost:3000.

## Usage

`App.tsx` renders one component at a time. To view another example, import it from `./components` and return it from `App`:

```tsx
import { AccordionCustomization } from "./components";

export default function App() {
  return <AccordionCustomization />;
}
```

The accordion examples have two expansion modes, `handleExpandOne` and `handleExpandAll`. Switch between them by toggling the marked lines in the JSX.
