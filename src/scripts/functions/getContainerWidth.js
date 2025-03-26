import { container, sliderContainer } from '../vars/vars';

export default function getContainerWidth() {
  const offsetWidth = container.offsetWidth;

  const styles = window.getComputedStyle(container);
  const paddingLeft = parseInt(styles.paddingLeft, 10);
  const paddingRight = parseInt(styles.paddingRight, 10);

  const widthWithoutPadding =
    offsetWidth - paddingLeft - paddingRight;

  sliderContainer.style.setProperty(
    '--container-width',
    `${widthWithoutPadding}px`,
  );
}
