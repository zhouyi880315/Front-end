import Component, { PROP_SYMBOL, ATTR_SYMBOL, EVENT_SYMBOL, STATUS_SYMBOL } from '../component';
import createComponent from '../createComponent';

export default class TabItem extends Component {
  constructor(attrs) {
    super(attrs);
  }

  render() {
    const children = this.children;
    const tabItem = <div class="o-tab-item">
      {children}
    </div>;

    return tabItem;
  }

  get title() {
    return this[ATTR_SYMBOL]['tab-title'];
  }

};