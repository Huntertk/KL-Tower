import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017713/Malaysia%20Experience/KL%20Tower/kl_tower_1_qyifma.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017714/Malaysia%20Experience/KL%20Tower/Observation-Deck_2_xzu01x.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017714/Malaysia%20Experience/KL%20Tower/Observation-Deck_ex7hpa.jpg",
        ],
        title:"Observation Deck",
        desc:"Take in mesmerising landscapes of Kuala Lumpur City at the height of 276 meters above the ground with their exclusive binocular service.",
        type:"bookTypeOne",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:27,
                    child:17,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:48,
                    child:28,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },
    {
        id: uuidv4(),
        image:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017719/Malaysia%20Experience/KL%20Tower/image2-4_ojzcvd.png",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017717/Malaysia%20Experience/KL%20Tower/towerwalk_2_nn5pzd.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017718/Malaysia%20Experience/KL%20Tower/TW2_ncw2wp.jpg",
        ],
        title:"Tower Walk",
        desc:"Feel the thrill of walking 100 feet above the ground, on the edge of the tower with the supervision of the professionals.",
        type:"bookTypeTwo",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:18,
                    child:12,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:32,
                    child:25,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },
    {
        id: uuidv4(),
        image:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017715/Malaysia%20Experience/KL%20Tower/sbox_z3am32.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017716/Malaysia%20Experience/KL%20Tower/sky_deck_3_wyafkz.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017717/Malaysia%20Experience/KL%20Tower/sky_deck_2_xkyyqc.png",
        ],
        title:"Sky Deck + Sky Box",
        desc:"Located 300 above the ground, they offers unique experience for visitor to enjoy the skyline day and night.",
        type:"bookTypeThree",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:60,
                    child:30,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:79,
                    child:49,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },
    {
        id: uuidv4(),
        image:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017715/Malaysia%20Experience/KL%20Tower/Observation-Deck_3_inqqw9.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017715/Malaysia%20Experience/KL%20Tower/sbox_2_rpilkp.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017717/Malaysia%20Experience/KL%20Tower/sky_deck_2_xkyyqc.png",
        ],
        title:"Combo: Observation Deck + Sky Deck + Sky Box",
        desc:"Hold the admission to Observation Deck, Sky Deck and Sky Box, tourist may enjoy the majestic views of Kuala Lumpur with various spots and heights.",
        type:"bookTypeFour",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:85,
                    child:42,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:115,
                    child:72,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },

    
]

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Malaysian Citizens",
        price: 85,
        details:[
            "Valid only for Malaysian Citizens"
        ]
    },

    {
        id: uuidv4(),
        title: "Non Malaysian Citizens",
        price: 115,
        details:[
            "Valid only for Non Malaysian Citizens"
        ]
    },  
]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216097/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW1_brg2hr.webp",
        title:"Water Slides",
        desc:"Take advantage of a variety of water slides that offer varying degrees of excitement and terror"
    },
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216097/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW3_vgttik.jpg",
        title:"Enjoy the excitement of a wave pool",
        desc:"where man-made waves resemble surfers on the beach."
    },   
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216097/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW5_nyrjof.jpg",
        title:"Lazy River",
        desc:"Take a leisurely trip down a lazy river, floating gently in the gentle current."
    },  
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216100/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW7_k7zpli.jpg",
        title:"Children's Play Section",
        desc:"To ensure that young guests have a fun and safe experience, Melaka Wonderland frequently has a separate section with smaller slides, water sprays, and shallow pools."
    },  
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Melaka Wonderland offers exclusive attractions that guarantee boundless enjoyment, providing each visitor with an exhilarating experience and captivating views of apristine natural forest.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216102/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW8_ncu3zx.webp"
    },
    {
        id: uuidv4(),
        desc:"This distinctive water-themed park boasts 11 attractions.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216097/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/fit_xtwhui.jpg"
    },
    {
        id: uuidv4(),
        desc:"The recently introduced tourist spot captures the interest of both local residents and international visitors, generating enthusiasm among families, children, teenagers, and adventure enthusiasts alike.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216098/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW6_pocsib.webp"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Open Tues - Sun ( 10am - 6pm )",
            "Closed every Monday",
            "Except School and Public Holidays"
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age 13 - 59 years old",
            "Child below 3 years old enter for Free",
            "Senior Citizen 60 years old and above",
        ]
    },
    {
        id: uuidv4(),
        ques:"Important Information",
        ans:[
            "Senior citizen and OKU may purchase the ticket at the counter directly.",
            "Ticket is applicable for Weekend and Weekday.",
            "Ticket is applicable for Malaysian and Non-Malaysian.",
            "Ticket does not include meals, cabana, tube and Locker.",
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:[
            "Upon arrival, show your ticket/e-voucher at the counter",
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:[
            "You may use the tickets within 30 days from purchased date."
        ]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Is there any discount for OKU or disabled person ?",
        ans:"Yes, you may purchase your tickets at the counter for special price."
    },
    {
        id: uuidv4(),
        ques:"Can I re-enter the Themepark once entered ?",
        ans:"No. The ticket is only for ONE time entry."
    },
    {
        id: uuidv4(),
        ques:"Can I bring my own food inside the park ?",
        ans:"No, outside food and drinks are not allowed inside the park."
    },
    {
        id: uuidv4(),
        ques:"If I don't play, can I just enter with my kids without ticket?",
        ans:"No. You need to have an entrance ticket in order to enter the park."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]


export const publicHolidays = []