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
            />
          </th>
          <th>الاسم</th>
          <th>آخر تحديث</th>
          <th>الوضع الحالي</th>
          <th>انتهاء الرخصة</th>
          <th>السائق</th>
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
import UnitRow from './UnitRow.vue'

const headerCheckbox = ref(false)

const units = ref([
  {
    id: 1,
    name: '32-6207-6 - بيكانتو',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'مفعل',
    licenseExpiry: '-',
    driverName: '-'
  },
  {
    id: 2,
    name: '32-0757-7 - كيا',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'مفعل',
    licenseExpiry: '-',
    driverName: '-'
  },
  {
    id: 3,
    name: 'مرسيدس - 412 - 0367',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'مفعل',
    licenseExpiry: '-',
    driverName: '-'
  },
  {
    id: 4,
    name: '20363A - Mounis 5',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'مفعل',
    licenseExpiry: '2025-06-09',
    driverName: 'مؤنس محمود محمد احمد'
  },
  {
    id: 5,
    name: 'فيفو 1126',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'مفعل',
    licenseExpiry: '-',
    driverName: '-'
  },
  {
    id: 6,
    name: '8630 - ايفيكو شحن صغير',
    lastUpdate: '08:49:14 2023-04-28',
    status: 'مفعل',
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
</style>
