<script>
  import { resolve } from "$app/paths";
</script>

<a href={resolve("/functional/foo")}>Go to /functional</a>
<a href={resolve("/non-functional/foo")}>Go to /non-functional</a>
<a href={resolve("/non-functional-2/foo")}>Go to /non-functional-2</a>