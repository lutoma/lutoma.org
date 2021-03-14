<template>
	<div>
		<h1>Get in touch</h1>
		<h2>tldr → hello@lutoma.org</h2>

		<p>The best way to reach me is by email to <a href="mailto:hello@lutoma.org">hello@lutoma.org</a>.  It may take a while until I respond.</p>

		<p><fa :icon="['far', 'lock']" /> You can encrypt emails using my PGP public key <code>B3096283 6CFD554A 1EC8BDBC F828A0C8 C9E1BD2C</code> (RSA2048, 2013-03-11 – <a href="/lutoma.asc">Full public key</a>, <a href="http://p80.pool.sks-keyservers.net/pks/lookup?search=0xF828A0C8C9E1BD2C&op=vindex" target="_blank" rel="noopener">keyserver</a>, <a href="https://keybase.io/lutoma" target="_blank" rel="noopener">keybase</a>).</p>

		<h2>Instant Messaging</h2>
		<p>Alternatively you can reach me on these services, in order of preference:</p>

		<ul>
			<li>Signal</li>
			<li><a href="https://matrix.to/#/@lutoma:ohai.su" target="_blank" rel="noopener">Matrix: @lutoma:ohai.su</a></li>
			<li><a href="https://t.me/lutoma" target="_blank" rel="noopener">Telegram: @lutoma</a></li>
			<li><a href="https://discord.com/users/137698436043505665" target="_blank" rel="noopener">Discord: lutoma#0001</a></li>
			<li><a href="https://chaos.social/@lutoma" target="_blank" rel="noopener">Mastodon: @lutoma@chaos.social</a></li>
			<li><a href="https://twitter.com/lutoma" target="_blank" rel="noopener">Twitter: @lutoma</a></li>
			<li><a href="imessage://hello@lutoma.org">iMessage: hello@lutoma.org</a></li>
		</ul>
	</div>
</template>

<script>
export default {
	head () {
		const title = 'Contact — lutoma'
		const meta = [
			{ hid: 'og:title', property: 'og:title', content: title },
			{ hid: 'twitter:title', name: 'twitter:title', content: title },
		]

		return { title, meta }
	}
}
</script>
