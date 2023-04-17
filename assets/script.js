var first = $('#first')
var second = $('#second')
var third = $('#third')
var showIdeas =$('#showIdeas')
var showCasson =$('#showCasson')
var showLinks =$('#showLinks')
showIdeas.on('click', function () {
    first.show("fast");
})
showCasson.on('click', function () {
    second.show("fast");
})
showLinks.on('click', function () {
    third.show("fast");
})

var button = $('#button');
var dinner = $('#dinner');
var cycledList = $('#oldList')
var randomDinner;
var randomDinnerIndex;
var dinnerHolder;
var dinnerHolderList = [];
var dinnerList = [
    "Stir Fry", "Lettuce Wraps", "Hamburgers/Hot Dogs", "Breakfast for Dinner", "Sandwiches/Subs", "Tacos",
     "Grilled Cheese and Tomato Soup", "Chicken and Veggies, baked or grilled", "Steak & Potatoes",
      "Pizza Potato Topper", "Sushi", "Tortilla Soup", "Stew", "Pot Roast", "Apricot Chicken", "Pasta", 
      "Mac & Cheese", "Pizza", "Honey Lemon Dill Salmon", "Meatloaf", "Chicken or Tuna Salad", "Sloppy Joe", 
      "Stuffed Peppers", "Sweedish Meatballs", "Tequila Chicken", "Yogurt Chicken", "Curry Chicken/Tikka Masala"
];

button.on('click', function () {
    randomDinnerIndex = Math.floor(Math.random()*dinnerList.length)
    randomDinner = dinnerList[randomDinnerIndex];
    dinner.text(randomDinner);
    dinnerHolder = dinnerList.splice(randomDinnerIndex, 1);
    dinnerHolderList.push(dinnerHolder.toString());
    cycledList.append('<li>' + randomDinner + '<li>')
});

var CassonButton = $('#CassonButton')
var CassonDinner = $('#CassonDinner')
var randomCasson;
var randomCassonIndex;
var CassonHolderList = [];
var CassonLink = $('#CassonLink')
var CassonOptions = [
    {
    dinner: "Alaska Salmon a la Rainier",
    link: "https://docs.google.com/document/d/1bZG2wdYCYVv8hJpiP9_OBDiIPq19zWeVGQg8rFaVtvA/edit"
} , {
    dinner: "Spicy Stuffed Peppers",
    link: "https://docs.google.com/document/d/16WUlmNZo78lNRz0k7oewzuBrs7U4WxajA-Fgi3m3PL8/edit"
} , {
    dinner: "Apricot Glazed Chicken",
    link: "https://docs.google.com/document/d/1l-JX5MouGv0JWh6eDqM-U0ud6eU1WYLGm5f1h8AhRTE/edit"
} , {
    dinner: "Baked Macaroni",
    link: "https://docs.google.com/document/d/1Qh8E6diWYfM20y8lLTp08PQqJYX3wbEOGA14Oy4S760/edit"
} , {
    dinner: "Baked Orange Roughy",
    link: "https://docs.google.com/document/d/1zjmRcDYe1olkM5Mded7pdg_MAHHvkaLp3bpUsSYzhzE/edit"
} , {
    dinner: "BBQ Pizza",
    link: "https://docs.google.com/document/d/18DSqooXIZNNxXKaGkwfGfEMsiXDq_Wb6HeYpnxMXF7M/edit"
} , {
    dinner: "BBQ Shrimp",
    link: "https://docs.google.com/document/d/1ChzsV16rbShPwGWtf_FeVQhrpsi3CEHVv08s55oFu4U/edit"
} , {
    dinner: "Cajun Chicken Alfredo",
    link: "https://docs.google.com/document/d/1mowoZFiEjZVZkHSHgLsSQ5uJC2sIwG3GkZ6G424p7pQ/edit"
} , {
    dinner: "Casserole Chicken or Tuna",
    link: "https://docs.google.com/document/d/1-u39a8VtWqX-ey1uU0z3-Jzu0PrnZbsP88cPHPk1Ngw/edit"
} , {
    dinner: "Chesey Potato Casserole",
    link: "https://docs.google.com/document/d/1OxErbbHfHayOpoeAQBDQpGZPNo2zNmGm07EeqThUFSE/edit"
} , {
    dinner: "Chicken Dijon",
    link: "https://docs.google.com/document/d/18x-rxKaT7UO_fLOpYQ_3_8n7DU0a0wRBiMMgqhQmptU/edit"
} , {
    dinner: "Crockpot Brisket",
    link: "https://docs.google.com/document/d/1pENCCA3RhWQzNWKmQBxwdZVNasQIJDiUz6PndSUP5PQ/edit"
} , {
    dinner: "Crockpot Shredded Beef",
    link: "https://docs.google.com/document/d/1zjw3bHyyyz4o82s_lQ2P8yuPWcADMVBvoj5f-Iw7j80/edit"
} , {
    dinner: "Crockpot Stew",
    link: "https://docs.google.com/document/d/1FmOPdKbxnrWw1w04WN2F_yJ8a3j1AmiBeUgLHYfxIi4/edit"
} , {
    dinner: "Fish Tacos",
    link: "https://docs.google.com/document/d/11kSiSubAfssogKXOta9cD7FMBob80TQDDVXHNzxM3Eo/edit"
} , {
    dinner: "Honey Lemon Dill Salmon",
    link: "https://docs.google.com/document/d/1bI6sQJDFz0PxvAmAvTMbYoWt3xEVs5giRF3VuxyPW6k/edit"
} , {
    dinner: "Italian Meat Sauce",
    link: "https://docs.google.com/document/d/16Gr8aZGcc6pyAIZSALyIzQd4lp-ayRMUF8gIx-AcJs0/edit"
} , {
    dinner: "Leslie's Pasta",
    link: "https://docs.google.com/document/d/1YQaSVR9hyXCLlaDzDhgon8m5s2qXahPzn3IRInQGc4E/edit"
} , {
    dinner: "Macaroni Beef Supper",
    link: "https://docs.google.com/document/d/11HYYPZcDakTDIyF2e-ZIteunb8XKIPWFzsCjT1jKDWM/edit"
} , {
    dinner: "MothersMeatloaf",
    link: "https://docs.google.com/document/d/1-QBvR8WBfez3qM0xmrZfCx75KXOnENusiMfX9zbW5vc/edit"
} , {
    dinner: "Pinapple Mandarin Chicken",
    link: "https://docs.google.com/document/d/1QdeVQqlV8XQ_291nqyJbEWA2DLLjqQduWKpPkJTrR-I/edit"
} , {
    dinner: "Pizza Potato Topper",
    link: "https://docs.google.com/document/d/17xuOPtW_mo-H-gcfUsxGSAWmC6j9zWJrgFfNQhXVC-w/edit"
} , {
    dinner: "SalmonCroquettes",
    link: "https://docs.google.com/document/d/1iwa8Io4u2ilEdxOMbpz1IC0dkNQ-m29mgfyFHz3O_rg/edit"
} , {
    dinner: "Salmon Loaf",
    link: "https://docs.google.com/document/d/1U2Oq7H_eR50lcoNF0jMHOHVL2sPuUccq_iuws96MtDg/edit"
} , {
    dinner: "Sloppy Joe",
    link: "https://docs.google.com/document/d/1Lk6wsCQzqnhgMLB9Sj_cbH32A0iKmdEK1WGiA7qCyGI/edit"
} , {
    dinner: "Sloppy Joes",
    link: "https://docs.google.com/document/d/15u9V5AKHy9ljNdoAx_jCjBXAhwIB1fVSUyWVbdaOV4Y/edit"
} , {
    dinner: "Sour Cream Chicken Enchiladas",
    link: "https://docs.google.com/document/d/11kylC2WBJNPCQGNqYy3l_cavFSxzo21K-TRG05HnWj4/edit"
} , {
    dinner: "Spice Glazed Chicken",
    link: "https://docs.google.com/document/d/1LvnkZOM_sfNRE0Nh1A3Dp__tkTQ7aozHDzFvO91CUu4/edit"
} , {
    dinner: "Spicy Meat Vegetable Noodle",
    link: "https://docs.google.com/document/d/1j8eJ2Ws4tKm7fq1Klk9Q9Y7DOTrxNePY_hvaATvRsZc/edit"
} , {
    dinner: "Swedish Meatballs Sour Cream Sauce",
    link: "https://docs.google.com/document/d/1bNkfCLYpJeWKUddq-DWpA2u_pM3_MIj8g067hoUkmrg/edit"
} , {
    dinner: "Sweet Potato Burritos",
    link: "https://docs.google.com/document/d/1lH_KX4kxiLHMZxv2pyPWwInGs05v6mFPwEmMBL6_fL4/edit"
} , {
    dinner: "Taco Salad for 12",
    link: "https://docs.google.com/document/d/14DA4MOsDVop1I_N1mW0g41VbcAg5l5WWVIEAEn-vjOo/edit"
} , {
    dinner: "Taco Soup",
    link: "https://docs.google.com/document/d/1JQd6-KhgixEshOp3CXnrZ8L5YxDzz5UL-qcRr5Y6MMM/edit"
} , {
    dinner: "Tequila Chicken",
    link: "https://docs.google.com/document/d/1dZ-jFeS3IpkUf93jJdtfz3xTROEK9pgFIwh1bXBlCIQ/edit"
}, {
    dinner: "Yogurt Chicken Marinade",
    link: "https://docs.google.com/document/d/1uFpjGg0RQ0VF4TXd86PWwlN6DwwmnBSakvAdaZU7UUE/edit"
} , {
    dinner: "Cheesey Vegetable Soup",
    link: "https://docs.google.com/document/d/16zPnWwdhEB0R9xI-ilZ1wJaa0RdN990xIMwHxfiGKWs/edit"
}];

CassonButton.on('click', function () {
    randomCassonIndex = Math.floor(Math.random()*CassonOptions.length)
    randomCasson = CassonOptions[randomCassonIndex];
    CassonDinner.text(randomCasson.dinner);
    CassonLink.attr('href', randomCasson.link);
    CassonHolderList = CassonOptions.splice(randomCassonIndex, 1)
});

var CassonDessertButton = $('#CassonDessertButton')
var CassonDessert = $('#CassonDessert')
var randomCassonDessert;
var randomCassonDessertIndex;
var CassonDessertHolderList = [];
var CassonDessertLink = $('#CassonDessertLink')
var CassonDessertOptions = [
{
    dessert: "Bread Pudding",
    link:"https://docs.google.com/document/d/1Np83MdvyBFACctQKdYJL632SjR7EaliFetDvkP8ifxU/edit"
} , {
    dessert: "Apple Dip",
    link: "https://docs.google.com/document/d/1J01ZOJfK2SrbKD3c6pbrVSROLCqK1IsHDrr8U5H_Yug/edit"
} 
, {
    dessert: "Banana Nut Bread",
    link: "https://docs.google.com/document/d/1O4BNRRLU8Rak9u14tFQoW_3XMBiHBw2FLC4NrRnE_Uw/edit"
} , {
    dessert: "Banana Pudding",
    link: "https://docs.google.com/document/d/1aQeaJbHY8URPNKxqKHz6v1AaLCxAF3hyydQsYKACL8Y/edit"
} , {
    dessert: "Buttercream Frosting",
    link: "https://docs.google.com/document/d/12VpWOFoy9MrzvLUWGQQIoj_kCuYAm4IQEDgCAXs-fyg/edit"
} , {
    dessert: "CaramelAppleCake",
    link: "https://docs.google.com/document/d/1yeA1DX2Y5Xbt9adjHm6ceDxF0gh_q2-iYo0EhlBMCwI/edit"
} , {
    dessert: "Caramel Corn",
    link: "https://docs.google.com/document/d/1WZWB-0g9-HTdMp4FvbiS78u9Gl4a1Tjh1GkYeUWjfe8/edit"
} , {
    dessert: "CarrotCake",
    link: "https://docs.google.com/document/d/1BFdbQHtdPBeiE-luW4pt22A7frp4cJMRb8QLhTn3m5U/edit"
} , {
    dessert: "Cheese Pie",
    link: "https://docs.google.com/document/d/1lf7Jie-jF8tA6Wi14JM77Dvj5piEvbh6oeFww_gJRow/edit"
} , {
    dessert: "Chocolate Dropped Cookies Iced",
    link: "https://docs.google.com/document/d/1axHezHQT7SXo2gSoNQtyaVf26TgZOnEXGPUTYENloAQ/edit"
} , {
    dessert: "Chocolate Mint Cake",
    link: "https://docs.google.com/document/d/18xLgR-UdyH2e-A5_QDj-fc5m85dPeMsuczy7YQu2fn8/edit"
} , {
    dessert: "Chocolate Peanut Buddy Bars",
    link: "https://docs.google.com/document/d/1p40BUUgFRS7JXM_nWE3TxueFWVaZgyHq0qA5KLe8Hjc/edit"
} , {
    dessert: "Christmas Coconut Candy",
    link: "https://docs.google.com/document/d/1MpEx1LI18MVvzSwZj3F4uckoeeqeOu2libSdd-mPJmQ/edit"
} , {
    dessert: "Coffee Cake",
    link: "https://docs.google.com/document/d/1OmbN6PQSKzMEpKo81jX13mMe1WXVAb2Unv8k8EjyxMI/edit"
} , {
    dessert: "Edible Play Dough",
    link: "https://docs.google.com/document/d/1e_D0vGELSPFJdMA4wif6m8n35coj3BaCpQRlmeDuRE0/edit"
} , {
    dessert: "German Chocolate Cake Topping",
    link: "https://docs.google.com/document/d/1zUXQh0kUytT9DRv_wdRqMpcXNB67THAShP_Wh_40u0U/edit"
} , {
    dessert: "Glass Candy",
    link: "https://docs.google.com/document/d/1FHTD-wyNcROnnTn2mZ02W77NJMlCXmHwOWo3onQ9BlQ/edit"
} , {
    dessert: "Haystack",
    link: "https://docs.google.com/document/d/1LmqQyNpwBmFIifPEC-zaWBOCXgtVpxieLtW_cWruDu4/edit"
} , {
    dessert: "Hot Cocoa",
    link: "https://docs.google.com/document/d/1YaAIjwoNMyO_8OY6V83kaDn8RltrTky9j6D1nRuahmA/edit"
} , {
    dessert: "Hot Fudge",
    link: "https://docs.google.com/document/d/16zUa6anQUX4FGlr_v032M1jGfKRhOwIH-BrVnPdbisA/edit"
} , {
    dessert: "Icebox Oatmeal Cookies",
    link: "https://docs.google.com/document/d/1uoFsHXv9YhmGscMZXZidb30E9tB99ff3u4qnErzgxug/edit"
} , {
    dessert: "Ice Cream",
    link: "https://docs.google.com/document/d/1L4lBmB3vYbuiKETawE34e9WUNTmvZ5khrYxw4DO1FZk/edit"
} , {
    dessert: "Keepsake Brownies",
    link: "https://docs.google.com/document/d/1JQpNywNfo4gt3QjqtdAKU-_rK1Wy22rSP2KS9PgzsUw/edit"
} , {
    dessert: "Lazy Dazy Cake",
    link: "https://docs.google.com/document/d/1ynBBfFTVBc8c_OYPb7jZtrPcUS41fwxiC3_qf3tlvTQ/edit"
} , {
    dessert: "LemonBonBons",
    link: "https://docs.google.com/document/d/17WFxzz1NWyzB6htDtJ4UxJIDFjOGtw6R5OwEsVP2FNs/edit"
} , {
    dessert: "Molasses Cookies",
    link: "https://docs.google.com/document/d/1zgC935qcmG9KzPBTlCYzF7JZ7dBXD-aVka5U-z5iE7k/edit"
} , {
    dessert: "Ned Cake",
    link: "https://docs.google.com/document/d/15UAcLj6i-AOo85AgeL7NLyaJvxgc7qa3ZlE-C7l7QC0/edit"
} , {
    dessert: "No Bake Cookies",
    link: "https://docs.google.com/document/d/1IZ2qkbsRbBOhj1FX8DR25lyyRDRWL8oPixOD5oSipT4/edit"
} , {
    dessert: "Old Fashioned Oatmeal Cookies",
    link: "https://docs.google.com/document/d/1jZUCZRUrPCNlgz1NTeHMTfwL6IEP0TXWVtDLttgD8HA/edit"
} , {
    dessert: "Peanut Butter Cookies",
    link: "https://docs.google.com/document/d/1icwxYJ_5BPyfaZjbJmVs_IHglCYQn-YZt0LwnVZ1j6k/edit"
} , {
    dessert: "Peanut Butter Cookies 3 Ing.",
    link: "https://docs.google.com/document/d/1OcTd841ILBYIRXwSEvmr9wZTim9tfMG3TClQndzQfa8/edit"
} , {
    dessert: "Poppy Seed Coffee Cake",
    link: "https://docs.google.com/document/d/1HWoK5Fp6RAOW6mggtQYOb1sMgelxsohl0Gi_NUOqtds/edit"
} , {
    dessert: "Pumpkin Cookies",
    link: "https://docs.google.com/document/d/1ehNJwDu80-6rTcoRR2-oBLqQVxVCBqceCXk0o26d5O4/edit"
} , {
    dessert: "Pumpkin Cookies w/ Caramel Icing",
    link: "https://docs.google.com/document/d/1cSpYmAc-kln5T5-Sb7fM9jC0d5BO5Uox5gHep5qbVSw/edit"
} , {
    dessert: "Scotch Krispies",
    link: "https://docs.google.com/document/d/18h-j1psxK17NgPi2LARA0Dl6K0OJNCE2Qpy39Iqs0hU/edit"
} , {
    dessert: "Seven Layer Bars",
    link: "https://docs.google.com/document/d/1N3IfOGil60GtciOdjvjZCOj6uWn5rZU1ulIqFEPgDw8/edit"
} , {
    dessert: "Snicker Doodles",
    link: "https://docs.google.com/document/d/1e0HRjNn6OXmzkL_NyOz8aLU_dsQg-xvYM3zNLQJDqwk/edit"
} , {
    dessert: "Sugar Cookies",
    link: "https://docs.google.com/document/d/1i_DI0UJ2fkhuuZ6MLEF00YiNpPwcKNeDPR4OhpVbO1A/edit"
} , {
    dessert: "White Chocolate Cheesecake",
    link: "https://docs.google.com/document/d/1yo90Hyu4hCcB3Xu3VxY318jKkK4LhgHC0Uaz7eD4Uno/edit"
}];

CassonDessertButton.on('click', function () {
    randomCassonDessertIndex = Math.floor(Math.random()*CassonDessertOptions.length);
    randomCassonDessert = CassonDessertOptions[randomCassonDessertIndex];
    CassonDessert.text(randomCassonDessert.dessert);
    CassonDessertLink.attr('href', randomCassonDessert.link);
    CassonDessertHolderList = CassonDessertOptions.splice(randomCassonDessertIndex, 1);
});

var CassonSidesButton = $('#CassonSidesButton')
var CassonSides = $('#CassonSides')
var randomCassonSides;
var randomCassonSidesIndex;
var CassonSidesHolderList = [];
var CassonSidesLink = $('#CassonSidesLink')
var CassonSidesOptions = [
{
    side: "Baked Avocado Fries",
    link: "https://docs.google.com/document/d/1jmwHq5yFNAt1OshhjxLfKJgYaUBiccVLZ7u4NRMivCU/edit"
} , {
    side: "Baked Beans",
    link: "https://docs.google.com/document/d/1rZvxWMIF-LdmNwlDNr_KwyrCQaIEeGgZ4kbZgYDZDxk/edit"
} , {
    side: "Baked Herbed Potatoes",
    link: "https://docs.google.com/document/d/1FVD3mVOBQa0PG4tZloaw3-QOqoLewrYtHXVW-yqUaXY/edit"
} , {
    side: "Baked Lemon Broccoli",
    link: "https://docs.google.com/document/d/11AV4wRhz9EFBlcPYU5q-mhoRHP2PZnEuRzGpsdBVSRc/edit"
} , {
    side: "BBQ Green Beans",
    link: "https://docs.google.com/document/d/1IllY5fPIBOoQTQMtNrd24SoEptfs_9JViomJOo3Kg-M/edit"
} , {
    side: "Bean Salad",
    link: "https://docs.google.com/document/d/1GA7lqrBDevwzvnWb8i9_rA0R2Kc3TiekTzmXBS9f-LM/edit"
} , {
    side: "Bran Muffins",
    link: "https://docs.google.com/document/d/1PfjtxzJTPxPtAr6G9c5YNwYR1Ys7OGDob9w4-NivkHU/edit"
} , {
    side: "Calabacitas",
    link: "https://docs.google.com/document/d/1gd52wb7gGdj2iUC0nXmGi53kGJDN_1TRkSHQNczqGCY/edit"
} , {
    side: "Calico Beans",
    link: "https://docs.google.com/document/d/18MdLOLliWssC64qBUp7XlhGFyXtZATYnLJlp9NWqRHU/edit"
} , {
    side: "Candied Sweet Potatoes",
    link: "https://docs.google.com/document/d/1C7PCyeH0dJjjRj_r-GN5W-VvbHcobT8Vih8uNm4H-uY/edit"
} , {
    side: "Cheese Puffs",
    link: "https://docs.google.com/document/d/1XCoVcINPYP4If26MdjNygtyWqymGDVDQn_TUsx_GDpw/edit"
} , {
    side: "Chile Verde Rice",
    link: "https://docs.google.com/document/d/19Ey1aw7g4vj_Qo_pFAJJkcyY8ldcRkUZjBRxlvq0ucU/edit"
} , {
    side: "Cornbread Turkey Stuffing",
    link: "https://docs.google.com/document/d/1ovaMgZFa0biGOHt89jsySjhgrj1QoB3aTjc2cNYlJPI/edit"
} , {
    side: "Crab Canape",
    link: "https://docs.google.com/document/d/14bcGWtFfVoLM19yKE8NAfCTngDMhBoFnqeMv1vFpHww/edit"
} , {
    side: "Cranberry Mold",
    link: "https://docs.google.com/document/d/1CvJV57bTsgt0ZYviMRysoeBFKymsAP1uzikH3qQzYsU/edit"
} , {
    side: "CranberryNutBread",
    link: "https://docs.google.com/document/d/1NEo9DU6sCy9Yq_2QFR31-49TfPeHHfveo4vICr4zsJM/edit"
} , {
    side: "Essence Emerils Creole Seasoning",
    link: "https://docs.google.com/document/d/1CM8AD0DChTpxOvZeGqYRvcQdkAi1_7cDglOkLkQm2YM/edit"
} , {
    side: "Farmer Johns Pumpkin Bread",
    link: "https://docs.google.com/document/d/1ONCMXsJOeafqNJURKi4l1GYaLV270IJ-5G3zRrJ-ZmU/edit"
} , {
    side: "FiveCupSalad",
    link: "https://docs.google.com/document/d/1MYgLYGQCu9bbbqQO1IXHbp6FuvZyAZqlOZYayUzLbGU/edit"
} , {
    side: "Gazpacho",
    link: "https://docs.google.com/document/d/1kdmCijsqfAwOVb24J7dgtoFJWB6UE8C6JKBTjisLyYE/edit"
} , {
    side: "Maple Pecan Yams",
    link: "https://docs.google.com/document/d/1a-7Lg_CkMPc6YCr3fk5S3SYZIs1l43EDjxJT8yuyf3E/edit"
} , {
    side: "Marinade",
    link: "https://docs.google.com/document/d/1QfrByJznPahf2yzIbaK5WvgBbjN3mn7DTYN5MnoEFf0/edit"
} , {
    side: "Moms Hot Mustard",
    link: "https://docs.google.com/document/d/1H9kCvYaju9XmkxgC9WAnzOZVyw1wLum5zdZDUOI9Bk8/edit"
} , {
    side: "Persian Rice Salad",
    link: "https://docs.google.com/document/d/16csm1Zwuy4QywHBLUWqvsaLaI1FO-AzJCrvaUn4di0A/edit"
} , {
    side: "PizzaCrust",
    link: "https://docs.google.com/document/d/1m2vMdcfgQejaxiDplmq7OT03vfZEX3dESnCmsghY68c/edit"
} , {
    side: "Pizza Sauce Red",
    link: "https://docs.google.com/document/d/1aIfozoyLsuov728Kad8fdiVKdY1OyxCoSECREB7-1So/edit"
} , {
    side: "Polynesian Sauce",
    link: "https://docs.google.com/document/d/1kXQJAbmiBvoZT6XVqXLpzcBrexB00a1DId0QqZyxoOY/edit"
} , {
    side: "Potato Salad",
    link: "https://docs.google.com/document/d/1e_LSPoZXuSl2MC0eUgMXQx-rOEP_OTyAVTE12TsbSVo/edit"
} , {
    side: "Protein Smoothie",
    link: "https://docs.google.com/document/d/1fYyd1mJyZkvP4h4E-mKPgSL2URa3jHgeJ13PC66R_fo/edit"
} , {
    side: "Sausage Hors D'oeuvres",
    link: "https://docs.google.com/document/d/189iWvwlytnaSi9m4BC9gtX4VmSz5bmx-tlqiKkgaL3Q/edit"
} , {
    side: "Sauteed Spinach",
    link: "https://docs.google.com/document/d/1mXgkvXpfMfTJb-uj6FFpbd2I0IJprjkqxLiYM2UgT9U/edit"
} , {
    side: "Shish Kebab Marinade",
    link: "https://docs.google.com/document/d/110R3APGq-nI4ubQq5GBbfbyaGOKGPgAMhtn52VjqecI/edit"
} , {
    side: "Acorn Squash",
    link: "https://docs.google.com/document/d/1Np83MdvyBFACctQKdYJL632SjR7EaliFetDvkP8ifxU/edit"
} , {
    side: "SpicypineappleZucchiniBread",
    link: "https://docs.google.com/document/d/1hn1SXbK8NmWhIbBnJjF3y46DXBrzEbHQsAfb9351Q94/edit"
} , {
    side: "Spinach Dip",
    link: "https://docs.google.com/document/d/1rjGVLAP45114tFmzMgzihMg5egoSbbgtRTOsHnd70eY/edit"
} , {
    side: "Tabouli",
    link: "https://docs.google.com/document/d/1bcUEBGLzHwKf64juYsnECRcg52UmJ06_3IBdPOVDeVs/edit"
} , {
    side: "Three Bean BBQ",
    link: "https://docs.google.com/document/d/1BeoeT4OkkxTPrsBD6kkGy2kUWelHtrTyqnrsia-gM4M/edit"
} , {
    side: "Tomato Egg Cups",
    link: "https://docs.google.com/document/d/1IZCc4QN_TPzWwYgozd3pl4Y3oC9G-wCnvBq5AhZCkl8/edit"
} , {
    side: "Yeast Rolls",
    link: "https://docs.google.com/document/d/1MgPEyaDNMJgq7K-HOl_g1spjOe9yhrzUYIRkg8NbY3s/edit"
}
];

CassonSidesButton.on('click', function () {
    randomCassonSidesIndex = Math.floor(Math.random()*CassonSidesOptions.length)
    randomCassonSides = CassonSidesOptions[randomCassonSidesIndex];
    CassonSides.text(randomCassonSides.side);
    CassonSidesLink.attr('href', randomCassonSides.link);
    CassonSidesHolderList = CassonSidesOptions.splice(randomCassonSidesIndex, 1);
});

var outsideButton = $('#OutsideButton');
var outsideDinner = $('#OutsideDinner');
var randomOutside;
var randomOutsideIndex;
var outsideHolderList = [];
var outsideLink = $('#OutsideLink');
var outsideOptions = [
    {
        dinner: "Japanese Curry",
        link: "https://pickledplum.com/japanese-curry-recipe/"
    } , {
        dinner: "Lemon Pasta",
        link: "https://feelgoodfoodie.net/recipe/lemon-pasta/"
    } , {
        dinner: "Black Bean Burgers",
        link: "https://sallysbakingaddiction.com/best-black-bean-burgers/"
    }
];

outsideButton.on('click', function () {
    randomOutsideIndex = Math.floor(Math.random()*outsideOptions.length)
    randomOutside = outsideOptions[randomOutsideIndex];
    outsideDinner.text(randomOutside.dinner);
    outsideLink.attr('href', randomOutside.link);
    outsideHolderList = outsideOptions.splice(randomOutsideIndex, 1)
});

var emojiButton = $('#emojiButton')
var emoji = $('#emoji');
var randomEmoji;
var randomEmojiIndex;
var emojiHolderList = [];
var emojiList = [
    "👽", "🎈", "😻", "👻", "😶‍🌫️", "😎", "❤️", "👍", "😁", "⚽", "😍", "🎉", "✨", "💾",
    "🧨", "🎭", "🖼️", "🎨", "🛒", "👑", "🥅", "🏒", "⛳", "🎮", "🪄", "🎙️", "🎧", "🗿",
    "🌟", "🌠", "🌈", "🌞", "🌚", "🍕", "🍔", "🍟", "🌭", "🍿", "🥓", "🥚", "🍳", "🧇", 
    "🥞", "🧈", "🫓", "🥖", "🥯", "🥨", "🥐", "🍞", "🧀", "🥗", "🥙", "🥪", "🌮", "🌯", 
    "🍠", "🥩", "🍗", "🍖", "🥫", "🫔", "🥟", "🥠", "🥡", "🍱", "🍘", "🍙", "🍤", "🍣", 
    "🦪", "🍜", "🍛", "🍚", "🍥", "🥮", "🍢", "🧆", "🥘", "🍲", "🍧", "🍦", "🥧", "🥣", 
    "🍝", "🫕", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🍯", "🍮", "🍡", "🍭", "🍬", "🍫",
    "🥛", "🧃", "☕", "🫖", "🍵", "🍶", "🧉", "🧋", "🥢", "🍽️", "🥝", "🥥", "🍇", "🍈",
    "🍉", "🍎", "🥭", "🍍", "🍌", "🍋", "🍊", "🍏", "🍐", "🍑", "🍒", "🫐", "🍓", "🫑",
    "🌶️", "🌽", "🍆", "🫒", "🍅", "🍄", "🥑", "🥒", "🥬", "🥦", "🥔", "🫘", "🥜", "🌰",
    "🥕", "🧅", "🧄", "💐", "🌸", "🏵️", "🌹", "🌺", "🌻", "🪴", "🌱", "☘️", "🥀", "🌷",
    "🌼", "🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "🪺", "🪹", "🍃", "🍂", "🍁", "🍀", ];

emojiButton.on('click', function () {
    randomEmojiIndex = Math.floor(Math.random()*emojiList.length);
    randomEmoji = emojiList[randomEmojiIndex];
    emoji.text(randomEmoji);
    emojiHolderList = emojiList.splice(randomEmojiIndex, 1);
});


// to do:
// 2 - add more outside, maybe dessert?
// mobile