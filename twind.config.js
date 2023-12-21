import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'

export default defineConfig({
    presets: [presetAutoprefix, presetTailwind],
    theme: {
        extend: {
            colors: {
                brown: {
                    100: '#f7f2e7',
                    200: '#eed8b6',
                    300: '#e5be85',
                    400: '#dba454',
                    500: '#d18a23',
                    600: '#a76c1b',
                    700: '#7d4e13',
                    800: '#53300b',
                    900: '#291203',
                }
            }
        }
    }

})