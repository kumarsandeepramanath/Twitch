import React from 'react';
import Modal from '../Modal';
const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Streams"
        content="Are you sure you want to delete on the Stream"
        actions={actions}
      ></Modal>
    </div>
  );
};

export default StreamDelete;
