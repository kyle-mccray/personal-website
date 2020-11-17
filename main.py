from flask import Flask, redirect, url_for, request, render_template, flash, jsonify

app = Flask(__name__, template_folder='templates')

if __name__ == "__main__":
    app.run()


@app.route('/')
def index():
    return render_template('frontPage.html')


@app.route('/admin')
def admin():
    return render_template('base.html')
