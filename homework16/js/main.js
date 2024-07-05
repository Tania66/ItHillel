function Student(name, surName, dateoOfBirth, rating, attendance) {
  this.name = name;
  this.surName = surName;
  this.dateoOfBirth = dateoOfBirth;
  this.rating = rating;
  this.attendance = attendance;

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return console.log(`Age ${this.name}: `, currentYear - this.dateoOfBirth);
  };

  this.averageRating = function () {
    let averageRating = 0;
    for (let i = 0; i < this.rating.length; i++) {
      averageRating += this.rating[i] / this.rating.length;
      averageRating = Math.round(averageRating);
    }
    return console.log(`${this.name} Average Rating: `, averageRating);
  };

  this.present = function () {
    if (this.attendance.length >= 25) {
      return;
    }
    this.attendance.push(Boolean(true));
  };

  this.absent = function () {
    if (this.attendance.length >= 25) {
      return;
    }
    this.attendance.push(Boolean(false));
  };

  this.summary = function () {
    let attendanceRating = 0;
    let averageRating = 0;
    for (let i = 0; i < this.rating.length; i++) {
      averageRating += this.rating[i] / this.rating.length;
    }
    averageRating = Math.round(averageRating);
    for (let i = 0; i < this.attendance.length; i++) {
      attendanceRating += Number(this.attendance[i]) / this.attendance.length;
    }
    attendanceRating = Number(attendanceRating.toFixed(1));
    if (averageRating >= 90 && attendanceRating >= 0.9) {
      return console.log(`${this.name} - Молодець!`);
    } else if (averageRating < 90 && attendanceRating < 0.9) {
      return console.log(`${this.name} - Редиска!`);
    } else {
      return console.log(`${this.name} - Добре, але можна краще `);
    }
  };
}

let firstStudent = new Student(
  "Bublik",
  "Red",
  2005,
  [100, 100, 100, 100, 100],
  Array()
);
let secondStudent = new Student(
  "Ponchik",
  "Glazyr",
  2000,
  [95, 95, 95, 95, 93, 94, 95],
  Array()
);

let thirdStudent = new Student(
  "Candy",
  "Salt",
  2000,
  [50, 50, 50, 50, 50, 64, 61],
  Array()
);

firstStudent.getAge();
firstStudent.averageRating();
firstStudent.present();
firstStudent.present();
firstStudent.present();
firstStudent.present();
firstStudent.present();
firstStudent.present();
firstStudent.absent();
firstStudent.summary();

secondStudent.getAge();
secondStudent.averageRating();
secondStudent.present();
secondStudent.present();
secondStudent.present();
secondStudent.present();
secondStudent.present();
secondStudent.absent();
secondStudent.absent();
secondStudent.summary();

thirdStudent.getAge();
thirdStudent.averageRating();
thirdStudent.present();
thirdStudent.absent();
thirdStudent.absent();
thirdStudent.absent();
thirdStudent.absent();
thirdStudent.absent();
thirdStudent.absent();
thirdStudent.summary();
