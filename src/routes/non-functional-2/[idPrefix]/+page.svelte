<script lang="ts">
  import { page } from "$app/state";
  import { resolve } from "$app/paths";
  import { loadId, sendId } from "../../data.remote";

  const isBar = $derived(page.url.pathname === "/non-functional-2/bar");
  const idPrefix = $derived(page.params.idPrefix ?? "default");
  const id = $derived(await loadId({ idPrefix }));

  const form = $derived(sendId.for(id.received));

  form.fields.set({ text: `Default text for ${id.received}` });
</script>

<h1>Welcome to SvelteKit</h1>
<a href={resolve("/functional/foo")}>Go to /functional</a>
<a href={resolve("/non-functional/foo")}>Go to /non-functional</a>
<a href={resolve(isBar ? "/non-functional-2/foo" : "/non-functional-2/bar")}>
  Go to {isBar ? "/foo" : "/bar"}
</a>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>
<form {...form}>
  <input
    type="text"
    placeholder="Enter a value to send to the server"
    {...form.fields.text.as("text")}
  />
  <button type="submit">Submit</button>
</form>
