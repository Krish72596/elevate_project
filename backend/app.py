from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    print(f"Received question: {user_message}")  # Log to terminal
    # Reply with the same question text
    return jsonify({'response': user_message})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
