// ! ДЗ 25. Створюємо сутності

// ! 1. Створити клас Людина.

//     Властивості:
// імʼя;
// вік.
//     Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

function InfoHuman(name, age) {
    this.name = name;
    this.age = age;
};
InfoHuman.prototype.getInfo = function () {
    return console.log(`My frend is ${this.name}. His ${this.age} years.`);
};
const human = [
    {
        name: "Zhenya",
        age: 29,
    },
    {
        name: "Alexey",
        age: 39,
    },
    {
        name: "Ded Moros",
        age: 17,
    }
];
human
    .map(function (user) {
        return new InfoHuman(user.name, user.age);
    })
    .forEach(function (user) {
        user.getInfo();
    });

// ! 2. Створити клас Автомобіль.
//     Властивості:
// марка, модель, рік випуску, номерний знак(або на Ваш розсуд);
// власник.
const automobile = [
    {
        marka: "BMW",
        model: "M5",
        year: 2020,
        number: "KA 3333 AK",
    },
    {
        marka: "Mersedes",
        model: "S",
        year: 2022,
        number: "KA 8888 AK",
    },
    {
        marka: "Ford",
        model: "Focus",
        year: 2018,
        number: "KA 5555 AK",
    },
];
//     Методи:
// конструктор, який приймає чотитри параметри(тобто, всі окрім власника):
// марка, модель, рік виписку,номерний знак
function InfoAutomobile(marka, model, year, number) {
    this.marka = marka;
    this.model = model;
    this.year = year;
    this.number = number;
};
// присвоїти власника - метод повинен приймати екземпляр класу Людина,
// та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18,
// інакше виводити у консоль відповідне повідомлення
InfoAutomobile.prototype.addsOwner = function (humanClass) { // метод добавляет владельца, если ему больше 18 лет
    if (humanClass.age >= 18) {
        this.name = humanClass.name;
        this.age = humanClass.age;
    } else {
        console.log(`Вы ${humanClass.name} не можете владеть автомобилем, Вам ${humanClass.age} лет, а это меньше чем 18 лет!!!`)
    }
};
InfoAutomobile.prototype.renderInfo = function () { // метод выводит информацию
    if (this.name) {
        return console.log(`
        ${this.name} является собственником автомобиля ${this.marka} ${this.model}, ${this.year} года выпуска, с номером автомобиля ${this.number}
        `);
    }
};
automobile
    .map(function (item) {
        return new InfoAutomobile(item.marka, item.model, item.year, item.number);
    })
    .forEach(function (user, i) {
        user.addsOwner(human[i]);
        user.renderInfo();
    });
// метод, який виводить у консоль інформацію про автомобіль та
// викликає метод виводу інформації класу Людина для виведення інформації
// про власника

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.