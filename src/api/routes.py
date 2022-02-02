"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, render_template
from dotenv import load_dotenv
load_dotenv()
import sendgrid
from sendgrid.helpers.mail import *
import os
import datetime as dt
import time
from api.models import db, User, Dates
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from argon2 import PasswordHasher
from sqlalchemy import table
import smtplib
from email.message import EmailMessage

ph = PasswordHasher()

api = Blueprint('api', __name__, template_folder='templates')

@api.route('/alert', methods=['GET', 'POST'])
def birthday_alert():
    for date in Dates.query.all():
        now = dt.datetime.now()
        month = int(now.strftime("%m"))
        day = int(now.strftime("%d"))
        print(int(date.date.strftime("%d")))
        if month == int(date.date.strftime("%m")) and day == int(date.date.strftime("%d"): 
            sg = sendgrid.SendGridAPIClient(api_key=os.getenv('SENDGRID_API_KEY'))
            from_email = Email("bookreaderfajr@gmail.com")
            to_email = To("bookreaderfajr@gmail.com")
            subject = "Birthday Alert!"
            content = Content("text/plain", "and easy to do anywhere, even with Python")
            mail = Mail(from_email, to_email, subject, content)
            response = sg.client.mail.send.post(request_body=mail.get())
            print(response.status_code)
            print(response.body)
            print(response.headers)
    return ('success')
# @api.route('/hello', methods=['POST', 'GET'])
# @jwt_required()
# def handle_hello():
#     current_user_id = get_jwt_identity()

#     user = User.query.filter(User.id == current_user_id).first()

#     response_body = {
#         "message": f"Hello I Am {user.email}"        
#     }
#     return jsonify(response_body), 200

@api.route("/dates", methods=["GET", "POST"])
def more_dates():
    data = Dates.query.all()
    
    serialized_data = [item.serialize() for item in data]
    return jsonify(serialized_data), 200

@api.route("/send", methods=["POST"])
def send_gift():
    sg = sendgrid.SendGridAPIClient(api_key=os.getenv('SENDGRID_API_KEY'))
    from_email = Email("bookreaderfajr@gmail.com")
    to_email = To("bookreaderfajr@gmail.com")
    payload = request.get_json()
    radio = payload['radio']
    subject = "Happy Birthday!"
    content = Content("text/plain", "and easy to do anywhere, even with Python")
    mail = Mail(from_email, to_email, subject, content, radio)
    response = sg.client.mail.send.post(request_body=mail.get())
    print(response.status_code)
    print(response.body)
    print(response.headers)
    return ('success')
  
@api.route('/register', methods=["POST"])
def register_user():
    data = request.get_json()

    # Check if User exists
    if User.query.filter(User.email == data['email']).count() > 0:
        return 'user-exists', 400

    # Create the User
    user = User(
        name=data['name'], 
        email=data['email'], 
        phone=data['phone'],      
        password=ph.hash(data['password']), 
        is_active=True
    )
    db.session.add(user)
    db.session.commit()

    return '', 204

@api.route('/dash', methods=["POST"])
def add_dates():
    payload = request.get_json()

    name = payload['name']
    date = payload['date']

    if name and date:
        new_user = Dates(
            name=name,
            date=date
        )
        db.session.add(new_user)  # Adds new User record to database
        db.session.commit()  # Commits all changes
    return ("successfully created!")

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    user = User.query.filter(User.email == data['email']).first()
    if user is None:
        return '', 404
    
    try:
        ph.verify(user.password, data['password'])
    except: 
        return 'wrong-password', 400

    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

