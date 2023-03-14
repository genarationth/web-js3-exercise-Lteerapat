const grade = (score) => {
    if (score >= 5 && score <8) {
        return 'passed';
    } else if (score > 8) {
        return 'Excellent';
    } else if (score === 11) {
        return 'Perfect';
    } else {
        return 'failed';
    }
}

console.log(grade(11))