# 🚀 FEX Vue — Frontend X Starter for Vue 3

**FEX (Frontend X)** is a collection of modern frontend starter kits built for speed, scalability, and simplicity.  
`fex-vue` is the Vue 3 edition — powered by **Vite**, **Tailwind CSS**, **Pinia**, and **Lucide** icons.

---

### ✨ Features

- ⚡ **Vite** for blazing-fast builds
- 🎨 **Tailwind CSS** for modern UI styling
- 🧠 **Pinia** for state management
- 💡 **Lucide Icons** via `lucide-vue-next`
- 🧱 Modular **layouts** and **base components**
- ✅ Routing, NotFound, and Auth pages included
- 🌐 Internationalization with Vue I18n
- 🧪 Unit and E2E Testing Ready
- 📦 Clean folder structure & scalable architecture

---

### 🗂 Folder Structure

```sh
src/
├── assets/                # Static assets
├── components/            # UI components
│   ├── base/              # Base UI (Button, Input, etc.)
│   └── layout/            # Header, Footer, Sidebar
├── layouts/               # DefaultLayout, AuthLayout, etc.
├── router/                # App routing
├── store/                 # Pinia stores
├── views/                 # Pages (Home, SignIn, NotFound)
└── App.vue                # App shell
```

---

### 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/kashyapkrlucky/fex-vue.git
cd fex-vue
```

```bash
# 2. Install dependencies
npm install
```

```bash
# 3. Start dev server
npm run dev
```

---

### 🧪 Testing Setup

#### ✅ Unit Testing with Vitest

```bash
# Run unit tests
npm run test:unit

# Run unit tests with coverage summary
npm run coverage
```

#### 🌐 End-to-End (E2E) Testing with Cypress

```bash
# Start the Vite dev server
npm run dev
```

In a second terminal:

```bash
# Launch Cypress GUI
npx cypress open
```

Or run Cypress tests headlessly after starting the dev server:

```bash
# Automatically start dev server and run Cypress tests
npm run test:e2e
```

> Uses [`start-server-and-test`](https://www.npmjs.com/package/start-server-and-test) to coordinate dev server and Cypress.

---

### 🔧 Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue I18n](https://kazupon.github.io/vue-i18n/)
- [Lucide Icons](https://lucide.dev/icons)
- [Vitest](https://vitest.dev/)
- [Cypress](https://www.cypress.io/)

---

### 📄 License

MIT © [Lucky Kumar Kashyap](https://github.com/kashyapkrlucky)

```

```
