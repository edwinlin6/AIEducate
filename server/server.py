from flask import Flask, redirect, request
from mindsdb_api import *

app = Flask(__name__)

def funca(s):
    for i in s:
        print(f'{i} Hello')
@app.route("/" , methods=["POST","GET"])
def here():
    if request.method == 'POST':
        age = request.form['age']
        grade = request.form['grade']
        return f'<h1>{get_response(age,grade)}</h1>'
    else:
        return "Hello"
if __name__ == '__main__':
    app.run(debug = True)