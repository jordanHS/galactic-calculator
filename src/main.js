import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator } from './calculator.js';




$(document).ready(function() {
    $("#calculator").submit(function() {
        event.preventDefault();
        
        let currentYear = $("#currentYear").val();
        let birthYear = $("#birthYear").val();
        let ageCalculator = new AgeCalculator(currentYear, birthYear);
        ageCalculator.userAge(currentYear, birthYear); 
    });
});