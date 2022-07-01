import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductComponent extends Component {
  @service router;
  @tracked color = this.args.product.colors[0].color;
  @tracked zoom = false;
  get productImage() {
    const { image } = this.args.product.colors.find(
      ({ color }) => color == this.color
    );
    return image;
  }
  @action
  updateColor(color) {
    this.color = color;
  }

  @action
  toggleZoom() {
    this.zoom = !this.zoom;
  }
}
