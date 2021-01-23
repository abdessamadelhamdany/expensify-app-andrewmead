import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return <div>This is edit expense page {props.match.params.id}</div>;
};

export default EditExpensePage;
