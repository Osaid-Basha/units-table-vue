<template>
  <PageHeader />
  <div class="container-fluid px-3 px-md-4 py-4">
    <TableFilters />
    <UnitsTable />
  </div>
</template>

<script setup>
import UnitsTable from './components/UnitsTable.vue'
import PageHeader from './components/PageHeader.vue'
import TableFilters from './components/TableFilters.vue'
</script>
