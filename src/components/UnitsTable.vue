<template>
  <div class="table-responsive bg-white rounded-3 shadow-sm border p-2">
    <table class="table table-hover align-middle mb-0">
      <thead>
        <tr class="table-header-row">
          <th style="width: 70px;">
            <input 
              type="checkbox" 
              class="form-check-input"
              v-model="headerCheckbox"
              :aria-label="t('selectAll')"
            />
          </th>
          <th>{{ t('name') }}</th>
          <th>{{ t('lastUpdate') }}</th>
          <th>{{ t('status') }}</th>
          <th>{{ t('licenseExpiry') }}</th>
          <th>{{ t('driver') }}</th>
          <th style="width: 60px;"></th>
        </tr>
      </thead>

      <tbody>
        <UnitRow 
          v-for="(unit, index) in units" 
          :key="unit.id"
          :unit="unit"
          :index="index"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import UnitRow from './UnitRow.vue'

const { t } = useI18n({ useScope: 'global' })
const headerCheckbox = ref(false)

const units = ref([
  {
    id: 1,
    name: '32-6207-6',
    vehicle: 'vehiclePicanto',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'active',
    licenseExpiry: '-',
    driverName: '-'
  },
  {
    id: 2,
    name: '32-0757-7',
    vehicle: 'vehicleKia',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'active',
    licenseExpiry: '-',
    driverName: '-'
  },
  {
    id: 3,
    name: '412 - 0367',
    vehicle: 'vehicleMercedes',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'active',
    licenseExpiry: '-',
    driverName: '-'
  },
  {
    id: 4,
    name: '20363A - Mounis 5',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'active',
    licenseExpiry: '2025-06-09',
    driverName: 'مؤنس محمود محمد احمد'
  },
  {
    id: 5,
    name: '1126',
    vehicle: 'vehicleVivo',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'active',
    licenseExpiry: '-',
    driverName: '-'
  },
  {
    id: 6,
    name: '8630',
    vehicle: 'vehicleIveco',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'active',
    licenseExpiry: '2026-03-22',
    driverName: 'عامر/امجد'
  }
])
</script>

<style scoped>
.table-header-row th {
  color: #637483;
  font-weight: 600;
  font-size: 0.9rem;
  background-color: #f8fafc;
  border-bottom: 2px solid #edf2f7;
  padding: 12px 14px;
  white-space: nowrap;
}

.table-responsive {
  overflow: visible;
}

@media (max-width: 768px) {
  .table-responsive {
    overflow-x: auto;
  }

  .table {
    min-width: 760px;
  }
}
</style>
