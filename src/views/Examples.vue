<template>
  <div class="flex flex-column gap-6 overflow-y-auto bg-gray-100 p-4">

    <Typography variant="h2" color="text-primary-800">Cards</Typography>

    <FlexWrapper direction="col" gap="4" class="items-start">
      <Typography variant="h3">Basic Card</Typography>
      <Card>
        <h2 class="text-lg font-semibold">Welcome</h2>
        <p>This is a base card component.</p>
      </Card>
    </FlexWrapper>

    <FlexWrapper direction="col" gap="4" class="items-start">
      <Typography variant="h3">InfoCard</Typography>
      <InfoCard>
        <template #default>
          <p class="text-sm text-gray-600">
            All systems are operational. No incidents reported in the last 24 hours.
          </p>
        </template>
        <template #footer>
          <div class="text-xs text-gray-400">
            Updated 5 minutes ago
          </div>
        </template>
      </InfoCard>
    </FlexWrapper>

    <FlexWrapper direction="col" gap="4" class="items-start">
      <Typography variant="h3">MediaCard</Typography>
      <MediaCard
        image="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=500&quality=80"
        title="Beautiful Fall Nature Scenery" />
    </FlexWrapper>
    <!-- 
    <FlexWrapper direction="row" gap="4" class="justify-around">
      <PricingCard plan="Basic" price="0" :features="features.slice(0, 2)" />
      <PricingCard plan="Economy" price="50" :features="features.slice(0, 4)" />
      <PricingCard plan="Premium" price="100" :features="features" />
    </FlexWrapper> -->

    <FlexWrapper direction="col" gap="4" class="items-start">
      <Typography variant="h3">ProfileCard</Typography>
      <ProfileCard name="Eve Yellow" role="Product Owner" status="online" avatarUrl="https://i.pravatar.cc/100?img=7">
        <template #actions>
          <div class="flex gap-2">
            <Button variant='primary'>Message</Button>
            <Button variant='outline'>Follow</Button>
          </div>
        </template>
      </ProfileCard>
    </FlexWrapper>

    <FlexWrapper direction="col" gap="4" class="items-start">
      <Typography variant="h3">StatCard</Typography>
      <StatCard title="Total Users" value="12450" :icon="UsersIcon" change="+4.2% since last week"
        variant="text-success-500" />
    </FlexWrapper>

    <Typography variant="h2" color="text-primary-800">Forms</Typography>

    <FlexWrapper direction="col" gap="4" class="items-start">
      <Typography variant="h3">Inputs</Typography>
      <Input v-model="name" id="name" label="Your Name" placeholder="Enter your name" />
      <Textarea v-model="message" id="message" label="Message" placeholder="Write your message..." />
      <Select v-model="selected" id="role" label="Role" :options="options" placeholder="Select a role" />
      <Checkbox v-model="termsAccepted" id="termsAccepted" label="I agree to the terms and conditions" />
      <Toggle v-model="darkMode" label="Toggle" />
    </FlexWrapper>


    <FlexWrapper direction="row" gap="4">
      <Button @click="handleClick" variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </FlexWrapper>

    <Typography variant="h2" color="text-primary-800">Layout</Typography>


    <Button variant="outline" @click="showModal = true">Open Modal</Button>
    <Modal v-model="showModal">
      <div class="w-full flex flex-column justify-between">
        <div class="flex flex-row justify-between">
          <h2 class="text-xl font-bold">Modal Title</h2>
          <Button variant="secondary" @click="showModal = false">Close</Button>
        </div>
        <div class="flex flex-row">
          <p>This is modal content.</p>
        </div>
      </div>
    </Modal>


    <Typography variant="h3">FlexWrapper</Typography>
    <FlexWrapper direction="row" gap="4">
      <div class="bg-primary-200 p-4 rounded">Item 1</div>
      <div class="bg-secondary-200 p-4 rounded">Item 2</div>
      <div class="bg-success-200 p-4 rounded">Item 3</div>
    </FlexWrapper>

    <Typography variant="h2" color="text-primary-800">Components</Typography>

    <Accordion :title="'Accordion title'">
      <p class="text-sm text-gray-600">
        Nexora is a modern CSS utility framework and component kit, designed to help you ship beautiful UIs faster.
      </p>
    </Accordion>

    <FlexWrapper direction="row" gap="4">
      <Avatar size="lg" :user="{ name: 'A', avatar: 'animal-bear.png' }"
        avatarBaseUrl='https://nexora-images.onrender.com/avatars/' />

    </FlexWrapper>

    <FlexWrapper direction="col" gap="4" class="justify-center items-start">
      <Badge content="Update 7" variant="primary" />
    </FlexWrapper>


    <Header :logoText="logoText" :nav-links="navLinks" :user="user" />
    <Header :logoText="logoText" :nav-links="navLinks" />


    <Breadcrumb :items="crumbs" />

    <Pagination :currentPage="currentPage" :totalPages="5" @update:currentPage="updatePage" />

    <ProgressBar :current="30" :total="100" label="Completion" />

    <ProgressCircle :current="40" :total="100" type="alert" :show-percent="true" />


    <Table :columns="sampleColumns" :rows="sampleRows">
      <template #action="{ row }">
        <Button variant='outline' size='sm'>Edit</Button>
      </template>

      <template #footer>
        <div class="flex justify-between items-center text-sm text-gray-500">
          <span>Showing 1-3 of 3 entries</span>
          <div class="flex flex-row gap-2">
            <Button variant='outline' size='sm'>Prev</Button>
            <Button variant='outline' size='sm'>Next</Button>
          </div>
        </div>
      </template>
    </Table>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { Card, Typography, Toggle, Button, Input, Textarea, Select, Checkbox, Modal, StatCard, InfoCard, MediaCard, Accordion, Avatar, Badge, ProfileCard, FlexWrapper, Header, Breadcrumb, Pagination, ProgressBar, ProgressCircle, Table } from 'nexora-ui-vue';

import { useLoadingStore } from '@/stores/loading.store';
import { UsersIcon } from 'lucide-vue-next';


const name = ref('')
const message = ref('')
const showModal = ref(false)
const selected = ref('')
const darkMode = ref(false)
const options = [
  { label: 'Frontend Developer', value: 'frontend' },
  { label: 'Backend Developer', value: 'backend' },
  { label: 'Full-Stack Developer', value: 'fullstack' }
]
const termsAccepted = ref(false)
const loading = useLoadingStore()

const handleClick = () => {
  loading.show()

  setTimeout(() => {
    loading.hide()
  }, 3000)
}

const logoText = "Nexora";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Settings", href: "/settings" },
];
const user = {
  name: "Jane Doe",
  avatarUrl: "https://i.pravatar.cc/40?u=jane",
}

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Nexora Redesign", href: "/projects/nexora-redesign" },
  { label: "Assets", href: "/projects/nexora-redesign/assets" },
  { label: "Logo Variants" },
]

const currentPage = ref(1);
const updatePage = (newPage: number) => {
  currentPage.value = newPage;
};

const sampleColumns = [
  { key: "name", label: "Name", searchable: true },
  { key: "email", label: "Email", searchable: true },
  { key: "status", label: "Status", visible: true },
];

const sampleRows = [
  { name: "Alice Johnson", email: "alice@example.com", status: "Active" },
  { name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
  { name: "Charlie Brown", email: "charlie@example.com", status: "Pending" },
];

// const features = ['Unlimited everything', 'Dedicated account manager', 'Onboarding & migration', 'Dedicated account manager', "Up to 3 projects", "Community support", "Limited analytics"]
</script>
