import type { Config } from 'stylelint';

const config: Config = {
    extends: 'stylelint-config-standard-scss',
    rules: {
        'color-named': 'never',
        'font-weight-notation': 'numeric',
        'no-descending-specificity': null,
        'unit-allowed-list': ['px', '%', 'deg', 'ms', 's', 'vh', 'vw', 'fr'],
    },
};

export default config;
