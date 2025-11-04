<script lang="ts">
  import Table from '$lib/components/Table.svelte';
  import { InsertTableOutline } from 'flowbite-svelte-icons';
  
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'title', label: 'Title' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' }
  ];
  
  const data = [
    { name: 'John Doe', title: 'Software Engineer', email: 'john.doe@example.com', role: 'Admin' },
    { name: 'Jane Smith', title: 'Product Manager', email: 'jane.smith@example.com', role: 'Editor' },
    { name: 'Robert Johnson', title: 'Designer', email: 'robert.johnson@example.com', role: 'Viewer' },
    { name: 'Emily Davis', title: 'Data Analyst', email: 'emily.davis@example.com', role: 'Editor' },
    { name: 'Michael Wilson', title: 'DevOps Engineer', email: 'michael.wilson@example.com', role: 'Admin' },
    { name: 'Sarah Brown', title: 'QA Engineer', email: 'sarah.brown@example.com', role: 'Viewer' }
  ];
</script>

<Table {columns} {data} title="Basic Tables" sortable />