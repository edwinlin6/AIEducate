from credentials import *
import mindsdb_sdk

#PYTHON SDK DOCUMENTATION
# https://docs.mindsdb.com/sdk/python-sdk?_gl=1*wzbr6f*_ga*MTIwNjc4MTU1OS4xNjk4MTkxNDQ0*_ga_

server = mindsdb_sdk.connect(login=email, password=password)
