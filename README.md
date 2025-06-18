# Codegen App

A responsive Vue 3 + TypeScript application for displaying and managing user data from an external API, with a professional UI, table layout, and modal interaction.

---

## Features

- Fetches and displays user data from JSONPlaceholder API.
- Responsive, modern table layout with full-width design.
- Modal for detailed user info, including map link.
- Client-side user deletion.
- Accessible and keyboard-friendly UI.
- Animations and visual feedback for interactions.
- Unit and integration tests with Vitest and Testing Library.

---

## Tech Stack

- **Vue 3** (Composition API, TypeScript)
- **CSS Modules** for component-scoped styling
- **Vite** for development/build
- **Vitest** + **@testing-library/vue** for testing

---

## Setup

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Run the development server:**

   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

---

## Usage

- The main user table displays all users with columns for name/email, address, phone, website, and company.
- Click a row to open the user detail modal.
- Click the red × in the Action column to delete a user (client-side only).
- The modal includes a map link and all user details.
- The UI is fully responsive and accessible.

---

## Testing

- **Run all tests:**
  ```sh
  npm run test
  ```
- **Run tests with coverage:**
  ```sh
  npx vitest run --coverage
  ```
- Tests are located in the `tests/` directory.
- Coverage thresholds are set to 90% for statements, branches, functions, and lines.

---

## Accessibility & UI/UX

- All interactive elements are keyboard accessible.
- Modal supports ESC to close and focus management.
- Uses semantic roles and ARIA attributes.
- Colors and spacing match modern UI best practices.

---

## Contribution

- Follow code and documentation rules.
- All new features must include tests and documentation.
- Use clear commit messages and open a pull request for review.

---

## Documentation Rules

- All documentation must be clear, concise, and accurate.
- Use Markdown format.
- Include sections: Project Overview, Features, Tech Stack, Setup, Usage, Testing, and Contribution.
- Document all custom scripts, commands, and configuration.
- Add a section for accessibility and UI/UX guidelines.
- Keep language simple and professional.
- No TODOs or placeholders—docs must be complete.
