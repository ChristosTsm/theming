module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
		},
		screens: {
			mobile: "360px",
			tablet: "640px",
			// => @media (min-width: 640px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }
			laptop_l: "1280px",
			// => @media (min-width: 1280px) { ... }
			desktop: "1680px",
			// => @media (min-width: 1680px) { ... }
		},
		letterSpacing: {
			wide: "2px",
		},
		spacing: {
			1: "1px",
			2: "2px",
			3: "3px",
			4: "4px",
			5: "5px",
			6: "6px",
			8: "8px",
			10: "10px",
			14: "14px",
			15: "15px",
			16: "16px",
			20: "20px",
			25: "25px",
			26: "26px",
			30: "30px",
			34: "34px",
			35: "35px",
			40: "40px",
			45: "45px",
			48: "48px",
			50: "50px",
			55: "55px",
			60: "60px",
			70: "70px",
			100: "100px",
			120: "120px",
			130: "130px",
			140: "140px",
			180: "180px",
			200: "200px",
			235: "235px",
			240: "240px",
			245: "245px",
			260: "260px",
			275: "275px",
			280: "280px",
			290: "290px",
			390: "390px",
			320: "320px",
			450: "450px",
			650: "650px",
			740: "740px",
			750: "750px",
			auto: "auto",
		},
		extend: {
			textColor: {
				"primary-blue": "#002868",
				"secondary-red": "#ab0427",
				"dark-gray": "#333",
			},
			backgroundColor: {
				"primary-blue": "#002868",
				"secondary-red": "#ab0427",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
