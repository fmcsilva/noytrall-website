export type tHelpQuestion = { question: string; answer: string | string[] };

export type tHelpTopic = { topic: string; qAndA: tHelpQuestion[] };

export type tHelpRelatedArticles = { title: string; link: string };

export type tHelpContent = {
  title: string;
  link: string;
  topics?: tHelpTopic[];
  qAndA?: tHelpQuestion[];
  relatedArticles?: tHelpRelatedArticles[];
};

export const ABOUT_NOYTRALL: tHelpContent = {
  title: "About noytrall",
  link: "/help-details-about",

  qAndA: [
    {
      question: "What does noytrall do?",
      answer:
        "We help guests find sustainable accommodations, track and reduce their travel footprint while assisting accommodations to save energy and water, reducing their environmental impact.",
    },
    {
      question: "How does it work",
      answer:
        "Through our sustainability platform, accommodations and guests can consult their energy and water consumption and evaluate their ecological footprint based on their sustainability.",
    },
    {
      question: "What are the benefits for accommodations?",
      answer:
        "The hotel dashboard is a centralised management tool to know overall and room consumption, impact and costs. In addition, they can manage bookings and interact with guests by sharing data and creating games for them, such as competitions, where a group of guests competes to be the most sustainable. Winners receive rewards that accommodations and third parties can create and manage. And the key opportunity is that this is an accurate forecasting tool.",
    },
    {
      question: "What are the benefits for guests?",
      answer:
        "Guests can find sustainable accommodations, accompany their stay, monitor their electricity and water consumption, and evaluate their ecological footprint based on their sustainability. Additionally, guests can receive tips and suggestions to improve their actions and receive points to access third-party rewards in sustainable products and tourism services to incentivise them to be carbon neutral.",
    },
    {
      question: "How do we measure environmental impact?",
      answer:
        "We measure energy and water consumption and correspond them to greenhouse gas emissions. Then, we compare the consumptions and resulting emissions with the accommodation average values, tourism reference data, and the values required to achieve tourism sustainable goals. The results evaluate the impact of a stay.",
    },
    {
      question: "How does noytral make money?",
      answer:
        "While the app is free for guests, accommodations pay for our service.",
    },
  ],
  relatedArticles: [
    { title: "Can I book from noytrall?", link: "#" },
    { title: "How can I access my reservation?", link: "#" },
    { title: "May I change my reservation?", link: "#" },
    {
      title:
        "How do I get more information about room or accommodation amenities?",
      link: "#",
    },
    {
      title: "I can't find my confirmation email. What should I do?",
      link: "#",
    },
  ],
};
export const GUESTS: tHelpContent = {
  title: "Guests",
  link: "/help-details-guests",
  topics: [
    {
      topic: "Reservations",
      qAndA: [
        {
          question: "How can I start to use noytrall?",
          answer:
            "To get started, sign-up through our app. It’s free and easy to use. Of course, we will need to know more about you, but we will ask you for your data safely along the way.",
        },
        {
          question: "Can I book from noytrall?",
          answer:
            "Not yet, but we are working to help guests find the best sustainable travel options.",
        },
        {
          question: "How can I access my reservation",
          answer:
            "As a guest, when making a reservation with an accommodation, you should receive a confirmation e-mail. In addition, you will find an access code that will enable you to monitor your consumption and accompany your stay.",
        },
        {
          question: "I can't find my access code. What should I do?",
          answer:
            "If you can’t find your access code, you can ask your accommodation to resend it directly to you.",
        },
        {
          question:
            "How do I get more information about accommodation amenities",
          answer:
            "On the accommodation page, you can find all the information about it. However, if you feel some information is missing, incomplete or wrong, please let us know.",
        },
      ],
    },
    {
      topic: "Rewards",
      qAndA: [
        {
          question: "How does the reward system work?",
          answer:
            "We measure energy and water consumption and correspond them to greenhouse gas emissions. Then, we compare the consumptions and resulting emissions with the accommodation average values, tourism reference data, and the values required to achieve tourism sustainable goals. The results evaluate the impact of a stay. According to your impact, we will give you points. The more sustainable a stay is, the more points you will get. Then you can exchange your points for rewards.",
        },
        {
          question: "How can exchange rewards using points?",
          answer:
            "You can access sustainable products and services from selected partners from our marketplace. You can then exchange the points you have accumulated for those rewards.",
        },
        {
          question: "How does the gamification system work?",
          answer: [
            "The gamification system has Quests and Competitions to challenge guests to achieve sustainable goals, Nudges to guide guests towards sustainable behaviour, and Leaderboards where guests can see how they fare against others.",
            "Quests are an upcoming feature where accommodations and sustainable partners will challenge guests to perform specific tasks, like participating in a local event such as cleaning a beach or going for a bicycle tour.",
            "In Competitions, a group of guests in an accommodation face the challenge of being the most sustainable. The winner will receive extra points and may also get direct rewards.",
            "Nudges are an upcoming feature, where guests will receive tips and suggestions to improve their behaviour and actions to reduce consumption and environmental impact.",
            "In Leaderboards, guests can compare their impact with friends and other guests locally and globally. Top guests every month are awarded extra points.",
          ],
        },
      ],
    },
    {
      topic: "Tariffs",
      qAndA: [
        { question: "What is included in the price?", answer: "" },
        {
          question:
            "Are the prices shown on noytrall.com per person or per room?",
          answer: "",
        },
        { question: "Does tge price include taxes?", answer: "" },
        { question: "Do I pay a booking fee to noytrall.com?", answer: "" },
        { question: "Is it possible to use discount tickets?", answer: "" },
      ],
    },
    {
      topic: "Payments",
      qAndA: [
        { question: "Can I pay through noytrall?", answer: "" },
        { question: "Do I have to pay for noytrall services?", answer: "" },
      ],
    },
    {
      topic: "Security and privacy",
      qAndA: [
        { question: "What type of data does noytrall collect?", answer: "" },
        { question: "Why does noytrall need to collect data?", answer: "" },
        { question: "How does noytrall collec data", answer: "" },
        { question: "How do I know it's safe?", answer: "" },
        { question: "Who can see my data?", answer: "" },
      ],
    },
    {
      topic: "Accommodation conditions",
      qAndA: [
        {
          question:
            "What are the check-in and check-out times for accommodation?",
          answer: "",
        },
        {
          question:
            "I want to check-in/out at a different time than mentioned. What should I do?",
          answer: "",
        },
        {
          question: "How can I get more information about available amenities?",
          answer: "",
        },
      ],
    },
    {
      topic: "Extra amenities",
      qAndA: [
        {
          question:
            "How do I know if the accommodations has a car park and how can I book it?",
          answer: "",
        },
        {
          question:
            "How do I know if the accommodation has a specific amenity?",
          answer: "",
        },
        {
          question:
            "How do I know if the accommodation offers a shuttle service, and how can I book it?",
          answer: "",
        },
        {
          question:
            "Can my accommodation store my luggage before check-in or after check-out?",
          answer: "",
        },
      ],
    },
  ],
  relatedArticles: [
    { title: "Can I book from noytrall?", link: "#" },
    { title: "How can I access my reservation?", link: "#" },
    { title: "May I change my reservation?", link: "#" },
    {
      title:
        "How do I get more information about room or accommodation amenities?",
      link: "#",
    },
    {
      title: "I can't find my confirmation email. What should I do?",
      link: "#",
    },
  ],
};
export const ACCOMMODATIONS: tHelpContent = {
  title: "Accommodations",
  link: "/help-details-hotels",
  qAndA: [{ question: "How does noytrall rate accommodations?", answer: "" }],
  topics: [
    {
      topic: "About the service",
      qAndA: [
        {
          question: "I'm a hotel manager. How can I acquire noytrall services?",
          answer:
            "Get in touch with us through the email help@noytrall.pt and our team will contact you.",
        },
        {
          question: "Is my accommodation suitable for noytrall services?",
          answer:
            "Our mission is to help tourism transition towards sustainable tourism. Therefore we are looking for accommodations that are sustainable or that want to make this transition. Accommodations need to assume responsibility for nature and the surrounding environment, support the well-being of local people and favour a circular and proximity economy.",
        },
        {
          question: "What services does noytrall provide to accommodations?",
          answer:
            "Monitorização de energia, água, (resíduos e biomassa), Histórico de consumos e análise de dados, Perfil do consumidor, Gestão das operações de manutenção e recursos humanos, Consciencialização para o impacto ambiental e sustentabilidade, Novos modelos tarifários - green room.",
        },
        {
          question: "Can noytrall develop specific solutions?",
          answer:
            "noytrall develops carbon monitoring, tracking and offsetting solutions for tourism, travel and hospitality industries. The development of custom or specific solutions must be evaluated between the customer and noytrall, and it must fit within our sustainable vision of tourism.",
        },
        {
          question:
            "Can noytrall services be integrated with third-party services?",
          answer:
            "Yes, you can find services we are integrated with here. Customers can request new integrations directly with the support team.",
        },
        {
          question: "How much will noytrall services cost?",
          answer:
            "Dependendo das instalações do hotel. Visita técnica para aferir as necessidades específicas das instalações. Contact us.",
        },
      ],
    },
    {
      topic: "About the Sustainability Platform",
      qAndA: [
        {
          question: "What type of information does noytrall provide?",
          answer: "",
        },
        {
          question:
            "What type of information can be managed in sustainability platform?",
          answer: "",
        },
      ],
    },
    {
      topic: "About the gamification system",
      qAndA: [
        {
          question: "How does the gamification system work?",
          answer: [
            "The gamification system has Quests and Competitions to challenge guests to achieve sustainable goals, Nudges to guide guests towards sustainable behaviour, and Leaderboards where guests can see how they fare against others.",
            "Quests are an upcoming feature where accommodations and sustainable partners will challenge guests to perform specific tasks, like participating in a local event such as cleaning a beach or going for a bicycle tour.",
            "In Competitions, a group of guests in an accommodation face the challenge of being the most sustainable. The winner will receive extra points and may also get direct rewards.",
          ],
        },
        {
          question: "What type of rewards can be made available?",
          answer:
            "As long as it’s sustainable, any product or service from a partner is valid. Please contact us if you would like to include offers from your network.",
        },
      ],
    },
    {
      topic: "Green tariffs",
      qAndA: [
        { question: "What is a green tariff from noytrall?", answer: "" },
        { question: "How does the tariff work?", answer: "" },
      ],
    },
    { topic: "About the data collected", qAndA: [] },
    { topic: "About the price", qAndA: [] },
  ],
  relatedArticles: [
    { title: "Can I book from noytrall?", link: "#" },
    { title: "How can I access my reservation?", link: "#" },
    { title: "May I change my reservation?", link: "#" },
    {
      title:
        "How do I get more information about room or accommodation amenities?",
      link: "#",
    },
    {
      title: "I can't find my confirmation email. What should I do?",
      link: "#",
    },
  ],
};
export const SUSTAINABLE_PARTNERS: tHelpContent = {
  title: "Sustainable Partners",
  link: "/help-details-partners",
  qAndA: [
    {
      question: "Why are we creating a sustainability community?",
      answer:
        "Sustainability is a balance between environmental, economic and social concerns. In our mission to achieve a more sustainable tourism, we increase transparency and responsibility between guests and accommodations, but tourism isn't just about guests and accommodations. Therefore, we must expand these relationships to encompass a sustainable community to achieve our goal. Local and global partners can interact to create opportunities to improve all pillars of tourism sustainability.",
    },
    {
      question: "What is needed to become a sustainable partner?",
      answer:
        "Anyone offering sustainable products or services can become a sustainable partner. Our team will work closely with partners to validate their sustainability. If you would like to transition to make your offer sustainable, our community will guide you in that process.",
    },
    {
      question: "Can I bring my network to the community?",
      answer:
        "Yes. Expanding the community is a great way to increase opportunities to be more sustainable. Please contact us through the email help@noytrall.pt.",
    },
  ],
  relatedArticles: [
    { title: "Can I book from noytrall?", link: "#" },
    { title: "How can I access my reservation?", link: "#" },
    { title: "May I change my reservation?", link: "#" },
    {
      title:
        "How do I get more information about room or accommodation amenities?",
      link: "#",
    },
    {
      title: "I can't find my confirmation email. What should I do?",
      link: "#",
    },
  ],
};
export const PRIVACY: tHelpContent = {
  title: "Privacy",
  link: "/help-details-privacy",
  qAndA: [
    { question: "What type of data does noytrall collect?", answer: "" },
    { question: "Why does noytrall need data from guests?", answer: "" },
    { question: "How does noytrall guarantee guest privacy?", answer: "" },
  ],
  relatedArticles: [
    { title: "Can I book from noytrall?", link: "#" },
    { title: "How can I access my reservation?", link: "#" },
    { title: "May I change my reservation?", link: "#" },
    {
      title:
        "How do I get more information about room or accommodation amenities?",
      link: "#",
    },
    {
      title: "I can't find my confirmation email. What should I do?",
      link: "#",
    },
  ],
};

const HELP_LIST: tHelpContent[] = [
  GUESTS,
  ACCOMMODATIONS,
  ABOUT_NOYTRALL,
  SUSTAINABLE_PARTNERS,
  PRIVACY,
];

export default HELP_LIST;
