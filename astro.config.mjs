// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: "https://utubmir.github.io/unitorial",
    base: "/unitorial",
    output: "static",
    integrations: [
        starlight({
            title: 'Unitorial',
            locales: {
                root: {
                    label: 'Українська',
                    lang: 'uk',
                },
            },
            defaultLocale: 'uk',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/UTUBMIR' }],
            sidebar: [
                {
                    label: 'Guides',
                    translations: { 'uk': 'Уроки' },
                    items: [
                        {
                            label: 'Start',
                            translations: { 'uk': 'Старт' },
                            autogenerate: { directory: 'guides/start' }
                        }
                    ],
                },
                {
                    label: 'Reference',
                    translations: { 'uk': 'Референси' },
                    collapsed: true,
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
});
