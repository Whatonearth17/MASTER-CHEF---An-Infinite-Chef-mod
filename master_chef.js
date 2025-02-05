addIngredient("sunflower",{
    type:"decor",
    color:"#B67A34",
    shape:"flower",
    scale:0.8,
    keywords:"sun,flower,petal,",
    dishName:"sunflower",
    broken:"sunflower_seed"
  });

addIngredient("rose",{
    type:"decor",
    color:"#B0256F",
    shape:"flower_rose",
    scale:0.5,
    keywords:"rose,flower,petal,",
    dishName:"rose",
    broken:"rose_petal"
    });

addIngredient("rose_petal",{
    type:"decor",
    color:"#B0256F",
    shape:"bean",
    scale:0.5,
    dishName:"rose_petal",
    keywords:"rose,flower,petal,"
});

addIngredient("korean_radish",{
    type:"vegetable",
    color:"#CADFA6",
    shape:"bulb_down",
    group:"vegetable",
    scale:1.0,
    keywords:"radish",
    dishName:"korean_radish",
    cookColor:"#BBAA95",
    adj:"korean_radish",
    broken:"chopped_korean_radish"
  });

addIngredient("chopped_korean_radish",{
    type:"vegetable",
    group:"vegetable",
    color:"#CADFA6",
    shape:"beans_some_flat",
    scale:1.0,
    dishName:"chopped_korean_radish",
    cookColor:"#BBAA95",
    hidden:true,
    adj:"chopped_korean_radish"
  });

addIngredient("dinosaur_meat",{
    type:"meat",
    color:"#4C121B",
    shape:"ear",
    group:"meat",
    scale:2.0,
    keywords:"primitive,dino,old,meat",
    dishName:"dino_meat",
    cookColor:"#3E1E1B",
    adj:"primitive_meat",
    broken:"minced_dino_meat"
  });

addIngredient("minced_dino_meat",{
    type:"meat",
    group:"meat",
    color:"#4C121B",
    shape:"noodles",
    scale:1.5,
    dishName:"minced_dino_meat",
    cookColor:"#3E1E1B",
    hidden:true,
    adj:"ground_primitive_meat"
    });

addIngredient("jellyfish",{
    type:"fish",
    color:"#BDD2D5",
    shape:"jellyfish",
    group:"fish",
    scale:1.0,
    a:0.5,
    keywords:"fish,jelly,seafood",
    dishName:"jellyfish",
    cookColor:"#99AEB1",
    adj:"jellyfish",
    broken:"chopped_jellyfish"
  });

addIngredient("chopped_jellyfish",{
    type:"fish",
    group:"fish",
    color:"#BDD2D5",
    shape:"beans_some_flat",
    scale:1.0,
    a:0.5,
    dishName:"chopped_jellyfish",
    cookColor:"#99AEB1",
    hidden:true,
    adj:"chopped_jellyfish"
    });

addIngredient("jackfruit",{
    type:"fruit",
    color:"#ADBF77",
    shape:"circle_thorny_ml",
    group:"fruit",
    scale:1.0,
    keywords:"spiky,fruit,exotic,jack,stinky",
    dishName:"jackfruit",
    cookColor:"#3C4522",
    adj:"jackfruit",
    broken:"jackfruit_juice
  });

addIngredient("jackfruit_juice",{
    type:"juice",
    group:"water",
    behavior: 1,
    color:"#AB961F",
    shape:"droplets_some",
    scale:0.5,
    dishName:"jackfruit_juice",
    hidden:true,
    adj:"jackfruit_juice"
    });

addIngredient("orange_dye",{
    type:"red_dye",
    color:"#E28315",
    adj:"orange",
});

addIngredient("yellow_dye",{
    type:"red_dye",
    color:"#FFEE00",
    adj:"yellow",
});

addIngredient("lime_dye",{
    type:"red_dye",
    color:"#00FF00",
    adj:"lime",
});

addIngredient("green_dye",{
    type:"red_dye",
    color:"#10c100",
    adj:"green",
});

addIngredient("cyan_dye",{
    type:"red_dye",
    color:"#00FFFF",
    adj:"cyan",
});

addIngredient("light_blue_dye",{
    type:"red_dye",
    color:"#00CBFF",
    adj:"light blue",
});

addIngredient("blue_dye",{
    type:"red_dye",
    color:"#0000FF",
    adj:"blue",
});

addIngredient("purple_dye",{
    type:"red_dye",
    color:"#FF00FF",
    adj:"purple",
});

addIngredient("magenta_dye",{
    type:"red_dye",
    color:"#6F1A82",
    adj:"magenta",
});

addIngredient("pink_dye",{
    type:"red_dye",
    color:"#DD78D1",
    adj:"pink",
});

addIngredient("white_dye",{
    type:"red_dye",
    color:"#FFFFFF",
    adj:"white",
});

addIngredient("black_dye",{
    type:"red_dye",
    color:"#000000",
    adj:"black",
});

editIngredient("dye",{
    name:"random_dye",
    adj:"random,dye",
});

editIngredient("citric_acid",{
    color:"#CDE6DD"
});

