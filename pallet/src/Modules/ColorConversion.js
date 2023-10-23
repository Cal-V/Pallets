export const oklchToOklab = (color) => {
    let L = parseFloat(color.l)
    let a = parseFloat(color.c)*Math.cos(parseFloat(color.h)*Math.PI/180 )
    let b = parseFloat(color.c)*Math.sin(parseFloat(color.h)*Math.PI/180 )
    const newColor = {L,a,b}
    console.log(color,newColor)
    return newColor
}

export const oklchToRGB = (color) => {
    const c = oklchToOklab(color)
    let l_ = c.L + 0.3963377774 * c.a + 0.2158037573 * c.b;
    let m_ = c.L - 0.1055613458 * c.a - 0.0638541728 * c.b;
    let s_ = c.L - 0.0894841775 * c.a - 1.2914855480 * c.b;

    let l = l_*l_*l_;
    let m = m_*m_*m_;
    let s = s_*s_*s_;

    return {
		r:4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
		g:-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
		b:-0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
    };
}