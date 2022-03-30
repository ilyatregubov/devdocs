/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        'introduction',
        {
            label: 'Getting started',
            type: 'category',
            items: [
                'gettingstarted/quickstart',
                'gettingstarted/requirements',
                'gettingstarted/setup',
            ],
        },
        {
            label: 'Developer guides',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'guides',
                },
            ],
        },
        {
            label: 'API guides',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'apiguides',
                },
            ],
        },
        {
            label: 'Tooling',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'tools',
                },
            ],
        },
        {
            type: 'html',
            value: '<hr>',
        },

        'release-notes',
    ],
};

module.exports = sidebars;
