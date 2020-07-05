import { connect } from 'react-redux';

import { increment, decrement } from '../../redux/count/actions';

import Counter from './presentation';

const mapStateProps = ({ count }) => ({ count });

const mapDispatchToProps = (dispatch) => ({
  increment: (count) => {
    dispatch(increment(count));
  },
  decrement: (count) => {
    dispatch(decrement(count));
  },
});

export default connect(mapStateProps, mapDispatchToProps)(Counter);
