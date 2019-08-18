import {navigateSettings} from "../actions/actions";
import {connect} from "react-redux";
import MAppBar, {MAppBarDispatch} from "../components/MAppBar";

const dispatch = (dispatch: Function): MAppBarDispatch => ({
    connect: () => dispatch(navigateSettings())
});

const MAppBarCont = connect(
    null,
    dispatch
)(MAppBar);

export default MAppBarCont;
