// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { ThemeDefinitionProps } from "./global.types";

export const lightColors = {
  white: "#fff",
  sectionOneBG: "#fff",
  defaultFontColor: "#000",
  bulletColor: "#2781B0",
  borderColor: "#E2E2E2",
  boxBackground: "#FBFAFA",
  mainGrey: "#5B5C5C",
  disabledGrey: "#E6EBEB",
  hoverGrey: "#E6EAEB",
  pressedGrey: "#D5D7D8",
  actionDisabledGrey: "#E7EAEB",
  mainBlue: "#07193E",
  hoverBlue: "#0D2453",
  pressedBlue: "#05132F",
  mainRed: "#C51B3F",
  hoverRed: "#FCF2F4",
  lightRed: "#C83B51",
  divisorColor: "#E3E3E3",
  disabledBGGrey: "#D5D7D7",
  disabledInnerGrey: "#B4B4B4",
  logoLabel: "#000000",
  logoLabelInverse: "#fff",
  promoBlue: "#A6DFEF",
  footerDivider: "#F2F2F2",
  promoBG: "#000110",
  loaderColor: "#113053",
  headerBG: "#FFFFFF",
  headerBorder: "#E5E5E5",
  headerColor: "#000000",
  tooltipBG: "#737373",
  tooltipColor: "#FFFFFF",
  labelColor: "#07193E",
  checkBox: "#4CCB92",
  checkBoxBorder: "#c3c3c3",
  iconButtonBG: "#F8F8F8",
  iconButtonActive: "#5B5C5C80",
  iconButtonHover: "#EFEFEF",
  iconButtonDisabled: "#E6EBEB",
  iconButtonColor: "#7C7C7C",
  backLinkColor: "#073052",
  backLinkArrow: "#081C42",
  backLinkHover: "#eaedee",
  commonLinkColor: "#969FA8",
  breadcrumbsBackground: "#FCFCFD",
  breadcrumbsBackBorder: "#EAEDEE",
  breadcrumbsText: "#969FA8",
  actionsListBorder: "#F1F1F1",
  disabledActionsColor: "#EBEBEB",
  optionTextColor: "#5E5E5E",
  modalCloseColor: "#757575",
  modalCloseHoverBG: "#EAEAEA",
  modalOverlayBG: "#00000050",
  bulletBGColor: "#F1F4F4",
};

export const darkColors = {
  dark: "#181F2A",
  sectionOneBG: "#283140",
  defaultFontColor: "#8E98A9",
  bulletColor: "#4B586A",
  borderColor: "#8E98A9",
  boxBackground: "#283140",
  mainGrey: "#A2ADC0",
  disabledGrey: "#494A4D",
  hoverGrey: "#4B586A",
  borderPressedGrey: "#707988",
  pressedGrey: "#333D4B",
  mainWhite: "#E6ECEC",
  disabledWhite: "#B5BCBD",
  hoverWhite: "#EFEDED",
  pressedWhite: "#C3CBCB",
  mainRed: "#FF3958",
  hoverRed: "#4B586A",
  divisorColor: "#E3E3E3",
  disabledBGGrey: "#616A7C",
  disabledInnerGrey: "#3A3F4A",
  logoLabel: "#A3B7D9",
  logoLabelInverse: "#fff",
  footerDivider: "#545D6A",
  footerColor: "#85B3EE",
  promoBG: "#000106",
  loaderColor: "#8E98A9",
  headerBG: "#212936",
  headerBorder: "#191E28",
  headerColor: "#E9F5F6",
  tooltipBG: "#8E98A9",
  tooltipColor: "#161C24",
  labelColor: "#A2ADC0",
  checkBox: "#58FAB1",
  checkBoxBorder: "#8E98A9",
  iconButtonBG: "#A2ADC0",
  iconButtonActive: "#707988",
  iconButtonHover: "#4B586A",
  iconButtonDisabled: "#494A4D",
  iconButtonColor: "#283140",
  backLinkColor: "#8E98A9",
  backLinkArrow: "#A2ADC0",
  backLinkHover: "#3A3F4A",
  modalCloseColor: "#4B586A",
  modalCloseHoverBG: "#4B586A",
  modalOverlayBG: "#00010650",
  bulletBGColor: "#D5DEEF",
  disabledSwitchBG: "#494A4C",
  disabledBulletBG: "#4B586B",
};

export const lightTheme: ThemeDefinitionProps = {
  bgColor: lightColors.white,
  fontColor: lightColors.defaultFontColor,
  borderColor: lightColors.borderColor,
  bulletColor: lightColors.bulletColor,
  logoColor: lightColors.mainRed,
  logoLabelColor: lightColors.logoLabel,
  logoLabelInverse: lightColors.logoLabelInverse,
  loaderColor: lightColors.loaderColor,
  boxBackground: lightColors.boxBackground,
  buttons: {
    regular: {
      enabled: {
        border: lightColors.mainGrey,
        text: lightColors.mainGrey,
        background: lightColors.white,
        iconColor: lightColors.mainGrey,
      },
      disabled: {
        border: lightColors.disabledInnerGrey,
        text: lightColors.disabledInnerGrey,
        background: lightColors.disabledBGGrey,
        iconColor: lightColors.disabledInnerGrey,
      },
      hover: {
        border: lightColors.mainGrey,
        text: lightColors.mainGrey,
        background: lightColors.hoverGrey,
        iconColor: lightColors.mainGrey,
      },
      pressed: {
        border: lightColors.mainGrey,
        text: lightColors.mainGrey,
        background: lightColors.pressedGrey,
        iconColor: lightColors.mainGrey,
      },
    },
    callAction: {
      enabled: {
        border: lightColors.mainBlue,
        text: lightColors.white,
        background: lightColors.mainBlue,
        iconColor: lightColors.white,
      },
      disabled: {
        border: lightColors.actionDisabledGrey,
        text: lightColors.mainGrey,
        background: lightColors.actionDisabledGrey,
        iconColor: lightColors.mainGrey,
      },
      hover: {
        border: lightColors.hoverBlue,
        text: lightColors.white,
        background: lightColors.hoverBlue,
        iconColor: lightColors.white,
      },
      pressed: {
        border: lightColors.pressedBlue,
        text: lightColors.white,
        background: lightColors.pressedBlue,
        iconColor: lightColors.white,
      },
    },
    secondary: {
      enabled: {
        border: lightColors.mainRed,
        text: lightColors.mainRed,
        background: lightColors.white,
        iconColor: lightColors.mainRed,
      },
      disabled: {
        border: lightColors.disabledInnerGrey,
        text: lightColors.disabledInnerGrey,
        background: lightColors.disabledBGGrey,
        iconColor: lightColors.disabledInnerGrey,
      },
      hover: {
        border: lightColors.lightRed,
        text: lightColors.mainRed,
        background: lightColors.hoverRed,
        iconColor: lightColors.mainRed,
      },
      pressed: {
        border: lightColors.mainRed,
        text: lightColors.white,
        background: lightColors.mainRed,
        iconColor: lightColors.white,
      },
    },
    text: {
      enabled: {
        border: "transparent",
        text: lightColors.mainGrey,
        background: "transparent",
        iconColor: lightColors.mainGrey,
      },
      disabled: {
        border: "transparent",
        text: lightColors.disabledInnerGrey,
        background: "transparent",
        iconColor: lightColors.disabledInnerGrey,
      },
      hover: {
        border: lightColors.hoverGrey,
        text: lightColors.mainGrey,
        background: lightColors.hoverGrey,
        iconColor: lightColors.mainGrey,
      },
      pressed: {
        border: lightColors.pressedGrey,
        text: lightColors.mainGrey,
        background: lightColors.pressedGrey,
        iconColor: lightColors.mainGrey,
      },
    },
  },
  login: {
    formBG: lightColors.sectionOneBG,
    bgFilter: "none",
    promoBG: lightColors.promoBG,
    promoHeader: lightColors.white,
    promoText: lightColors.promoBlue,
    footerElements: lightColors.bulletColor,
    footerDivider: lightColors.footerDivider,
  },
  pageHeader: {
    background: lightColors.headerBG,
    border: lightColors.headerBorder,
    color: lightColors.headerColor,
  },
  tooltip: {
    background: lightColors.tooltipBG,
    color: lightColors.tooltipColor,
  },
  commonInput: {
    labelColor: lightColors.labelColor,
    checkBoxBorder: lightColors.checkBoxBorder,
    checkBoxColor: lightColors.checkBox,
  },
  iconButton: {
    buttonBG: lightColors.iconButtonBG,
    activeBG: lightColors.iconButtonActive,
    hoverBG: lightColors.iconButtonHover,
    disabledBG: lightColors.iconButtonDisabled,
    color: lightColors.iconButtonColor,
  },
  dataTable: {
    border: lightColors.borderColor,
    disabledBorder: lightColors.disabledGrey,
    disabledBG: lightColors.disabledBGGrey,
    selected: lightColors.mainBlue,
    deletedDisabled: lightColors.mainRed,
    hoverColor: lightColors.hoverGrey,
  },
  backLink: {
    color: lightColors.backLinkColor,
    arrow: lightColors.backLinkArrow,
    hover: lightColors.backLinkHover,
  },
  inputBox: {
    border: lightColors.borderColor,
    hoverBorder: lightColors.promoBG,
    color: lightColors.mainBlue,
    backgroundColor: lightColors.white,
    error: lightColors.mainRed,
  },
  breadcrumbs: {
    border: lightColors.borderColor,
    linksColor: lightColors.commonLinkColor,
    textColor: lightColors.breadcrumbsText,
    backgroundColor: lightColors.breadcrumbsBackground,
    backButton: {
      border: lightColors.breadcrumbsBackBorder,
      backgroundColor: lightColors.white,
    },
  },
  actionsList: {
    containerBorderColor: lightColors.actionsListBorder,
    backgroundColor: lightColors.iconButtonBG,
    disabledOptionsTextColor: lightColors.disabledActionsColor,
    optionsBorder: lightColors.headerBorder,
    optionsHoverTextColor: lightColors.defaultFontColor,
    optionsTextColor: lightColors.optionTextColor,
    titleColor: lightColors.defaultFontColor,
  },
  screenTitle: {
    border: lightColors.borderColor,
    subtitleColor: lightColors.commonLinkColor,
    iconColor: lightColors.mainBlue,
  },
  modalBox: {
    closeColor: lightColors.modalCloseColor,
    closeHoverBG: lightColors.modalCloseHoverBG,
    closeHoverColor: lightColors.defaultFontColor,
    containerColor: lightColors.white,
    overlayColor: lightColors.modalOverlayBG,
    titleColor: lightColors.defaultFontColor,
    iconColor: {
      default: lightColors.mainBlue,
      accept: lightColors.checkBox,
      delete: lightColors.mainRed,
    },
  },
  switchButton: {
    bulletBGColor: lightColors.bulletBGColor,
    bulletBorderColor: lightColors.white,
    disabledBulletBGColor: lightColors.hoverGrey,
    disabledBulletBorderColor: lightColors.bulletBGColor,
    offLabelColor: lightColors.disabledInnerGrey,
    onLabelColor: lightColors.mainBlue,
    onBackgroundColor: lightColors.checkBox,
    switchBackground: lightColors.hoverGrey,
    disabledBackground: lightColors.hoverGrey,
  },
  dropdownSelector: {
    hoverText: lightColors.defaultFontColor,
    backgroundColor: lightColors.white,
    hoverBG: lightColors.hoverGrey,
    selectedBGColor: lightColors.pressedGrey,
    selectedTextColor: lightColors.defaultFontColor,
    optionTextColor: lightColors.defaultFontColor,
  },
};

export const darkTheme: ThemeDefinitionProps = {
  bgColor: darkColors.dark,
  fontColor: darkColors.defaultFontColor,
  borderColor: darkColors.borderColor,
  bulletColor: darkColors.bulletColor,
  logoColor: darkColors.mainRed,
  logoLabelColor: darkColors.logoLabel,
  logoLabelInverse: darkColors.logoLabelInverse,
  loaderColor: darkColors.loaderColor,
  boxBackground: darkColors.boxBackground,
  buttons: {
    regular: {
      enabled: {
        border: darkColors.mainGrey,
        text: darkColors.mainGrey,
        background: darkColors.dark,
        iconColor: darkColors.mainGrey,
      },
      disabled: {
        border: darkColors.disabledInnerGrey,
        text: darkColors.disabledInnerGrey,
        background: darkColors.disabledBGGrey,
        iconColor: darkColors.disabledInnerGrey,
      },
      hover: {
        border: darkColors.mainGrey,
        text: darkColors.mainGrey,
        background: darkColors.hoverGrey,
        iconColor: darkColors.mainGrey,
      },
      pressed: {
        border: darkColors.borderPressedGrey,
        text: darkColors.borderPressedGrey,
        background: darkColors.pressedGrey,
        iconColor: darkColors.borderPressedGrey,
      },
    },
    callAction: {
      enabled: {
        border: darkColors.mainWhite,
        text: darkColors.dark,
        background: darkColors.mainWhite,
        iconColor: darkColors.dark,
      },
      disabled: {
        border: darkColors.disabledWhite,
        text: darkColors.dark,
        background: darkColors.disabledWhite,
        iconColor: darkColors.dark,
      },
      hover: {
        border: darkColors.hoverWhite,
        text: darkColors.dark,
        background: darkColors.hoverWhite,
        iconColor: darkColors.dark,
      },
      pressed: {
        border: darkColors.pressedWhite,
        text: darkColors.dark,
        background: darkColors.pressedWhite,
        iconColor: darkColors.dark,
      },
    },
    secondary: {
      enabled: {
        border: darkColors.mainRed,
        text: darkColors.mainRed,
        background: darkColors.dark,
        iconColor: darkColors.mainRed,
      },
      disabled: {
        border: darkColors.disabledInnerGrey,
        text: darkColors.disabledInnerGrey,
        background: darkColors.disabledBGGrey,
        iconColor: darkColors.disabledInnerGrey,
      },
      hover: {
        border: darkColors.mainRed,
        text: darkColors.mainRed,
        background: darkColors.hoverRed,
        iconColor: darkColors.mainRed,
      },
      pressed: {
        border: darkColors.mainRed,
        text: darkColors.dark,
        background: darkColors.mainRed,
        iconColor: darkColors.dark,
      },
    },
    text: {
      enabled: {
        border: "transparent",
        text: darkColors.mainGrey,
        background: "transparent",
        iconColor: darkColors.mainGrey,
      },
      disabled: {
        border: "transparent",
        text: darkColors.disabledInnerGrey,
        background: "transparent",
        iconColor: darkColors.disabledInnerGrey,
      },
      hover: {
        border: darkColors.hoverGrey,
        text: darkColors.mainGrey,
        background: darkColors.hoverGrey,
        iconColor: darkColors.mainGrey,
      },
      pressed: {
        border: darkColors.pressedGrey,
        text: darkColors.borderPressedGrey,
        background: darkColors.pressedGrey,
        iconColor: darkColors.borderPressedGrey,
      },
    },
  },
  login: {
    formBG: darkColors.sectionOneBG,
    promoBG: darkColors.promoBG,
    bgFilter: "grayscale(50%)",
    promoHeader: darkColors.logoLabel,
    promoText: darkColors.logoLabel,
    footerElements: darkColors.footerColor,
    footerDivider: darkColors.footerDivider,
  },
  pageHeader: {
    background: darkColors.headerBG,
    border: darkColors.headerBorder,
    color: darkColors.headerColor,
  },
  tooltip: {
    background: darkColors.tooltipBG,
    color: darkColors.tooltipColor,
  },
  commonInput: {
    labelColor: darkColors.labelColor,
    checkBoxBorder: darkColors.checkBoxBorder,
    checkBoxColor: darkColors.checkBox,
  },
  iconButton: {
    buttonBG: darkColors.iconButtonBG,
    activeBG: darkColors.iconButtonActive,
    hoverBG: darkColors.iconButtonHover,
    disabledBG: darkColors.iconButtonDisabled,
    color: darkColors.iconButtonColor,
  },
  dataTable: {
    border: darkColors.borderColor,
    disabledBorder: darkColors.disabledGrey,
    disabledBG: darkColors.disabledBGGrey,
    selected: darkColors.mainWhite,
    deletedDisabled: darkColors.mainRed,
    hoverColor: darkColors.hoverGrey,
  },
  backLink: {
    color: darkColors.backLinkColor,
    arrow: darkColors.backLinkArrow,
    hover: darkColors.backLinkHover,
  },
  inputBox: {
    border: darkColors.borderColor,
    hoverBorder: darkColors.mainWhite,
    color: darkColors.mainGrey,
    backgroundColor: darkColors.dark,
    error: darkColors.mainRed,
  },
  breadcrumbs: {
    border: darkColors.borderColor,
    linksColor: darkColors.mainGrey,
    textColor: darkColors.mainGrey,
    backgroundColor: darkColors.sectionOneBG,
    backButton: {
      border: darkColors.borderColor,
      backgroundColor: darkColors.sectionOneBG,
    },
  },
  actionsList: {
    containerBorderColor: darkColors.bulletColor,
    backgroundColor: darkColors.sectionOneBG,
    disabledOptionsTextColor: darkColors.disabledGrey,
    optionsBorder: darkColors.bulletColor,
    optionsHoverTextColor: darkColors.hoverWhite,
    optionsTextColor: darkColors.defaultFontColor,
    titleColor: darkColors.defaultFontColor,
  },
  screenTitle: {
    border: darkColors.borderColor,
    subtitleColor: darkColors.hoverGrey,
    iconColor: darkColors.mainGrey,
  },
  modalBox: {
    closeColor: darkColors.modalCloseColor,
    closeHoverBG: darkColors.modalCloseHoverBG,
    closeHoverColor: darkColors.defaultFontColor,
    containerColor: darkColors.boxBackground,
    overlayColor: darkColors.modalOverlayBG,
    titleColor: darkColors.defaultFontColor,
    iconColor: {
      default: darkColors.mainGrey,
      accept: darkColors.checkBox,
      delete: darkColors.mainRed,
    },
  },
  switchButton: {
    bulletBGColor: darkColors.bulletBGColor,
    bulletBorderColor: darkColors.mainWhite,
    disabledBulletBGColor: darkColors.disabledBulletBG,
    disabledBulletBorderColor: darkColors.backLinkArrow,
    offLabelColor: darkColors.hoverGrey,
    onLabelColor: darkColors.hoverWhite,
    onBackgroundColor: darkColors.checkBox,
    switchBackground: darkColors.backLinkArrow,
    disabledBackground: darkColors.disabledSwitchBG,
  },
  dropdownSelector: {
    hoverText: darkColors.dark,
    backgroundColor: darkColors.sectionOneBG,
    hoverBG: darkColors.mainGrey,
    selectedBGColor: darkColors.bulletColor,
    selectedTextColor: darkColors.mainWhite,
    optionTextColor: darkColors.defaultFontColor,
  },
};
