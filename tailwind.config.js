/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px',
  			'xxl': '1440px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
			brand: "#7367F0",
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			green: {
  				'400': '#a3e635',
  				'500': '#84cc16',
  				'600': '#65a30d'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			jakarta: [
  				'Plus Jakarta Sans"',
  				'sans-serif'
  			],
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
  			anton: [
  				'Anton',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			opensans: [
  				'Open Sans"',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'rotate-to-right': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(45deg)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			floating: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			slideInLeft: {
  				from: {
  					transform: 'translateX(-100%)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			slideInRight: {
  				from: {
  					transform: 'translateX(100%)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			fadeInUp: {
  				from: {
  					transform: 'translateY(50px)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			floating: 'floating 6s ease-in-out infinite',
  			'slide-in-left': 'slideInLeft 1s ease-out',
  			'slide-in-right': 'slideInRight 1s ease-out',
  			'fade-in-up': 'fadeInUp 1s ease-out',
  			'spin-slow': 'spin 20s linear infinite',
  			'rotate-to-right': 'rotate-to-right 0.3s ease-out forwards'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
