from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    # For now, echo the user's message as the bot reply
    bot_response = f"You said: {user_message}"
    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
