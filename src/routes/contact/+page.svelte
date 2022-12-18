<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col p-4 lg:p-12 gap-10">
	<div class="flex flex-col gap-1">
		<h1 class="font-syne font-medium text-4xl uppercase text-gray-900 dark:text-gray-100">
			contact
		</h1>
		<span class="font-syne font-medium text-xs text-gray-900 dark:text-gray-100">
			Let's get in touch, I'm excited to hear from you!
		</span>
	</div>

	<div class="flex flex-col gap-14">
		<div class="flex flex-col gap-2">
			<span class="font-syne font-medium text-md text-gray-900 dark:text-gray-100">
				You can find me here in the web, in one of this links:
			</span>

			<div class="flex flex-col lg:flex-row gap-4">
				<a
					class="underline w-fit font-medium font-syne text-md text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
					title="github"
					href="https://github.com/AM-77"
				>
					github
				</a>
				<a
					class="underline w-fit font-medium font-syne text-md text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
					title="gitlab"
					href="https://gitlab.com/amine-griche"
				>
					gitlab
				</a>
				<a
					class="underline w-fit font-medium font-syne text-md text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
					title="linkedin"
					href="https://www.linkedin.com/in/mohamed-amine-griche"
				>
					linkedin
				</a>
				<a
					class="underline w-fit font-medium font-syne text-md text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
					title="codepen"
					href="https://codepen.io/am-77"
				>
					codepen
				</a>
				<a
					class="underline w-fit font-medium font-syne text-md text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
					title="dev.to"
					href="https://dev.to/am77"
				>
					dev.to
				</a>
				<a
					class="underline w-fit font-medium font-syne text-md text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
					title="stackoverflow"
					href="https://stackoverflow.com/users/10564525"
				>
					stackoverflow
				</a>
				<a
					class="underline w-fit font-medium font-syne text-md text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
					title="npm"
					href="https://www.npmjs.com/~am-77"
				>
					npm
				</a>
				<a
					class="underline w-fit font-medium font-syne text-md text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
					title="email"
					href="mailto:amine.griche77@protonmail.ch"
				>
					email
				</a>
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<span class="font-syne font-medium text-md text-gray-900 dark:text-gray-100">
				Or you can leave me a message now, via this form:
			</span>
			<form
				class="flex flex-col gap-4"
				action="https://formsubmit.co/69e100ec8e0fe1ab14d765815663659d"
				method="POST"
			>
				<input
					class="font-syne text-gray-900 dark:text-gray-100 w-full h-10 px-4 border border-gray-900 dark:border-gray-100 focus:border-primary hover:border-primary dark:focus:border-primary dark:hover:border-primary bg-white/20 dark:bg-black/20 outline-none"
					type="text"
					name="name"
					placeholder="Your name"
					required
				/>
				<input
					class="font-syne text-gray-900 dark:text-gray-100 w-full h-10 px-4 border border-gray-900 dark:border-gray-100 focus:border-primary hover:border-primary dark:focus:border-primary dark:hover:border-primary bg-white/20 dark:bg-black/20 outline-none"
					type="email"
					name="email"
					placeholder="Your email address"
					required
				/>
				<textarea
					class="font-syne text-gray-900 dark:text-gray-100 w-full h-40 min-h-[10rem] max-h-[10rem] p-4 border border-gray-900 dark:border-gray-100 focus:border-primary hover:border-primary dark:focus:border-primary dark:hover:border-primary bg-white/20 dark:bg-black/20 outline-none"
					type="text"
					name="message"
					placeholder="Your message"
					required
				/>

				<input type="hidden" name="_next" value={$page.url.href} />
				<input type="hidden" name="_captcha" value="false" />

				<div>
					<button
						class="w-full md:w-auto font-syne text-gray-900 dark:text-gray-100 px-4 py-2 border border-gray-900 dark:border-gray-100 hover:text-primary hover:border-primary dark:hover:text-primary dark:hover:border-primary"
						type="submit"
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
