export enum AlertType {
  SUCCESS,
  DANGER,
  WARNING,
  INFO,
  PRIMARY,
  SECONDARY,
  LIGHT,
  DARK,
  BG_SUCCESS,
  BG_DANGER,
  BG_WARNING,
  BG_INFO,
  BG_PRIMARY,
  BG_SECONDARY,
  BG_LIGHT,
  BG_DARK,
  OUTLINE_SUCCESS,
  OUTLINE_DANGER,
  OUTLINE_WARNING,
  OUTLINE_INFO,
  OUTLINE_PRIMARY,
  OUTLINE_SECONDARY,
  OUTLINE_LIGHT,
  OUTLINE_DARK,
  
}

export  const ALERT_CLASS_MAP: { [key in AlertType]: string } = {
  [AlertType.SUCCESS]: 'alert-success',
  [AlertType.DANGER]: 'alert-danger',
  [AlertType.WARNING]: 'alert-warning',
  [AlertType.INFO]: 'alert-info',
  [AlertType.PRIMARY]: 'alert-primary',
  [AlertType.SECONDARY]: 'alert-secondary',
  [AlertType.LIGHT]: 'alert-light',
  [AlertType.DARK]: 'alert-dark',
  [AlertType.BG_SUCCESS]: 'alert-bg-success',
  [AlertType.BG_DANGER]: 'alert-bg-danger',
  [AlertType.BG_WARNING]: 'alert-bg-warning',
  [AlertType.BG_INFO]: 'alert-bg-info',
  [AlertType.BG_PRIMARY]: 'alert-bg-primary',
  [AlertType.BG_SECONDARY]: 'alert-bg-secondary',
  [AlertType.BG_LIGHT]: 'alert-bg-light',
  [AlertType.BG_DARK]: 'alert-bg-dark',
  [AlertType.OUTLINE_SUCCESS]: 'alert-outline-success',
  [AlertType.OUTLINE_DANGER]: 'alert-outline-danger',
  [AlertType.OUTLINE_WARNING]: 'alert-outline-warning',
  [AlertType.OUTLINE_INFO]: 'alert-outline-info',
  [AlertType.OUTLINE_PRIMARY]: 'alert-outline-primary',
  [AlertType.OUTLINE_SECONDARY]: 'alert-outline-secondary',
  [AlertType.OUTLINE_LIGHT]: 'alert-outline-light',
  [AlertType.OUTLINE_DARK]: 'alert-outline-dark',
};