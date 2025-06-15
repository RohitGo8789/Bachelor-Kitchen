import basket_icon from './basket_icon.png'
import search_icon from './search_icon.png'
import breakfast from './breakfast.avif'
import lunch from './lunch.avif'
import snacks from './snacks.avif'
import dinner from './dinner.avif'
import chole_bhature from './chole_bhature.avif'
import poha from './poha.avif'
import chana_kachori from './chana_kachori.avif'
import aaloo_parantha from './aaloo_parantha.avif'
import idli_sambar from './idli_sambar.avif'
import daal_chawal from './daal_chawal.avif'
import dosa from './dosa.avif'
import rajma_chawal from './rajma_chawal.avif'
import litti_chokha from './litti_chokha.jpg'
import vada_pav from './vada_pav.avif'
import chowmin from './chowmin.avif'
import pav_bhaji from './pav_bhaji.avif'
import roti_sabzi from './roti_sabzi.avif'
import parantha_aaloo from './parantha_aaloo.avif'
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import logo from './bachelor_logo.png'
export const assets = {
    logo,
    basket_icon,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Breakfast",
        menu_time: "7:00 am - 11:00 am",
        menu_image: breakfast
    },
    {
        menu_name: "Lunch",
        menu_time: "12:00 pm - 04:00 pm",
        menu_image: lunch
    },
    {
        menu_name: "Snacks",
        menu_time: "5:00 pm - 07:00 pm",
        menu_image: snacks
    },
    {
        menu_name: "Dinner",
        menu_time: "8:00 pm - 10:00 pm",
        menu_image: dinner
    }
    ]

export const food_list = [
    {
        _id: "1",
        name: "Chole Bhature",
        image: chole_bhature,
        price: 80,
        description: "It is a spicy and flavorful North Indian dish of chickpeas served with deep-fried bread.",
        category: "Breakfast"
    },
    {
        _id: "2",
        name: "Poha",
        image: poha,
        price: 50,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Breakfast"
    }, {
        _id: "3",
        name: "Chana Kachori",
        image: chana_kachori,
        price: 40,
        description: "It is a flavorful Indian snack of crispy, deep-fried pastry filled with spicy chickpeas.",
        category: "Breakfast"
    }, {
        _id: "4",
        name: "Aaloo Parantha",
        image: aaloo_parantha,
        price: 30,
        description: "It is a popular Indian flatbread stuffed with spiced mashed potatoes, usually served with butter, curd, or pickle.",
        category: "Breakfast"
    }, {
        _id: "5",
        name: "Idli Sambar",
        image: idli_sambar,
        price: 60,
        description: "It is a traditional South Indian dish consisting of soft rice cakes served with a tangy lentil-based vegetable stew.",
        category: "Breakfast"
    }, {
        _id: "6",
        name: "Daal Chawal",
        image: daal_chawal,
        price: 70,
        description: "It is a simple and comforting Indian meal of cooked lentils served with steamed rice.",
        category: "Lunch"
    }, {
        _id: "7",
        name: "Dosa",
        image: dosa,
        price: 100,
        description: "It is a crispy, thin South Indian pancake made from fermented rice and lentil batter, often served with chutney and sambar.",
        category: "Lunch"
    }, {
        _id: "8",
        name: "Rajma Chawal",
        image: rajma_chawal,
        price: 90,
        description: "It is a hearty North Indian dish of red kidney beans cooked in a spiced gravy, served with steamed rice.",
        category: "Lunch"
    }, {
        _id: "9",
        name: "Litti Chokha",
        image: litti_chokha,
        price: 40,
        description: "It is a traditional Bihari dish consisting of roasted wheat balls stuffed with spiced gram flour, served with mashed vegetables.",
        category: "Snacks"
    }, {
        _id: "10",
        name: "Vada Pav",
        image: vada_pav,
        price: 20,
        description: "It is a popular Indian street food featuring a spicy potato fritter served inside a soft bread bun.",
        category: "Snacks"
    }, {
        _id: "11",
        name: "Chowmin",
        image: chowmin,
        price: 70,
        description: "It is a popular Indo-Chinese dish of stir-fried noodles mixed with vegetables.It is a popular Indo-Chinese dish of stir-fried noodles mixed with vegetables.",
        category: "Snacks"
    }, {
        _id: "12",
        name: "Pavbhaji",
        image: pav_bhaji,
        price: 120,
        description: "It is a spicy mashed vegetable curry served with soft buttered bread rolls.",
        category: "Snacks"
    },
    {
        _id: "13",
        name: "Parantha Aaloo",
        image: parantha_aaloo,
        price: 60,
        description: "It is a popular Indian flatbread stuffed with seasoned mashed potatoes, often enjoyed with yogurt or pickles.",
        category: "Dinner"
    },
    {
        _id: "14",
        name: "Roti Sabzi",
        image: roti_sabzi,
        price: 50,
        description: "It is a simple Indian meal of whole wheat flatbread served with a vegetable curry.",
        category: "Dinner"
    }
]
