<template>
  <div class="filters" dir="ltr">
    <div class="filter-controls">
      <label class="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" /></svg>
        <input type="search" placeholder="Search" aria-label="Search" />
      </label>
      <div class="filter-menu-wrap">
        <button class="filter-button select-button" type="button" :aria-expanded="openMenu === 'filter'" @click="toggleMenu('filter')">
          <span>{{ selectedFilter }}</span><span class="select-icons">× &nbsp;⌄</span>
        </button>
        <div v-if="openMenu === 'filter'" class="filter-menu">
          <button v-for="item in filters" :key="item" type="button" :class="{ selected: item === selectedFilter }" @click="selectedFilter = item; openMenu = ''">{{ item }}</button>
        </div>
      </div>
      <div class="filter-menu-wrap groups-wrap">
        <button class="filter-button select-button" type="button" :aria-expanded="openMenu === 'groups'" @click="toggleMenu('groups')">
          <span>{{ selectedGroups.length ? selectedGroups.join(', ') : 'Tags' }}</span><span>⌄</span>
        </button>
        <div v-if="openMenu === 'groups'" class="filter-menu">
          <label v-for="group in groups" :key="group" class="check-option"><input v-model="selectedGroups" type="checkbox" :value="group" />{{ group }}</label>
        </div>
      </div>
      <div class="filter-menu-wrap">
        <button class="filter-button" type="button" :aria-expanded="openMenu === 'export'" @click="toggleMenu('export')">Export</button>
        <div v-if="openMenu === 'export'" class="filter-menu export-menu">
          <button type="button" @click="openMenu = ''"><span>📕</span> Export as PDF</button>
          <button type="button" @click="openMenu = ''"><span>📗</span> Export as Excel</button>
        </div>
      </div>
      <button class="filter-button square-button" type="button" aria-label="Refresh">↻</button>
    </div>
    <div class="filter-menu-wrap columns-wrap">
      <button class="filter-button square-button" type="button" aria-label="Choose columns" :aria-expanded="openMenu === 'columns'" @click="toggleMenu('columns')">⚙</button>
      <div v-if="openMenu === 'columns'" class="filter-menu columns-menu">
        <div class="columns-title">Choose Columns</div>
        <label v-for="column in columns" :key="column" class="check-option"><input v-model="selectedColumns" type="checkbox" :value="column" />{{ column }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openMenu = ref('')
const filters = ['All', 'license expired', 'license not expired', 'With Tracking']
const groups = ['Test 1', 'Test 2', 'Test 3', 'Test 4']
const columns = ['Name', 'Last Update', 'status', 'Odometer', 'License Exp', 'Driver']
const selectedFilter = ref('All')
const selectedGroups = ref([])
const selectedColumns = ref([...columns])

function toggleMenu(menu) {
  openMenu.value = openMenu.value === menu ? '' : menu
}
</script>

<style scoped>
.filters { display: flex; align-items: center; justify-content: space-between; gap: 12px; background: #eef3f9; border: 1px solid #e2e9f1; padding: 14px 16px; margin-bottom: 18px; }
.filter-controls { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.filter-menu-wrap { position: relative; }
.filter-button, .search-box { height: 36px; background: #fff; color: #506171; border: 1px solid #dce5ee; border-radius: 5px; box-shadow: 0 1px 3px #23394c12; }
.filter-button { padding: 0 11px; white-space: nowrap; }
.filter-button:hover { border-color: #aebdcc; }
.search-box { display: flex; align-items: center; gap: 6px; padding: 0 9px; }
.search-box svg { width: 15px; height: 15px; color: #9aa9b5; }
.search-box input { width: 140px; border: 0; outline: 0; font: inherit; font-size: 13px; }
.search-box input::placeholder { color: #a9b6c1; }
.select-button { display: flex; justify-content: space-between; align-items: center; gap: 14px; min-width: 120px; }
.groups-wrap .select-button { width: 180px; }
.select-button > span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.select-icons { color: #8293a0; }
.square-button { width: 36px; padding: 0; font-size: 22px; line-height: 1; color: #8192a0; }
.filter-menu { position: absolute; top: calc(100% + 3px); left: 0; z-index: 15; min-width: 100%; max-height: 220px; overflow-y: auto; background: white; border: 1px solid #dce5ee; border-radius: 5px; box-shadow: 0 4px 10px #23394c22; padding: 4px 0; }
.filter-menu > button, .check-option { display: flex; align-items: center; gap: 8px; width: 100%; border: 0; background: white; color: #334155; text-align: left; padding: 8px 11px; white-space: nowrap; cursor: pointer; }
.filter-menu > button:hover, .check-option:hover { background: #f2f5f8; }
.filter-menu > button.selected { background: #0601ae; color: white; }
.check-option input { accent-color: #20bd91; }
.export-menu { min-width: 170px; }
.columns-menu { left: auto; right: 0; width: 220px; max-height: 280px; }
.columns-title { padding: 7px 10px 10px; text-align: center; border-bottom: 1px solid #e5ebf0; color: #334155; }
@media (max-width: 650px) { .filters { align-items: flex-start; } .filter-controls { flex: 1; } .search-box, .search-box input { width: 100%; } .filter-controls > .filter-menu-wrap { flex: 1 1 120px; } .filter-controls > .groups-wrap { flex-basis: 160px; } .select-button, .groups-wrap .select-button { width: 100%; } }
</style>
