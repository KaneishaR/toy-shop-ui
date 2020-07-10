import {IState} from '../../reducers';
import {connect} from 'react-redux';
import QuestionaireComponent from './QuestionaireComponent';
import { saveFQuestionaireAction } from '../../actions/questionaire-actions'


const mapStateToProps = (state: IState) =>{
	return {
		authUser: state.login.authUser,
		errorMessage: state.register.errorMessage
	}
}

const mapDispatchToProps = {
	saveFQuestionaireAction
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionaireComponent);