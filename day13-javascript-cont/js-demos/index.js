const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
};

const triangleArea = (w, h) => {
    return w * h / 2;
};

const square = (num) => {
    return num * num;
};

const hypotenuse = (a, b) => {
    return Math.sqrt(square(a) + square(b));
};

const salary = (pay, hours, days) => {
    return pay * hours * days;
};

const taxedSalary = (salary, tax) => {
    return salary * (1 - tax);
};

const salaryInDollars = (sal) => {
    return sal / 23.4978;
}