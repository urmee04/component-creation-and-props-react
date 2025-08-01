### Lab 9.1: Component Creation & Props

The lab aims to provide practice creating TypeScript React components with proper prop typing, component composition, and prop handling. This lab focuses on component creation, TypeScript interfaces, prop handling, and component composition using React and TypeScript.

#### Objectives

This lab will help to:

- Create reusable React components with TypeScript interfaces for props.
- Implement proper prop handling and validation.
- Use component composition effectively.
- Apply TypeScript best practices for component development.
- Document components with clear prop interfaces.

#### Setup the Project

1. Create a new React TypeScript project using Vite:

```bash
npm create vite@latest component-library -- --template react-ts
cd component-library
npm install
```

2. Create the following folder structure:

```bash
src/
  components/
    AlertBox/
      AlertBox.tsx
    UserProfileCard/
      UserProfileCard.tsx
    ProductDisplay/
      ProductDisplay.tsx
  types/
    index.ts
```

#### Cloning the Repository

To clone this repository, open terminal or command prompt and run the following command:

```bash
git clone https://github.com/urmee04/component-creation-and-props-react.git
cd component-library
npm install
npm run dev
```

#### Reflection Questions

**1. How did you handle optional props in your components?**

To handle optional props I used TypeScript's optional prop syntax (prop?: type) in component interfaces.Provided default values for optional props (e.g., showDescription = true) and also implemented conditional rendering with && operator for props like children, onClose, etc.

**2. What considerations did you make when designing the component interfaces?**

When designing the component I created self-contained components (AlertBox, ProductDisplay, UserProfileCard). I used semantic names (showStockStatus vs hideStock),added children prop for composition in all components. Shared types (e.g., User, Product) across components and included ARIA attributes (role="alert", aria-label).

**3. How did you ensure type safety across your components?**

To ensure type safety across components I defined strict interfaces in types/index.ts.
Used React.FC with generics: `const AlertBox: React.FC<AlertBoxProps> = ({ ... }) => { ... }`.
And also enforced prop types at compile time (e.g., type can only be "success"|"error"|"warning"|"info").
To prevent errors I also implemented the following like Typescript would flag if:

- Missing required props
- Incorrect prop types (e.g., passing string to price: number)
- Invalid enum values for type prop

**4. What challenges did you face when implementing component composition?**

1. Style Consistency:

Balancing component-specific styles (e.g., alertStyles) with parent overrides. Used Tailwind's utility classes for predictable styling

2. Managing multiple children insertion points (solved with wrapper divs)
   Example from ProductDisplay:

`{children && <div className="mt-4">{children}</div>}`

#### References

To complete this lab I used code suggestions from lessons and besides this I used the following resources:

- [TS Handbook-optional properties](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties)

- [Component Design Principles](https://react.dev/learn/thinking-in-react#step-1-break-the-ui-into-a-component-hierarchy)

- [React TS cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

- [Conditional Renderig](https://react.dev/learn/conditional-rendering)
