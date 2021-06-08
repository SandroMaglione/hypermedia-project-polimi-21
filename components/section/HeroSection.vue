<template>
  <!-- Hero section with slogan on the left and image on the left -->
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl">
      <div
        class="relative z-10 pb-8 bg-white  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <main
          class="px-4 mx-auto mt-10  max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h2 class="text-xl font-black text-indigo-900">Rocket Inc.</h2>
            <h1
              class="mt-3 text-4xl font-extrabold tracking-tight text-gray-900  sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">We are the company</span>
              {{ ' ' }}
              <span class="block text-indigo-600 xl:inline"
                >you are looking for</span
              >
            </h1>
            <p
              class="mt-3 text-base text-gray-600  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0"
            >
              We provide products and services for your business. We are
              <b>the best</b> at what we do, contact us to find out more about
              what we offer.
            </p>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
    </div>
  </div>
</template>
