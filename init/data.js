const products = [
          // Electronics
          {
            quantity: 1,
            reviewStar: "4.2",
            image: "https://media.istockphoto.com/id/1096624516/photo/modern-black-car-key-card-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=wZFMZHUbR7FB68QFX86M0bRUlCKYZKMKVMT6Ikbf0JY=",
            itemName: "Gaming Console",
            price: 299.99,
            brand: "GameMaster",
            description: "Dive into the future of gaming with our GameMaster Gaming Console. Unleash unparalleled performance, jaw-dropping graphics, and a gaming experience that will leave you breathless.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "3.4",
            image: "https://media.istockphoto.com/id/913705384/photo/white-headphones.jpg?s=612x612&w=0&k=20&c=UhAVV00MIffNjSoBP2NTjy7lBvjO8vZsyDOKQ6rkhn8=",
            itemName: "Headphones",
            price: 89.99,
            brand: "SoundWave",
            description: "Immerse yourself in a world of pure audio bliss with SoundWave Headphones. Enjoy premium sound quality, ergonomic design, and the freedom to escape into your favorite tunes.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "3.3",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
            itemName: "Laptop",
            price: 999.99,
            brand: "TechMaster",
            description: "Unleash your productivity with the TechMaster Laptop. Boasting powerful specifications, sleek design, and portability, it's your perfect companion for work or play.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "4.8",
            image: "https://media.istockphoto.com/id/1174433187/photo/woman-demonstrating-modern-smartphone-with-blank-white-screen.jpg?s=612x612&w=0&k=20&c=K882SmQXcO_HZ0c1UojIP4s38rkJdaVuUM_gQ84agUw=",
            itemName: "Smartphone",
            price: 599.99,
            brand: "GadgetX",
            description: "Elevate your mobile experience with the GadgetX Smartphone. Packed with features and wrapped in a sleek design, it's your gateway to a world of possibilities.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "4.2",
            image: "https://media.istockphoto.com/id/1156218302/photo/top-view-of-vintage-cameras-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=q_XkEJZf-6ToHsnqarm8mUBfm2tbgxSIZkb3XXTD0kU=",
            itemName: "Digital Camera",
            price: 449.99,
            brand: "PhotoPro",
            description: "Capture life's moments in stunning detail with the PhotoPro Digital Camera. High resolution, advanced features, and ease of use make it the perfect tool for photography enthusiasts.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "3.9",
            image: "https://media.istockphoto.com/id/1380063784/photo/smart-watch-close-up-on-a-white-background-3d-render.webp?b=1&s=170667a&w=0&k=20&c=YE-ayMaexI7kjc5C0LaZeMAXUDYSYRY9z2VMW4_Jt5U=",
            itemName: "Smartwatch",
            price: 149.99,
            brand: "TechWear",
            description: "Stay connected and active with the TechWear Smartwatch. From fitness tracking to notifications, it's the ultimate companion for a smart and healthy lifestyle.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "2.2",
            image: "https://media.istockphoto.com/id/1254998855/photo/airpod-with-black-background.webp?b=1&s=170667a&w=0&k=20&c=pjp3VYT81hNYoXap9KW2huNuM0DfmMFBRScVwlYkeu4=",
            itemName: "Wireless Earbuds",
            price: 79.99,
            brand: "AudioSync",
            description: "Immerse yourself in crystal-clear sound with AudioSync Wireless Earbuds. Featuring noise cancellation technology, these earbuds elevate your audio experience to new heights.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "1.9",
            image: "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGV0fGVufDB8fDB8fHww",
            itemName: "Tablet",
            price: 349.99,
            brand: "TabMaster",
            description: "Unleash creativity and productivity on-the-go with the TabMaster Tablet. Portable and powerful, it's your digital canvas for work, entertainment, and more.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "3.7",
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
            itemName: "Bluetooth Speaker",
            price: 59.99,
            brand: "SonicBoom",
            description: "Bring the party anywhere with SonicBoom Bluetooth Speaker. Compact, stylish, and delivering powerful sound, it's your go-to speaker for immersive music experiences.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "3.6",
            image: "https://media.istockphoto.com/id/638043774/photo/modern-curved-4k-ultrahd-tv.webp?b=1&s=170667a&w=0&k=20&c=78hmugbExHl8EasG-A9qWuppCUIYYP5iZD6PwOYs0jE=",
            itemName: "4K Smart TV",
            price: 799.99,
            brand: "Visionary",
            description: "Transform your living room into a cinematic paradise with Visionary 4K Smart TV. Immerse yourself in ultra-HD visuals, smart features, and an unparalleled viewing experience.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "2.8",
            image: "https://media.istockphoto.com/id/185112184/photo/external-hard-drive.webp?b=1&s=170667a&w=0&k=20&c=h0tuBrq37ENJ-DE61PK2agx1-PKhntqToVAYGu-prK4=",
            itemName: "External Hard Drive",
            price: 129.99,
            brand: "DataVault",
            description: "Secure your digital world with the DataVault External Hard Drive. High-capacity storage, reliability, and blazing-fast data access make it your digital fortress.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "3.9",
            image: "https://media.istockphoto.com/id/1363196986/photo/digital-tablet-blank-white-screen-with-keyboard-on-wooden-table-mock-up.webp?b=1&s=170667a&w=0&k=20&c=zTXaUeYH9v_gAptr57xjvRCRQ2n31BOXtsyztpd7faY=",
            itemName: "Graphic Tablet",
            price: 199.99,
            brand: "ArtTech",
            description: "Unleash your creativity with the ArtTech Graphic Tablet. Perfect for digital art and design, it offers precision, responsiveness, and endless artistic possibilities.",
            category: "Electronics",
          },
          {
            quantity: 1,
            reviewStar: "2.7",
            image: "https://media.istockphoto.com/id/495732397/photo/black-wi-fi-router.webp?b=1&s=170667a&w=0&k=20&c=h44jW-UWl1SlGLMMGDYuoIvQTZ5JM8zYTjHvDvyvhxo=",
            itemName: "Wireless Router",
            price: 79.99,
            brand: "NetLink",
            description: "Experience the power of seamless connectivity with the NetLink Wireless Router. Stay connected at high speeds, stream without interruptions, and conquer the online world.",
            category: "Electronics",
          },
        
        
          // Accessories
          {
                    quantity: 1,
                    reviewStar: "4.5",
                    image: "https://media.istockphoto.com/id/1400820336/photo/opened-school-backpack-with-stationery-on-green-background-concept-back-to-school-school.jpg?s=612x612&w=0&k=20&c=NuLPy1Ps7eWvJZVLk-2OlU5TdB-ZrZ1XHS_kWssOGrk=",
                    itemName: "Backpack",
                    price: 39.99,
                    brand: "AdventureGear",
                    description: "Durable backpack for outdoor adventures.",
                    category: "Accessories",
          },
          {
                    quantity: 1,
                    reviewStar: "4.7",
                    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
                    itemName: "Wrist Watch",
                    price: 129.99,
                    brand: "TimeLux",
                    description: "Elegant wrist watch with precision timekeeping.",
                    category: "Accessories",
          },
          {
                    quantity: 1, 
                    reviewStar: "4.1 ",
                    image: "https://media.istockphoto.com/id/1215741790/photo/snooky-round-sunglass-frame-isolated-stock-image.webp?b=1&s=170667a&w=0&k=20&c=E0nmON2i5aMC5sLjmnWTOSQH7FM4lXW-vtIkV4XZ7RI=",
                    itemName: "Sunglasses",
                    price: 29.99,
                    brand: "SunStyle",
                    description: "Fashionable sunglasses for UV protection.",
                    category: "Accessories",
          },
          {
                    quantity: 1,
                    reviewStar: "3.7 ",
                    image: "https://media.istockphoto.com/id/168346115/photo/red-leather-purse.webp?b=1&s=170667a&w=0&k=20&c=iV4yHhEnI5YuzTznn3GKOpFFhfP9Ib8atajkCp-CLYU=",
                    itemName: "Leather Wallet",
                    price: 49.99,
                    brand: "LuxLeather",
                    description: "Classic leather wallet with multiple compartments.",
                    category: "Accessories",
          },
          {
                    quantity: 1,
                    reviewStar: "2.8",
                    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
                    itemName: "Fitness Tracker",
                    price: 79.99,
                    brand: "FitTech",
                    description: "Smart fitness tracker for monitoring health and workouts.",
                    category: "Accessories",
          },
          {
                    quantity: 1,
                    reviewStar: "2.9 ",
                    image: "https://media.istockphoto.com/id/1401266458/photo/reusable-eco-coffee-cup-on-table-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=UcIXbCQVGD0_9RSSyLiXzUfmPBSZimdY-coUO8jwGDM=",
                    itemName: "Travel Mug",
                    price: 19.99,
                    brand: "TravelBrew",
                    description: "Insulated travel mug for hot and cold beverages.",
                    category: "Accessories",
          },
          {
                    quantity: 1,
                    reviewStar: "4.0",
                    image: "https://media.istockphoto.com/id/1499948872/photo/trendy-mobile-phone-case-design-retro-style-stickers-texture-on-blue-purple-background.webp?b=1&s=170667a&w=0&k=20&c=zU2rHGHo1TedurfXQYfJYayDNAg6d96iLJc57XEpvHc=",
                    itemName: "Phone Case",
                    price: 14.99,
                    brand: "ArmorGuard",
                    description: "Protective phone case with stylish design.",
                    category: "Accessories",
          },
          {
                    quantity: 1,
                    reviewStar: "2.6",
                    image: "https://media.istockphoto.com/id/1388033525/photo/mens-leather-bag-is-on-a-light-brown-background.webp?b=1&s=170667a&w=0&k=20&c=MDrXr7hN73Fk3qGoZHhWyCek7NabK_SZCZbdayoRCpQ=",
                    itemName: "Laptop Bag",
                    price: 34.99,
                    brand: "TechCarry",
                    description: "Padded laptop bag for secure transportation.",
                    category: "Accessories",
          },
          {
                    quantity: 1,
                    reviewStar: "4.9",
                    image: "https://media.istockphoto.com/id/1258758047/photo/beautiful-golden-pair-of-earrings-luxury-female-jewelry-indian-traditional-jewellery-indian.webp?b=1&s=170667a&w=0&k=20&c=bciQaOfZn9S8DaDQex7aB5q22_kkr42tDOtTvH4553g=",
                    itemName: "Jewelry Set",
                    price: 69.99,
                    brand: "GemCraft",
                    description: "Elegant jewelry set for special occasions.",
                    category: "Accessories",
          },
          {
                    quantity: 1,
                    reviewStar: "3.5",
                    image: "https://media.istockphoto.com/id/1197607725/photo/set-of-straight-umbrella-in-black-colour-with-handle-isolated-on-white-background-taken-in.webp?b=1&s=170667a&w=0&k=20&c=spV9KANf1kMb9fdLmu3SNs41c7y8_SxTYnlsJ1iD5MA=",
                    itemName: "Umbrella",
                    price: 24.99,
                    brand: "RainGuard",
                    description: "Compact umbrella for staying dry on rainy days.",
                    category: "Accessories",
          },
          {
                    quantity: 1, reviewStar: "2.4 ",
                    image: "https://media.istockphoto.com/id/480696268/photo/gym-bag-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=RDvsQ5la-Wwe8siaT7wH5SiRGWia_6kk7yksizBQf3k=",
                    itemName: "Gym Bag",
                    price: 29.99,
                    brand: "FitPack",
                    description: "Spacious gym bag for carrying workout essentials.",
                    category: "Accessories",
          },
          {
                    quantity: 1,
                    reviewStar: "5.0 ",
                    image: "https://media.istockphoto.com/id/1176053465/photo/powerful-external-battery-with-usb-wire.webp?b=1&s=170667a&w=0&k=20&c=ElCxGvwB4twtg6suguFdIKQp_RlbWXeaNXkt7kpSGmU=",
                    itemName: "Power Bank",
                    price: 39.99,
                    brand: "ChargeUp",
                    description: "Portable power bank for charging devices on the go.",
                    category: "Accessories",
          },
          {
                    quantity: 1,
                    reviewStar: "3.9",
                    image: "https://plus.unsplash.com/premium_photo-1683736986821-e4662912a70d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwc3RhbmR8ZW58MHx8MHx8fDA%3D",
                    itemName: "Laptop Stand",
                    price: 19.99,
                    brand: "ErgoTech",
                    description: "Adjustable laptop stand for ergonomic use.",
                    category: "Accessories",
          },



          // Clothing
          {
                    quantity: 1,
                    reviewStar: "3.0",
                    image: "https://media.istockphoto.com/id/590039970/photo/man-wearing-a-white-shirt-white-background.webp?b=1&s=170667a&w=0&k=20&c=9_OCAhfDVS1RplFJnAvKvpFOpv0IZwT8lPtws8GHft8=",
                    itemName: "Dress Shirt",
                    price: 49.99,
                    brand: "FashionCraze",
                    description: "Stylish dress shirt for formal occasions.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "5.0 ",
                    image: "https://media.istockphoto.com/id/1014074006/photo/denim-lets-get-back-to-basics.webp?b=1&s=170667a&w=0&k=20&c=H9GW92JA1PYL6ZMp242SFnconlEUawm5KJ-bP7Lnexg=",
                    itemName: "Jeans",
                    price: 59.99,
                    brand: "DenimStyle",
                    description: "Classic denim jeans for a timeless look.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "2.4",
                    image: "https://media.istockphoto.com/id/1308274455/photo/blue-sneakers-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=BAAB67D78Mx7GgyUPnTVA01z2xrY6Hj0rJ_O6swbNvY=",
                    itemName: "Running Shoes",
                    price: 79.99,
                    brand: "FitFlex",
                    description: "Comfortable and durable running shoes for an active lifestyle.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "3.7",
                    image: "https://media.istockphoto.com/id/1146996650/photo/knitted-wool-sweaters.webp?b=1&s=170667a&w=0&k=20&c=H5zzNbJKRQ_fKvedKWSwpJWkO8Y3ZTidycpOsazpXFE=",
                    itemName: "Sweater",
                    price: 39.99,
                    brand: "WarmKnit",
                    description: "Cozy sweater for staying warm in chilly weather.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "3.9",
                    image: "https://media.istockphoto.com/id/1206211040/photo/plain-white-t-shirt-hanging-on-wall.webp?b=1&s=170667a&w=0&k=20&c=J1nMkh1UMLifdqKX1_F9TGWgdXA92nT2jMt-ENXSJkM=",
                    itemName: "T-Shirt",
                    price: 19.99,
                    brand: "CasualComfort",
                    description: "Casual and comfortable T-shirt for everyday wear.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "4.0",
                    image: "https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwamFja2V0fGVufDB8fDB8fHww",
                    itemName: "Winter Jacket",
                    price: 89.99,
                    brand: "ArcticShield",
                    description: "Insulated winter jacket for cold weather protection.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "4.4",
                    image: "https://media.istockphoto.com/id/506317910/photo/beautiful-little-girl-model-wearing-a-leopard-dress-and-sunglass.webp?b=1&s=170667a&w=0&k=20&c=1DHiGRo-6V_2dIbddB4x7kcZSi9U_o4ibNjtYftgxYs=",
                    itemName: "Dress",
                    price: 69.99,
                    brand: "ChicStyle",
                    description: "Elegant dress for special occasions and events.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "4.8",
                    image: "https://media.istockphoto.com/id/1296786631/photo/blank-white-hooded-sweatshirt-mockup-with-zipper-in-front-and-back-views.webp?b=1&s=170667a&w=0&k=20&c=xPiIr-dezxp7nQZYTUnk7OUJykAu3iKiFGtsFGfvHNw=",
                    itemName: "Hoodie",
                    price: 44.99,
                    brand: "UrbanComfort",
                    description: "Stylish and comfortable hoodie for a relaxed look.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "4.7",
                    image: "https://media.istockphoto.com/id/1478687600/photo/man-dressing-up.webp?b=1&s=170667a&w=0&k=20&c=rn9eXeCYLw-UP970v1BCkmSfVQuUz8iWX8kxzaysIoc=",
                    itemName: "Formal Suit",
                    price: 149.99,
                    brand: "Classique",
                    description: "Classic formal suit for business and special occasions.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "3.6",
                    image: "https://media.istockphoto.com/id/1411357121/photo/traditional-bridal-wear-lehenga-clothes-for-indian-bride.webp?b=1&s=170667a&w=0&k=20&c=sLH022-pSoPM8kDXxBtdncQc2uII0ZfwW3M4gYidliM=",
                    itemName: "Skirt",
                    price: 29.99,
                    brand: "FemmeChic",
                    description: "Fashionable skirt for a versatile wardrobe.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "2.8",
                    image: "https://media.istockphoto.com/id/1097874048/photo/womens-fitness-outfit-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=27wmgmHkgf9XLjBqw3t5Ai3iUv3umF35BJdS6hQKfPY=",
                    itemName: "Activewear Set",
                    price: 54.99,
                    brand: "ActiveFit",
                    description: "Performance-oriented activewear set for workouts.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "4.0",
                    image: "https://media.istockphoto.com/id/868469042/photo/beach-accessories.webp?b=1&s=170667a&w=0&k=20&c=6AbES-jHqBNNqsZfr2dGBZkFT6rzPvV8qJ5DHc98vcM=",
                    itemName: "Swimwear",
                    price: 34.99,
                    brand: "BeachReady",
                    description: "Stylish swimwear for a day at the beach or pool.",
                    category: "Clothing",
          },
          {
                    quantity: 1,
                    reviewStar: "3.0",
                    image: "https://media.istockphoto.com/id/171224469/photo/canvas-shoes.webp?b=1&s=170667a&w=0&k=20&c=HcoRbOLYz_bBiXChQ1BpeqOvMDWlwVJwkrubl_ZcsM8=",
                    itemName: "Casual Shoes",
                    price: 49.99,
                    brand: "StreetStyle",
                    description: "Casual and trendy shoes for everyday wear.",
                    category: "Footwear",
          },
          {
                    quantity: 1,
                    reviewStar: "3.7",
                    image: "https://media.istockphoto.com/id/1161700096/photo/indian-made-mens-sandals.webp?b=1&s=170667a&w=0&k=20&c=mnjGUxTgLw32EGB-IXb9YRICMVnXJuzA45ughizF0LQ=",
                    itemName: "Sandals",
                    price: 24.99,
                    brand: "SunStride",
                    description: "Comfortable sandals for warm-weather outings.",
                    category: "Footwear",
          },



          // Appliances
          {
                    quantity: 1,
                    reviewStar: "4.8",
                    image: "https://media.istockphoto.com/id/1426212593/photo/modern-coffee-machine-with-cup-in-office-space-for-text.webp?b=1&s=170667a&w=0&k=20&c=rQATk7rb1b4zNoj7cnq9fMXkanWbkSkWkUZGuQbyNpQ=",
                    itemName: "Coffee Maker",
                    price: 129.99,
                    brand: "BrewMaster",
                    description: "High-quality coffee maker for brewing your favorite beverages.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "4.1",
                    image: "https://media.istockphoto.com/id/1305835742/photo/glass-of-blueberry-banana-and-spinach-smoothie-with-fresh-juicy-ingredients-in-blender-for.jpg?s=612x612&w=0&k=20&c=zlErRm4XbDpnBQDGoe3GzBNg0LI7zU6cIQoY7u3am7Q=",
                    itemName: "Blender",
                    price: 49.99,
                    brand: "BlendMaster",
                    description: "Versatile blender for smoothies and shakes.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "4.2",
                    image: "https://media.istockphoto.com/id/1248278509/photo/electric-oven-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=ce1XZgGbJTQ023sI5GbCVKuIjt9KsItU43BDM5ZVcWY=",
                    itemName: "Toaster Oven",
                    price: 69.99,
                    brand: "ToastMaster",
                    description: "Compact toaster oven for toasting and baking.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "4.7 ",
                    image: "https://media.istockphoto.com/id/1144960519/photo/modern-kitchen-microwave-oven.webp?b=1&s=170667a&w=0&k=20&c=iOggAPfbUqQ32QcZOaJvtkfwmCqYZBoRAIrnZzuFXmE=",
                    itemName: "Microwave",
                    price: 89.99,
                    brand: "HeatWave",
                    description: "Efficient microwave for quick and easy cooking.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "4.1",
                    image: "https://media.istockphoto.com/id/1402841412/photo/air-fryer-machine-cooking-potato-fried-in-kitchen-lifestyle-of-new-normal-cooking.webp?b=1&s=170667a&w=0&k=20&c=fCao8TTQ9-SuQ2HxAmuZ0h_ByFq-E436zk3SNKCwI8I=",
                    itemName: "Air Fryer",
                    price: 79.99,
                    brand: "AirCrisp",
                    description: "Healthy cooking with an air fryer for crispy results.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "4.2",
                    image: "https://media.istockphoto.com/id/1368227903/photo/refrigerator-in-the-modern-kitchen.webp?b=1&s=170667a&w=0&k=20&c=NL_hGZaCjjnP1rxDMHNXKBvpm7tDyZeuzV2a5fURuR8=",
                    itemName: "Refrigerator",
                    price: 799.99,
                    brand: "CoolZone",
                    description: "Spacious refrigerator for keeping your food fresh.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "2.7",
                    image: "https://media.istockphoto.com/id/173837838/photo/silver-blue-vaccum-cleaner-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=72tu1H0WgsL151W6KkrLPUpRQXgjaYQ6lVQYNduMrx0=",
                    itemName: "Vacuum Cleaner",
                    price: 129.99,
                    brand: "DustBuster",
                    description: "Powerful vacuum cleaner for effective cleaning.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "4.9",
                    image: "https://media.istockphoto.com/id/1137138120/photo/photo-of-white-washing-machine-with-soft-and-fresh-bright-towels-on-top-standing-isolated.webp?b=1&s=170667a&w=0&k=20&c=ACytnXYxJiLRV4YMy1KyaUI_wOaRDK1g1Rg1upl3C4U=",
                    itemName: "Washing Machine",
                    price: 499.99,
                    brand: "CleanTech",
                    description: "High-capacity washing machine for laundry needs.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "5.0",
                    image: "https://media.istockphoto.com/id/483204058/photo/fruit-juicer.webp?b=1&s=170667a&w=0&k=20&c=eT_UujEkHZng3w0lSxD9IntNxZaHh-ZOsqxc-cGtSDg=",
                    itemName: "Juicer",
                    price: 59.99,
                    brand: "JuicePro",
                    description: "Juicer for extracting fresh and nutritious fruit juices.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "4.6",
                    image: "https://media.istockphoto.com/id/187333822/photo/electric-rice-cooker.webp?b=1&s=170667a&w=0&k=20&c=ORsBXff-lJUIuaN_hAHgrOImLdJguYfLDglcZ4c8GLc=",
                    itemName: "Rice Cooker",
                    price: 39.99,
                    brand: "RiceMaster",
                    description: "Convenient rice cooker for perfectly cooked rice every time.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "2.6",
                    image: "https://media.istockphoto.com/id/1294984395/photo/close-up-of-an-air-purifier-placed-indoors-in-a-living-room-of-the-house.webp?b=1&s=170667a&w=0&k=20&c=1n11GHYE979K1CK_MXQNQJfr3YwLtzmPZmk00d2RUl0=",
                    itemName: "Air Purifier",
                    price: 149.99,
                    brand: "PureAir",
                    description: "High-efficiency air purifier for clean and fresh indoor air.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "3.7",
                    image: "https://media.istockphoto.com/id/1284929371/photo/small-cheeky-cute-jack-russell-terrier-dog-sits-in-a-frying-pan-a-hot-dog-so-to-speak.webp?b=1&s=170667a&w=0&k=20&c=qc2AbYI4FYqtXYEza3WE0n1UUXUYE-cQ2j4SuexP9bc=",
                    itemName: "Instant Pot",
                    price: 89.99,
                    brand: "QuickCuisine",
                    description: "Multi-functional Instant Pot for fast and versatile cooking.",
                    category: "Appliances",
          },
          {
                    quantity: 1,
                    reviewStar: "4.3",
                    image: "https://media.istockphoto.com/id/507163037/photo/eyeliner-and-stroke.webp?b=1&s=170667a&w=0&k=20&c=knl1LQKpCKzon0cZB94v9h_6uOwlst_mZBuP15cn8Mo=",
                    itemName: "Eyeliner",
                    price: 5.99,
                    brand: "Gloss",
                    description: "Waterproof and long lasting",
                    category: "Beauty",
          },
          {
                    quantity: 1,
                    reviewStar: "4.7",
                    image: "https://media.istockphoto.com/id/1468381296/photo/eye-shadow-p.webp?b=1&s=170667a&w=0&k=20&c=_WylTpW5NOvtCFkuHlkLg06dITrBH6lptt6bgC5BqFI=",
                    itemName: "Concealer",
                    price: 10.99,
                    brand: "Colorbar",
                    description: "Secret to flawless complexion",
                    category: "Beauty",
          },
          {
                    quantity: 1,
                    reviewStar: "4.1",
                    image: "https://media.istockphoto.com/id/1458639326/photo/set-of-red-lipsticks-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=l7ZCcz1BiTS1jYTvr2DGarCkr99BiJIr3FzSJ3TSovQ=",
                    itemName: "Lipstick set",
                    price: 18.99,
                    brand: "Beauty secret",
                    description: "Bold,matte,long lasting and transfer proof lipstick",
                    category: "Beauty",
          },
          {
                    quantity: 1,
                    reviewStar: "3.9",
                    image: "https://media.istockphoto.com/id/504897928/photo/pressed-face-powder-and-puff.webp?b=1&s=170667a&w=0&k=20&c=ARozeXmC2Nj3J_HHp8qMlnwJ5eYvbGc1eA_qCUFJeUA=",
                    itemName: "Loose face powder",
                    price: 9.99,
                    brand: "Mist",
                    description: "Soft natural pink with extra protection from sun",
                    category: "Beauty",
          },
          {
                    quantity: 1,
                    reviewStar: "2.9",
                    image: "https://media.istockphoto.com/id/1222194241/photo/beauty-and-makeup-young-girl-holding-mascara-on-pink-background-close-up.jpg?s=612x612&w=0&k=20&c=STLdVm3nrrQDkKb09mH0eTRlFLAdrLtY8pCZMtuz-KI=",
                    itemName: "Mascara",
                    price: 10.99,
                    brand: "eyeNyou",
                    description: "Quick dry and lightweight",
                    category: "Beauty",
          },
          {
                    quantity: 1,
                    reviewStar: "2.3",
                    image: "https://media.istockphoto.com/id/1763360946/photo/blank-eyeshadow-palette-template-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=Ita5Wjx8In21YMBqCUlcys_CyB90gAkCnYLhB3YG_hU=",
                    itemName: "Primer",
                    price: 15.99,
                    brand: "Calm Beauty",
                    description: "Wrinkleless and smooth finish",
                    category: "Beauty",
          },
          {
                    quantity: 1,
                    reviewStar: "5.0",
                    image: "https://media.istockphoto.com/id/618426698/photo/makeup-brush-set-isolated-white-background.webp?b=1&s=170667a&w=0&k=20&c=kGbfUGGRuG_p6QcNxi8FJPX7MzzydSl8NQLcXC9xSoI=",
                    itemName: "Makeup brush set",
                    price: 29.99,
                    brand: "Chic",
                    description: "1 powder brush,1 shading brush,1 eye shadow brush,1 lip brush,1 sponge,1 eye brow comb,1 folding bag",
                    category: "Beauty",
          },
          {
                    quantity: 1,
                    reviewStar: "4.5",
                    image: "https://media.istockphoto.com/id/1147736983/photo/kohl-eye-liner-mockup-on-isolated-white-background-ready-for-your-design-presentation-3d.jpg?s=612x612&w=0&k=20&c=orVNKrTYlZ0gpUUUukNko9YTt341JoCYCH9_HTbq3L0=",
                    itemName: "Kajal",
                    price: 7.99,
                    brand: "Glamour lane",
                    description: "Safest kajal with no harmful ingredients",
                    category: "Beauty",
          },
          {
                    quantity: 1,
                    reviewStar: "4.0",
                    image: "https://media.istockphoto.com/id/1346667930/photo/close-up-of-auspicious-red-orange-colored-sindoor-or-kumkum-in-brass-small-bowl-during-any.webp?b=1&s=170667a&w=0&k=20&c=8l6ByvEgH9L57lD3ugOaFLCBy_Ft15u3naVB_tKI6dI=",
                    itemName: "Sindoor",
                    price: 8.99,
                    brand: "Serenity",
                    description: "Formulated without parabens,allergens",
                    category: "Beauty",
          },
          {
                    quantity: 1,
                    reviewStar: "3.2",
                    image: "https://media.istockphoto.com/id/1045838632/photo/aloe-vera-extract-in-a-small-bottle-and-pieces-on-the-table-selective-focus.jpg?s=612x612&w=0&k=20&c=2Bgb2pmJbfFtDqeE01Od9WTFqkwNtvYPXeUIe38_pBA=",
                    itemName: "Cream",
                    price: 12.99,
                    brand: "Elegant beauty",
                    description: "Moisturizes and hydrates your skin",
                    category: "Beauty",
          },
          {
                    quantity: 1,
                    reviewStar: "4.6",
                    image: "https://media.istockphoto.com/id/906517920/photo/eye-shadow-palette.webp?b=1&s=170667a&w=0&k=20&c=phA_VI-ikIGtCOw6JnvS1hXwqi_YqJNmx6EQvYGP3ho=",
                    itemName: "Eye shadow palette",
                    price: 19.99,
                    brand: "Delicate touch",
                    description: "Mix of matte and shimmer shades",
                    category: "Beauty",
          },
          {
                    quantity: 1,
                    reviewStar: "4.9",
                    image: "https://media.istockphoto.com/id/1355510304/photo/blank-aluminum-spray-can-black-cap-isolated-on-white-background-aerosol-spray-can-metal.webp?b=1&s=170667a&w=0&k=20&c=3rGFW22Kx5REujIUQETZWgAI3vV9lLWZiNe4x0KginM=",
                    itemName: "Makeup fixer spray",
                    price: 22.99,
                    brand: "Timeless beauty",
                    description: "Setting spray with a hydrating formula to give a soothing effect",
                    category: "Beauty",
          },
   
];

module.exports = {data: products };