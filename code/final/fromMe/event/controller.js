const bodyBG = document.body
const defalutBgColor = bodyBG.style.backgroundColor
const defaultFontColor = bodyBG.style.color

const settingBox = document.getElementById('settingsContainer')

function changeBGColor(bgColor) {
    bodyBG.style.backgroundColor = bgColor
}
function changeFontColor(fontColor) {
    bodyBG.style.color = fontColor
}
function allToDefault() {
    changeBGColor(defalutBgColor)
    changeFontColor(defaultFontColor)
}

function showSetting() {
    settingBox.style.display = 'block'
}
function hideSetting() {
    settingBox.style.display = 'none'
}

export {changeBGColor, changeFontColor, allToDefault, showSetting, hideSetting}