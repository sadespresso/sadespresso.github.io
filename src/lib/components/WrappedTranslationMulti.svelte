<script lang="ts">
	import type { LocalizedString } from 'typesafe-i18n';

	export let message: LocalizedString;

	$: children = message.split('<>') as LocalizedString[];
</script>

{#if children.length > 0}
	{children[0]}
{/if}
{#if $$slots['1']}
	<slot name="1" />
{/if}
{#if children.length > 1}
	{children[1]}
{/if}
{#if $$slots['2']}
	<slot name="2" />
{/if}
{#if children.length > 2}
	{children[2]}
{/if}
{#if $$slots['3']}
	<slot name="3" />
{/if}
{#if children.length > 3}
	{children[3]}
{/if}
{#if $$slots['4']}
	<slot name="4" />
{/if}
{#if children.length > 4}
	{children[4]}
{/if}
{#if $$slots['5']}
	<slot name="5" />
{/if}
{#if children.length > 5}
	{children[5]}
{/if}
{#if $$slots['6']}
	<slot name="6" />
{/if}
{#if children.length > 6}
	{children[6]}
{/if}
{#if $$slots['7']}
	<slot name="7" />
{/if}
{#if children.length > 7}
	{children[7]}
{/if}
{#if $$slots['8']}
	<slot name="8" />
{/if}
{#if children.length > 8}
	{children[8]}
{/if}
{#if $$slots['9']}
	<slot name="9" />
{/if}
{#if children.length > 9}
	{children[9]}
{/if}
{#if $$slots['1']}
	<slot name="10" />
{/if}
{#if children.length > 10}
	{children[10]}
{/if}

{#if children.length > 11}
	{#each children.slice(11) as extra}
		{extra}
	{/each}
{/if}
