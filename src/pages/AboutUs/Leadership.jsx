import React from "react";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const Leadership = () => {
  const { t } = useTranslation('common');

  const teamMembers = [
    // {
    //   id: 1,
    //   name: "Nikhil Suvarna",
    //   designation: t('leader.positions.salesManager'),
    //   image: "/assets/Nikhil Suvarna.png",
    // },
    {
      id: 3,
      name: "Neha Sharma",
      designation: t('leader.positions.businessDevelopmentManager'),
      image: "/assets/team16.png",
    },
    // {
    //   id: 3,
    //   name: "Ahmad Abdul Rahman",
    //   designation: t('leader.positions.propertyAdvisor'),
    //   image: "/assets/team7.png",
    // },
    // {
    //   id: 4,
    //   name: "Aigul Minibaeva",
    //   designation: t('leader.positions.propertyAdvisor'),
    //   image: "/assets/team13.png",
    // },
    {
      id: 5,
      name: "Anna Vreshch",
      designation: t('leader.positions.propertyAdvisor'),
      image: "/assets/team19.png",
    },
    // {
    //   id: 6,
    //   name: "Anna Zhurlova",
    //   designation: t('leader.positions.propertyAdvisor'),
    //   image: "/assets/team6.png",
    // },
    // {
    //   id: 7,
    //   name: "Eldar Mamedov",
    //   designation: t('leader.positions.propertyAdvisor'),
    //   image: "/assets/team5.png",
    // },
    {
      id: 8,
      name: "Jasmina Obradov",
      designation: t('leader.positions.propertyAdvisor'),
      image: "/assets/team17.png",
    },
    {
      id: 9,
      name: "Louisa Oumatouk",
      designation: t('leader.positions.propertyAdvisor'),
      image: "/assets/team9.png",
    },
    {
      id: 10,
      name: "Maria Matos",
      designation: t('leader.positions.propertyAdvisor'),
      image: "/assets/team15.png",
    },
    // {
    //   id: 11,
    //   name: "Maximilien Photiou",
    //   designation: t('leader.positions.propertyAdvisor'),
    //   image: "/assets/team2.png",
    // },
    // {
    //   id: 12,
    //   name: "Nailia Gaisina",
    //   designation: t('leader.positions.propertyAdvisor'),
    //   image: "/assets/team10.png",
    // },
    // {
    //   id: 13,
    //   name: "Olga Gostyukhina",
    //   designation: t('leader.positions.propertyAdvisor'),
    //   image: "/assets/team8.png",
    // },
    {
      id: 14,
      name: "Omar Inamdar",
      designation: t('leader.positions.propertyAdvisor'),
      image: "/assets/team14.png",
    },
    // {
    //   id: 15,
    //   name: "Sangeeth Kumar",
    //   designation: t('leader.positions.propertyAdvisor'),
    //   image: "/assets/team1.png",
    // },
    // {
    //   id: 16,
    //   name: "Bijal Paleja",
    //   designation: t('leader.positions.adminCoordinator'),
    //   image: "/assets/team12.png",
    // },
    // {
    //   id: 17,
    //   name: "Chandrika Repaka",
    //   designation: t('leader.positions.adminCoordinator'),
    //   image: "/assets/team18.png",
    // },
    {
      id: 18,
      name: "Emad Sadek",
      designation: t('leader.positions.customerServiceExecutive'),
      image: "/assets/team11.png",
    },
    // {
    //   id: 19,
    //   name: "Kaveesha Fernando",
    //   designation: t('leader.positions.cinematographer'),
    //   image: "/assets/team4.png",
    // },
    {
      id: 20,
      name: "Roemelle Santos",
      designation: t('leader.positions.captain'),
      image: "/assets/team20.png",
    },

    {
      id: 1,
      name: "Maximilien Photiou",
      designation: "Senior Property Advisor",
      image: "/assets/Maximilien Photiou.png",
    },
    {
      id: 2,
      name: "Michael Photiou",
      designation: "Senior International Property Advisor",
      image: "/assets/Michael.png",
    },
  ];

  const sortedTeamMembers = teamMembers.sort((a, b) => a.id - b.id);

  return (
    <div className="lg:px-40 px-8 overflow-hidden">

    <div className="mb-20 relative">
        <Slide>
          <h2 className="font-bebas lg:text-8xl text-7xl tracking-wider text-[#024959] text-center mb-16">
            {t('CEO.header')}
          </h2>
        </Slide>
        
        <div className="relative">
          
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-50 rounded-l-3xl -z-10" />
          
          <div className="lg:flex items-stretch gap-12">
           
            <Slide direction="left" className="lg:w-2/5">
              <div className="relative">
                <img 
                  src="/assets/ceo.jpg" 
                  alt="CEO" 
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white py-4 px-6 rounded-xl shadow-lg text-center">
                  <h3 className="font-bebas text-4xl text-[#F2762E]">Alexandre Aristote Photiou</h3>
                  <p className="text-gray-600 text-xl">{t('CEO.position')}</p>
                </div>
              </div>
            </Slide>

            
            <Slide direction="right" className="lg:w-3/5 mt-16 lg:mt-0">
              <div className="relative">
                <div className="absolute -left-8 top-0 text-[#F2762E] opacity-20 text-9xl font-serif">"</div>
                <div className="space-y-6 pl-8 pt-8">
                  <p className="text-xl text-gray-700 leading-relaxed">
                  {t('CEO.text1')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                  
                  {t('CEO.text2')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                  {t('CEO.text3')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                  {t('CEO.text4')}
                  </p>
                  <div className="text-[#F2762E] text-right text-4xl font-bebas mr-12">Gulf Estates</div>
                </div>
                <div className="absolute -right-8 bottom-0 text-[#F2762E] opacity-20 text-9xl font-serif rotate-180">"</div>
              </div>
            </Slide>
          </div>
        </div>
      </div>


      <div className="font-bebas lg:mb-8">
        
        <Slide direction="right">
          <p className="lg:text-6xl text-4xl tracking-wider text-[#F2762E] mt-2 text-center ">
            {t('leader.headers.meetOurTeam')}
          </p>
        </Slide>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sortedTeamMembers.map((member) => (
          <div
            key={member.id}
            className="rounded-lg p-6 flex flex-col items-center justify-between transform transition-transform duration-500 hover:scale-105 hover:shadow-lg text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[90%] h-auto object-cover mb-4"
            />
            <div className="flex flex-col  ml-[5%]">
              <h3 className="text-4xl font-bebas mb-2">{member.name}</h3>
              <p className="text-gray-600 text-xl">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;