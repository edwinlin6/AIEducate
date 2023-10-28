from credentials import *
import mindsdb_sdk
from IPython.display import display
import pandas as pd
#PYTHON SDK DOCUMENTATION
# https://docs.mindsdb.com/sdk/python-sdk?_gl=1*wzbr6f*_ga*MTIwNjc4MTU1OS4xNjk4MTkxNDQ0*_ga_

server = mindsdb_sdk.connect(login=email, password=password)
project = server.get_project('test')
my_model = project.get_model('gpt_model_1')


def get_response(age, gradeLevel):
    response = my_model.predict({"text": f"I am currently {age} years old and in the {gradeLevel}th grade. Can you explain to me how to solve x^2 = 4 based on my age and gradeLevel?"})
    pd.set_option('display.max_colwidth', None)
    return response['response'][0]
