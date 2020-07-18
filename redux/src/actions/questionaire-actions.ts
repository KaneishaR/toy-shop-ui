import React from "react";
import { Dispatch } from "redux";
import { NewFToyList } from "../models/NewFToyList";

export const questionaireActionTypes = {
    SAVE_FEMALE_QUESTIONAIRE: 'SAVE_FEMALE_QUESTIONAIRE',
    SAVE_MALE_QUESTIONAIRE: 'SAVE_MALE_QUESTIONAIRE',
    BAD_REQUEST: 'QUESTION_BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'QUESTION_INTERNAL_SERVER_ERROR '
}

export const saveFQuestionaireAction = (toyList: NewFToyList) => async (dispatch: Dispatch) => {

    try{
        //let _toyList = await saveList(_toyList);


    }
    catch(e){}
}