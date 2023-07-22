from flask import Flask
from routes import main

app = Flask(__name__)
app.register_blueprint(main)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5555)
