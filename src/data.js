// src/data.js
const weather_img = require('./img_sources/weather_icons.png')
const puppeteer_img = require('./img_sources/puppeteer.png')
const scrapping_img = require('./img_sources/scrapping.png')
const machine_img = require("./img_sources/machine.png")
export const harvey = require('./img_sources/Programmer.png')
export const projects = [
    {
      title: "Mini Sneaker Bot GUI App",
      subtitle: "Python | Selenium, PySimpleGUI, NumPy",
      description:
        "GUI Program that allows a user to input a sneaker product key name or sneaker product URL and auto checkout in less than 40 seconds to a minute without interaction",
      image: puppeteer_img,
      link: "",
    },
    {
      title: "Weather Station Website for High School Campus",
      subtitle: "React.js, Tailwind CSS, JSX",
      description:
        "School website that informs students of temperature, humidity, wind speeds, and forecasts of the school’s nearby environments using nearby cities and APIs.",
      image: weather_img,
      link: "https://vhsweatherstation.netlify.app",
    },
    {
      title: "Stock Station Website",
      subtitle: "React.js, API, Web Scrapping",
      description:
        "Website that allows users to lookup stock information, prices, volume, etc",
      image: scrapping_img,
      link: "",
    },
    {
      title: "Virtual Vending Machine Game Simulator",
      subtitle: "Python, Terminal",
      description:
        "Educational program game that allows users to experience vending machine entrepreneurship through random simulations with a selection of four aisles and a variety of products to choose from. ",
      image: machine_img,
      link: "",
    },
  ];

export const skills = [
  {
    tech: 'Python',
    ranking: 'Expert',
    color: 'text-blue-600'
  },
  {
    tech: 'Microsoft Excel',
    ranking: 'Advanced',
    color: 'text-green-400'
  },
  {
    tech: 'Front-End Languages: HTML5, CSS3, JS Web Stack',
    ranking:'Advanced',
    color: 'text-green-400'
  },
  {
    tech: 'JavaScript',
    ranking: 'Intermediate',
    color: 'text-green-200'
  },
  {
    tech: 'Tailwind CSS',
    ranking: 'Beginner',
    color: 'text-yellow-400'
  },
  {
    tech: 'React.js',
    ranking: 'Beginner',
    color: 'text-yellow-400'
  },
  {
    tech: 'Java',
    ranking: 'Novice',
    color: 'text-red-400'
  }
  
]

export const applicable = [
  {
    tech: 'API',
    ranking: 'Advanced',
    color: 'text-green-400',
  },
  {
    tech: 'Web Scrapping',
    ranking: 'Intermediate',
    color: 'text-green-200' ,
  },
  {
    tech: "Dynamic Websites",
    ranking: "Intermediate",
    color: 'text-green-200',
   },
  {
    tech: 'AI Automation',
    ranking: 'Beginner',
    color: 'text-yellow-400',
   }
   
]

export const testimonials = [{
    quote: "Brandon combines both strong technical abilities with solid writing and communication skills. He shows a remarkable attention to detail in his writings and extremely thorough while also speaking and writing with ease about technical topics.",
    name: "James Soto",
    company: "Engineer at SoCal Gas Company"
},
{
  quote: "Brandon makes teaching him fun. He not only tries to do his best in class, but he makes sure that he has fun along the way, which makes class more enjoyable for me and for his fellow students.",
  name: "Brent Rojo",
  company: "Venice High School Lead Teacher"
}
]