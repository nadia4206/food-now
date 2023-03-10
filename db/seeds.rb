require 'faker'

puts "💣 clearing the database..."
Customer.delete_all
Customer.reset_pk_sequence
Restaurant.delete_all
Restaurant.reset_pk_sequence
Item.delete_all
Item.reset_pk_sequence
OrderItem.delete_all
OrderItem.reset_pk_sequence
Order.delete_all
Order.reset_pk_sequence

puts "👤 seeding customers..."
Customer.create!([
    {
        username: "Tom Anderson",
        email: "myspacetom@example.com",
        password: "abc123"
    },
    {
        username: "Mark Zuckerberg",
        email: "markymark@example.com",
        password: "abc123"
    },
    {
        username: "Tim Cook",
        email: "timmyc@example.com",
        password: "abc123"
    },
    {
        username: "Jeff Bezos",
        email: "jbezos@example.com",
        password: "abc123"
    }
])

puts "seeding restaurants..."
    Restaurant.create!([
        {
            name: "Lilia",
            address: "567 Union Avenue, Brooklyn, NY 11211",
            image_url: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/lilia/banners/1457463861.74"
        },
        {
            name: "Llama Inn",
            address: "50 Withers St, Brooklyn, NY 11211",
            image_url: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/llama-inn/banners/1455171044.9"
        },
        {
            name: "Four Horsemen",
            address: "295 Grand St., Brooklyn, NY 11211",
            image_url: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/four-horsemen/banners/1513024586.68"
        },
        {
            name: "Aldama",
            address: "91 South 6th Street, Williamsburg, New York 11249",
            image_url: "https://infatuation.imgix.net/media/images/reviews/aldama/banners/1638232312.1251252.png?ar=4%3A3&auto=format&crop=entropy&fit=crop&w=1200&ixlib=react-9.3.0"
        },
        {
            name: "Birds of a Feather",
            address: "191 Grand St, Brooklyn, NY 11211",
            image_url: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/birds-of-a-feather/banners/1515619849.19"
        },
        {
            name: "St. Anselm",
            address: "355 Metropolitan Ave., Brooklyn, NY 11211",
            image_url: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/st-anselm/banners/1522092080.79"
        },
        {
            name: "Win Son",
            address: "159 Graham Ave, Brooklyn, NY 11206",
            image_url: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/win-son/banners/1501685225.81"
        }
    ])


puts "🧀 seeding menu items..."

    Item.create!([

        {
            item_name: "Cheeseburger",
            item_price: 13,
            item_image: "https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267.jpg",
            restaurant_id: Restaurant.all.sample.id
        },
        {
            item_name: "BLT",
            item_price: 11,
            item_image: "https://therecipecritic.com/wp-content/uploads/2022/05/blt-1.jpg",
            restaurant_id:  Restaurant.all.sample.id
        },
        {
            item_name: "Ramen",
            item_price: 17,
            item_image: "https://therecipecritic.com/wp-content/uploads/2022/05/blt-1.jpg",
            restaurant_id:  Restaurant.all.sample.id
        },
        {
            item_name: "Tacos",
            item_price: 18,
            item_image: "https://therecipecritic.com/wp-content/uploads/2022/05/blt-1.jpg",
            restaurant_id:  Restaurant.all.sample.id
        },
        {
            item_name: "Spaghetti",
            item_price: 13,
            item_image: "https://therecipecritic.com/wp-content/uploads/2022/05/blt-1.jpg",
            restaurant_id:  Restaurant.all.sample.id
        }
    ])
30.times do
    Item.create!([
        {
            item_name: Faker::Food.dish,
            item_price: Faker::Commerce.price(range: 15.0..30.0, as_string: false),
            item_image: Faker::LoremFlickr.image(size: "350x350", search_terms: ['food']),
            restaurant_id:  Restaurant.all.sample.id
        }
    ])
end

    puts "🛍 seeding orders..."

10.times do
    Order.create!([
        {
            delivery_address: Faker::Address.full_address,
            delivery_fee: 4,
            total_cost: 25,
            customer_id: Customer.all.sample.id
        }
    ])
end

puts "seeding order_items...."

10.times do
    OrderItem.create!([
        {
            order: Order.all.sample,
            item: Item.all.sample
        }
    ])
end


puts "seeding complete!!!"
