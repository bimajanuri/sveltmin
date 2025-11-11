<script lang="ts">
  import { writable } from 'svelte/store';
  import Modal from '$lib/components/ui/modal/Modal.svelte';
  import Button from '$lib/components/ui/button/Button.svelte';
  import Input from '$lib/components/form/input/InputField.svelte';
  import Label from '$lib/components/form/Label.svelte';
  
  let isOpen = writable(false);
  
  function openModal() {
    isOpen.set(true);
  }
  
  function closeModal() {
    isOpen.set(false);
  }
  
  function handleSave() {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  }
</script>

<div class="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
  <div class="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
    <div class="flex flex-col items-center w-full gap-6 xl:flex-row">
      <div class="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
        <img src="/images/user/owner.jpg" alt="user" />
      </div>
      <div class="order-3 xl:order-2">
        <h4 class="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
          Musharof Chowdhury
        </h4>
        <div class="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Team Manager
          </p>
          <div class="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Arizona, United States
          </p>
        </div>
      </div>
      <div class="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
        <a
          href="https://www.facebook.com/PimjoHQ"
          target="_blank"
          class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          aria-label="Facebook"
        >
          <svg
            class="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.25 20C15.7728 20 20.25 15.5228 20.25 10C20.25 4.47715 15.7728 0 10.25 0C4.72715 0 0.25 4.47715 0.25 10C0.25 15.5228 4.72715 20 10.25 20ZM10.25 18.5C5.55455 18.5 1.75 14.6955 1.75 10C1.75 5.30455 5.55455 1.5 10.25 1.5C14.9455 1.5 18.75 5.30455 18.75 10C18.75 14.6955 14.9455 18.5 10.25 18.5ZM13.25 6.75H11.75C11.1977 6.75 10.75 7.19772 10.75 7.75V9H13.25C13.6642 9 14 9.33579 14 9.75V11.25C14 11.6642 13.6642 12 13.25 12H10.75V15.25C10.75 15.6642 10.4142 16 10 16H8.5C8.08579 16 7.75 15.6642 7.75 15.25V12H6.75C6.33579 12 6 11.6642 6 11.25V9.75C6 9.33579 6.33579 9 6.75 9H7.75V7.75C7.75 5.67893 9.42893 4 11.5 4H13.25C13.6642 4 14 4.33579 14 4.75V6C14 6.41421 13.6642 6.75 13.25 6.75Z"
              fill=""
            />
          </svg>
        </a>

        <a
          href="https://x.com/PimjoHQ"
          target="_blank"
          class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          aria-label="Twitter"
        >
          <svg
            class="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.25 20C15.7728 20 20.25 15.5228 20.25 10C20.25 4.47715 15.7728 0 10.25 0C4.72715 0 0.25 4.47715 0.25 10C0.25 15.5228 4.72715 20 10.25 20ZM10.25 18.5C5.55455 18.5 1.75 14.6955 1.75 10C1.75 5.30455 5.55455 1.5 10.25 1.5C14.9455 1.5 18.75 5.30455 18.75 10C18.75 14.6955 14.9455 18.5 10.25 18.5ZM14.3125 7.1875C14.3125 7.1875 13.8125 6.6875 13.125 6.8125C12.5 6.875 11.875 7.3125 11.5 7.6875C11.125 7.5 10.625 7.1875 10.1875 7.1875C9.375 7.1875 8.5 7.8125 8.5 9.3125C8.5 9.9375 8.6875 10.5 8.875 10.8125C8.6875 10.875 8.5 10.9375 8.3125 10.875C7.6875 10.6875 7.1875 9.5625 7.1875 8.5625C7.1875 8.0625 7.3125 7.625 7.5 7.3125C7.375 7.125 7.125 6.5 7.5 5.375C7.5 5.375 8 5.25 9.125 6C10.625 5.5 12.25 5.1875 13.125 6.8125C13.25 6.5625 13.5 6.1875 13.75 6.0625C13.5625 5.875 13.1875 5.625 12.875 5.625C13.125 5.375 13.5 5.1875 13.75 5.1875C14.0625 5.1875 14.3125 5.4375 14.4375 5.6875C14.625 5.5625 14.875 5.375 15.0625 5.375C14.9375 5.6875 14.6875 5.9375 14.5 6.125C14.75 6.0625 15 6 15.1875 6C15 6.3125 14.6875 6.5625 14.4375 6.75C14.625 6.6875 14.8125 6.625 15 6.5625C14.875 6.8125 14.625 7.0625 14.3125 7.1875Z"
              fill=""
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/company/pimjo"
          target="_blank"
          class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          aria-label="LinkedIn"
        >
          <svg
            class="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.375 3.125C4.375 2.43464 4.64962 1.77257 5.13849 1.28371C5.62736 0.794839 6.28943 0.520221 7 0.520221C7.71057 0.520221 8.37264 0.794839 8.86151 1.28371C9.35038 1.77257 9.625 2.43464 9.625 3.125C9.625 3.83536 9.35038 4.49743 8.86151 4.9863C8.37264 5.47516 7.71057 5.74978 7 5.74978C6.28943 5.74978 5.62736 5.47516 5.13849 4.9863C4.64962 4.49743 4.375 3.83536 4.375 3.125ZM3.125 6.875H10.875V19.375H3.125V6.875ZM13.8125 11.3125V19.375H19.375V11.0625C19.375 8.375 13.1875 8.625 13.1875 11.3125H13.8125Z"
              fill=""
            />
          </svg>
        </a>

        <a
          href="https://instagram.com/PimjoHQ"
          target="_blank"
          class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          aria-label="Instagram"
        >
          <svg
            class="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.25 12.6875C11.6307 12.6875 12.75 11.5682 12.75 10.1875C12.75 8.80679 11.6307 7.6875 10.25 7.6875C8.86929 7.6875 7.75 8.80679 7.75 10.1875C7.75 11.5682 8.86929 12.6875 10.25 12.6875ZM10.25 20C15.7728 20 20.25 15.5228 20.25 10C20.25 4.47715 15.7728 0 10.25 0C4.72715 0 0.25 4.47715 0.25 10C0.25 15.5228 4.72715 20 10.25 20ZM10.25 18.5C5.55455 18.5 1.75 14.6955 1.75 10C1.75 5.30455 5.55455 1.5 10.25 1.5C14.9455 1.5 18.75 5.30455 18.75 10C18.75 14.6955 14.9455 18.5 10.25 18.5ZM15.875 6.6875C16.2202 6.6875 16.5 6.41268 16.5 6.0725C16.5 5.73232 16.2202 5.4575 15.875 5.4575C15.5298 5.4575 15.25 5.73232 15.25 6.0725C15.25 6.41268 15.5298 6.6875 15.875 6.6875Z"
              fill=""
            />
          </svg>
        </a>
      </div>
    </div>
    <button
      on:click={openModal}
      class="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
    >
      <svg
        class="fill-current"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
          fill=""
        />
      </svg>
      Edit
    </button>
  </div>
</div>

<Modal bind:isOpen onClose={closeModal} class="max-w-[700px] m-4">
  <div class="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
    <div class="px-2 pr-14">
      <h4 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
        Edit Personal Information
      </h4>
      <p class="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
        Update your details to keep your profile up-to-date.
      </p>
    </div>
    <form class="flex flex-col">
      <div class="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
        <div>
          <h5 class="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
            Social Links
          </h5>

          <div class="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
            <div>
              <Label>Facebook</Label>
              <Input
                type="text"
                value="https://www.facebook.com/PimjoHQ"
              />
            </div>

            <div>
              <Label>X.com</Label>
              <Input type="text" value="https://x.com/PimjoHQ" />
            </div>

            <div>
              <Label>Linkedin</Label>
              <Input
                type="text"
                value="https://www.linkedin.com/company/pimjo"
              />
            </div>

            <div>
              <Label>Instagram</Label>
              <Input type="text" value="https://instagram.com/PimjoHQ" />
            </div>
          </div>
        </div>
        <div class="mt-7">
          <h5 class="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
            Personal Information
          </h5>

          <div class="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
            <div class="col-span-2 lg:col-span-1">
              <Label>First Name</Label>
              <Input type="text" value="Musharof" />
            </div>

            <div class="col-span-2 lg:col-span-1">
              <Label>Last Name</Label>
              <Input type="text" value="Chowdhury" />
            </div>

            <div class="col-span-2 lg:col-span-1">
              <Label>Email Address</Label>
              <Input type="text" value="randomuser@pimjo.com" />
            </div>

            <div class="col-span-2 lg:col-span-1">
              <Label>Phone</Label>
              <Input type="text" value="+09 363 398 46" />
            </div>

            <div class="col-span-2">
              <Label>Bio</Label>
              <Input type="text" value="Team Manager" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3 px-2 mt-6 lg:justify-end">
        <Button size="sm" variant="outline" on:click={closeModal}>
          Close
        </Button>
        <Button size="sm" on:click={handleSave}>
          Save Changes
        </Button>
      </div>
    </form>
  </div>
</Modal>