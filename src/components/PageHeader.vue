<template>
  <header class="page-header" dir="ltr">
    <h1>Units</h1>
    <div class="header-actions">
      <button class="icon-button" type="button" aria-label="Notifications">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg>
      </button>
      <div class="menu-wrap">
        <button class="icon-button" type="button" aria-label="Languages" :aria-expanded="openMenu === 'language'" @click="toggleMenu('language')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>
        </button>
        <div v-if="openMenu === 'language'" class="header-menu language-menu">
          <button type="button" @click="openMenu = ''">العربية</button>
          <button type="button" @click="openMenu = ''">English</button>
        </div>
      </div>
      <div class="menu-wrap">
        <button class="profile-button" type="button" :aria-expanded="openMenu === 'profile'" @click="toggleMenu('profile')">
          <span class="avatar" :style="{ backgroundColor: avatarColor }">OB</span>
          <span class="profile-name">Osaid Basha</span><span class="arrow">⌄</span>
        </button>
        <div v-if="openMenu === 'profile'" class="header-menu profile-menu">
          <div class="profile-details">
            <span class="avatar large" :style="{ backgroundColor: avatarColor }">OB</span>
            <strong>Osaid Basha</strong><span class="muted">PITS</span>
            <button class="edit-profile" type="button" @click="openMenu = ''">Edit Profile</button>
          </div>
          <button type="button" @click="openMenu = ''">Switch accounts</button>
          <button type="button" @click="openMenu = ''">Log Out</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const openMenu = ref('')
const colors = ['#637483', '#477a86', '#766895', '#b16b73', '#67836b']
const avatarColor = colors[Math.floor(Math.random() * colors.length)]

function toggleMenu(menu) {
  openMenu.value = openMenu.value === menu ? '' : menu
}
</script>

<style scoped>
.page-header { min-height: 70px; padding: 14px 24px; background: #eef3f9; border-bottom: 1px solid #dce5ee; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
h1 { margin: 0; font-size: 18px; font-weight: 700; color: #253746; }
.header-actions { display: flex; align-items: center; gap: 8px; }
.menu-wrap { position: relative; }
.icon-button { width: 36px; height: 36px; display: grid; place-items: center; border: 0; border-radius: 50%; background: #dce5ed; color: #394b59; }
.icon-button svg { width: 19px; height: 19px; }
.profile-button { border: 0; background: #dce5ed; color: #253746; border-radius: 24px; padding: 2px 10px 2px 2px; display: flex; align-items: center; gap: 8px; font-weight: 600; }
.avatar { width: 34px; height: 34px; border-radius: 50%; color: white; display: grid; place-items: center; font-family: Arial, sans-serif; font-weight: 600; }
.avatar.large { width: 50px; height: 50px; font-size: 22px; }
.arrow { font-size: 20px; line-height: 1; color: #637483; }
.header-menu { position: absolute; top: calc(100% + 8px); right: 0; z-index: 20; background: white; border: 1px solid #dce5ee; border-radius: 9px; box-shadow: 0 5px 16px #23394c22; min-width: 130px; padding: 6px 0; }
.header-menu > button { display: block; width: 100%; padding: 9px 14px; text-align: left; border: 0; background: white; color: #334155; }
.header-menu > button:hover { background: #f1f5f9; }
.profile-menu { width: 240px; }
.profile-menu > button { border-top: 1px solid #e5ebf0; }
.profile-details { padding: 16px; display: flex; align-items: center; flex-direction: column; gap: 8px; }
.muted { color: #9aa9b5; }
.edit-profile { background: white; border: 1px solid #dce5ee; border-radius: 5px; padding: 6px 12px; color: #334155; }
@media (max-width: 480px) { .page-header { padding: 12px 16px; } .profile-name { display: none; } }
</style>
