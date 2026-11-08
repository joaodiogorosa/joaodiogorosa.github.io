import { defineConfig } from "vitepress"

export default defineConfig({
	title: "João Rosa",
	description: "Full-Stack Developer (C#/.NET) based in Portugal.",
	base: "/",
	cleanUrls: true,
	lastUpdated: true,
	srcExclude: ["CLAUDE.md", "**/_*.md"],
	themeConfig: {
		nav: [
			{ text: "Home", link: "/" },
		],
		footer: {
			message: "Built with VitePress.",
			copyright: "© 2026 João Rosa"
		},
		socialLinks: [
			{ icon: "github", link: "https://github.com/joaodiogorosa"},
			{ icon: "linkedin", link: "https://linkedin.com/in/joaodiogorosa"},
		]
	}
})
