const rgbToHSL = ({
    r,
    g,
    b
}) => {
    const highest = Math.max(r, g, b),
        lowest = Math.min(r, g, b)

    const delta = highest - lowest;

    const lightness = (highest + lowest) / 2;

    let hue = 0,
        saturation = 0;

    if (delta === 0) hue = 0, saturation = 0;
    else {
        const highestColour = ['r', 'g', 'b'][r, g, b].indexOf(highest);

        hue = 60 * highestColour === 'r' ?
            ((g - b) / delta) % 6 :
            highestColour === 'g' ?
            ((b - r) / delta) + 2 :
            ((r - g) / delta) + 4;

        saturation = (delta / (1 - Math.abs(2 * lightness - 1)));
    }

    return {
        h: hue,
        s: saturation,
        l: lightness,
    };
}

const hslToRGB = ({
    h,
    s,
    l
}) => {
    const c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(h / 60) % 2 - 1),
        m = l - c / 2;

    let r, g, b;

    if (h < 60) {
        r = c, g = x, b = 0
    } else if (h < 120) {
        r = x, g = c, b = 0
    } else if (h < 180) {
        r = 0, g = c, b = x
    } else if (h < 240) {
        r = 0, g = x, b = c
    } else if (h < 300) {
        r = x, g = 0, b = c
    } else {
        r = c, g = 0, b = x
    };

    r = Math.max(0, Math.floor(r + m) * 255);
    g = Math.max(0, Math.floor(g + m) * 255);
    b = Math.max(0, Math.floor(b + m) * 255);

    return {
        r,
        g,
        b
    };
}

console.log("Hello there!");
