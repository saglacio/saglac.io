import React, { Component } from 'react';
import './ColorsStory.scss';

export default {
  title: 'Colors',
};

/**
 * @param {string} color RGB value returned by the browser.
 */
function rgb2hex(color) {
  const rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return `0${parseInt(x, 10).toString(16)}`.slice(-2);
  }
  return `#${hex(rgb[1])}${hex(rgb[2])}${hex(rgb[3])}`;
}

class Color extends Component {
  state = {
    hex: '',
  };

  componentDidMount() {
    const styles = window.getComputedStyle(this.ref);
    const bgColor = styles.getPropertyValue('background-color');
    this.setState({ hex: rgb2hex(bgColor) });
  }

  render() {
    const { color } = this.props;
    const { hex } = this.state;
    return (
      <div
        ref={(ref) => {
          this.ref = ref;
        }}
        className={`text-monospace color-block bg-${color}`}
      >
        <small>
          <strong>{color}</strong>
        </small>
        <div>{hex}</div>
      </div>
    );
  }
}

const COLOR_RANGE = Array.from(Array(9), (_, i) => i + 1);

const ColorStory = ({ color }) =>
  COLOR_RANGE.map((i) => (
    <Color key={`${color}-${i}`} color={`${color}-${i}00`} />
  ));

export const Grays = () => (
  <>
    <ColorStory color="gray" />
    <div>
      <Color color="light" />
      <Color color="dark" />
    </div>
  </>
);
