<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 <div class="h-[100vh]">
      <div class="drawer h-full">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col">
          <!-- Navbar -->
          <div class="w-full navbar  bg-primary">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div> 
            <div class="flex-1 px-2 mx-2"><div class="stat-title">Total Page Views</div></div>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal z-0">
                <li><a>Navbar Item 1</a></li>
                <li>
                  <details>
                    <summary>Parent item</summary>
                    <ul>
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                      <li>
                        <details open>
                          <summary>Parent</summary>
                          <ul>
                            <li><a>item 1</a></li>
                            <li><a>item 2</a></li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
          <!-- Page content here -->
          <div class="h-full p-4">
            <RouterView/>
          </div>
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 w-80 min-h-full bg-slate-100 text-black">
            <li>
              <a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Updates
                <span class="badge badge-sm badge-warning">NEW</span></a>
              <ul>
                <li><a>Design</a></li>
                <li><a>Development</a></li>
                <li><a>Hosting</a></li>
                <li><a>Domain register</a></li>
              </ul>
            </li>
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Marketing management</a></li>
                <li><a>Security</a></li>
                <li><a>Consulting</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
 </div>



</template>

<style scoped>

</style>
