<template>
  <div class="filters">
    <div class="filter-controls">
      <label class="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" /></svg>
        <input type="search" :placeholder="t('search')" :aria-label="t('search')" />
      </label>
      <div class="filter-menu-wrap">
        <button class="filter-button select-button" type="button" :aria-expanded="openMenu === 'filter'" @click="toggleMenu('filter')">
          <span>{{ t(selectedFilter) }}</span>
          <span class="select-icons" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          </span>
        </button>
        <div v-if="openMenu === 'filter'" class="filter-menu">
          <button v-for="item in filters" :key="item" type="button" :class="{ selected: item === selectedFilter }" @click="selectedFilter = item; openMenu = ''">{{ t(item) }}</button>
        </div>
      </div>
      <div class="filter-menu-wrap groups-wrap">
        <button class="filter-button select-button" type="button" :aria-expanded="openMenu === 'groups'" @click="toggleMenu('groups')">
          <span>{{ selectedGroups.length ? selectedGroups.map(group => t(group)).join(', ') : t('tags') }}</span>
          <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
        </button>
        <div v-if="openMenu === 'groups'" class="filter-menu">
          <label v-for="group in groups" :key="group" class="check-option"><input v-model="selectedGroups" type="checkbox" :value="group" />{{ t(group) }}</label>
        </div>
      </div>
      <div class="filter-menu-wrap">
        <button class="filter-button" type="button" :aria-expanded="openMenu === 'export'" @click="toggleMenu('export')">{{ t('export') }}</button>
        <div v-if="openMenu === 'export'" class="filter-menu export-menu">
          <button type="button" @click="openMenu = ''"><span>📕</span> {{ t('exportPdf') }}</button>
          <button type="button" @click="openMenu = ''"><span>📗</span> {{ t('exportExcel') }}</button>
        </div>
      </div>
      <button class="filter-button square-button" type="button" :aria-label="t('refresh')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 1 1-2.3-5.7M20 4v7h-7" /></svg>
      </button>
    </div>
    <div class="filter-menu-wrap columns-wrap">
      <button class="filter-button square-button" type="button" :aria-label="t('chooseColumns')" :aria-expanded="openMenu === 'columns'" @click="toggleMenu('columns')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h5v14H4zM11 5h3v14h-3zM16 5h4v14h-4z" /></svg>
      </button>
      <div v-if="openMenu === 'columns'" class="filter-menu columns-menu">
        <div class="columns-title">{{ t('chooseColumns') }}</div>
        <label v-for="column in columns" :key="column" class="check-option"><input v-model="selectedColumns" type="checkbox" :value="column" />{{ t(column) }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
const openMenu = ref('')
const filters = ['all', 'licenseExpired', 'licenseNotExpired', 'withTracking']
const groups = ['test1', 'test2', 'test3', 'test4']
const columns = ['name', 'lastUpdate', 'status', 'odometer', 'licenseExpiry', 'driver']
const selectedFilter = ref('all')
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
.select-icons { display: flex; align-items: center; gap: 5px; color: #8293a0; }
.select-icons svg, .chevron-icon { width: 15px; height: 15px; flex: none; }
.square-button { width: 36px; padding: 0; display: grid; place-items: center; color: #8192a0; }
.square-button svg { width: 18px; height: 18px; }
.filter-menu { position: absolute; top: calc(100% + 3px); inset-inline-start: 0; z-index: 15; min-width: 100%; max-height: 220px; overflow-y: auto; background: white; border: 1px solid #dce5ee; border-radius: 5px; box-shadow: 0 4px 10px #23394c22; padding: 4px 0; }
.filter-menu > button, .check-option { display: flex; align-items: center; gap: 8px; width: 100%; border: 0; background: white; color: #334155; text-align: start; padding: 8px 11px; white-space: nowrap; cursor: pointer; }
.filter-menu > button:hover, .check-option:hover { background: #f2f5f8; }
.filter-menu > button.selected { background: #0601ae; color: white; }
.check-option input { accent-color: #20bd91; }
.export-menu { min-width: 170px; }
.columns-menu { inset-inline-start: auto; inset-inline-end: 0; width: 220px; max-height: 280px; }
.columns-title { padding: 7px 10px 10px; text-align: center; border-bottom: 1px solid #e5ebf0; color: #334155; }
@media (max-width: 650px) { .filters { align-items: flex-start; } .filter-controls { flex: 1; } .search-box, .search-box input { width: 100%; } .filter-controls > .filter-menu-wrap { flex: 1 1 120px; } .filter-controls > .groups-wrap { flex-basis: 160px; } .select-button, .groups-wrap .select-button { width: 100%; } }
</style>
