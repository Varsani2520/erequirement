import { NextResponse } from "next/server";

export function POST(request){
    const provider={
        "provider": [
          {
            "id": 1,
            "title": "Toys",
            "logo": "https://example.com/home-service-logo.png",
            "provider_id": 1,
            "slug": "Toys",
            "description": "This is the Toys category.",
            "alt": "Toys Logo",
            "image": "https://media.istockphoto.com/id/939438514/photo/sweet-child-playing-with-plastic-blocks.jpg?s=612x612&w=0&k=20&c=gtH4-F92k6EiIMCRX2dNNNB3YxWuMcd9uN_GsdHbXt0="
          },
          {
            "id": 2,
            "title": "Kids",
            "logo": "https://example.com/kids-logo.png",
            "provider_id": 2,
            "slug": "kids",
            "description": "This is the kids category.",
            "alt": "Kids Logo",
            "image": "https://media.istockphoto.com/id/540833996/photo/small-indian-girl-and-colourful-palm-painting-or-palm-printing.jpg?s=612x612&w=0&k=20&c=FehjCQGJnwY4PClfL58emwsB_NzLAY04z_C3R8BQAg8="
          },
          {
            "id": 3,
            "title": "Woman",
            "logo": "https://example.com/woman-logo.png",
            "provider_id": 3,
            "slug": "woman",
            "description": "This is the woman category.",
            "alt": "Woman Logo",
            "image": "https://media.istockphoto.com/id/1279548506/photo/young-woman-diwali-celebrate-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=X1wavNtpC41pPkzktOl9HLAEUmy4jKlQzXHLqw5bEUQ="
          },
          {
            "id": 4,
            "title": "Men",
            "logo": "https://example.com/men-logo.png",
            "provider_id": 4,
            "slug": "men",
            "description": "This is the men category.",
            "alt": "Men Logo",
            "image": "https://media.istockphoto.com/id/493116226/photo/happy-smiling-businessman-in-suit.jpg?s=612x612&w=0&k=20&c=JSuvCrREfPOIxvXoyHWbVOl1LG7vT7TQzK6ZO203EuA="
          },
          {
            "id": 5,
            "title": "Electronics",
            "logo": "https://example.com/electronic-logo.png",
            "provider_id": 5,
            "slug": "electronics",
            "description": "This is the electronic category.",
            "alt": "Electronic Logo",
            "image": "https://media.istockphoto.com/id/506998184/photo/woman-chooses-the-laptop.jpg?s=612x612&w=0&k=20&c=EHk7baK4Io5b3-d32Y9URxTemUYrzk8CsiW-K-L4Was="
          },
          {
            "id": 6,
            "title": "Beauty & Health",
            "logo": "https://example.com/beauty-healthy-logo.png",
            "provider_id": 6,
            "slug": "beauty-healt",
            "description": "This is the beauty & healthy category.",
            "alt": "Beauty & Healt Logo",
            "image": "https://media.istockphoto.com/id/883019542/photo/keep-your-skin-healthy.jpg?s=612x612&w=0&k=20&c=IRpHXgfvBQwq_FhYb9JOjFF-wEN3VdlhTGap-7TM2JQ="
          },
          {
            "id": 7,
            "title": "Bags & Footware",
            "logo": "https://example.com/shoes-collection-logo.png",
            "provider_id": 7,
            "slug": "shoes-collection",
            "description": "This is the Bags & Footware category.",
            "alt": "Bags & Footware Logo",
            "image": "https://media.istockphoto.com/id/916280864/photo/beautiful-legs-woman-wearing-blue-dress-with-a-purple-purse-hand-bag-with-red-high-heels-shoes.jpg?s=612x612&w=0&k=20&c=d2kxRY_iyG-Nqy-ZkAiHON7ouzkNfTlttb3QWY9Rq1w="
          },
          {
            "id": 8,
            "title": "Home & Kitchen",
            "logo": "https://example.com/Home-Kitchen-logo.png",
            "provider_id": 8,
            "slug": "Home-Kitchen",
            "description": "This is the Home & Kitchen category.",
            "alt": "Home & Kitchen Logo",
            "image": "https://media.istockphoto.com/id/171591165/photo/new-kitchen-in-modern-luxury-home.webp?b=1&s=170667a&w=0&k=20&c=3ybu2lK4gc9RyT3TJy41aOpe9Y_42WWyJBPno9I6JM8="
          },{
            "id": 9,
            "title": "Jewellery & Accessories",
            "logo": "https://example.com/Home-Kitchen-logo.png",
            "provider_id": 9,
            "slug": "Home-Kitchen",
            "description": "This is the Jewellery & Accessories category.",
            "alt": "Jewellery & Accessories Logo",
            "image": "https://images.unsplash.com/photo-1552334543-63c1f649eece?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmluZ3xlbnwwfHwwfHx8MA%3D%3D"
          }
        ]
      }
      
    return NextResponse.json(provider)
}