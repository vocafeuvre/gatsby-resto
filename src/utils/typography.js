import Typography from 'typography'

export default typography = new Typography({
    baseFontSize: "16px",
    baseLineHeight: "1.6",
    googleFonts: [
        {
            name: "Poppins",
            styles: [
                "700",
                "600",
                "400"
            ]
        },
        {
            name: "Raleway",
            styles: [
                "600",
                "500"
            ]
        }
    ],
    headerFontFamily: ["Poppins", "Open Sans", "sans-serif"],
    bodyFontFamily: ["Raleway", "Georgia", "serif"],
    bodyWeight: 500
})