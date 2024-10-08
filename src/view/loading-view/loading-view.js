import { createLoadingTemplate } from './template.js';
import AbstractView from '../../framework/view/abstract-view.js';


export default class LoadingView extends AbstractView {
  get template() {
    return createLoadingTemplate();
  }
}
