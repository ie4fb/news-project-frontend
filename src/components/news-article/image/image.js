import React from 'react';
import PropTypes from 'prop-types';

import './image.css';

const imgStyles = {
  medium: {
    height: '16vw',
  },
  small: {
    height: '10vw',
  },
};

const figStyles = {
  small: {
    margin: 10,
    fontSize: 20,
  },
  medium: {
    fontSize: 30,
  },
  big: {
    fontSize: 40,
  },
};

const withHover = ComposedComponent => class extends React.Component {

  state = {
    isHovered: false,
  }

  handleEnter = () => this.setState({ isHovered: true })
  handleLeave = () => this.setState({ isHovered: false })

  render() {
    return (
      <ComposedComponent
        {...this.props}
        isHovered={this.state.isHovered}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      />
    );
  }
};

const Image = ({
  src, caption, display, onMouseEnter, onMouseLeave, isHovered, rightsHolder,
}) => (
  <figure
    className={!isHovered ? 'Image-wrap' : 'Image-wrap hovered'}
    style={figStyles[display]}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {isHovered && caption && <span className="Image-caption">{caption}</span>}
    <img className="Image" src={src} alt={caption} style={imgStyles[display]} />
    {rightsHolder && <span className="Image-rights">{`Image by: ${rightsHolder}`}</span>}
  </figure>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
  display: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isHovered: PropTypes.bool,
  rightsHolder: PropTypes.string,
};

Image.defaultProps = {
  caption: null,
  isHovered: false,
  rightsHolder: null,
};

export default withHover(Image);