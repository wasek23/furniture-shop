module.exports = {
    purge: [
        'index.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '473': '473px',
            }
        },
        colors: {
            primary: {
                default: '#e89f71',
                medium: '#f6ddcc',
                light: '#f9f1e7',
                lighter: '#fcf8f3',
            },
            00: '#000',
            26: '#262f56',
            33: '#333',
            ['3a']: '#3a3a3a',
            61: '#616161',
            89: '#898989',
            ['8d']: '#8d8d8d',
            ff: '#fff',
            b0: '#b0b0b0',
            ['c4']: '#c4c4c4'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
