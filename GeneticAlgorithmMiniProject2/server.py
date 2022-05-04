from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from GA import *

app = Flask(__name__)
CORS(app)

@app.route('/')

def hello_world():
	return 'Hello World'

@app.route('/submit', methods=['GET', 'POST'])
def submit():
      print(request.json)

      population_Size = request.json['Population_Size']
      mutation_Rate = request.json['Mutation_Rate']
      crossover_rate = request.json['Crossover_rate']
      crossover_Points = request.json['Crossover_Points']
      generations = request.json['Generations']
      run_GA = request.json['Run_GA']
      runner = GARunner()
      print(population_Size, mutation_Rate, crossover_Points,  crossover_rate, generations, run_GA)
      test = runner.main(population_Size, mutation_Rate, crossover_Points,  crossover_rate, generations, run_GA)
      print(test)
      return jsonify(test)

# main driver function
if __name__ == '__main__':
	app.run()
