module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            borderColor: {
                primary: '#fff',
            },
            colors: {
                primary: '#fff',
                secondary: '#7E94E0',
            },
            backgroundColor: {
                primary: '#0D1018',
                secondary: '#161B22',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
