<script lang="ts">
  import Table from '$lib/components/ui/table/Table.svelte';
  import TableBody from '$lib/components/ui/table/TableBody.svelte';
  import TableCell from '$lib/components/ui/table/TableCell.svelte';
  import TableHeader from '$lib/components/ui/table/TableHeader.svelte';
  import TableRow from '$lib/components/ui/table/TableRow.svelte';
  import Badge from '$lib/components/ui/badge/Badge.svelte';
  import MoreDotIcon from '$lib/icons/MoreDotIcon.svelte';

  // Define the TypeScript interface for the table rows
  interface Product {
    id: number;
    name: string;
    variants: string;
    category: string;
    price: string;
    status: "Delivered" | "Pending" | "Canceled";
    image: string;
  }

  // Define the table data using the interface
  let tableData: Product[] = [
    {
      id: 1,
      name: "MacBook Pro 13”",
      variants: "2 Variants",
      category: "Laptop",
      price: "$2399.00",
      status: "Delivered",
      image: "/images/product/product-01.jpg",
    },
    {
      id: 2,
      name: "Apple Watch Ultra",
      variants: "1 Variant",
      category: "Watch",
      price: "$879.00",
      status: "Pending",
      image: "/images/product/product-02.jpg",
    },
    {
      id: 3,
      name: "iPhone 15 Pro Max",
      variants: "2 Variants",
      category: "SmartPhone",
      price: "$1869.00",
      status: "Delivered",
      image: "/images/product/product-03.jpg",
    },
    {
      id: 4,
      name: "Samsung Galaxy S23 Ultra",
      variants: "1 Variant",
      category: "SmartPhone",
      price: "$1199.00",
      status: "Canceled",
      image: "/images/product/product-04.jpg",
    },
    {
      id: 5,
      name: "Dell XPS 15",
      variants: "3 Variants",
      category: "Laptop",
      price: "$1699.00",
      status: "Delivered",
      image: "/images/product/product-05.jpg",
    },
    {
      id: 6,
      name: "Sony WH-1000XM5",
      variants: "1 Variant",
      category: "Headphone",
      price: "$399.00",
      status: "Pending",
      image: "/images/product/product-06.jpg",
    },
  ];
</script>

<div class="col-span-12 rounded-xl bg-white p-6 shadow-theme-xs dark:bg-gray-dark xl:col-span-7">
  <div class="mb-6 flex items-center justify-between">
    <h2 class="text-lg font-bold text-gray-900 dark:text-white">
      Recent Orders
    </h2>
    <button class="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-dark-2 dark:hover:text-white">
      <MoreDotIcon />
    </button>
  </div>
  <Table>
    <TableHeader>
      <tr>
        <th class="text-left font-medium text-gray-500 dark:text-gray-400">
          Product
        </th>
        <th class="text-left font-medium text-gray-500 dark:text-gray-400">
          Variants
        </th>
        <th class="text-left font-medium text-gray-500 dark:text-gray-400">
          Category
        </th>
        <th class="text-left font-medium text-gray-500 dark:text-gray-400">
          Price
        </th>
        <th class="text-left font-medium text-gray-500 dark:text-gray-400">
          Status
        </th>
      </tr>
    </TableHeader>
    <TableBody>
      {#each tableData as product}
        <TableRow>
          <TableCell>
            <div class="flex items-center gap-3">
              <div class="h-11 w-11 rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  class="h-full w-full rounded-md object-cover"
                />
              </div>
              <p class="font-medium text-gray-900 dark:text-white">
                {product.name}
              </p>
            </div>
          </TableCell>
          <TableCell>
            <p class="text-gray-500 dark:text-gray-400">
              {product.variants}
            </p>
          </TableCell>
          <TableCell>
            <p class="text-gray-500 dark:text-gray-400">
              {product.category}
            </p>
          </TableCell>
          <TableCell>
            <p class="font-medium text-gray-900 dark:text-white">
              {product.price}
            </p>
          </TableCell>
          <TableCell>
            <Badge
              variant={product.status === "Delivered" ? "success" : product.status === "Pending" ? "warning" : "danger"}
              size="sm"
            >
              {product.status}
            </Badge>
          </TableCell>
        </TableRow>
      {/each}
    </TableBody>
  </Table>
</div>