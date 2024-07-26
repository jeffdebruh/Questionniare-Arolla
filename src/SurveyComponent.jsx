import React from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import './index.css';
import { json } from "./json";

const SurveyComponent = () => {

    const surveyJson =json;

    return (
        <div id="surveyElement" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, minHeight: '100%', height: '100%' }}>
            <Survey.Survey json={surveyJson} />
        </div>
    );
}

export default SurveyComponent;
