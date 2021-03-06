import React from 'react';
import PropTypes from 'prop-types';

import getTimestamp from '../../../utils/getTime';

class MessageRegular extends React.PureComponent {
  static propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
  };

  render() {
    const { message, author, timestamp } = this.props;

    return (
      <div className='message messageWrap'>
        <span className='authorWrap'>
          <svg width='100%' height='100%' data-jdenticon-value={author} />
        </span>
        <div className='messageContainer'>
          <div className='messageTopSection'>
            <span className='authorName'>{author}</span>
            <span className='messageTimestamp'>{getTimestamp(timestamp)}</span>
          </div>
          <div className='messageBottomSection'>
            <span className='textWrap'>{message}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageRegular;
