import { connect } from 'react-redux';
import Counter from './component';
import { incrementAsync, decrementAsync } from '../../redux/counter/action-creators';

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  increment: (count = 1) => dispatch(incrementAsync(count)),
  decrement: (count = 1) => dispatch(decrementAsync(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
