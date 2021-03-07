import pickle
from flask import Flask, jsonify, request, abort
import pandas as pd
import json
import traceback


app = Flask(__name__)


def loadModel(filename):
    model = pickle.load(open(filename, 'rb'))
    return model


def formatData(xx):
    print(isinstance(xx, dict))
    x = pd.DataFrame(xx, columns=['gender', 'GradeID', 'raisedhands', 'VisITedResources', 'AnnouncementsView',
                                  'Discussion', 'ParentAnsweringSurvey', 'StudentAbsenceDays'])

    # Encoding data
    gender_map = {'M': 1,
                  'F': 2}

    GradeID_map = {'G-02': 2,
                   'G-08': 8,
                   'G-09': 9,
                   'G-04': 4,
                   'G-05': 5,
                   'G-06': 6,
                   'G-07': 7,
                   'G-12': 12,
                   'G-11': 11,
                   'G-10': 10}

    ParentAnsweringSurvey_map = {'Yes': 1,
                                 'No': 0}

    StudentAbsenceDays_map = {'Under-7': 0,
                              'Above-7': 1}

    x.gender = x.gender.map(gender_map)
    x.StudentAbsenceDays = x.StudentAbsenceDays.map(StudentAbsenceDays_map)
    x.ParentAnsweringSurvey = x.ParentAnsweringSurvey.map(ParentAnsweringSurvey_map)
    x.GradeID = x.GradeID.map(GradeID_map)
    return x


def recommend(xx):
    model = loadModel("performance_model.sav")
    print(xx)
    x = formatData(xx)
    print(x)
    predict = model.predict(x)
    predict = json.dumps(predict.tolist())
    return predict


@app.route('/')
def hello_world():
    return 'Hello World! This is not nice'


@app.route('/predict', methods=['POST'])
def predict():
    try:
        inpsjon= request.get_json()
        output = recommend(inpsjon)
        return output
    except:
        return jsonify({'trace': traceback.format_exc()})


if __name__ == '__main__':
    app.run()
