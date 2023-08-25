import './style.css'

import './elements/copy-code.ts'
import './elements/git-commands.ts'
import './elements/draggable-box.ts'
import jsonPakage from '../package.json'

const version = jsonPakage.version

const appFooter = document.querySelector<HTMLDivElement>('#app-footer')! 
const appFooterText =` <p>©2023 - <a href="mailto:michael.amimba@accenture.com">AMIMBA MICHAEL</a> - Accenture  - Git commands version ${version}</p>`
appFooter.appendChild(document.createRange().createContextualFragment(appFooterText))




