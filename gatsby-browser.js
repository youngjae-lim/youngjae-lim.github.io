import '@fontsource/montserrat'
import '@fontsource/merriweather'
import '@fontsource/fira-mono'
import '@fontsource/overpass'
import '@fontsource/gowun-dodum'
import './src/css/normalize.css'
import './src/css/main.css'
import 'katex/dist/katex.min.css'
import { wrapMDX } from './root-mdx'

// Add more languages to prism-react-renderer/prism
// https://github.com/FormidableLabs/prism-react-renderer/issues/53#issuecomment-546653848
import Prism from 'prism-react-renderer/prism'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-rust')
require('prismjs/components/prism-php')
require('prismjs/components/prism-docker')
require('prismjs/components/prism-lua')
require('prismjs/components/prism-django')
require('prismjs/components/prism-jq')
require('prismjs/components/prism-latex')
require('prismjs/components/prism-nginx')
require('prismjs/components/prism-mongodb')
require('prismjs/components/prism-makefile')
require('prismjs/components/prism-toml')

export const wrapRootElement = wrapMDX
