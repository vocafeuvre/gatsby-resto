import Typography from 'typography'

export const BASE_FONT_SIZE_PX = 16

const typography = new Typography({
    baseFontSize: `${BASE_FONT_SIZE_PX}px`,
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

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale