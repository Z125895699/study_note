from flask import Flask, render_template,url_for

app = Flask(__name__)

@app.route('/')
def index():
  img_url = url_for('static', filename='images/image.jpg')
  return render_template('index.html', img_url=img_url)



if __name__ == '__main__':
    app.run(debug=True)
