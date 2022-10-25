type tViewContentQuestion = {
  question: string;
  answer: string[];
};

type tViewContent = {
  title?: string;
  questions: tViewContentQuestion[];
};

type tView = {
  view: string;
  content: tViewContent[];
};

const views: tView[] = [
  {
    view: "Guests",
    content: [
      {
        title: "Reservations",
        questions: [
          {
            question: "How can I start to use noytrall",
            answer: [
              `To get started, sign-up through our app. It's free and easy to use. Of course, we will need to know more about you, but we will ask you for your data safely along the way.`,
            ],
          },
          {
            question: "Can I book from noytrall?",
            answer: [
              "Not yet, but we are working to help guests find the best sustainable travel options",
            ],
          },
          {
            question: "How can I access my reservation?",
            answer: [
              "As a guest, making a reservation with an accommodation, you should receive a confirmation e-mail. In addition, you will find an access code that will enable you to monitor your consumption and accompany your stay.",
            ],
          },
          {
            question: "I can't find my access code. What should I do?",
            answer: [
              "If you can't find your access code, you can ask your accommodation to resend it directly to you.",
            ],
          },
          {
            question:
              "How do I get more information about accommodation amenities",
            answer: [
              "On the accommodation page, you can find all the information about it. However, if you feel some information is missing, incomplete or wrong, please let us know.",
            ],
          },
        ],
      },
      {
        title: "Gamification & Rewards",
        questions: [
          {
            question: "How does the reward system work?",
            answer: [
              "We measure energy and water consumption and correspond them to greenhouse gas emissions. Then, we compare the consumptions and resulting emissions with the accommodation average values, tourism reference data, and the values required to achieve tourism sustainable goals. The results evaluate the impact of a stay. According to your impact, we will give you points. The more sustainable a stay is, the more points you will get. Then you can exchange your points for rewards.",
            ],
          },
          {
            question: "How can I exchange rewards using points?",
            answer: [
              `You can access sustainable products and services from
          selected partners from our marketplace. You can then
          exchange the points you have accumulated for those
          rewards.`,
            ],
          },
          {
            question: "How does the gamification system work?",
            answer: [
              `The gamification system has Quests and Competitions to
          challenge guests to achieve sustainable goals, Nudges to
          guide guests towards sustainable behaviour, and
          Leaderboards where guests can see how they fare against
          others.`,
              ` Quests are an upcoming feature where accommodations and
          sustainable partners will challenge guests to perform
          specific tasks, like participating in a local event such
          as cleaning a beach or going for a bicycle tour.`,
              `In Competitions, a group of guests in an accommodation
          face the challenge of being the most sustainable. The
          winner will receive extra points and may also get direct
          rewards.`,
              `Nudges are an upcoming feature, where guests will receive
          tips and suggestions to improve their behaviour and
          actions to reduce consumption and environmental impact.`,
              `In Leaderboards, guests can compare their impact with
          friends and other guests locally and globally. Top guests
          every month are awarded extra points.`,
            ],
          },
        ],
      },
    ],
  },
  {
    view: "Accomodations",
    content: [
      {
        questions: [
          {
            question: "How does noytrall rate accommodations?",
            answer: [
              `The behaviour of each guest will contribute to changing an
  accommodation's average energy and water consumption and
  corresponding environmental impact, which will be used as
  a direct score to compare between accommodations. Adding
  to this score, we also evaluate the sustainability
  practices and equipment.`,
            ],
          },
        ],
      },
      {
        title: "About the service",
        questions: [
          {
            question: "Why we are creating a sustainable community?",
            answer: [
              `Sustainability is a balance between environmental,
economic and social concerns. In our mission to achieve a
more sustainable tourism, we increase transparency and
responsibility between guests and accommodations, but
tourism isn't just about guests and accommodations.
Therefore, we must expand these relationships to encompass
a sustainable community to achieve our goal. Local and
global partners can interact to create opportunities to
improve all pillars of tourism sustainability.`,
            ],
          },
          {
            question: "Is my accommodation suitable for noytrall services?",
            answer: [
              `Our mission is to help tourism transition towards
          sustainable tourism. Therefore we are looking for
          accommodations that are sustainable or that want to make
          this transition. Accommodations need to assume
          responsibility for nature and the surrounding environment,
          support the well-being of local people and favour a
          circular and proximity economy.`,
            ],
          },
          {
            question: "What services does noytrall provide to accommodations?",
            answer: [
              `Monitorização de energia, água, (resíduos e biomassa),
          Histórico de consumos e análise de dados, Perfil do
          consumidor, Gestão das operações de manutenção e recursos
          humanos, Consciencialização para o impacto ambiental e
          sustentabilidade, Novos modelos tarifários - green room.`,
            ],
          },
          {
            question: "Can noytrall develop specific solutions?",
            answer: [
              `noytrall develops carbon monitoring, tracking and
          offsetting solutions for tourism, travel and hospitality
          industries. The development of custom or specific
          solutions must be evaluated between the customer and
          noytrall, and it must fit within our sustainable vision of
          tourism.`,
            ],
          },
          {
            question: `Can noytrall services be integrated with third-party
          services?`,
            answer: [
              `Yes, you can find services we are integrated with
          <a href="#">here</a>. Customers can request new
          integrations directly with the support team.`,
            ],
          },
          {
            question: "How much will noytrall services cost?",
            answer: [
              `Dependendo das instalações do hotel. Visita técnica para
          aferir as necessidades específicas das instalações.
          Contact us.`,
            ],
          },
        ],
      },
      {
        title: "About the Sustainability Platform",
        questions: [
          {
            question: "What type of information does noytrall provide?",
            answer: [``],
          },
          {
            question: `What type of information can be managed in the
          sustainability platform?`,
            answer: [],
          },
        ],
      },
      {
        title: "bout the gamification system",
        questions: [
          {
            question: "How does the gamification system work?",
            answer: [
              `The gamification system has Quests and Competitions to
      challenge guests to achieve sustainable goals, Nudges to
      guide guests towards sustainable behaviour, and
      Leaderboards where guests can see how they fare against
      others.`,
              `Quests are an upcoming feature where accommodations and
      sustainable partners will challenge guests to perform
      specific tasks, like participating in a local event such
      as cleaning a beach or going for a bicycle tour.`,
              `In Competitions, a group of guests in an accommodation
      face the challenge of being the most sustainable. The
      winner will receive extra points and may also get direct
      rewards.`,
            ],
          },
          {
            question: "What type of rewards can be made available?",
            answer: [
              `As long as it's sustainable, any product or service from a
          partner is valid. Please contact us if you would like to
          include offers from your network.`,
            ],
          },
        ],
      },
    ],
  },
  {
    view: "Community Providers",
    content: [
      {
        questions: [
          {
            question: "Why we are creating a sustainable community?",
            answer: [
              `Sustainability is a balance between environmental,
    economic and social concerns. In our mission to achieve a
    more sustainable tourism, we increase transparency and
    responsibility between guests and accommodations, but
    tourism isn't just about guests and accommodations.
    Therefore, we must expand these relationships to encompass
    a sustainable community to achieve our goal. Local and
    global partners can interact to create opportunities to
    improve all pillars of tourism sustainability.`,
            ],
          },
          {
            question: "What is needed to become a sustainable partner?",
            answer: [
              `Anyone offering sustainable products or services can
          become a sustainable partner. Our team will work closely
          with partners to validate their sustainability. If you
          would like to transition to make your offer sustainable,
          our community will guide you in that process.`,
            ],
          },
          {
            question: "Can I bring my network to the community?",
            answer: [
              `Yes. Expanding the community is a great way to increase
          opportunities to be more sustainable. Please contact us
          through the email
          <a href="help@noytrall.com">help@noytrall.com</a>.`,
            ],
          },
        ],
      },
      {
        title: "About the gamification system",
        questions: [
          {
            question: "How does the gamification system work?",
            answer: [
              `The gamification system has Quests and Competitions to
      challenge guests to achieve sustainable goals, Nudges to
      guide guests towards sustainable behaviour, and
      Leaderboards where guests can see how they fare against
      others.`,
              `Quests are an upcoming feature where accommodations and
      sustainable partners will challenge guests to perform
      specific tasks, like participating in a local event such
      as cleaning a beach or going for a bicycle tour.`,
            ],
          },
          {
            question: "What type of rewards can be made available?",
            answer: [
              `As long as it's sustainable, any product or service from a
          partner is valid. Please contact us through
          <a href="help@noytrall.com">help@noytrall.com</a> if you
          would like to include offers from your network.`,
            ],
          },
        ],
      },
    ],
  },
];

export default views;
