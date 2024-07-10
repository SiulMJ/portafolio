from flask import Flask, render_template
 
app = Flask(__name__, template_folder="templates")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/trabajos')
def trabajos():
    return render_template('trabajos.html')

@app.route('/contactos')
def contactos():
    return render_template('contactos.html')

app.run(host='localhost', port=4000, debug=True)