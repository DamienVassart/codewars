/*
Write function bmi that calculates body mass index (bmi = weight / height ** 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

char *bmi(int weight, double height) {

    float p = weight / (pow(height, 2));
    
    if (p <= 18.5) {
      return "Underweight";
    }
    else if (p <= 25.0) {
      return "Normal";
    }
    else if (p <= 30.0) {
      return "Overweight";
    }
    else {
      return "Obese";
    }

}