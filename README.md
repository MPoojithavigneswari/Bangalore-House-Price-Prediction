# Bangalore House Price Prediction

## Introduction
This repository contains a machine learning project for predicting house prices in Bangalore. It includes data preprocessing, exploratory data analysis, feature engineering, model training, and web application for user interface. The project leverages various regression techniques to provide accurate price predictions based on multiple features such as location, total square feet, number of BHK, and more. The website allows users to input property details and receive an estimated market price.


## Dataset:
Dataset
The dataset consists of 13,320 data points and includes various features. Click [here](https://www.kaggle.com/datasets/amitabhajoy/bengaluru-house-price-data) for dataset.


## Installation
Install the required dependencies using [pip](https://pip.pypa.io/en/stable/).
```bash
pip install -r requirements.txt
```


## Usage
Run the Flask server:
```bash
python app.py
```
Open link generated by the  serveron your web browser and enter the property details to get the predicted house price.


## Results
The model is deployed using Flask, and a web interface is created using HTML, CSS, and JavaScript to input house details and display the predicted price. The model was able to predict house prices with an accuracy of 94.65%, demonstrating effective feature engineering and model selection.


## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
