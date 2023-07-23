from flask import Flask
from flask_cors import CORS
from routes import main

app = Flask(__name__)
app.register_blueprint(main)
CORS(app, resources={r"/get-scores/*": {"origins": "https://near.org"}})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000)
