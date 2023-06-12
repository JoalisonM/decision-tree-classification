from flask_restful import Api
from flask import Flask, Blueprint

from helpers.cors import cors
from resources.treeDecision import TreeDecisionResource

# create the app
app = Flask(__name__)

# restful
api_bp = Blueprint('api', __name__)
api = Api(api_bp, prefix="/api")

# initialize the app with the extension
cors.init_app(app)

api.add_resource(TreeDecisionResource, '/tree-decision')
# api.add_resource(PeopleResource, '/pessoas/<int:person_id>')

# Blueprints para Restful
app.register_blueprint(api_bp)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
