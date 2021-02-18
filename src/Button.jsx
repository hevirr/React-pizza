import React from 'react';
import classNames from 'classnames';

function Button(props) {
  return (
    <button
      className={classNames('button', {
        'button--outline': props.outline
      })}
    >
      {props.text}
    </button>
  )
}

export default Button;