import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --warm-background-color: #FFFAF0;
  --warm-primary-text-color: #8B4513;
  --warm-secondary-text-color: #D2691E;
  --warm-primary-button-color: #CD853F;
  --warm-secondary-button-color: #F4A460;
  --warm-hover-color: #FFD700;

  --cool-background-color: #F0F8FF;
  --cool-primary-text-color: #4682B4;
  --cool-secondary-text-color: #5F9EA0;
  --cool-primary-button-color: #7B68EE;
  --cool-secondary-button-color: #6A5ACD;
  --cool-hover-color: #1E90FF;


  --card-height: 700px;

  --primary-color:#fff4e6;
  --primary-text:#ffc078;
  --second-color:#ffa94d;
  --menu-bg:#e67700;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: Tahoma,"Microsoft Yahei", serif;
  color: var(--dark-black);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  // font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

// select:disabled,
// input:disabled {
//   background-color: var(--color-grey-200);
//   color: var(--color-grey-500);
// }

// input:focus,
// button:focus,
// textarea:focus,
// select:focus {
//   outline: 2px solid var(--color-brand-600);
//   outline-offset: -1px;
// }

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

/***************
 *  Third-party animation
 * *******************/

--adjust-size:0px;
`;

export default GlobalStyles;

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/
