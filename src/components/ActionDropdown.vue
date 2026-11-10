<template>
  <div class="position-relative">
    <button 
      type="button" 
      class="action-btn"
      @click="toggleDropdown"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
      </svg>
    </button>

    <div v-if="isOpen" class="custom-dropdown-menu">
      <button type="button" class="dropdown-item-btn" @click="closeDropdown">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8h.01M12 11v5" />
        </svg>
        <span>عرض المزيد</span>
      </button>

      <button type="button" class="dropdown-item-btn" @click="closeDropdown">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.15 7.94l-11.87 11.87c-1.06 1.07-4.23 1.56-4.95.85s-.22-3.88.85-4.95l11.87-11.87a2.83 2.83 0 0 1 4.1 4.1z" />
        </svg>
        <span>تعديل</span>
      </button>

      <hr class="my-1" />

      <button type="button" class="dropdown-item-btn delete-btn" @click="closeDropdown">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
        </svg>
        <span>حذف</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function closeDropdown() {
  isOpen.value = false
}
</script>

<style scoped>
.action-btn {
  background: none;
  border: none;
  color: #637483;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
}
.action-btn:hover {
  background-color: #f1f5f9;
}

.custom-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 6px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
}

.dropdown-item-btn {
  background: none;
  border: none;
  padding: 8px 12px;
  text-align: right;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #475569;
  border-radius: 4px;
  font-size: 0.88rem;
  cursor: pointer;
}
.dropdown-item-btn:hover {
  background-color: #f8fafc;
}

.delete-btn {
  color: #f73a1d;
}
.delete-btn:hover {
  background-color: #fff1f0;
}
</style>
