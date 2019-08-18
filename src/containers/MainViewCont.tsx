import {RootState} from "../reducers/root";
import MainView, {MainViewState} from "../components/MainView";
import {connect} from "react-redux";

const state = (state: RootState): MainViewState => ({
    page: state.navigation.page
});

const MainViewCont = connect(
    state,
    null,
)(MainView);

export default MainViewCont;
