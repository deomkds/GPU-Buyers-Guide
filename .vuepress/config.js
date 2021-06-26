const {
    description
} = require('../package')

module.exports = {
    title: 'GPU Buyers Guide',
    description: description,
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/GPU-Buyers-Guide/',
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/deomkds/GPU-Buyers-Guide',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        logo: '/homepage.png',
        nav: [{
            text: 'Outros Guias',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Site Original (em inglês)',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'Primeiros Passos com a ACPI',
                link: 'https://deomkds.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'Guia de Instalação do OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'Pós-instalação do OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'Multiboot com o OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Multiboot/'
            },
            {
                text: 'Guia de Compra de Wi-Fi',
                link: 'https://deomkds.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'Guia de Compra Anti-Hackintosh',
                link: 'https://deomkds.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: 'Introdução',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '',
            ]

        },
        {
            title: 'GPUs Modernas',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/modern-gpus/amd-gpu',
                '/modern-gpus/nvidia-gpu',
				        '/modern-gpus/intel-gpu',
            ]
        },
        {
            title: 'GPUs Antigas',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/legacy-gpus/legacy-amd',
                '/legacy-gpus/legacy-nvidia',
				        '/legacy-gpus/legacy-intel',
            ]
        },
        {
            title: 'Guia de Compra',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/buyers-guide/gpu-avoid',
                '/buyers-guide/what-gpu-to-get',
            ]
        },
        {
            title: 'Outros',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/misc/bootflag',
                '/misc/discrete-laptops',
				        '/misc/common-issues',
				        '/misc/kvm',
				        '/misc/credit',
            ]
        },
    ],
},
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
		    'fulltext-search',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
