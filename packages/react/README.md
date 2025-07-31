# @romeusoares/react

This is a **personal Design System** created for **portfolio purposes**, intended to demonstrate my skills in building and documenting component libraries with React, Tailwind CSS, and modern tooling.  
It is not intended for production use, but you are welcome to explore and test it.

---

# Using @romeusoares/react with Tailwind CSS v4

This package is built with [Tailwind CSS v4](https://tailwindcss.com) utilities.  
Since Tailwind v4 introduced **automatic class detection**, it does **not scan inside `node_modules` by default**.  
Because of this, you need to explicitly tell Tailwind to include the classes from this design system.

## Installation

```bash
npm install @romeusoares/react
```

Setup
In your main CSS entry file (e.g. src/index.css or app/globals.css), add the following:

```bash
@import "tailwindcss";

/* Required so Tailwind detects utilities used in the design system */
@source "../../node_modules/@romeusoares/react";
```

⚠️ The path may vary depending on your project structure.

In Next.js projects, "../../node_modules/@romeusoares/react" is usually correct.

Adjust the relative path if your CSS file is located in a different directory.

---

Why is this required?
Tailwind v4 ignores node_modules during automatic source detection to improve build performance.
Using @source ensures that the utilities defined in @romeusoares/react are included in your Tailwind build.

For more details, see the TailwindCSS v4 official docs on @source.

## Example Usage

```bash
import { Button } from "@romeusoares/react";

export default function Page() {
  return (
    <Button variant="success" size="large" shape="square">
      Click Me
    </Button>
  );
}

```

---

## 📖 Documentation & Design

- **Storybook Live Preview:** [View on GitHub Pages](https://romeusorionaet.github.io/My-design-system/?path=/docs/example-button--documentation)
- **Design (Figma) Prototype:** [Open in Figma](https://www.figma.com/proto/uNZaz2MhLg02jkxJW3vwYU/my-deisgn-system?t=sP3sBzS80Sv5wBWz-1&node-id=29-47)
