<script lang="ts">
  export let videoUrl: string;
  export let aspectRatio: string = "video";
  export let title: string = "Embedded Video";
</script>

<div class={`aspect-${aspectRatio} overflow-hidden rounded-lg`}>
  <iframe
    src={videoUrl}
    title={title}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="w-full h-full"
  ></iframe>
</div>