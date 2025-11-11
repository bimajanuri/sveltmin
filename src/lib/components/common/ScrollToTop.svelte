<script lang="ts">
  import { afterNavigate } from '$app/navigation';

  afterNavigate(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
</script>