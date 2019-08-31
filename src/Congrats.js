import React from 'react';

export default ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats">
      <span data-test="congrats-message">
        Congratulations, you guessed the word!
      </span>
    </div>
    )
  } else {
    return (
      <div data-test="component-congrats">
      </div>
    )
  }
}