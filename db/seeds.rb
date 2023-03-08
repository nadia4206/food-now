require 'faker'

puts "💣 clearing the database..."
Customer.destroy_all
Order.destroy_all
Item.destroy_all


puts "👤 seeding customers..."
Customer.create!([
    {
        name: "Tom Anderson",
        email: "myspacetom@example.com",
        password: "abc123"
    },
    {
        name: "Mark Zuckerberg",
        email: "markymark@example.com",
        password: "abc123"
    },
    {
        name: "Tim Cook",
        email: "timmyc@example.com",
        password: "abc123"
    },
    {
        name: "Jeff Bezos",
        email: "jbezos@example.com",
        password: "abc123"
    }
])

puts "seeding restaurants..."
    Restaurant.create!([
        {
            name: "Bogos",
            address: "123 cherry lane",
            image_url: "this is an image"
        },
        {
            name: "Devils",
            address: "456 madison ave",
            image_url: "this is an image"
        },
        {
            name: "help me",
            address: "789 washington lane",
            image_url: "this is an image"
        },
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
