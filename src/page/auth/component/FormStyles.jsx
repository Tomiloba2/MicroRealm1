export const Style = {
    mainBox: {
        bgColor: 'blackAlpha.900',
        minH: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        marginTop: 20,
        w: { base: '75vw', md: '50vw' },
        bgColor: 'blackAlpha.500',
        color: 'whiteAlpha.700'
    },
    cardHeader: {
        textAlign: 'center',
        fontSize: '2rem'
    },
    boxButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 4
    },
    button: {
        bgColor: 'whatsapp.700',
        color: 'white',
        w: '200px',
        "&:hover": {
            bgcolor: 'white',
            color: "whatsapp.700"
        },
    },
    bottomBox: {
        textAlign: 'center',
        color: 'white', p: 2
    }
}