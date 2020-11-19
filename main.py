from flask import Flask, redirect, url_for, request, render_template, flash, jsonify


app = Flask(__name__, template_folder='./templates', static_folder='./static')

if __name__ == "__main__":
    app.run()


@app.before_request
def before_request():
    if not request.is_secure and app.env != "development":
        url = request.url.replace("http://", "https://", 1)
        code = 301
        return redirect(url, code=code)


@app.route('/')
def index():
    return render_template('frontPage.html')


@app.route('/admin')
def admin():
    return render_template('base.html')
