<script lang="ts">
	export let fontSize = '3rem';
	export let animationDurationMs = 500;

	// CSS animation is designed to have
	// exactly 12 items here, so just don't
	// touch
	const emojisSadespressoFancies = ['✨', '☕', '💫', '🍨', '🌙', '🌀', '🧊', '👏', '🤍', '🌻', '🌠', '🔥'];

	$: animationDurationFull = animationDurationMs * emojisSadespressoFancies.length;
</script>

<div
	class="LoadingIndicator:Wrapper"
	style="--LoadingIndicator-Size: {fontSize}; --LoadingIndicator-AnimationDuration: {animationDurationMs}ms; --LoadingIndicator-AnimationDurationFull: {animationDurationFull}ms">
	<div class="LoadingIndicator:Rail">
		{#each emojisSadespressoFancies as emoji}
			<div>
				<span>
					{emoji}
				</span>
			</div>
		{/each}
	</div>
</div>

<style>
	div.LoadingIndicator\:Wrapper {
		width: var(--LoadingIndicator-Size);
		height: var(--LoadingIndicator-Size);
		overflow: hidden;

		position: relative;
	}

	div.LoadingIndicator\:Rail {
		position: absolute;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: row;
		flex-wrap: none;

		width: calc(var(--LoadingIndicator-Size) * 12);
		height: var(--LoadingIndicator-Size);

		animation: offsetX var(--LoadingIndicator-AnimationDurationFull) step-end infinite;
	}

	div.LoadingIndicator\:Rail > div {
		width: var(--LoadingIndicator-Size);
		height: var(--LoadingIndicator-Size);
	}

	div.LoadingIndicator\:Rail > div > span {
		display: inline-block;

		font-size: calc(var(--LoadingIndicator-Size) * 0.8);
		line-height: var(--LoadingIndicator-Size);

		animation: scaleIn var(--LoadingIndicator-AnimationDuration) cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
	}

	@keyframes offsetX {
		0% {
			left: 0%;
		}
		8.333% {
			left: -100%;
		}
		16.666% {
			left: -200%;
		}
		24.999% {
			left: -300%;
		}
		33.333% {
			left: -400%;
		}
		41.666% {
			left: -500%;
		}
		49.999% {
			left: -600%;
		}
		58.333% {
			left: -700%;
		}
		66.666% {
			left: -800%;
		}
		74.999% {
			left: -900%;
		}
		83.333% {
			left: -1000%;
		}
		91.666% {
			left: -1100%;
		}
		100% {
			left: 0%;
		}
	}

	@keyframes scaleIn {
		0% {
			transform: scale(0.1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
