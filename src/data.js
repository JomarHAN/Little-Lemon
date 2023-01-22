import dessert from './images/lemon-dessert.jpg'
import salad from './images/greek-salad.jpg'
import bruchetta from './images/bruchetta.jpg'
import anna from './images/anna.jpeg'
import jaeun from './images/jaeun.jpeg'
import john from './images/john.jpeg'
import kevin from './images/kevin.jpeg'

export const specials = [
    {
        title: 'Greek Salad',
        price: '$12.99',
        text: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        image: salad
    },
    {
        title: 'Bruchetta',
        price: '$5.99',
        text: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        image: bruchetta
    },
    {
        title: 'Lemon Dessert',
        price: '$5.00',
        text: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined',
        image: dessert
    },
];

export const testimonials = [
    {
        rating: 5,
        image: anna,
        name: "Anna",
        testimony: "So great service!"
    },
    {
        rating: 4,
        image: john,
        name: "John",
        testimony: "Delivered on time."
    },
    {
        rating: 5,
        image: jaeun,
        name: "Jae-Un",
        testimony: "I'm falling love the Bruchetta."
    },
    {
        rating: 4.5,
        image: kevin,
        name: "Kevin",
        testimony: "Highly recommended."
    }
]