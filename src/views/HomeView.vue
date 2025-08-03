<template>
  <div class=" flex flex-column gap-6 items-center justify-center p-6">
    <h1 class="text-5xl font-bold leading-tight text-gray-900">
      Build beautiful UIs effortlessly
    </h1>
    <p class="text-lg text-gray-600">
      Nexora CSS is a lightweight, scalable utility-first framework designed for modern web apps. Build fast, stay
      consistent, and keep it clean — with zero bloat.
    </p>
    <div class="flex gap-4 flex-wrap">
      <Button variant="primary" class="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition">
        Get Started
      </Button>
      <Button variant="outline"
        class="border border-gray-300 px-6 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition">
        View Documentation
      </Button>
    </div>

    <!-- Illustration / Image -->
    <div class="flex justify-center w-full">
      <img src="https://placehold.co/300x100?text=Nexora+UI" alt="Nexora UI Preview" class="w-3/4" />
    </div>
  </div>


</template>

<script setup lang="ts">
import { Button } from 'nexora-ui-vue';


const home = {
  "welcome": "Welcome to Nexora UI",
  "description": "A lightweight, customizable UI framework for modern developers.",
  "features": {
    "fast": "Fast & Performant",
    "fast_desc": "Built with performance in mind from the ground up.",
    "customizable": "Fully Customizable",
    "customizable_desc": "Easily extend or override styles to suit your project.",
    "modern": "Modern Design",
    "modern_desc": "Clean, minimal, and professional look for any use case."
  },
  "cta": {
    "title": "Start Building Today",
    "subtitle": "Install via npm or use the CDN to get started instantly.",
    "button": "Get Started"
  },
  "testimonials": {
    "title": "What Developers Say",
    "quote1": "Nexora made my app look professional in no time!",
    "author1": "Jane Doe, Vue Developer",
    "quote2": "Lightweight, fast, and easy to use. A must-have.",
    "author2": "John Smith, React Engineer"
  }
}


</script>