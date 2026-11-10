<template>
  <tr class="align-middle">
    <td>
      <div class="d-flex align-items-center gap-2">
        <input 
          type="checkbox" 
          class="form-check-input"
          v-model="isChecked"
        />
        <span class="row-number">{{ index + 1 }}</span>
      </div>
    </td>

    <td>
      <div class="d-flex align-items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#36c59b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" />
          <circle cx="12" cy="10" r="2" />
        </svg>
        <span class="unit-name">{{ unit.name }}</span>
      </div>
    </td>

    <td class="table-text">
      {{ unit.lastUpdate }}
    </td>

    <td>
      <span class="status-badge">
        {{ unit.status }}
      </span>
    </td>

    <td class="table-text">
      {{ unit.licenseExpiry }}
    </td>

    <td class="table-text">
      {{ unit.driverName }}
    </td>

    <td>
      <ActionDropdown />
    </td>
  </tr>
</template>

<script setup>
import { ref } from 'vue'
import ActionDropdown from './ActionDropdown.vue'

defineProps({
  unit: Object,
  index: Number
})

const isChecked = ref(false)
</script>

<style scoped>
.row-number,
.table-text {
  color: #637483;
  font-size: 0.9rem;
}

.unit-name {
  color: #0601AE;
  font-weight: 600;
  font-size: 0.95rem;
}

.status-badge {
  background-color: #d1f4e0;
  color: #0b8a4f;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.82rem;
  font-weight: 500;
}
</style>
